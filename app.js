// ============================================================
// PITCHMAP — Player Career Globe
// ============================================================

const PLAYERS = {
  'Zlatan Ibrahimović': {
    name: 'Zlatan Ibrahimović',
    nationality: 'Swedish',
    flag: '🇸🇪',
    born: 'Malmö, Sweden',
    career: [
      { club: 'Malmö FF',       country: 'Sweden',      flag: '🇸🇪', lat: 55.605,  lng: 13.003,  from: 1999, to: 2001, apps: 47,  goals: 18  },
      { club: 'Ajax',           country: 'Netherlands', flag: '🇳🇱', lat: 52.314,  lng: 4.942,   from: 2001, to: 2004, apps: 110, goals: 48  },
      { club: 'Juventus',       country: 'Italy',       flag: '🇮🇹', lat: 45.109,  lng: 7.641,   from: 2004, to: 2006, apps: 92,  goals: 26  },
      { club: 'Inter Milan',    country: 'Italy',       flag: '🇮🇹', lat: 45.478,  lng: 9.124,   from: 2006, to: 2009, apps: 117, goals: 66  },
      { club: 'Barcelona',      country: 'Spain',       flag: '🇪🇸', lat: 41.381,  lng: 2.123,   from: 2009, to: 2010, apps: 46,  goals: 22  },
      { club: 'AC Milan',       country: 'Italy',       flag: '🇮🇹', lat: 45.478,  lng: 9.124,   from: 2010, to: 2012, apps: 85,  goals: 56  },
      { club: 'PSG',            country: 'France',      flag: '🇫🇷', lat: 48.841,  lng: 2.253,   from: 2012, to: 2016, apps: 180, goals: 156 },
      { club: 'Manchester Utd', country: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463,  lng: -2.292, from: 2016, to: 2018, apps: 53,  goals: 29  },
      { club: 'LA Galaxy',      country: 'USA',         flag: '🇺🇸', lat: 33.864,  lng: -118.261,from: 2018, to: 2019, apps: 58,  goals: 53  },
      { club: 'AC Milan',       country: 'Italy',       flag: '🇮🇹', lat: 45.478,  lng: 9.124,   from: 2020, to: 2023, apps: 88,  goals: 49  },
    ]
  },
  'Cristiano Ronaldo': {
    name: 'Cristiano Ronaldo',
    nationality: 'Portuguese',
    flag: '🇵🇹',
    born: 'Funchal, Portugal',
    career: [
      { club: 'Sporting CP',    country: 'Portugal',    flag: '🇵🇹', lat: 38.762,  lng: -9.161,  from: 2001, to: 2003, apps: 31,  goals: 5   },
      { club: 'Manchester Utd', country: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463,  lng: -2.292, from: 2003, to: 2009, apps: 292, goals: 118 },
      { club: 'Real Madrid',    country: 'Spain',       flag: '🇪🇸', lat: 40.453,  lng: -3.689,  from: 2009, to: 2018, apps: 438, goals: 450 },
      { club: 'Juventus',       country: 'Italy',       flag: '🇮🇹', lat: 45.109,  lng: 7.641,   from: 2018, to: 2021, apps: 134, goals: 101 },
      { club: 'Manchester Utd', country: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463,  lng: -2.292, from: 2021, to: 2022, apps: 54,  goals: 27  },
      { club: 'Al Nassr',       country: 'Saudi Arabia',flag: '🇸🇦', lat: 24.774,  lng: 46.738,  from: 2023, to: null, apps: 90,  goals: 76  },
    ]
  },
  'Lionel Messi': {
    name: 'Lionel Messi',
    nationality: 'Argentine',
    flag: '🇦🇷',
    born: 'Rosario, Argentina',
    career: [
      { club: 'Barcelona',      country: 'Spain',       flag: '🇪🇸', lat: 41.381,  lng: 2.123,   from: 2004, to: 2021, apps: 778, goals: 672 },
      { club: 'PSG',            country: 'France',      flag: '🇫🇷', lat: 48.841,  lng: 2.253,   from: 2021, to: 2023, apps: 75,  goals: 32  },
      { club: 'Inter Miami',    country: 'USA',         flag: '🇺🇸', lat: 25.958,  lng: -80.239, from: 2023, to: null, apps: 60,  goals: 48  },
    ]
  },
  'Ronaldinho': {
    name: 'Ronaldinho',
    nationality: 'Brazilian',
    flag: '🇧🇷',
    born: 'Porto Alegre, Brazil',
    career: [
      { club: 'Grêmio',         country: 'Brazil',      flag: '🇧🇷', lat: -30.066, lng: -51.228, from: 1998, to: 2001, apps: 47,  goals: 23  },
      { club: 'PSG',            country: 'France',      flag: '🇫🇷', lat: 48.841,  lng: 2.253,   from: 2001, to: 2003, apps: 77,  goals: 25  },
      { club: 'Barcelona',      country: 'Spain',       flag: '🇪🇸', lat: 41.381,  lng: 2.123,   from: 2003, to: 2008, apps: 207, goals: 94  },
      { club: 'AC Milan',       country: 'Italy',       flag: '🇮🇹', lat: 45.478,  lng: 9.124,   from: 2008, to: 2011, apps: 96,  goals: 30  },
      { club: 'Flamengo',       country: 'Brazil',      flag: '🇧🇷', lat: -22.912, lng: -43.230, from: 2011, to: 2012, apps: 37,  goals: 16  },
      { club: 'Atlético Mineiro',country: 'Brazil',     flag: '🇧🇷', lat: -19.865, lng: -43.971, from: 2012, to: 2014, apps: 74,  goals: 30  },
      { club: 'Querétaro',      country: 'Mexico',      flag: '🇲🇽', lat: 20.688,  lng: -100.459,from: 2014, to: 2015, apps: 26,  goals: 8   },
      { club: 'Fluminense',     country: 'Brazil',      flag: '🇧🇷', lat: -22.912, lng: -43.230, from: 2015, to: 2015, apps: 6,   goals: 0   },
    ]
  },
  'Thierry Henry': {
    name: 'Thierry Henry',
    nationality: 'French',
    flag: '🇫🇷',
    born: 'Les Ulis, France',
    career: [
      { club: 'Monaco',         country: 'France',      flag: '🇫🇷', lat: 43.728,  lng: 7.415,   from: 1994, to: 1999, apps: 105, goals: 28  },
      { club: 'Juventus',       country: 'Italy',       flag: '🇮🇹', lat: 45.109,  lng: 7.641,   from: 1999, to: 1999, apps: 16,  goals: 3   },
      { club: 'Arsenal',        country: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 51.555,  lng: -0.108, from: 1999, to: 2007, apps: 369, goals: 228 },
      { club: 'Barcelona',      country: 'Spain',       flag: '🇪🇸', lat: 41.381,  lng: 2.123,   from: 2007, to: 2010, apps: 121, goals: 49  },
      { club: 'NY Red Bulls',   country: 'USA',         flag: '🇺🇸', lat: 40.737,  lng: -74.151, from: 2010, to: 2014, apps: 135, goals: 52  },
      { club: 'Arsenal',        country: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 51.555,  lng: -0.108, from: 2012, to: 2012, apps: 2,   goals: 2   },
    ]
  },
  'Neymar': {
    name: 'Neymar',
    nationality: 'Brazilian',
    flag: '🇧🇷',
    born: 'Mogi das Cruzes, Brazil',
    career: [
      { club: 'Santos',         country: 'Brazil',      flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2009, to: 2013, apps: 225, goals: 136 },
      { club: 'Barcelona',      country: 'Spain',       flag: '🇪🇸', lat: 41.381,  lng: 2.123,   from: 2013, to: 2017, apps: 186, goals: 105 },
      { club: 'PSG',            country: 'France',      flag: '🇫🇷', lat: 48.841,  lng: 2.253,   from: 2017, to: 2023, apps: 173, goals: 118 },
      { club: 'Al-Hilal',       country: 'Saudi Arabia',flag: '🇸🇦', lat: 24.774,  lng: 46.738,  from: 2023, to: 2024, apps: 7,   goals: 1   },
      { club: 'Santos',         country: 'Brazil',      flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2025, to: null, apps: 10,  goals: 3   },
    ]
  },
  'Erling Haaland': {
    name: 'Erling Haaland',
    nationality: 'Norwegian',
    flag: '🇳🇴',
    born: 'Leeds, England',
    career: [
      { club: 'Molde',          country: 'Norway',      flag: '🇳🇴', lat: 62.737,  lng: 7.159,   from: 2017, to: 2019, apps: 50,  goals: 20  },
      { club: 'RB Salzburg',    country: 'Austria',     flag: '🇦🇹', lat: 47.822,  lng: 13.049,  from: 2019, to: 2020, apps: 27,  goals: 29  },
      { club: 'Borussia Dortmund',country: 'Germany',   flag: '🇩🇪', lat: 51.493,  lng: 7.452,   from: 2020, to: 2022, apps: 89,  goals: 86  },
      { club: 'Manchester City',country: 'England',     flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.483,  lng: -2.200, from: 2022, to: null, apps: 110, goals: 100 },
    ]
  }
};

