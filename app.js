// PITCHMAP v2 — Club navigation with rich story cards
const PLAYERS = {
  'Zlatan Ibrahimović': {
    name: 'Zlatan Ibrahimović', nationality: 'Swedish', flag: '🇸🇪',
    born: 'Malmö, Sweden', position: 'Striker',
    career: [
      { club: 'Malmö FF', country: 'Sweden', flag: '🇸🇪', lat: 55.605, lng: 13.003, from: 1999, to: 2001, apps: 47, goals: 18, assists: 12,
        funFact: 'Zlatan was so good at 17 that Malmö let him train with the first team — but he refused to carry the veterans bags. Even then, no one argued.',
        drama: 'Ajax scouts watched him for weeks before paying €8.7M — huge fee for an unknown Swedish teen.',
        highlight: 'Scored 16 league goals in his final season, earning Malmö a European spot.' },
      { club: 'Ajax', country: 'Netherlands', flag: '🇳🇱', lat: 52.314, lng: 4.942, from: 2001, to: 2004, apps: 110, goals: 48, assists: 22,
        funFact: 'Ronald Koeman reportedly told him to prove himself in a trial. Zlatan refused. "I don\'t do auditions." He got the contract.',
        drama: 'A €16M transfer became one of the biggest Dutch exports of that era.',
        highlight: 'Won 3 consecutive Eredivisie titles. First-choice striker in just his second season.' },
      { club: 'Juventus', country: 'Italy', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2004, to: 2006, apps: 92, goals: 26, assists: 18,
        funFact: 'Juventus was stripped of 2 league titles during his time due to the Calciopoli match-fixing scandal.',
        drama: 'Juventus relegated. Zlatan left on a free transfer to Inter — the defining career moment.',
        highlight: 'Won back-to-back Serie A titles (later stripped). Deadly partnership with Del Piero.' },
      { club: 'Inter Milan', country: 'Italy', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2006, to: 2009, apps: 117, goals: 66, assists: 34,
        funFact: '"Ibra" won 3 consecutive Serie A titles — his first undisputed championships.',
        drama: 'Barcelona came with €46M + Samuel Eto\'o in a player swap. Zlatan was effectively traded for another player.',
        highlight: 'Top scorer for Inter all 3 seasons. One of Serie A\'s most feared strike forces.' },
      { club: 'Barcelona', country: 'Spain', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2009, to: 2010, apps: 46, goals: 22, assists: 10,
        funFact: 'The clash with Pep Guardiola is legendary. Zlatan called him "a coward" in his autobiography.',
        drama: 'Arrived for €46M. Left 1 year later for AC Milan for just €24M. Guardiola wanted a different style.',
        highlight: 'Won La Liga in his only season. 22 goals despite the friction.' },
      { club: 'AC Milan', country: 'Italy', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2010, to: 2012, apps: 85, goals: 56, assists: 27,
        funFact: 'Voted Serie A best foreign player both seasons. Led Milan to their first Scudetto in 7 years.',
        drama: 'PSG came with €20M/year salary — the biggest transfer in French football history.',
        highlight: 'Serie A Golden Boot. 28 league goals in 2011-12, his finest individual season.' },
      { club: 'PSG', country: 'France', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2012, to: 2016, apps: 180, goals: 156, assists: 60,
        funFact: 'He bought a restaurant in Paris. Named it after himself. Called Paris his city. Paris agreed.',
        drama: 'Left for Manchester United on a free at 34. Most expected decline. They were wrong.',
        highlight: '4 consecutive Ligue 1 titles. 38 goals in 2015-16. Elevated French football globally.' },
      { club: 'Manchester Utd', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463, lng: -2.292, from: 2016, to: 2018, apps: 53, goals: 29, assists: 14,
        funFact: 'Scored a 30-yard bicycle kick on debut. Ruptured ACL. Came back to score in the Europa League final.',
        drama: 'Critics said he was too old at 34. He won a European trophy. On a free transfer.',
        highlight: 'Europa League winner. ACL comeback to score in a European final.' },
      { club: 'LA Galaxy', country: 'USA', flag: '🇺🇸', lat: 33.864, lng: -118.261, from: 2018, to: 2019, apps: 58, goals: 53, assists: 18,
        funFact: '"I have come here to save soccer." He scored on debut from the halfway line — a 40-yard lob over the keeper.',
        drama: 'Media expected a farewell tour. He led MLS in goals and assists combined.',
        highlight: 'That halfway line lob vs LAFC is one of the most iconic MLS goals ever.' },
      { club: 'AC Milan', country: 'Italy', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2020, to: 2023, apps: 88, goals: 49, assists: 15,
        funFact: 'Won the Serie A title at 40 — one of the oldest players to win a top European league.',
        drama: 'Announced retirement at 41. Then joined Hammarby as a co-owner.',
        highlight: 'Serie A Champion 2021-22 at age 40. The oldest Scudetto winner in modern times.' },
    ]
  },
  'Cristiano Ronaldo': {
    name: 'Cristiano Ronaldo', nationality: 'Portuguese', flag: '🇵🇹',
    born: 'Funchal, Portugal', position: 'Winger / Striker',
    career: [
      { club: 'Sporting CP', country: 'Portugal', flag: '🇵🇹', lat: 38.762, lng: -9.161, from: 2001, to: 2003, apps: 31, goals: 5, assists: 8,
        funFact: 'So impressive in a pre-season friendly vs Man United that United\'s own players begged Ferguson to sign him.',
        drama: 'United paid £12.24M — record fee for a teenager in English football.',
        highlight: 'First player born in the 1980s to represent Sporting\'s first team.' },
      { club: 'Manchester Utd', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463, lng: -2.292, from: 2003, to: 2009, apps: 292, goals: 118, assists: 67,
        funFact: 'Won his first Ballon d\'Or in 2008. The step-overs, the free kicks. He reinvented what a winger could be.',
        drama: 'After the 2006 World Cup wink vs England, he needed a police escort to training. Still won the league.',
        highlight: 'Premier League, Champions League, FA Cup. Left for £80M — world record at the time.' },
      { club: 'Real Madrid', country: 'Spain', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2009, to: 2018, apps: 438, goals: 450, assists: 131,
        funFact: '450 goals in 438 games. The greatest goalscoring run in football history.',
        drama: 'His rivalry with Messi and the Ballon d\'Or wars defined a decade. Left having broken every Madrid record.',
        highlight: 'All-time top scorer for Real Madrid. 3 consecutive Champions Leagues. Truly historic.' },
      { club: 'Juventus', country: 'Italy', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2018, to: 2021, apps: 134, goals: 101, assists: 22,
        funFact: '101 goals in 134 games at ages 33-36. Called too old when he joined.',
        drama: 'Joined for €100M. Left quietly after Juventus crashed out to Porto in the UCL round of 16.',
        highlight: 'Hat-trick vs Atletico overturning 2-0 deficit — one of the greatest UCL performances ever.' },
      { club: 'Manchester Utd', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463, lng: -2.292, from: 2021, to: 2022, apps: 54, goals: 27, assists: 3,
        funFact: 'Two goals on debut. Standing ovation from Old Trafford. Then he gave a bombshell interview.',
        drama: 'Said he felt "betrayed" by the club. United terminated his contract. Most dramatic exit in football.',
        highlight: '27 goals despite the chaos. His debut hat-trick vs Newcastle reminded everyone of the level.' },
      { club: 'Al Nassr', country: 'Saudi Arabia', flag: '🇸🇦', lat: 24.774, lng: 46.738, from: 2023, to: null, apps: 90, goals: 76, assists: 19,
        funFact: 'Signed reportedly for €200M per year — the highest-paid footballer in history.',
        drama: 'Many called it a retirement. He kept breaking records. Saudi league viewership exploded globally.',
        highlight: 'First player to score 900 career goals. Still rewriting records at 39.' },
    ]
  },
  'Lionel Messi': {
    name: 'Lionel Messi', nationality: 'Argentine', flag: '🇦🇷',
    born: 'Rosario, Argentina', position: 'Forward',
    career: [
      { club: 'Barcelona', country: 'Spain', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2004, to: 2021, apps: 778, goals: 672, assists: 305,
        funFact: 'Barcelona paid for his growth hormone treatment as a child — on condition his family moved to Spain. He was 13.',
        drama: 'In 2020 Messi sent a burofax demanding to leave. He stayed. Then left in tears in 2021 when Barca couldn\'t afford his new contract.',
        highlight: '10 La Ligas, 4 Champions Leagues, 7 Ballon d\'Ors. The greatest club career in history.' },
      { club: 'PSG', country: 'France', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2021, to: 2023, apps: 75, goals: 32, assists: 35,
        funFact: 'His arrival at Le Bourget airport caused a traffic jam that paralysed Paris. A million people tried to be near the airport.',
        drama: 'Got booed by PSG fans. A rare turbulent chapter for the greatest player ever.',
        highlight: 'Won Ligue 1 both seasons. Won the World Cup with Argentina at Qatar 2022.' },
      { club: 'Inter Miami', country: 'USA', flag: '🇺🇸', lat: 25.958, lng: -80.239, from: 2023, to: null, apps: 60, goals: 48, assists: 18,
        funFact: 'Apple TV+ subscriptions rose 65% when he signed. Scored a free kick winner on his debut.',
        drama: 'Saudi Arabia reportedly offered $1.5 billion. He chose Miami and took a pay cut.',
        highlight: 'Won Leagues Cup on debut. Transformed MLS into a global product. Won his 8th Ballon d\'Or in 2023.' },
    ]
  },
  'Erling Haaland': {
    name: 'Erling Haaland', nationality: 'Norwegian', flag: '🇳🇴',
    born: 'Leeds, England', position: 'Striker',
    career: [
      { club: 'Molde', country: 'Norway', flag: '🇳🇴', lat: 62.737, lng: 7.159, from: 2017, to: 2019, apps: 50, goals: 20, assists: 8,
        funFact: 'Ole Gunnar Solskjaer was his manager at Molde. He later tried to sign him for United. Haaland chose Dortmund.',
        drama: 'Multiple Bundesliga clubs came calling. RB Salzburg won by being smartest about his development path.',
        highlight: 'Norwegian debut at 16. 20 goals in 50 games — extraordinary for a teenager.' },
      { club: 'RB Salzburg', country: 'Austria', flag: '🇦🇹', lat: 47.822, lng: 13.049, from: 2019, to: 2020, apps: 27, goals: 29, assists: 8,
        funFact: 'Scored a hat-trick in the Champions League on his debut in that competition. He was 19 years old.',
        drama: 'Every European giant wanted him in January 2020. Dortmund paid €20M — the bargain of the decade.',
        highlight: 'Champions League hat-trick on debut. 29 goals in 27 games. The most efficient teenager in European football history.' },
      { club: 'Borussia Dortmund', country: 'Germany', flag: '🇩🇪', lat: 51.493, lng: 7.452, from: 2020, to: 2022, apps: 89, goals: 86, assists: 23,
        funFact: '86 goals in 89 games. No Bundesliga striker had ever managed that rate. Opponents tried man-marking, double-marking, and prayer.',
        drama: 'A €60M release clause was in his contract from the start. Every top club prepared offers. City were first and fastest.',
        highlight: 'Bundesliga Player of the Year. UCL top scorer. City paid €60M — one of history\'s greatest release clause bargains.' },
      { club: 'Manchester City', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.483, lng: -2.200, from: 2022, to: null, apps: 110, goals: 100, assists: 22,
        funFact: 'Scored 52 goals in his debut Premier League season — a new all-time record.',
        drama: 'Real Madrid rumours every transfer window. He keeps scoring. Pep\'s "false 9" became a very real 9.',
        highlight: 'Treble winner 2022-23. PL Golden Boot. 100 goals and counting. The most clinical striker on the planet.' },
    ]
  },
  'Ronaldinho': {
    name: 'Ronaldinho', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Porto Alegre, Brazil', position: 'Attacking Midfielder',
    career: [
      { club: 'Grêmio', country: 'Brazil', flag: '🇧🇷', lat: -30.066, lng: -51.228, from: 1998, to: 2001, apps: 47, goals: 23, assists: 21,
        funFact: 'His skill at 17 was so absurd that opponents would stop and watch — then complain to the referee it was "unsportsmanlike."',
        drama: 'Multiple European clubs raced to sign him. PSG won for around €5M. A bargain that became legendary.',
        highlight: 'Led Grêmio to the Copa Sul-Minas as a teenager.' },
      { club: 'PSG', country: 'France', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2001, to: 2003, apps: 77, goals: 25, assists: 30,
        funFact: 'Arrested briefly at a Paris border for a fake passport. PSG paid his bail. He went straight to training.',
        drama: 'Barcelona and Man United both wanted him desperately. His mother reportedly preferred Barcelona\'s weather.',
        highlight: 'His Ligue 1 performances made him one of the most exciting players on the planet.' },
      { club: 'Barcelona', country: 'Spain', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2003, to: 2008, apps: 207, goals: 94, assists: 91,
        funFact: 'Real Madrid fans gave him a standing ovation at the Bernabeu in 2005 after he scored twice and nutmegged 4 defenders. Madrid fans do NOT do that.',
        drama: 'His lifestyle — the parties, the hours — eventually cost him his place. Guardiola told him directly: time to go.',
        highlight: '2 La Ligas, 1 Champions League. Ballon d\'Or. FIFA World Player of the Year. The most joyful footballer of his generation.' },
      { club: 'AC Milan', country: 'Italy', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2008, to: 2011, apps: 96, goals: 30, assists: 28,
        funFact: 'Roomed with Kaka at Milan. Two Brazilians, two former World Players of the Year, one dressing room.',
        drama: 'Milan kept him 3 years hoping for the Barcelona Ronaldinho. He never quite returned.',
        highlight: 'Still produced moments of pure magic that no one else on the planet could replicate.' },
      { club: 'Atlético Mineiro', country: 'Brazil', flag: '🇧🇷', lat: -19.865, lng: -43.971, from: 2012, to: 2014, apps: 74, goals: 30, assists: 22,
        funFact: 'Won the Copa Libertadores in 2013 — first time in Atletico Mineiro\'s history. 44 years of hurt ended by Ronaldinho.',
        drama: 'His last real trophy. Arguably his most meaningful one.',
        highlight: 'Copa Libertadores winner. Recopa Sudamericana winner. His greatest honour came at career\'s end.' },
    ]
  },
  'Thierry Henry': {
    name: 'Thierry Henry', nationality: 'French', flag: '🇫🇷',
    born: 'Les Ulis, France', position: 'Striker',
    career: [
      { club: 'Monaco', country: 'France', flag: '🇫🇷', lat: 43.728, lng: 7.415, from: 1994, to: 1999, apps: 105, goals: 28, assists: 35,
        funFact: 'Started as a left winger, not a striker. Arsene Wenger coached him here and saw a striker hiding inside a winger.',
        drama: 'Juventus paid €8M and played him wide left. 3 goals in 16 games. A disaster. Wenger rescued him.',
        highlight: 'Won Ligue 1 with Monaco in 1997. The foundation of everything that followed.' },
      { club: 'Arsenal', country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 51.555, lng: -0.108, from: 1999, to: 2007, apps: 369, goals: 228, assists: 103,
        funFact: 'Wenger turned him into a striker. He became Arsenal\'s all-time top scorer and the Premier League\'s greatest ever striker.',
        drama: 'The Invincibles. 49 unbeaten games. Henry was the talisman. When he left for €25M, Highbury wept.',
        highlight: '2 Premier Leagues, 2 Golden Boots, 4 Player of Year awards. The Invincible season. Iconic.' },
      { club: 'Barcelona', country: 'Spain', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2007, to: 2010, apps: 121, goals: 49, assists: 53,
        funFact: 'Won the Champions League, La Liga, Copa del Rey, Club World Cup all in one season.',
        drama: 'His handball vs Ireland in the 2009 World Cup qualifier is one of the most controversial moments in football history.',
        highlight: 'Treble winner 2008-09. Played alongside Xavi, Iniesta and Messi.' },
      { club: 'NY Red Bulls', country: 'USA', flag: '🇺🇸', lat: 40.737, lng: -74.151, from: 2010, to: 2014, apps: 135, goals: 52, assists: 57,
        funFact: 'Teammates later said training with him changed how they understood the game entirely.',
        drama: 'Took a loan back to Arsenal in January 2012. Scored. Pointed both fingers to the sky. Arsenal fans cried.',
        highlight: 'Made the Red Bulls credible for the first time. 52 goals in 135 games.' },
    ]
  },
  'Neymar': {
    name: 'Neymar', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Mogi das Cruzes, Brazil', position: 'Forward',
    career: [
      { club: 'Santos', country: 'Brazil', flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2009, to: 2013, apps: 225, goals: 136, assists: 64,
        funFact: 'Won the Copa Libertadores with Santos in 2011 before turning 20.',
        drama: 'Real Madrid offered €40M. Santos refused. Barcelona came with €57M. Real Madrid were furious.',
        highlight: 'Libertadores champion. South American Player of Year twice. Most exciting teenager in world football.' },
      { club: 'Barcelona', country: 'Spain', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2013, to: 2017, apps: 186, goals: 105, assists: 76,
        funFact: 'The MSN — Messi, Suarez, Neymar — scored 122 goals combined in 2014-15.',
        drama: 'PSG triggered his €222M release clause — the most expensive transfer in history. Football changed overnight.',
        highlight: 'Treble 2014-15. The MSN era was one of the most beautiful in football history.' },
      { club: 'PSG', country: 'France', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2017, to: 2023, apps: 173, goals: 118, assists: 77,
        funFact: 'Joined for €222M — nearly double the previous world record. Banks had to verify the transaction.',
        drama: 'PSG reached the UCL final in 2020 but lost to Bayern. Years of near-misses and injury defined the chapter.',
        highlight: '5 Ligue 1 titles. Champions League finalist. Elite numbers throughout.' },
      { club: 'Santos', country: 'Brazil', flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2025, to: null, apps: 10, goals: 3, assists: 4,
        funFact: 'Returned home on a free transfer when Santos were in Serie B. Saudi Arabia offered reportedly $1.5 billion. He chose heart over money.',
        drama: 'Career came full circle. The story is not over.',
        highlight: 'The boy from Santos came back to where it all began.' },
    ]
  }
};

