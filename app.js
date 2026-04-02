// ============================================================
// PITCHMAP v8 — Seamless Globe Navigation + Daily Wordle Game
// Improvements: localStorage streak/persistence, one-game-per-day,
// streak display, bug fixes, keyboard shortcuts, UI polish
// ============================================================

// ============================================================
// GAME STORE — localStorage persistence
// ============================================================
const GameStore = {
  KEY: 'pitchmap_game_state',

  getTodayKey() {
    const d = new Date();
    return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0');
  },

  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); } catch { return {}; }
  },

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch {}
  },

  getTodayResult() {
    const store = this.load();
    return store.results && store.results[this.getTodayKey()] || null;
  },

  saveTodayResult(result) {
    const store = this.load();
    if (!store.results) store.results = {};
    store.results[this.getTodayKey()] = result;

    // Update streaks
    const yesterday = new Date();
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    const yKey = yesterday.getUTCFullYear() + '-' + String(yesterday.getUTCMonth() + 1).padStart(2, '0') + '-' + String(yesterday.getUTCDate()).padStart(2, '0');
    const hadYesterday = store.results && store.results[yKey] && store.results[yKey].won;

    if (result.won) {
      store.currentStreak = hadYesterday ? (store.currentStreak || 0) + 1 : 1;
      store.maxStreak = Math.max(store.currentStreak, store.maxStreak || 0);
    } else {
      store.currentStreak = 0;
    }
    store.totalPlayed = (store.totalPlayed || 0) + 1;
    store.totalWins = (store.totalWins || 0) + (result.won ? 1 : 0);

    this.save(store);
    return store;
  },

  getStats() {
    const store = this.load();
    return {
      currentStreak: store.currentStreak || 0,
      maxStreak: store.maxStreak || 0,
      totalPlayed: store.totalPlayed || 0,
      totalWins: store.totalWins || 0,
    };
  }
};

// ============================================================
// STATE
// ============================================================
let globe = null;
let leafletMap = null;
let leafletClubMarkers = [];
let activeMode = 'globe';
let currentPlayer = null;
let currentClub = null;
let currentNationalTeam = null;
let currentCountry = null;
let currentClubIndex = 0;
let currentYear = 2024;
let popupTimeout = null;
let flyTimeout = null;

// ---- GAME STATE ----
let gameActive = false;
let gameMystery = null;
let gameGuesses = [];
let gameMaxGuesses = 6;
let gameSolved = false;
let gameRevealIndex = 0;
let gamePlayerNameForResult = null; // Safe closure ref for post-game "explore" button

// ============================================================
// DAILY SEED — deterministic player per calendar day
// ============================================================
function getDailyPlayerName() {
  const playerNames = Object.keys(PLAYERS);
  const now = new Date();
  const seed = now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
  return playerNames[seed % playerNames.length];
}

// ============================================================
// INIT GLOBE
// ============================================================
function initGlobe() {
  globe = Globe({ animateIn: true })(document.getElementById('globe-container'))
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .atmosphereColor('#3060a0').atmosphereAltitude(0.22)
    .pointsData([]).pointColor('color').pointAltitude('altitude').pointRadius('radius')
    .onPointClick(handleGlobePointClick)
    .arcsData([]).arcColor('arcColor').arcAltitudeAutoScale(0.4).arcStroke(1.2)
    .arcDashLength(0.6).arcDashGap(0.4).arcDashAnimateTime(1400)
    .labelsData([]).labelLat('lat').labelLng('lng').labelText('text')
    .labelColor(() => '#00ff88').labelSize(1.0).labelDotRadius(0.3).labelResolution(2);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.3;
  globe.controls().enableZoom = true;
  globe.controls().minDistance = 110;

  window.addEventListener('resize', () => {
    globe.width(window.innerWidth);
    globe.height(window.innerHeight);
  });
}

// ============================================================
// SEAMLESS CAMERA — every navigation is an interpolated move
// No hard resets. Ever.
// ============================================================
function flyTo(lat, lng, altitude, durationMs, callback) {
  if (!globe) return;
  globe.controls().autoRotate = false;
  const dur = durationMs || 1600;
  globe.pointOfView({ lat, lng, altitude }, dur);
  if (callback) {
    clearTimeout(flyTimeout);
    flyTimeout = setTimeout(callback, dur + 80);
  }
}