// ---- State ----
let globe = null;
let currentPlayer = null;
let animationFrame = 0;

// ---- Init Globe ----
function initGlobe() {
  globe = Globe({ animateIn: false })(document.getElementById('globe-container'))
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .atmosphereColor('#1a4080')
    .atmosphereAltitude(0.15)
    .arcsData([])
    .arcColor('arcColor')
    .arcDashLength(0.5)
    .arcDashGap(0.2)
    .arcDashAnimateTime(2000)
    .arcStroke(1.2)
    .arcAltitudeAutoScale(0.4)
    .pointsData([])
    .pointColor('color')
    .pointAltitude(0.02)
    .pointRadius('radius')
    .pointLabel('label')
    .onPointClick(handlePointClick);

  // Auto-rotate
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.4;
  globe.controls().enableZoom = true;

  // Resize
  window.addEventListener('resize', () => {
    globe.width(window.innerWidth);
    globe.height(window.innerHeight);
  });
}

// ---- Search ----
const searchInput = document.getElementById('search');
const suggestionsEl = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { suggestionsEl.classList.remove('open'); return; }
  const matches = Object.values(PLAYERS).filter(p => p.name.toLowerCase().includes(q));
  if (!matches.length) { suggestionsEl.classList.remove('open'); return; }
  suggestionsEl.innerHTML = matches.map(p =>
    `<div class="suggestion-item" onclick="selectPlayer('${p.name}')">
      <span class="s-flag">${p.flag}</span>
      <span class="s-name">${p.name}</span>
      <span class="s-nat">${p.nationality}</span>
    </div>`
  ).join('');
  suggestionsEl.classList.add('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) suggestionsEl.classList.remove('open');
});