let globe = null, currentPlayer = null, currentClubIndex = 0, popupTimeout = null;

function initGlobe() {
  globe = Globe({ animateIn: true })(document.getElementById('globe-container'))
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .atmosphereColor('#3060a0').atmosphereAltitude(0.18)
    .pointsData([]).pointColor('color').pointAltitude('altitude').pointRadius('radius')
    .onPointClick(handlePointClick)
    .arcsData([]).arcColor('arcColor').arcAltitudeAutoScale(0.35).arcStroke(1)
    .arcDashLength(1).arcDashGap(0).arcDashAnimateTime(0);
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.35;
  window.addEventListener('resize', () => { globe.width(window.innerWidth); globe.height(window.innerHeight); });
}

const searchInput = document.getElementById('search');
const suggestionsEl = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { suggestionsEl.classList.remove('open'); return; }
  const matches = Object.values(PLAYERS).filter(p => p.name.toLowerCase().includes(q));
  if (!matches.length) { suggestionsEl.classList.remove('open'); return; }
  suggestionsEl.innerHTML = matches.map(p =>
    `<div class="suggestion-item" onclick="selectPlayer('${p.name}')"><span class="s-flag">${p.flag}</span><span class="s-name">${p.name}</span><span class="s-nat">${p.nationality}</span></div>`
  ).join('');
  suggestionsEl.classList.add('open');
});
document.addEventListener('click', e => { if (!e.target.closest('.search-container')) suggestionsEl.classList.remove('open'); });