// ============================================================
// INIT LEAFLET MAP
// ============================================================
function initLeafletMap() {
  if (leafletMap) return;
  document.getElementById('map-container').style.display = 'block';
  leafletMap = L.map('map-container', { zoomControl: false, attributionControl: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(leafletMap);
  L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);
}

// ============================================================
// COUNTRY CENTERS
// ============================================================
const COUNTRY_CENTERS = {
  'England':    { lat: 52.5,  lng: -1.5,  zoom: 6 },
  'Spain':      { lat: 40.0,  lng: -3.5,  zoom: 6 },
  'Italy':      { lat: 42.5,  lng: 12.5,  zoom: 6 },
  'France':     { lat: 46.5,  lng: 2.3,   zoom: 6 },
  'Germany':    { lat: 51.0,  lng: 10.0,  zoom: 6 },
  'Netherlands':{ lat: 52.3,  lng: 5.3,   zoom: 7 },
  'Portugal':   { lat: 39.5,  lng: -8.0,  zoom: 7 },
  'Belgium':    { lat: 50.8,  lng: 4.4,   zoom: 7 },
  'Croatia':    { lat: 45.1,  lng: 16.0,  zoom: 7 },
  'Turkey':     { lat: 39.0,  lng: 35.0,  zoom: 6 },
  'Saudi Arabia':{ lat: 24.7, lng: 46.7,  zoom: 6 },
  'USA':        { lat: 37.0,  lng: -96.0, zoom: 4 },
  'Brazil':     { lat: -15.0, lng: -50.0, zoom: 4 },
  'Austria':    { lat: 47.5,  lng: 13.5,  zoom: 7 },
  'Norway':     { lat: 65.0,  lng: 13.0,  zoom: 5 },
  'Sweden':     { lat: 63.0,  lng: 16.0,  zoom: 5 },
  'Japan':      { lat: 36.0,  lng: 138.0, zoom: 5 },
  'UAE':        { lat: 24.0,  lng: 54.0,  zoom: 7 },
  'Poland':     { lat: 52.0,  lng: 20.0,  zoom: 6 },
  'Monaco':     { lat: 43.74, lng: 7.43,  zoom: 13 },
  'Qatar':      { lat: 25.3,  lng: 51.5,  zoom: 9 },
  'Egypt':      { lat: 26.8,  lng: 30.8,  zoom: 6 },
  'Senegal':    { lat: 14.5,  lng: -14.4, zoom: 7 },
  'Switzerland':{ lat: 47.0,  lng: 8.2,   zoom: 8 },
};

// ============================================================
// MODE: COUNTRY
// ============================================================
function goToCountry(country) {
  const c = COUNTRY_CENTERS[country] || { lat: 50, lng: 0, zoom: 6 };
  currentCountry = country;
  flyTo(c.lat, c.lng, 0.5, 1200, () => {
    document.getElementById('globe-container').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('globe-container').style.display = 'none';
      document.getElementById('map-container').style.display = 'block';
      document.getElementById('globe-container').classList.remove('fade-out');
      initLeafletMap();
      leafletMap.setView([c.lat, c.lng], c.zoom);
      placeClubMarkers(country);
      activeMode = 'country';
      showBreadcrumb(country);
      document.getElementById('landing').classList.add('hidden');
    }, 400);
  });
}

function exitCountryMode() {
  activeMode = 'globe';
  currentCountry = null;
  clearClubMarkers();
  document.getElementById('map-container').style.display = 'none';
  document.getElementById('globe-container').style.display = 'block';
  document.getElementById('breadcrumb').classList.add('hidden');
  globe.controls().autoRotate = true;
  globe.pointsData([]);
  globe.arcsData([]);
  globe.labelsData([]);
}