// ---- Select Player ----
function selectPlayer(name) {
  const player = PLAYERS[name];
  if (!player) return;
  currentPlayer = player;
  suggestionsEl.classList.remove('open');
  searchInput.value = name;
  document.getElementById('landing').classList.add('hidden');
  showPlayer(player);
}

function showPlayer(player) {
  // Header panel
  document.getElementById('player-flag').textContent = player.flag;
  document.getElementById('player-name').textContent = player.name;
  document.getElementById('player-subtitle').textContent = `${player.nationality} · ${player.born}`;

  const totalGoals = player.career.reduce((s, c) => s + c.goals, 0);
  const totalApps = player.career.reduce((s, c) => s + c.apps, 0);
  document.getElementById('stat-clubs').textContent = player.career.length;
  document.getElementById('stat-goals').textContent = totalGoals;
  document.getElementById('stat-apps').textContent = totalApps;

  // Timeline
  const timeline = document.getElementById('career-timeline');
  timeline.innerHTML = '';
  player.career.forEach((club, i) => {
    const yearsStr = `${club.from}–${club.to || 'now'}`;
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.animationDelay = `${i * 80}ms`;
    item.innerHTML = `
      <span class="ti-flag">${club.flag}</span>
      <div class="ti-dot"></div>
      <span class="ti-club">${club.club}</span>
      <span class="ti-years">${yearsStr}</span>
    `;
    item.onclick = () => showClubPopup(club, i);
    timeline.appendChild(item);
    if (i < player.career.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'timeline-connector';
      timeline.appendChild(conn);
    }
  });

  document.getElementById('player-panel').classList.remove('hidden');
  document.getElementById('share-btn').style.display = 'block';

  // Globe
  animateCareer(player);
}