function selectPlayer(name) {
  const player = PLAYERS[name];
  if (!player) return;
  currentPlayer = player; currentClubIndex = 0;
  suggestionsEl.classList.remove('open');
  searchInput.value = name;
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('club-card').classList.add('hidden');
  document.getElementById('deep-dive').classList.add('hidden');
  showPlayer(player);
}

function showPlayer(player) {
  document.getElementById('player-flag').textContent = player.flag;
  document.getElementById('player-name').textContent = player.name;
  document.getElementById('player-subtitle').textContent = player.nationality + ' · ' + player.position;
  document.getElementById('stat-clubs').textContent = player.career.length;
  document.getElementById('stat-goals').textContent = player.career.reduce((s,c) => s+c.goals, 0);
  document.getElementById('stat-apps').textContent = player.career.reduce((s,c) => s+c.apps, 0);
  document.getElementById('player-panel').classList.remove('hidden');
  document.getElementById('share-btn').style.display = 'block';
  buildTimeline(player);
  globe.pointsData(player.career.map((c,i) => ({ lat:c.lat, lng:c.lng, color:'#00ff88', altitude:0.015, radius:0.3, clubIndex:i })));
  globe.arcsData([]);
  goToClub(0);
}

function goToClub(index) {
  if (!currentPlayer) return;
  const career = currentPlayer.career;
  if (index < 0 || index >= career.length) return;
  currentClubIndex = index;
  const club = career[index];
  document.querySelectorAll('.timeline-item').forEach((el,i) => el.classList.toggle('active', i === index));
  document.getElementById('btn-prev').disabled = index === 0;
  document.getElementById('btn-next').disabled = index === career.length - 1;
  document.getElementById('nav-label').textContent = (index+1) + ' / ' + career.length;
  if (index < career.length - 1) {
    const next = career[index+1];
    globe.arcsData([{ startLat:club.lat, startLng:club.lng, endLat:next.lat, endLng:next.lng, arcColor:['rgba(0,255,136,0.6)','rgba(0,200,255,0.6)'] }]);
  } else { globe.arcsData([]); }
  globe.pointsData(career.map((c,i) => ({ lat:c.lat, lng:c.lng, color:i===index?'#ffffff':'#00ff88', altitude:i===index?0.05:0.012, radius:i===index?0.6:0.28, clubIndex:i })));
  globe.controls().autoRotate = false;
  globe.pointOfView({ lat:club.lat, lng:club.lng, altitude:1.8 }, 1200);
  clearTimeout(popupTimeout);
  popupTimeout = setTimeout(() => showClubCard(club, index), 900);
}