function placeClubMarkers(country) {
  clearClubMarkers();
  const clubs = COUNTRY_CLUBS[country] || [];
  clubs.forEach(c => {
    const safeName = c.name.replace(/'/g, "\\'");
    const div = L.divIcon({
      className: '',
      html: '<div class="club-marker" style="background:' + c.color + '" onclick="openClubFromMap(\'' + safeName + '\')">' +
            '<span>' + c.name.substring(0, 3).toUpperCase() + '</span></div>',
      iconSize: [44, 44], iconAnchor: [22, 22]
    });
    const marker = L.marker([c.lat, c.lng], { icon: div }).addTo(leafletMap);
    leafletClubMarkers.push(marker);
  });
}

function clearClubMarkers() {
  leafletClubMarkers.forEach(m => { if (leafletMap) leafletMap.removeLayer(m); });
  leafletClubMarkers = [];
}

// ============================================================
// MODE: CLUB
// ============================================================
function openClubFromMap(clubName) {
  const club = CLUBS[clubName];
  currentClub = club || { name: clubName };
  activeMode = 'club';
  if (club) renderClubView(club);
  else showClubBasic(clubName);
}

function renderClubView(club) {
  document.getElementById('club-view').classList.remove('hidden');
  document.getElementById('player-panel').classList.add('hidden');
  document.getElementById('club-card').classList.add('hidden');
  document.getElementById('teammates-panel').classList.add('hidden');

  document.getElementById('cv-name').textContent = club.name;
  document.getElementById('cv-meta').textContent = club.city + ', ' + club.country + ' · Founded ' + club.founded;
  document.getElementById('cv-stadium').textContent = club.stadiumName + ' (cap. ' + club.capacity.toLocaleString() + ')';
  document.getElementById('cv-history').textContent = club.history;
  document.getElementById('cv-owner').textContent = club.owner;
  document.getElementById('cv-titles').innerHTML = club.titles.map(t => '<li>' + t + '</li>').join('');
  renderClubSquad(club, currentYear);
  showBreadcrumb(currentCountry + ' → ' + club.name);
}

function renderClubSquad(club, year) {
  const yr = String(year);
  const years = Object.keys(club.squad || {}).sort();
  let squad = club.squad && club.squad[yr];
  if (!squad && years.length) {
    const closest = years.reduce((a, b) =>
      Math.abs(parseInt(b) - year) < Math.abs(parseInt(a) - year) ? b : a
    );
    squad = club.squad[closest];
  }
  if (!squad) return;
  document.getElementById('cv-squad').innerHTML = squad.map(p =>
    '<div class="squad-card' + (PLAYERS[p.name] ? ' clickable' : '') + '"' +
    (PLAYERS[p.name] ? ' onclick="selectPlayer(\'' + p.name.replace(/'/g, "\\'") + '\')"' : '') + '>' +
    '<span class="sq-flag">' + p.flag + '</span>' +
    '<div class="sq-info"><span class="sq-name">' + p.name + '</span><span class="sq-pos">' + p.position + '</span></div>' +
    (PLAYERS[p.name] ? '<span class="sq-arrow">→</span>' : '') + '</div>'
  ).join('');
  document.getElementById('cv-year').textContent = year;
}

function showClubBasic(name) {
  document.getElementById('club-view').classList.remove('hidden');
  document.getElementById('cv-name').textContent = name;
  document.getElementById('cv-meta').textContent = 'Detailed profile coming soon';
  document.getElementById('cv-history').textContent = 'Club profiles are being expanded. Check back soon!';
  document.getElementById('cv-owner').textContent = '—';
  document.getElementById('cv-stadium').textContent = '—';
  document.getElementById('cv-titles').innerHTML = '';
  document.getElementById('cv-squad').innerHTML = '';
}

function closeClubView() {
  document.getElementById('club-view').classList.add('hidden');
  activeMode = 'country';
  if (currentCountry) showBreadcrumb(currentCountry);
}

// ============================================================
// MODE: PLAYER — seamless globe journey
// ============================================================
const searchInput = document.getElementById('search');
const suggestionsEl = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { suggestionsEl.classList.remove('open'); return; }
  const matches = Object.values(PLAYERS).filter(p => p.name.toLowerCase().includes(q));
  if (!matches.length) { suggestionsEl.classList.remove('open'); return; }
  suggestionsEl.innerHTML = matches.slice(0, 8).map(p =>
    '<div class="suggestion-item" onclick="selectPlayer(\'' + p.name.replace(/'/g, "\\'") + '\')">' +
    '<span class="s-flag">' + p.flag + '</span>' +
    '<span class="s-name">' + p.name + '</span>' +
    '<span class="s-nat">' + p.nationality + '</span></div>'
  ).join('');
  suggestionsEl.classList.add('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-container')) suggestionsEl.classList.remove('open');
});

function selectPlayer(name) {
  if (gameActive && !gameSolved) {
    submitGuess(name);
    return;
  }
  const player = PLAYERS[name];
  if (!player) return;
  currentPlayer = player;
  currentClubIndex = 0;
  activeMode = 'player';
  suggestionsEl.classList.remove('open');
  searchInput.value = '';

  if (document.getElementById('map-container').style.display !== 'none') {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('globe-container').style.display = 'block';
  }

  document.getElementById('landing').classList.add('hidden');
  document.getElementById('club-card').classList.add('hidden');
  document.getElementById('deep-dive').classList.add('hidden');
  document.getElementById('club-view').classList.add('hidden');
  document.getElementById('national-view').classList.add('hidden');
  document.getElementById('breadcrumb').classList.add('hidden');
  document.getElementById('game-panel').classList.add('hidden');

  showPlayer(player);
}

function showPlayer(player) {
  document.getElementById('player-flag').textContent = player.flag;
  document.getElementById('player-name').textContent = player.name;
  document.getElementById('player-subtitle').textContent = player.nationality + ' · ' + player.position;
  document.getElementById('stat-clubs').textContent = player.career.length;
  document.getElementById('stat-goals').textContent = player.career.reduce((s, c) => s + c.goals, 0);
  document.getElementById('stat-apps').textContent = player.career.reduce((s, c) => s + c.apps, 0);

  const nt = PLAYER_NATIONAL_TEAMS[player.name];
  const ntBtn = document.getElementById('nt-btn');
  if (nt && NATIONAL_TEAMS[nt]) {
    const team = NATIONAL_TEAMS[nt];
    ntBtn.textContent = team.flag + ' ' + nt;
    ntBtn.style.display = 'inline-flex';
    ntBtn.onclick = () => openNationalTeam(nt);
  } else {
    ntBtn.style.display = 'none';
  }

  document.getElementById('player-panel').classList.remove('hidden');
  document.getElementById('share-btn').style.display = 'block';
  buildTimeline(player);

  globe.pointsData(player.career.map((c, i) => ({
    lat: c.lat, lng: c.lng, color: '#00ff88',
    altitude: 0.015, radius: 0.3, clubIndex: i
  })));
  globe.arcsData([]);
  globe.labelsData([]);

  goToClub(0);
}

function goToClub(index) {
  if (!currentPlayer) return;
  const career = currentPlayer.career;
  if (index < 0 || index >= career.length) return;
  currentClubIndex = index;
  const club = career[index];

  document.querySelectorAll('.timeline-item').forEach((el, i) => el.classList.toggle('active', i === index));
  document.getElementById('btn-prev').disabled = index === 0;
  document.getElementById('btn-next').disabled = index === career.length - 1;
  document.getElementById('nav-label').textContent = (index + 1) + ' / ' + career.length;

  if (index < career.length - 1) {
    const next = career[index + 1];
    globe.arcsData([{
      startLat: club.lat, startLng: club.lng,
      endLat: next.lat, endLng: next.lng,
      arcColor: ['#00ff88', '#00c8ff']
    }]);
  } else {
    globe.arcsData([]);
  }

  globe.pointsData(career.map((c, i) => ({
    lat: c.lat, lng: c.lng,
    color: i === index ? '#ffffff' : (i < index ? 'rgba(0,255,136,0.35)' : '#00ff88'),
    altitude: i === index ? 0.07 : 0.012,
    radius: i === index ? 0.75 : 0.28,
    clubIndex: i
  })));

  globe.labelsData([{ lat: club.lat + 0.8, lng: club.lng, text: club.city + ', ' + club.country }]);

  flyTo(club.lat, club.lng, 0.5, 1800);

  clearTimeout(popupTimeout);
  popupTimeout = setTimeout(() => {
    showClubCard(club, index);
    showTeammates(club);
  }, 1200);
}

function showClubCard(club, index) {
  document.getElementById('cc-flag').textContent = club.flag;
  document.getElementById('cc-club').textContent = club.club;
  document.getElementById('cc-country').textContent = club.city + ', ' + club.country + ' · ' + club.from + '–' + (club.to || 'present');
  document.getElementById('cc-apps').textContent = club.apps;
  document.getElementById('cc-goals').textContent = club.goals;
  document.getElementById('cc-assists').textContent = club.assists;
  const card = document.getElementById('club-card');
  card.dataset.index = index;
  card.classList.remove('hidden');
}

function showTeammates(club) {
  if (!club.teammates || !club.teammates.length) {
    document.getElementById('teammates-panel').classList.add('hidden');
    return;
  }
  document.getElementById('tm-era').textContent = club.club + ' ' + club.from + '–' + (club.to || 'present');
  document.getElementById('teammates-list').innerHTML = club.teammates.map(name => {
    const found = PLAYERS[name];
    return '<div class="teammate-card ' + (found ? 'clickable' : '') + '" ' +
      (found ? 'onclick="selectPlayer(\'' + name.replace(/'/g, "\\'") + '\')"' : '') + '>' +
      '<span class="tm-flag">' + (found ? found.flag : '⚽') + '</span>' +
      '<span class="tm-name">' + name + '</span>' +
      (found ? '<span class="tm-arrow">→</span>' : '') + '</div>';
  }).join('');
  document.getElementById('teammates-panel').classList.remove('hidden');
}

function openDeepDive() {
  const index = parseInt(document.getElementById('club-card').dataset.index);
  const club = currentPlayer && currentPlayer.career[index];
  if (!club) return;
  document.getElementById('dd-title').textContent = club.flag + ' ' + club.club;
  document.getElementById('dd-period').textContent = club.city + ', ' + club.country + ' · ' + club.from + '–' + (club.to || 'present');
  document.getElementById('dd-apps').textContent = club.apps;
  document.getElementById('dd-goals').textContent = club.goals;
  document.getElementById('dd-assists').textContent = club.assists;
  document.getElementById('dd-funfact').textContent = club.funFact || '—';
  document.getElementById('dd-drama').textContent = club.drama || '—';
  document.getElementById('dd-highlight').textContent = club.highlight || '—';
  document.getElementById('deep-dive').classList.remove('hidden');
}

function closeDeepDive() {
  document.getElementById('deep-dive').classList.add('hidden');
}

function handleGlobePointClick(point) {
  if (point.clubIndex !== undefined) goToClub(point.clubIndex);
}

// ============================================================
// MODE: NATIONAL TEAM
// ============================================================
function openNationalTeam(name) {
  const nt = NATIONAL_TEAMS[name];
  if (!nt) return;
  currentNationalTeam = nt;
  activeMode = 'national';
  document.getElementById('national-view').classList.remove('hidden');
  document.getElementById('player-panel').classList.add('hidden');
  document.getElementById('club-card').classList.add('hidden');
  document.getElementById('teammates-panel').classList.add('hidden');
  document.getElementById('nv-name').textContent = nt.flag + ' ' + nt.name;
  document.getElementById('nv-meta').textContent = 'Founded ' + nt.founded + ' · ' + nt.confederation;
  document.getElementById('nv-tournaments').innerHTML = nt.tournaments.map(t =>
    '<div class="nt-tournament">' +
    '<span class="nt-result">' + t.result + '</span>' +
    '<span class="nt-comp">' + t.competition + ' ' + t.year + '</span>' +
    '<span class="nt-scorer">' + t.topScorer + '</span></div>'
  ).join('');
  document.getElementById('nv-greats').innerHTML = nt.allTimeGreats.map(n =>
    '<span class="nt-great' + (PLAYERS[n] ? ' clickable' : '') + '"' +
    (PLAYERS[n] ? ' onclick="selectPlayer(\'' + n.replace(/'/g, "\\'") + '\')"' : '') + '>' + n + '</span>'
  ).join('');
  document.getElementById('nv-squad').innerHTML = nt.currentSquad.map(p =>
    '<div class="squad-card' + (PLAYERS[p.name] ? ' clickable' : '') + '"' +
    (PLAYERS[p.name] ? ' onclick="selectPlayer(\'' + p.name.replace(/'/g, "\\'") + '\')"' : '') + '>' +
    '<span class="sq-flag">' + p.flag + '</span>' +
    '<div class="sq-info"><span class="sq-name">' + p.name + '</span>' +
    '<span class="sq-pos">' + p.position + ' · ' + p.caps + ' caps · ' + p.goals + ' goals</span></div>' +
    (PLAYERS[p.name] ? '<span class="sq-arrow">→</span>' : '') + '</div>'
  ).join('');
}

function closeNationalView() {
  document.getElementById('national-view').classList.add('hidden');
  if (currentPlayer) {
    document.getElementById('player-panel').classList.remove('hidden');
    activeMode = 'player';
  } else {
    activeMode = 'globe';
  }
}

// ============================================================
// DAILY GAME — Wordle-style "Guess the Player"
// ============================================================
function startDailyGame() {
  const name = getDailyPlayerName();
  const todayResult = GameStore.getTodayResult();

  gameMystery = PLAYERS[name];
  gamePlayerNameForResult = name;
  gameGuesses = [];
  gameSolved = false;
  gameRevealIndex = 0;
  gameActive = !todayResult; // Inactive if already played today

  document.getElementById('landing').classList.add('hidden');
  document.getElementById('player-panel').classList.add('hidden');
  document.getElementById('club-card').classList.add('hidden');
  document.getElementById('teammates-panel').classList.add('hidden');
  document.getElementById('club-view').classList.add('hidden');
  document.getElementById('national-view').classList.add('hidden');
  document.getElementById('deep-dive').classList.add('hidden');
  document.getElementById('game-panel').classList.remove('hidden');

  if (document.getElementById('map-container').style.display !== 'none') {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('globe-container').style.display = 'block';
  }

  if (todayResult) {
    // Already played today — show result directly
    gameGuesses = todayResult.guesses;
    gameSolved = todayResult.won;
    document.getElementById('game-guess-area').classList.add('hidden');
    document.getElementById('game-result').classList.remove('hidden');
    restoreResult(todayResult);
    renderFullRevealGlobe(todayResult.won);
  } else {
    document.getElementById('game-guess-area').classList.remove('hidden');
    document.getElementById('game-result').classList.add('hidden');
    document.getElementById('game-input').value = '';
    document.getElementById('game-guesses-list').innerHTML = '';
    document.getElementById('game-feedback').textContent = '';
    renderMysteryGlobe();
    updateGameHint();
    document.getElementById('game-input').focus();
  }
}

function renderMysteryGlobe() {
  if (!gameMystery) return;
  const career = gameMystery.career;
  const revealCount = Math.max(1, gameRevealIndex + 1);
  const visible = career.slice(0, revealCount);

  globe.pointsData(visible.map((c, i) => ({
    lat: c.lat, lng: c.lng,
    color: '#ffd700',
    altitude: 0.04,
    radius: 0.55,
    clubIndex: i
  })));

  const arcs = [];
  for (let i = 0; i < visible.length - 1; i++) {
    arcs.push({
      startLat: visible[i].lat, startLng: visible[i].lng,
      endLat: visible[i + 1].lat, endLng: visible[i + 1].lng,
      arcColor: ['#ffd700', '#ff9900']
    });
  }
  globe.arcsData(arcs);

  // Early guesses: country only. Later: add city
  globe.labelsData(visible.map(c => ({
    lat: c.lat + 0.8, lng: c.lng,
    text: gameRevealIndex < 2 ? c.country : c.city + ', ' + c.country
  })));

  const last = visible[visible.length - 1];
  flyTo(last.lat, last.lng, 0.7, 1400);
}

function renderFullRevealGlobe(won) {
  if (!gameMystery) return;
  const mystery = gameMystery;
  globe.pointsData(mystery.career.map(c => ({
    lat: c.lat, lng: c.lng,
    color: won ? '#00ff88' : '#ff4444',
    altitude: 0.05, radius: 0.55
  })));
  const arcs = mystery.career.slice(0, -1).map((c, i) => ({
    startLat: c.lat, startLng: c.lng,
    endLat: mystery.career[i + 1].lat, endLng: mystery.career[i + 1].lng,
    arcColor: won ? ['#00ff88', '#00c8ff'] : ['#ff4444', '#ff8888']
  }));
  globe.arcsData(arcs);
  globe.labelsData(mystery.career.map(c => ({ lat: c.lat + 0.8, lng: c.lng, text: c.club })));
  flyTo(mystery.career[0].lat, mystery.career[0].lng, 0.8, 1600);
}

function updateGameHint() {
  const remaining = gameMaxGuesses - gameGuesses.length;
  const revealed = Math.min(gameRevealIndex + 1, gameMystery.career.length);
  const hintsEl = document.getElementById('game-hint');
  if (hintsEl) {
    hintsEl.textContent =
      'Club ' + revealed + ' of ' + gameMystery.career.length + ' revealed · ' +
      remaining + ' guess' + (remaining !== 1 ? 'es' : '') + ' remaining';
  }
}

function setupGameSearch() {
  const input = document.getElementById('game-input');
  const sug = document.getElementById('game-suggestions');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { sug.classList.remove('open'); return; }
    const matches = Object.values(PLAYERS).filter(p => p.name.toLowerCase().includes(q));
    if (!matches.length) { sug.classList.remove('open'); return; }
    sug.innerHTML = matches.slice(0, 8).map(p =>
      '<div class="suggestion-item" onclick="submitGuess(\'' + p.name.replace(/'/g, "\\'") + '\')">' +
      '<span class="s-flag">' + p.flag + '</span>' +
      '<span class="s-name">' + p.name + '</span>' +
      '<span class="s-nat">' + p.nationality + '</span></div>'
    ).join('');
    sug.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#game-search-wrapper')) sug.classList.remove('open');
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      const exact = Object.keys(PLAYERS).find(n => n.toLowerCase() === q.toLowerCase());
      const first = Object.values(PLAYERS).find(p => p.name.toLowerCase().includes(q.toLowerCase()));
      const target = exact || (first && first.name);
      if (target) {
        submitGuess(target);
        sug.classList.remove('open');
      } else if (q) {
        document.getElementById('game-feedback').textContent = 'Player not found — try another name.';
      }
    }
  });
}

function submitGuess(name) {
  if (!gameActive || gameSolved) return;
  const player = PLAYERS[name];
  if (!player) return;

  if (gameGuesses.includes(name)) {
    document.getElementById('game-feedback').textContent = 'Already guessed ' + name + '.';
    return;
  }

  document.getElementById('game-input').value = '';
  document.getElementById('game-suggestions').classList.remove('open');
  document.getElementById('game-feedback').textContent = '';

  gameGuesses.push(name);

  const correct = (name === gameMystery.name);
  const list = document.getElementById('game-guesses-list');
  const item = document.createElement('div');
  item.className = 'game-guess-item ' + (correct ? 'correct' : 'wrong');
  item.innerHTML = player.flag + ' <strong>' + name + '</strong>' +
    ' <span style="font-size:10px;color:var(--muted)">' + player.nationality + '</span>' +
    (correct ? ' ✅' : ' ❌');
  list.insertBefore(item, list.firstChild);

  if (correct) {
    gameSolved = true;
    gameActive = false;
    document.getElementById('game-feedback').textContent = '🎉 Correct!';
    setTimeout(() => revealAnswer(true), 900);
  } else if (gameGuesses.length >= gameMaxGuesses) {
    gameActive = false;
    document.getElementById('game-feedback').textContent = '❌ Out of guesses.';
    setTimeout(() => revealAnswer(false), 900);
  } else {
    if (gameRevealIndex < gameMystery.career.length - 1) {
      gameRevealIndex++;
      renderMysteryGlobe();
    }
    updateGameHint();
    const hint = gameRevealIndex < 2 ? 'Another country dot revealed.' : 'City + country now shown.';
    document.getElementById('game-feedback').textContent = '❌ Not quite — ' + hint;
    document.getElementById('game-input').focus();
  }
}

function revealAnswer(won) {
  document.getElementById('game-guess-area').classList.add('hidden');
  document.getElementById('game-result').classList.remove('hidden');

  const mystery = gameMystery;
  const store = GameStore.saveTodayResult({ won: won, guesses: gameGuesses, playerName: mystery.name });
  buildResultUI(mystery, won, store);
  renderFullRevealGlobe(won);
}

function restoreResult(todayResult) {
  const mystery = gameMystery;
  const store = GameStore.getStats();
  buildResultUI(mystery, todayResult.won, store);
}

function buildResultUI(mystery, won, store) {
  const flags = mystery.career.map(c => c.flag).join('');
  const guessRow = gameGuesses.map(g => g === mystery.name ? '🟩' : '🟥').join('');
  const empties = '⬛'.repeat(Math.max(0, gameMaxGuesses - gameGuesses.length));

  document.getElementById('game-result-title').textContent = won
    ? '🎉 ' + mystery.name + '!'
    : '😔 It was ' + mystery.name;
  document.getElementById('game-result-subtitle').textContent =
    mystery.nationality + ' · ' + mystery.position + ' · ' + mystery.career.length + ' clubs';
  document.getElementById('game-result-career').textContent = flags;
  document.getElementById('game-result-guesses').textContent =
    won
      ? 'Solved in ' + gameGuesses.length + '/' + gameMaxGuesses + ' guess' + (gameGuesses.length !== 1 ? 'es' : '')
      : 'Better luck tomorrow — ' + gameGuesses.length + '/' + gameMaxGuesses + ' used';

  // Streak stats
  const streakEl = document.getElementById('game-streak-stats');
  if (streakEl) {
    const pct = store.totalPlayed ? Math.round(store.totalWins / store.totalPlayed * 100) : 0;
    streakEl.innerHTML =
      '<div class="streak-grid">' +
      '<div class="streak-stat"><span>' + store.totalPlayed + '</span><label>Played</label></div>' +
      '<div class="streak-stat"><span>' + pct + '%</span><label>Win %</label></div>' +
      '<div class="streak-stat"><span>' + store.currentStreak + '</span><label>Streak</label></div>' +
      '<div class="streak-stat"><span>' + store.maxStreak + '</span><label>Best</label></div>' +
      '</div>';
  }

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const shareText =
    '⚽ Pitchmap Daily — ' + dateStr + '\n' +
    (won ? '✅ ' + gameGuesses.length + '/' + gameMaxGuesses : '❌ ' + gameMaxGuesses + '/' + gameMaxGuesses) + '\n' +
    guessRow + empties + '\n' +
    flags + '\n' +
    'pitchmap.vercel.app';
  document.getElementById('game-share-text').value = shareText;

  // Safe reference for explore button — stored in module-level var
  gamePlayerNameForResult = mystery.name;
  const exploreBtn = document.getElementById('game-explore-btn');
  if (exploreBtn) {
    exploreBtn.onclick = function() {
      const pname = gamePlayerNameForResult;
      exitGame();
      setTimeout(() => { if (pname) selectPlayer(pname); }, 120);
    };
  }
}

function copyGameShare() {
  const text = document.getElementById('game-share-text').value;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-share-btn');
    btn.textContent = 'Copied! ✓';
    setTimeout(() => btn.textContent = 'Copy Result', 2200);
  });
}

function exitGame() {
  gameActive = false;
  gameSolved = false;
  gameMystery = null;
  gameGuesses = [];
  document.getElementById('game-panel').classList.add('hidden');
  document.getElementById('landing').classList.remove('hidden');
  globe.pointsData([]);
  globe.arcsData([]);
  globe.labelsData([]);
  globe.controls().autoRotate = true;
  activeMode = 'globe';
}

// ============================================================
// TIMELINE SCRUBBER
// ============================================================
const yearSlider = document.getElementById('year-slider');
const yearDisplay = document.getElementById('year-display');
yearSlider.addEventListener('input', () => {
  currentYear = parseInt(yearSlider.value);
  yearDisplay.textContent = currentYear;
  if (activeMode === 'club' && currentClub && CLUBS[currentClub.name]) {
    renderClubSquad(CLUBS[currentClub.name], currentYear);
  }
});

// ============================================================
// CAREER TIMELINE
// ============================================================
function buildTimeline(player) {
  const tl = document.getElementById('career-timeline');
  tl.innerHTML = '';
  player.career.forEach((club, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item' + (i === 0 ? ' active' : '');
    item.style.animationDelay = (i * 55) + 'ms';
    item.innerHTML =
      '<span class="ti-flag">' + club.flag + '</span>' +
      '<div class="ti-dot"></div>' +
      '<span class="ti-club">' + club.club + '</span>' +
      '<span class="ti-years">' + club.from + '–' + (club.to || 'now') + '</span>';
    item.onclick = () => goToClub(i);
    tl.appendChild(item);
    if (i < player.career.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'timeline-connector';
      tl.appendChild(conn);
    }
  });
}

document.getElementById('btn-prev').addEventListener('click', () => goToClub(currentClubIndex - 1));
document.getElementById('btn-next').addEventListener('click', () => goToClub(currentClubIndex + 1));

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  // Player mode navigation
  if (activeMode === 'player') {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentPlayer && currentClubIndex < currentPlayer.career.length - 1) goToClub(currentClubIndex + 1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentPlayer && currentClubIndex > 0) goToClub(currentClubIndex - 1);
    }
  }

  if (e.key === 'Escape') {
    if (!document.getElementById('deep-dive').classList.contains('hidden')) {
      closeDeepDive(); return;
    }
    if (activeMode === 'player') {
      document.getElementById('player-panel').classList.add('hidden');
      document.getElementById('club-card').classList.add('hidden');
      document.getElementById('teammates-panel').classList.add('hidden');
      globe.pointsData([]); globe.arcsData([]); globe.labelsData([]);
      globe.controls().autoRotate = true;
      activeMode = 'globe';
      document.getElementById('landing').classList.remove('hidden');
      document.getElementById('share-btn').style.display = 'none';
    }
    if (activeMode === 'country') exitCountryMode();
    if (!document.getElementById('game-panel').classList.contains('hidden')) exitGame();
  }

  // 'g' opens daily game
  if (e.key === 'g' && activeMode === 'globe') startDailyGame();
});

