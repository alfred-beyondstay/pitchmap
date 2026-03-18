// PITCHMAP v4 — Infinite navigation loop
// Globe → Country → Club → Player → National Team → repeat

// ============================================================
// STATE
// ============================================================
let globe = null;
let leafletMap = null;
let leafletClubMarkers = [];
let activeMode = 'globe';  // 'globe' | 'country' | 'club' | 'player' | 'national'
let currentPlayer = null;
let currentClub = null;
let currentNationalTeam = null;
let currentCountry = null;
let currentClubIndex = 0;
let currentYear = 2024;
let popupTimeout = null;

// ============================================================
// PLAYER DATA (imported from data.js)
// ============================================================
const PLAYERS = {
  'Zlatan Ibrahimović': {
    name: 'Zlatan Ibrahimović', nationality: 'Swedish', flag: '🇸🇪',
    born: 'Malmö, Sweden', position: 'Striker',
    career: [
      { club: 'Malmö FF', country: 'Sweden', city: 'Malmö', flag: '🇸🇪', lat: 55.605, lng: 13.003, from: 1999, to: 2001, apps: 47, goals: 18, assists: 12,
        funFact: 'Zlatan refused to carry the veterans\' bags at 17. Even then, no one argued.',
        drama: 'Ajax scouts paid €8.7M — huge fee for an unknown Swedish teen.',
        highlight: '16 league goals in his final season, earning Malmö a European spot.',
        teammates: ['Henrik Larsson', 'Niclas Alexandersson', 'Anders Svensson', 'Hakan Mild'] },
      { club: 'Ajax', country: 'Netherlands', city: 'Amsterdam', flag: '🇳🇱', lat: 52.314, lng: 4.942, from: 2001, to: 2004, apps: 110, goals: 48, assists: 22,
        funFact: '"I don\'t do auditions." Koeman asked for a trial. Zlatan refused. He got the contract.',
        drama: '€16M transfer — one of the biggest Dutch exports of that era.',
        highlight: '3 consecutive Eredivisie titles.',
        teammates: ['Rafael van der Vaart', 'Wesley Sneijder', 'Maxwell', 'Cristian Chivu'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2004, to: 2006, apps: 92, goals: 26, assists: 18,
        funFact: 'Juventus stripped of 2 titles during his time — the most dramatic backdrop of his career.',
        drama: 'Juve relegated for match-fixing. Zlatan walked out on a free to Inter.',
        highlight: 'Partnership with Del Piero. Titles later stripped.',
        teammates: ['Alessandro Del Piero', 'Pavel Nedvěd', 'Patrick Vieira', 'Gianluigi Buffon'] },
      { club: 'Inter Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2006, to: 2009, apps: 117, goals: 66, assists: 34,
        funFact: '3 consecutive Serie A titles — his first undisputed championships.',
        drama: 'Barcelona traded Eto\'o + €46M for him. Zlatan was literally exchanged for another player.',
        highlight: 'Top scorer for Inter all 3 seasons.',
        teammates: ['Patrick Vieira', 'Adriano', 'Dejan Stanković', 'Javier Zanetti'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2009, to: 2010, apps: 46, goals: 22, assists: 10,
        funFact: 'Called Guardiola "a coward" in his autobiography. The feud is legendary.',
        drama: 'Arrived €46M. Left 1 year later for €24M. Guardiola wanted a different style.',
        highlight: 'Won La Liga. 22 goals despite the philosophical friction.',
        teammates: ['Lionel Messi', 'Xavi', 'Andrés Iniesta', 'Samuel Eto\'o'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2010, to: 2012, apps: 85, goals: 56, assists: 27,
        funFact: 'Led Milan to first Scudetto in 7 years. Voted Serie A best foreign player both seasons.',
        drama: 'PSG offered €20M/year. The biggest French football transfer ever.',
        highlight: 'Serie A Golden Boot. 28 league goals in 2011-12.',
        teammates: ['Ronaldinho', 'Alexandre Pato', 'Robinho', 'Clarence Seedorf'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2012, to: 2016, apps: 180, goals: 156, assists: 60,
        funFact: 'Bought a Paris restaurant. Named it after himself. Called Paris his city. Paris agreed.',
        drama: 'Left on a free at 34. Most expected a fade. He didn\'t.',
        highlight: '4 Ligue 1 titles. 38 goals in 2015-16.',
        teammates: ['Edinson Cavani', 'Angel Di Maria', 'Thiago Silva', 'Marco Verratti'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463, lng: -2.292, from: 2016, to: 2018, apps: 53, goals: 29, assists: 14,
        funFact: 'Bicycle kick on debut. ACL rupture. Comeback. Europa League final goal. All on a free.',
        drama: 'Critics said too old at 34. He won a European trophy.',
        highlight: 'Europa League winner.',
        teammates: ['Paul Pogba', 'Henrikh Mkhitaryan', 'Wayne Rooney', 'Marcus Rashford'] },
      { club: 'LA Galaxy', country: 'USA', city: 'Los Angeles', flag: '🇺🇸', lat: 33.864, lng: -118.261, from: 2018, to: 2019, apps: 58, goals: 53, assists: 18,
        funFact: '"I have come here to save soccer." He scored debut from halfway — 40-yard lob over the keeper.',
        drama: 'Media expected a farewell tour. He led MLS in goals + assists combined.',
        highlight: 'That halfway line lob vs LAFC. MLS iconic.',
        teammates: ['Giovani dos Santos', 'Romain Alessandrini', 'Jonathan dos Santos', 'Daniel Steres'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2020, to: 2023, apps: 88, goals: 49, assists: 15,
        funFact: 'Won Serie A at 40 — one of the oldest title winners in top European football.',
        drama: 'Retired at 41. Immediately became Hammarby co-owner.',
        highlight: 'Serie A Champion 2021-22 at age 40.',
        teammates: ['Olivier Giroud', 'Rafael Leão', 'Brahim Díaz', 'Théo Hernández'] },
    ]
  },
  'Cristiano Ronaldo': {
    name: 'Cristiano Ronaldo', nationality: 'Portuguese', flag: '🇵🇹',
    born: 'Funchal, Portugal', position: 'Winger / Striker',
    career: [
      { club: 'Sporting CP', country: 'Portugal', city: 'Lisbon', flag: '🇵🇹', lat: 38.762, lng: -9.161, from: 2001, to: 2003, apps: 31, goals: 5, assists: 8,
        funFact: 'So impressive vs Man United that United\'s players begged Ferguson to sign him.',
        drama: '£12.24M — record fee for a teenager in English football.',
        highlight: 'First 1980s-born player for Sporting\'s first team.',
        teammates: ['Ricardo Quaresma', 'Nuno Valente', 'Luís Figo', 'João Pinto'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463, lng: -2.292, from: 2003, to: 2009, apps: 292, goals: 118, assists: 67,
        funFact: 'Won Ballon d\'Or 2008. Reinvented what a winger could be.',
        drama: '2006 World Cup wink vs England. Police escort to training. Still won the league.',
        highlight: 'PL, UCL, FA Cup. Left for £80M — world record.',
        teammates: ['Wayne Rooney', 'Ryan Giggs', 'Paul Scholes', 'Carlos Tévez'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2009, to: 2018, apps: 438, goals: 450, assists: 131,
        funFact: '450 goals in 438 games. The greatest goalscoring run in football history.',
        drama: 'Messi vs Ronaldo defined an era. Left having broken every Madrid record.',
        highlight: 'All-time top scorer. 3 consecutive Champions Leagues.',
        teammates: ['Karim Benzema', 'Gareth Bale', 'Sergio Ramos', 'Luka Modrić'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2018, to: 2021, apps: 134, goals: 101, assists: 22,
        funFact: '101 goals in 134 games at 33-36. Called too old.',
        drama: 'Joined €100M. Left after UCL exit to Porto.',
        highlight: 'Hat-trick vs Atletico overturning 2-0. Greatest UCL performance.',
        teammates: ['Paulo Dybala', 'Giorgio Chiellini', 'Aaron Ramsey', 'Matthijs de Ligt'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.463, lng: -2.292, from: 2021, to: 2022, apps: 54, goals: 27, assists: 3,
        funFact: 'Two goals on debut. Standing ovation. Then: bombshell interview.',
        drama: '"Betrayed" — contract terminated. Most dramatic exit in football.',
        highlight: '27 goals despite the chaos.',
        teammates: ['Bruno Fernandes', 'Marcus Rashford', 'Raphaël Varane', 'Harry Maguire'] },
      { club: 'Al Nassr', country: 'Saudi Arabia', city: 'Riyadh', flag: '🇸🇦', lat: 24.774, lng: 46.738, from: 2023, to: null, apps: 90, goals: 76, assists: 19,
        funFact: '€200M/year reportedly. Highest-paid footballer in history.',
        drama: 'Many called it retirement. He kept breaking records.',
        highlight: 'First player to score 900 career goals.',
        teammates: ['Sadio Mané', 'Marcelo Brozović', 'Aymeric Laporte', 'Alex Telles'] },
    ]
  },
  'Lionel Messi': {
    name: 'Lionel Messi', nationality: 'Argentine', flag: '🇦🇷',
    born: 'Rosario, Argentina', position: 'Forward',
    career: [
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2004, to: 2021, apps: 778, goals: 672, assists: 305,
        funFact: 'Barca paid for hormone treatment — on condition the family moved to Spain. He was 13.',
        drama: 'The 2020 burofax. He stayed. Left in tears in 2021 when Barca couldn\'t pay his contract.',
        highlight: '10 La Ligas, 4 UCLs, 7 Ballons d\'Or. The greatest club career in history.',
        teammates: ['Xavi', 'Andrés Iniesta', 'Ronaldinho', 'Luis Suárez'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2021, to: 2023, apps: 75, goals: 32, assists: 35,
        funFact: 'A million people tried to be near Le Bourget airport the day he landed.',
        drama: 'Got booed by PSG fans. The rarest chapter.',
        highlight: 'Won Ligue 1 both seasons. Won the World Cup in Qatar 2022.',
        teammates: ['Neymar', 'Kylian Mbappé', 'Sergio Ramos', 'Marco Verratti'] },
      { club: 'Inter Miami', country: 'USA', city: 'Fort Lauderdale', flag: '🇺🇸', lat: 25.958, lng: -80.239, from: 2023, to: null, apps: 60, goals: 48, assists: 18,
        funFact: 'Apple TV+ subscriptions up 65% when he signed. Free kick winner on debut.',
        drama: 'Saudi Arabia offered $1.5 billion. He chose Miami and took a pay cut.',
        highlight: 'Leagues Cup on debut. 8th Ballon d\'Or in 2023.',
        teammates: ['Sergio Busquets', 'Jordi Alba', 'Luis Suárez', 'DeAndre Yedlin'] },
    ]
  },
  'Erling Haaland': {
    name: 'Erling Haaland', nationality: 'Norwegian', flag: '🇳🇴',
    born: 'Leeds, England', position: 'Striker',
    career: [
      { club: 'Molde', country: 'Norway', city: 'Molde', flag: '🇳🇴', lat: 62.737, lng: 7.159, from: 2017, to: 2019, apps: 50, goals: 20, assists: 8,
        funFact: 'Solskjaer was his manager. Later tried to sign him for United. Haaland chose Dortmund.',
        drama: 'Multiple Bundesliga clubs came. RB Salzburg were smartest about his development.',
        highlight: 'Norwegian debut at 16. 20 goals in 50 games.',
        teammates: ['Ola Kamara', 'Martin Linnes', 'Ørjan Nyland', 'Fredrik Aursnes'] },
      { club: 'RB Salzburg', country: 'Austria', city: 'Salzburg', flag: '🇦🇹', lat: 47.822, lng: 13.049, from: 2019, to: 2020, apps: 27, goals: 29, assists: 8,
        funFact: 'UCL hat-trick on debut at 19. The world dropped its jaw.',
        drama: 'Every European giant wanted him. Dortmund paid €20M — bargain of the decade.',
        highlight: 'UCL hat-trick on debut. 29 goals in 27 games.',
        teammates: ['Takumi Minamino', 'Patson Daka', 'Dominik Szoboszlai', 'Andreas Ulmer'] },
      { club: 'Borussia Dortmund', country: 'Germany', city: 'Dortmund', flag: '🇩🇪', lat: 51.493, lng: 7.452, from: 2020, to: 2022, apps: 89, goals: 86, assists: 23,
        funFact: '86 goals in 89 games. No Bundesliga striker had ever done this.',
        drama: '€60M release clause. City were first and fastest.',
        highlight: 'Bundesliga Player of Year. UCL top scorer.',
        teammates: ['Marco Reus', 'Jude Bellingham', 'Jadon Sancho', 'Thomas Meunier'] },
      { club: 'Manchester City', country: 'England', city: 'Manchester', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 53.483, lng: -2.200, from: 2022, to: null, apps: 110, goals: 100, assists: 22,
        funFact: '52 goals in debut PL season — new all-time record.',
        drama: 'Real Madrid rumours every window. He keeps scoring.',
        highlight: 'Treble 2022-23. PL Golden Boot. 100 goals and counting.',
        teammates: ['Kevin De Bruyne', 'Phil Foden', 'Bernardo Silva', 'Rodri'] },
    ]
  },
  'Ronaldinho': {
    name: 'Ronaldinho', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Porto Alegre, Brazil', position: 'Attacking Midfielder',
    career: [
      { club: 'Grêmio', country: 'Brazil', city: 'Porto Alegre', flag: '🇧🇷', lat: -30.066, lng: -51.228, from: 1998, to: 2001, apps: 47, goals: 23, assists: 21,
        funFact: 'Opponents stopped and watched — then complained to the referee it was unsportsmanlike.',
        drama: 'PSG won him for €5M over multiple European clubs. A historic bargain.',
        highlight: 'Copa Sul-Minas as a teenager.',
        teammates: ['Anderson Luis', 'Leandro', 'Jardel', 'Émerson'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2001, to: 2003, apps: 77, goals: 25, assists: 30,
        funFact: 'Arrested for fake passport. PSG paid bail. He went straight to training.',
        drama: 'His mother chose Barcelona\'s weather over Man United\'s rain.',
        highlight: 'Elevated to global star status.',
        teammates: ['Nicolas Anelka', 'Mikel Arteta', 'Okocha', 'Heinze'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2003, to: 2008, apps: 207, goals: 94, assists: 91,
        funFact: 'Real Madrid fans gave him a standing ovation at the Bernabeu in 2005. They do NOT do that.',
        drama: 'His lifestyle cost him his place. Guardiola told him directly: time to go.',
        highlight: '2 La Ligas, UCL, Ballon d\'Or. The most joyful footballer of his generation.',
        teammates: ['Lionel Messi', 'Samuel Eto\'o', 'Deco', 'Xavi'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2008, to: 2011, apps: 96, goals: 30, assists: 28,
        funFact: 'Roomed with Kaka. Two former World Players of the Year. One dressing room.',
        drama: 'Milan waited 3 years for the Barcelona Ronaldinho. He never quite came back.',
        highlight: 'Moments of magic no one else could replicate.',
        teammates: ['Kaká', 'Alexandre Pato', 'Andrea Pirlo', 'Zlatan Ibrahimović'] },
      { club: 'Atlético Mineiro', country: 'Brazil', city: 'Belo Horizonte', flag: '🇧🇷', lat: -19.865, lng: -43.971, from: 2012, to: 2014, apps: 74, goals: 30, assists: 22,
        funFact: 'Won Copa Libertadores 2013 — first in Atletico\'s 44-year history.',
        drama: 'His last real trophy. Arguably his most meaningful.',
        highlight: 'Copa Libertadores winner. Recopa Sudamericana.',
        teammates: ['Bernard', 'Diego Tardelli', 'Jô', 'Réver'] },
    ]
  },
  'Thierry Henry': {
    name: 'Thierry Henry', nationality: 'French', flag: '🇫🇷',
    born: 'Les Ulis, France', position: 'Striker',
    career: [
      { club: 'Monaco', country: 'France', city: 'Monaco', flag: '🇫🇷', lat: 43.728, lng: 7.415, from: 1994, to: 1999, apps: 105, goals: 28, assists: 35,
        funFact: 'Wenger saw a striker inside a winger and waited for his moment.',
        drama: 'Juventus misused him. Wenger called, paid £10.5M, transformed him.',
        highlight: 'Ligue 1 with Monaco 1997.',
        teammates: ['David Trezeguet', 'Emmanuel Petit', 'Victor Ikpeba', 'Ali Benarbia'] },
      { club: 'Arsenal', country: 'England', city: 'London', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', lat: 51.555, lng: -0.108, from: 1999, to: 2007, apps: 369, goals: 228, assists: 103,
        funFact: 'Arsenal\'s all-time top scorer. Premier League\'s greatest ever striker. The Invincibles.',
        drama: '49 unbeaten games. When he left for €25M, Highbury wept.',
        highlight: '2 PL titles, 2 Golden Boots. The Invincible season.',
        teammates: ['Robert Pires', 'Patrick Vieira', 'Dennis Bergkamp', 'Ashley Cole'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2007, to: 2010, apps: 121, goals: 49, assists: 53,
        funFact: 'Won UCL, La Liga, Copa del Rey, Club World Cup all in one season.',
        drama: 'Handball vs Ireland. One of football\'s most controversial moments.',
        highlight: 'Treble winner 2008-09. Alongside Xavi, Iniesta and Messi.',
        teammates: ['Lionel Messi', 'Samuel Eto\'o', 'Xavi', 'Andrés Iniesta'] },
      { club: 'NY Red Bulls', country: 'USA', city: 'New York', flag: '🇺🇸', lat: 40.737, lng: -74.151, from: 2010, to: 2014, apps: 135, goals: 52, assists: 57,
        funFact: 'Teammates said training with him changed how they understood football.',
        drama: 'Arsenal loan Jan 2012. Scored. Pointed to the sky. Fans cried.',
        highlight: 'Made the Red Bulls credible. 52 goals in 135 games.',
        teammates: ['Tim Cahill', 'Rafael Márquez', 'Jan Gunnar Solbakken', 'Roy Miller'] },
    ]
  },
  'Neymar': {
    name: 'Neymar', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Mogi das Cruzes, Brazil', position: 'Forward',
    career: [
      { club: 'Santos', country: 'Brazil', city: 'Santos', flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2009, to: 2013, apps: 225, goals: 136, assists: 64,
        funFact: 'Won Copa Libertadores with Santos before turning 20.',
        drama: 'Real Madrid offered €40M. Santos refused. Barcelona paid €57M. Madrid were furious.',
        highlight: 'Libertadores champion. South American Player of Year twice.',
        teammates: ['Robinho', 'Ganso', 'Borges', 'Elano'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2013, to: 2017, apps: 186, goals: 105, assists: 76,
        funFact: 'The MSN — Messi, Suarez, Neymar — 122 goals combined in 2014-15.',
        drama: 'PSG triggered €222M release clause — the most expensive transfer in history.',
        highlight: 'Treble 2014-15. The MSN era.',
        teammates: ['Lionel Messi', 'Luis Suárez', 'Xavi', 'Andrés Iniesta'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2017, to: 2023, apps: 173, goals: 118, assists: 77,
        funFact: '€222M — nearly double previous record. Banks had to verify the transaction.',
        drama: 'UCL final 2020 lost to Bayern. Years of near-misses.',
        highlight: '5 Ligue 1 titles. UCL finalist.',
        teammates: ['Kylian Mbappé', 'Edinson Cavani', 'Angel Di Maria', 'Marco Verratti'] },
      { club: 'Santos', country: 'Brazil', city: 'Santos', flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2025, to: null, apps: 10, goals: 3, assists: 4,
        funFact: 'Saudi Arabia offered $1.5 billion. He chose heart over money and came home.',
        drama: 'Santos were in Serie B. Career came full circle.',
        highlight: 'The boy from Santos returned.',
        teammates: ['Marcos Leonardo', 'Soteldo', 'Diego Pituca', 'João Basso'] },
    ]
  }
};

// ============================================================
// INIT GLOBE
// ============================================================
function initGlobe() {
  globe = Globe({ animateIn: true })(document.getElementById('globe-container'))
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .atmosphereColor('#3060a0').atmosphereAltitude(0.2)
    .pointsData([]).pointColor('color').pointAltitude('altitude').pointRadius('radius').onPointClick(handleGlobePointClick)
    .arcsData([]).arcColor('arcColor').arcAltitudeAutoScale(0.4).arcStroke(1.2).arcDashLength(0.6).arcDashGap(0.4).arcDashAnimateTime(1500)
    .labelsData([]).labelLat('lat').labelLng('lng').labelText('text').labelColor(() => '#00ff88').labelSize(1.0).labelDotRadius(0.3).labelResolution(2);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.3;
  globe.controls().enableZoom = true;
  globe.controls().minDistance = 110;

  // Country click detection via zoom threshold
  globe.controls().addEventListener('change', onGlobeZoomChange);

  window.addEventListener('resize', () => {
    globe.width(window.innerWidth);
    globe.height(window.innerHeight);
  });
}

let lastAltitude = 2;
function onGlobeZoomChange() {
  if (!globe) return;
  const pov = globe.pointOfView();
  if (!pov) return;
  const alt = pov.altitude;
  // If user zooms in very close on globe, suggest switching to map mode
  if (alt < 0.25 && activeMode === 'globe' && currentCountry) {
    enterCountryMode(currentCountry, pov.lat, pov.lng);
  }
  lastAltitude = alt;
}

// ============================================================
// INIT LEAFLET MAP
// ============================================================
function initLeafletMap() {
  if (leafletMap) return;
  const container = document.getElementById('map-container');
  container.style.display = 'block';
  leafletMap = L.map('map-container', { zoomControl: false, attributionControl: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(leafletMap);
  L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);
}

// ============================================================
// MODE: COUNTRY
// ============================================================
const COUNTRY_CENTERS = {
  'England': { lat: 52.5, lng: -1.5, zoom: 6 },
  'Spain': { lat: 40.0, lng: -3.5, zoom: 6 },
  'Italy': { lat: 42.5, lng: 12.5, zoom: 6 },
  'France': { lat: 46.5, lng: 2.3, zoom: 6 },
  'Germany': { lat: 51.0, lng: 10.0, zoom: 6 },
};

function enterCountryMode(country, lat, lng) {
  if (activeMode === 'country' && currentCountry === country) return;
  activeMode = 'country';
  currentCountry = country;

  // Fade globe, show map
  document.getElementById('globe-container').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('globe-container').style.display = 'none';
    document.getElementById('map-container').style.display = 'block';
    initLeafletMap();
    const center = COUNTRY_CENTERS[country] || { lat: lat || 50, lng: lng || 0, zoom: 6 };
    leafletMap.setView([center.lat, center.lng], center.zoom);
    placeClubMarkers(country);
    document.getElementById('globe-container').classList.remove('fade-out');
    showBreadcrumb(country);
  }, 400);
}

function exitCountryMode() {
  activeMode = 'globe';
  currentCountry = null;
  clearClubMarkers();
  document.getElementById('map-container').style.display = 'none';
  document.getElementById('globe-container').style.display = 'block';
  document.getElementById('breadcrumb').classList.add('hidden');
  globe.controls().autoRotate = true;
}

function placeClubMarkers(country) {
  clearClubMarkers();
  const clubs = COUNTRY_CLUBS[country] || [];
  clubs.forEach(c => {
    const div = L.divIcon({
      className: '',
      html: '<div class="club-marker" style="background:' + c.color + '" onclick="openClubFromMap(\'' + c.name + '\')">' +
            '<span>' + c.name.substring(0,3).toUpperCase() + '</span></div>',
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
  if (!club) { showClubBasic(clubName); return; }
  currentClub = club;
  activeMode = 'club';
  renderClubView(club);
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
  const squad = club.squad[year] || club.squad[Object.keys(club.squad).sort().pop()];
  const list = document.getElementById('cv-squad');
  list.innerHTML = squad.map(p =>
    '<div class="squad-card" onclick="tryOpenPlayer(\'' + p.name + '\')">' +
    '<span class="sq-flag">' + p.flag + '</span>' +
    '<div class="sq-info"><span class="sq-name">' + p.name + '</span><span class="sq-pos">' + p.position + '</span></div>' +
    (PLAYERS[p.name] ? '<span class="sq-arrow">→</span>' : '') +
    '</div>'
  ).join('');
  document.getElementById('cv-year').textContent = year;
}

function tryOpenPlayer(name) {
  const player = PLAYERS[name];
  if (player) { selectPlayer(name); }
}

function showClubBasic(name) {
  // Minimal club view for clubs not in rich dataset
  document.getElementById('club-view').classList.remove('hidden');
  document.getElementById('cv-name').textContent = name;
  document.getElementById('cv-meta').textContent = 'Club data coming soon';
  document.getElementById('cv-history').textContent = 'Detailed club profiles are being added. Check back soon!';
  document.getElementById('cv-owner').textContent = '—';
  document.getElementById('cv-stadium').textContent = '—';
  document.getElementById('cv-titles').innerHTML = '';
  document.getElementById('cv-squad').innerHTML = '';
}

function closeClubView() {
  document.getElementById('club-view').classList.add('hidden');
  activeMode = 'country';
  showBreadcrumb(currentCountry);
}

// ============================================================
// MODE: PLAYER (existing journey)
// ============================================================
const searchInput = document.getElementById('search');
const suggestionsEl = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { suggestionsEl.classList.remove('open'); return; }
  const matches = Object.values(PLAYERS).filter(p => p.name.toLowerCase().includes(q));
  if (!matches.length) { suggestionsEl.classList.remove('open'); return; }
  suggestionsEl.innerHTML = matches.map(p =>
    '<div class="suggestion-item" onclick="selectPlayer(\'' + p.name + '\')">' +
    '<span class="s-flag">' + p.flag + '</span><span class="s-name">' + p.name + '</span><span class="s-nat">' + p.nationality + '</span></div>'
  ).join('');
  suggestionsEl.classList.add('open');
});
document.addEventListener('click', e => { if (!e.target.closest('.search-container')) suggestionsEl.classList.remove('open'); });

function selectPlayer(name) {
  const player = PLAYERS[name];
  if (!player) return;
  currentPlayer = player;
  currentClubIndex = 0;
  activeMode = 'player';
  suggestionsEl.classList.remove('open');
  searchInput.value = name;
  // Switch to globe if on map
  if (document.getElementById('map-container').style.display !== 'none') {
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('globe-container').style.display = 'block';
  }
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('club-card').classList.add('hidden');
  document.getElementById('deep-dive').classList.add('hidden');
  document.getElementById('club-view').classList.add('hidden');
  document.getElementById('national-view').classList.add('hidden');
  showPlayer(player);
}

function showPlayer(player) {
  document.getElementById('player-flag').textContent = player.flag;
  document.getElementById('player-name').textContent = player.name;
  document.getElementById('player-subtitle').textContent = player.nationality + ' · ' + player.position;
  document.getElementById('stat-clubs').textContent = player.career.length;
  document.getElementById('stat-goals').textContent = player.career.reduce((s,c) => s+c.goals, 0);
  document.getElementById('stat-apps').textContent = player.career.reduce((s,c) => s+c.apps, 0);
  // National team badge
  const nt = PLAYER_NATIONAL_TEAMS[player.name];
  const ntBtn = document.getElementById('nt-btn');
  if (nt) {
    ntBtn.textContent = NATIONAL_TEAMS[nt] ? NATIONAL_TEAMS[nt].flag + ' ' + nt : '🌍 ' + nt;
    ntBtn.style.display = 'inline-flex';
    ntBtn.onclick = () => openNationalTeam(nt);
  } else {
    ntBtn.style.display = 'none';
  }
  document.getElementById('player-panel').classList.remove('hidden');
  document.getElementById('share-btn').style.display = 'block';
  buildTimeline(player);
  globe.pointsData(player.career.map((c, i) => ({ lat: c.lat, lng: c.lng, color: '#00ff88', altitude: 0.015, radius: 0.3, clubIndex: i })));
  globe.arcsData([]);
  globe.labelsData([]);
  globe.controls().autoRotate = false;
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
  document.getElementById('nav-label').textContent = (index+1) + ' / ' + career.length;
  if (index < career.length - 1) {
    const next = career[index+1];
    globe.arcsData([{ startLat: club.lat, startLng: club.lng, endLat: next.lat, endLng: next.lng, arcColor: ['#00ff88', '#00c8ff'] }]);
  } else { globe.arcsData([]); }
  globe.pointsData(career.map((c, i) => ({
    lat: c.lat, lng: c.lng,
    color: i===index ? '#ffffff' : (i < index ? 'rgba(0,255,136,0.4)' : '#00ff88'),
    altitude: i===index ? 0.06 : 0.012,
    radius: i===index ? 0.7 : 0.28, clubIndex: i
  })));
  globe.labelsData([{ lat: club.lat + 0.8, lng: club.lng, text: club.city + ', ' + club.country }]);
  globe.pointOfView({ lat: club.lat, lng: club.lng, altitude: 0.5 }, 1800);
  clearTimeout(popupTimeout);
  popupTimeout = setTimeout(() => { showClubCard(club, index); showTeammates(club); }, 1200);
}

function showClubCard(club, index) {
  document.getElementById('cc-flag').textContent = club.flag;
  document.getElementById('cc-club').textContent = club.club;
  document.getElementById('cc-country').textContent = club.city + ', ' + club.country + ' · ' + club.from + '–' + (club.to||'present');
  document.getElementById('cc-apps').textContent = club.apps;
  document.getElementById('cc-goals').textContent = club.goals;
  document.getElementById('cc-assists').textContent = club.assists;
  const card = document.getElementById('club-card');
  card.dataset.index = index;
  card.classList.remove('hidden');
}

function showTeammates(club) {
  if (!club.teammates || !club.teammates.length) return;
  const panel = document.getElementById('teammates-panel');
  document.getElementById('tm-era').textContent = club.club + ' ' + club.from + '–' + (club.to||'present');
  document.getElementById('teammates-list').innerHTML = club.teammates.map(name => {
    const found = PLAYERS[name];
    return '<div class="teammate-card ' + (found ? 'clickable' : '') + '" ' + (found ? 'onclick="selectPlayer(\'' + name.replace(/'/g,"\\'") + '\')"' : '') + '>' +
      '<span class="tm-flag">' + (found ? found.flag : '⚽') + '</span>' +
      '<span class="tm-name">' + name + '</span>' +
      (found ? '<span class="tm-arrow">→</span>' : '') + '</div>';
  }).join('');
  panel.classList.remove('hidden');
}

function openDeepDive() {
  const index = parseInt(document.getElementById('club-card').dataset.index);
  const club = currentPlayer.career[index];
  if (!club) return;
  document.getElementById('dd-title').textContent = club.flag + ' ' + club.club;
  document.getElementById('dd-period').textContent = club.city + ', ' + club.country + ' · ' + club.from + '–' + (club.to||'present');
  document.getElementById('dd-apps').textContent = club.apps;
  document.getElementById('dd-goals').textContent = club.goals;
  document.getElementById('dd-assists').textContent = club.assists;
  document.getElementById('dd-funfact').textContent = club.funFact||'';
  document.getElementById('dd-drama').textContent = club.drama||'';
  document.getElementById('dd-highlight').textContent = club.highlight||'';
  document.getElementById('deep-dive').classList.remove('hidden');
}
function closeDeepDive() { document.getElementById('deep-dive').classList.add('hidden'); }
function handleGlobePointClick(point) { if (point.clubIndex !== undefined) goToClub(point.clubIndex); }

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
    '<div class="nt-tournament"><span class="nt-result">' + t.result + '</span>' +
    '<span class="nt-comp">' + t.competition + ' ' + t.year + '</span>' +
    '<span class="nt-scorer">' + t.topScorer + '</span></div>'
  ).join('');
  document.getElementById('nv-greats').innerHTML = nt.allTimeGreats.map(n =>
    '<span class="nt-great' + (PLAYERS[n] ? ' clickable' : '') + '"' + (PLAYERS[n] ? ' onclick="selectPlayer(\'' + n.replace(/'/g,"\\'") + '\')"' : '') + '>' + n + '</span>'
  ).join('');
  document.getElementById('nv-squad').innerHTML = nt.currentSquad.map(p =>
    '<div class="squad-card' + (PLAYERS[p.name] ? ' clickable' : '') + '"' + (PLAYERS[p.name] ? ' onclick="selectPlayer(\'' + p.name.replace(/'/g,"\\'") + '\')"' : '') + '>' +
    '<span class="sq-flag">' + p.flag + '</span>' +
    '<div class="sq-info"><span class="sq-name">' + p.name + '</span><span class="sq-pos">' + p.position + ' · ' + p.caps + ' caps · ' + p.goals + ' goals</span></div>' +
    (PLAYERS[p.name] ? '<span class="sq-arrow">→</span>' : '') + '</div>'
  ).join('');
}

function closeNationalView() {
  document.getElementById('national-view').classList.add('hidden');
  if (currentPlayer) document.getElementById('player-panel').classList.remove('hidden');
  activeMode = 'player';
}

// ============================================================
// TIMELINE SCRUBBER
// ============================================================
const yearSlider = document.getElementById('year-slider');
const yearDisplay = document.getElementById('year-display');
yearSlider.addEventListener('input', () => {
  currentYear = parseInt(yearSlider.value);
  yearDisplay.textContent = currentYear;
  if (activeMode === 'club' && currentClub) renderClubSquad(currentClub, currentYear);
});

// ============================================================
// COUNTRY BUTTONS
// ============================================================
function goToCountry(country) {
  globe.controls().autoRotate = false;
  const c = COUNTRY_CENTERS[country];
  if (c) {
    currentCountry = country;
    globe.pointOfView({ lat: c.lat, lng: c.lng, altitude: 0.5 }, 1500);
    setTimeout(() => enterCountryMode(country, c.lat, c.lng), 1600);
  }
}

// ============================================================
// BREADCRUMB
// ============================================================
function showBreadcrumb(text) {
  const bc = document.getElementById('breadcrumb');
  document.getElementById('bc-text').textContent = text;
  bc.classList.remove('hidden');
}

// ============================================================
// TIMELINE
// ============================================================
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
    if (i < player.career.length - 1) {
      const conn = document.createElement('div'); conn.className = 'timeline-connector'; tl.appendChild(conn);
    }
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

// ============================================================
// BOOT
// ============================================================
initGlobe();