function showClubCard(club, index) {
  document.getElementById('cc-flag').textContent = club.flag;
  document.getElementById('cc-club').textContent = club.club;
  document.getElementById('cc-country').textContent = club.country + ' · ' + club.from + '–' + (club.to||'present');
  document.getElementById('cc-apps').textContent = club.apps;
  document.getElementById('cc-goals').textContent = club.goals;
  document.getElementById('cc-assists').textContent = club.assists;
  const card = document.getElementById('club-card');
  card.dataset.index = index;
  card.classList.remove('hidden');
}

function openDeepDive() {
  const index = parseInt(document.getElementById('club-card').dataset.index);
  const club = currentPlayer.career[index];
  if (!club) return;
  document.getElementById('dd-title').textContent = club.flag + ' ' + club.club;
  document.getElementById('dd-period').textContent = club.from + '–' + (club.to||'present') + ' · ' + club.country;
  document.getElementById('dd-apps').textContent = club.apps;
  document.getElementById('dd-goals').textContent = club.goals;
  document.getElementById('dd-assists').textContent = club.assists;
  document.getElementById('dd-funfact').textContent = club.funFact||'';
  document.getElementById('dd-drama').textContent = club.drama||'';
  document.getElementById('dd-highlight').textContent = club.highlight||'';
  document.getElementById('deep-dive').classList.remove('hidden');
}