document.getElementById('share-btn').addEventListener('click', () => {
  if (!currentPlayer) return;
  const p = currentPlayer;
  const text =
    p.flag + ' ' + p.name + ' — Career on Pitchmap\n' +
    p.career.map(c => c.flag + ' ' + c.club + ' (' + c.from + '–' + (c.to || 'now') + ')').join('\n') + '\n' +
    p.career.length + ' clubs · ' + p.career.reduce((s, c) => s + c.goals, 0) + ' goals · ' +
    p.career.reduce((s, c) => s + c.apps, 0) + ' apps\n' +
    'pitchmap.vercel.app';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const b = document.getElementById('share-btn');
      b.textContent = 'Copied ✓';
      setTimeout(() => b.textContent = 'Share ↗', 2200);
    });
  }
});

// ============================================================
// BREADCRUMB
// ============================================================
function showBreadcrumb(text) {
  document.getElementById('bc-text').textContent = text;
  document.getElementById('breadcrumb').classList.remove('hidden');
}

// ============================================================
// BOOT
// ============================================================
initGlobe();
setupGameSearch();

// Set daily hint on landing
const todayName = getDailyPlayerName();
if (PLAYERS[todayName]) {
  const p = PLAYERS[todayName];
  const todayResult = GameStore.getTodayResult();
  const hintEl = document.getElementById('daily-game-hint');
  if (hintEl) {
    if (todayResult) {
      hintEl.textContent = todayResult.won ? '✅ Solved today!' : '😔 Missed today — see the answer';
    } else {
      hintEl.textContent = p.flag + ' ' + p.career.length + ' clubs · ' + p.nationality + ' · Can you guess?';
    }
  }
}

// ============================================================
// SURPRISE ME — random player
// ============================================================
function surpriseMe() {
  const names = Object.keys(PLAYERS);
  const pick = names[Math.floor(Math.random() * names.length)];
  selectPlayer(pick);
}