// ---- Globe Career Animation ----
function animateCareer(player) {
  globe.controls().autoRotate = false;

  // Points
  const points = player.career.map((c, i) => ({
    lat: c.lat, lng: c.lng,
    color: i === 0 ? '#00ff88' : i === player.career.length - 1 ? '#00c8ff' : '#ffffff',
    radius: 0.4,
    label: `<div style="font-family:Inter,sans-serif;background:#0e0e1c;border:1px solid #1e1e3a;padding:8px 12px;border-radius:10px;font-size:12px;color:#f0f0ff">${c.flag} <b>${c.club}</b><br/>${c.from}–${c.to || 'now'}<br/>${c.apps} apps · ${c.goals} goals</div>`,
    clubData: c, index: i
  }));

  // Arcs between consecutive clubs
  const arcs = [];
  for (let i = 0; i < player.career.length - 1; i++) {
    const a = player.career[i];
    const b = player.career[i + 1];
    arcs.push({
      startLat: a.lat, startLng: a.lng,
      endLat: b.lat, endLng: b.lng,
      arcColor: ['#00ff88', '#00c8ff']
    });
  }

  globe.pointsData(points).arcsData(arcs);

  // Fly to first club
  const first = player.career[0];
  globe.pointOfView({ lat: first.lat, lng: first.lng, altitude: 2 }, 1500);
}

// ---- Club Popup ----
function handlePointClick(point) {
  if (point.clubData) showClubPopup(point.clubData, point.index);
}

function showClubPopup(club, index) {
  const popup = document.getElementById('club-popup');
  document.getElementById('popup-flag').textContent = club.flag;
  document.getElementById('popup-club').textContent = club.club;
  document.getElementById('popup-years').textContent = `${club.country} · ${club.from}–${club.to || 'present'}`;
  document.getElementById('popup-apps').textContent = club.apps;
  document.getElementById('popup-goals').textContent = club.goals;

  // Position near center-left
  popup.style.top = '80px';
  popup.style.left = '24px';
  popup.classList.remove('hidden');

  // Fly to club
  globe.pointOfView({ lat: club.lat, lng: club.lng, altitude: 1.5 }, 800);
}

function closePopup() {
  document.getElementById('club-popup').classList.add('hidden');
}

// ---- Share ----
document.getElementById('share-btn').addEventListener('click', () => {
  if (!currentPlayer) return;
  const url = window.location.href;
  const text = `${currentPlayer.flag} ${currentPlayer.name}'s career journey — ${currentPlayer.career.length} clubs, ${currentPlayer.career.reduce((s,c)=>s+c.goals,0)} goals\n\nExplore on Pitchmap: ${url}`;
  if (navigator.share) {
    navigator.share({ title: `${currentPlayer.name} on Pitchmap`, text });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('share-btn');
      btn.textContent = 'Copied! ✓';
      setTimeout(() => btn.textContent = 'Share ↗', 2000);
    });
  }
});

// ---- Boot ----
initGlobe();