function closeDeepDive() { document.getElementById('deep-dive').classList.add('hidden'); }
function handlePointClick(point) { if (point.clubIndex !== undefined) goToClub(point.clubIndex); }

function buildTimeline(player) {
  const tl = document.getElementById('career-timeline');
  tl.innerHTML = '';
  player.career.forEach((club, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item' + (i===0?' active':'');
    item.style.animationDelay = (i*60) + 'ms';
    item.innerHTML = '<span class="ti-flag">' + club.flag + '</span><div class="ti-dot"></div><span class="ti-club">' + club.club + '</span><span class="ti-years">' + club.from + '–' + (club.to||'now') + '</span>';
    item.onclick = () => goToClub(i);
    tl.appendChild(item);
    if (i < player.career.length - 1) { const conn = document.createElement('div'); conn.className = 'timeline-connector'; tl.appendChild(conn); }
  });
}

document.getElementById('btn-prev').addEventListener('click', () => goToClub(currentClubIndex - 1));
document.getElementById('btn-next').addEventListener('click', () => goToClub(currentClubIndex + 1));

document.getElementById('share-btn').addEventListener('click', () => {
  if (!currentPlayer) return;
  const p = currentPlayer;
  const text = p.flag + ' ' + p.name + ' on Pitchmap\n' + p.career.map(c=>c.flag+' '+c.club).join(' → ') + '\n' + p.career.length + ' clubs · ' + p.career.reduce((s,c)=>s+c.goals,0) + ' goals\n' + window.location.href;
  if (navigator.clipboard) { navigator.clipboard.writeText(text).then(()=>{ const b=document.getElementById('share-btn'); b.textContent='Copied ✓'; setTimeout(()=>b.textContent='Share ↗',2000); }); }
});

initGlobe();
