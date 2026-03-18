// ============================================================
// PITCHMAP — Data Layer
// Players, Clubs, Countries, National Teams
// ============================================================

// ---- CLUBS ----
const CLUBS = {
  'Arsenal': {
    name: 'Arsenal', city: 'London', country: 'England', lat: 51.555, lng: -0.108,
    color: '#EF0107', founded: 1886, league: 'Premier League', badge: 'AFC',
    history: 'Founded in 1886 in Woolwich, Arsenal became the first London club in the Football League First Division. Under Arsène Wenger they became "The Invincibles" — going a full 49-game league run unbeaten in 2003-04.',
    titles: ['Premier League × 13', 'FA Cup × 14', 'European Fairs Cup × 1'],
    owner: 'Stan Kroenke (KSE) — American billionaire sports mogul',
    stadiumName: 'Emirates Stadium', capacity: 60704,
    squad: {
      2022: [
        { name: 'Bukayo Saka', position: 'Winger', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Gabriel Martinelli', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Gabriel Jesus', position: 'Striker', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Thomas Partey', position: 'Midfielder', flag: '🇬🇭', nationality: 'Ghanaian' },
      ],
      2023: [
        { name: 'Bukayo Saka', position: 'Winger', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Declan Rice', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Kai Havertz', position: 'Forward', flag: '🇩🇪', nationality: 'German' },
        { name: 'Gabriel Magalhães', position: 'Defender', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2024: [
        { name: 'Bukayo Saka', position: 'Winger', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Declan Rice', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Leandro Trossard', position: 'Forward', flag: '🇧🇪', nationality: 'Belgian' },
        { name: 'Ben White', position: 'Defender', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
      ]
    }
  },
  'Manchester City': {
    name: 'Manchester City', city: 'Manchester', country: 'England', lat: 53.483, lng: -2.200,
    color: '#6CABDD', founded: 1880, league: 'Premier League', badge: 'MCFC',
    history: 'Founded as St Mark\'s Church in 1880. Rose to global dominance under Sheikh Mansour\'s Abu Dhabi United Group ownership from 2008, becoming the richest club in the world. Pep Guardiola transformed them into arguably the greatest team in English football history.',
    titles: ['Premier League × 9', 'FA Cup × 7', 'Champions League × 1', 'Club World Cup × 1'],
    owner: 'Sheikh Mansour bin Zayed Al Nahyan — Abu Dhabi United Group',
    stadiumName: 'Etihad Stadium', capacity: 53400,
    squad: {
      2022: [
        { name: 'Kevin De Bruyne', position: 'Midfielder', flag: '🇧🇪', nationality: 'Belgian' },
        { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Phil Foden', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Bernardo Silva', position: 'Midfielder', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
      ],
      2023: [
        { name: 'Kevin De Bruyne', position: 'Midfielder', flag: '🇧🇪', nationality: 'Belgian' },
        { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Phil Foden', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Jack Grealish', position: 'Winger', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
      ],
      2024: [
        { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Phil Foden', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Bernardo Silva', position: 'Midfielder', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Matheus Nunes', position: 'Midfielder', flag: '🇵🇹', nationality: 'Portuguese' },
      ]
    }
  },
  'Barcelona': {
    name: 'Barcelona', city: 'Barcelona', country: 'Spain', lat: 41.381, lng: 2.123,
    color: '#A50044', founded: 1899, league: 'La Liga', badge: 'FCB',
    history: 'More than a club — Més que un club. Founded in 1899 by Swiss businessman Joan Gamper, Barcelona became the symbol of Catalan identity. The Cruyff era, the Dream Team, the Tiki-Taka years of Pep Guardiola, and the Messi dynasty define one of sport\'s greatest institutions.',
    titles: ['La Liga × 27', 'Champions League × 5', 'Copa del Rey × 31', 'Club World Cup × 3'],
    owner: 'FC Barcelona — member-owned club (163,000 socios)',
    stadiumName: 'Spotify Camp Nou', capacity: 99354,
    squad: {
      2022: [
        { name: 'Robert Lewandowski', position: 'Striker', flag: '🇵🇱', nationality: 'Polish' },
        { name: 'Pedri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Gavi', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Ousmane Dembélé', position: 'Winger', flag: '🇫🇷', nationality: 'French' },
        { name: 'Frenkie de Jong', position: 'Midfielder', flag: '🇳🇱', nationality: 'Dutch' },
      ],
      2023: [
        { name: 'Robert Lewandowski', position: 'Striker', flag: '🇵🇱', nationality: 'Polish' },
        { name: 'Pedri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Lamine Yamal', position: 'Winger', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Gavi', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Fermín López', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
      ],
      2024: [
        { name: 'Robert Lewandowski', position: 'Striker', flag: '🇵🇱', nationality: 'Polish' },
        { name: 'Lamine Yamal', position: 'Winger', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Raphinha', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Pedri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Dani Olmo', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
      ]
    }
  },
  'Real Madrid': {
    name: 'Real Madrid', city: 'Madrid', country: 'Spain', lat: 40.453, lng: -3.689,
    color: '#FEBE10', founded: 1902, league: 'La Liga', badge: 'RMA',
    history: 'The most successful club in Champions League history with 15 European Cups. Founded in 1902, Real Madrid\'s "Galácticos" policy and relentless pursuit of world stars has made them the most powerful club brand on earth. Bernabéu nights are a footballing religion.',
    titles: ['La Liga × 36', 'Champions League × 15', 'Copa del Rey × 20', 'Club World Cup × 8'],
    owner: 'Real Madrid CF — member-owned club (93,000 socios)',
    stadiumName: 'Santiago Bernabéu', capacity: 81044,
    squad: {
      2022: [
        { name: 'Karim Benzema', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Luka Modrić', position: 'Midfielder', flag: '🇭🇷', nationality: 'Croatian' },
        { name: 'Toni Kroos', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Casemiro', position: 'Midfielder', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Vinícius Jr', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2023: [
        { name: 'Jude Bellingham', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Vinícius Jr', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Luka Modrić', position: 'Midfielder', flag: '🇭🇷', nationality: 'Croatian' },
        { name: 'Toni Kroos', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Rodrygo', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2024: [
        { name: 'Kylian Mbappé', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Jude Bellingham', position: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Vinícius Jr', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Luka Modrić', position: 'Midfielder', flag: '🇭🇷', nationality: 'Croatian' },
        { name: 'Aurélien Tchouaméni', position: 'Midfielder', flag: '🇫🇷', nationality: 'French' },
      ]
    }
  },
  'AC Milan': {
    name: 'AC Milan', city: 'Milan', country: 'Italy', lat: 45.478, lng: 9.124,
    color: '#FB090B', founded: 1899, league: 'Serie A', badge: 'ACM',
    history: 'Il Diavolo — The Devil. Founded in 1899 by English expatriates, AC Milan won seven European Cups and defined an era of Italian football dominance in the 1980s and 1990s. The Arrigo Sacchi teams and Silvio Berlusconi ownership created one of the world\'s greatest club empires.',
    titles: ['Serie A × 19', 'Champions League × 7', 'Coppa Italia × 5', 'Club World Cup × 2'],
    owner: 'RedBird Capital Partners (US private equity) — acquired 2022 for €1.2 billion',
    stadiumName: 'San Siro', capacity: 80018,
    squad: {
      2022: [
        { name: 'Zlatan Ibrahimović', position: 'Striker', flag: '🇸🇪', nationality: 'Swedish' },
        { name: 'Rafael Leão', position: 'Winger', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Théo Hernández', position: 'Defender', flag: '🇫🇷', nationality: 'French' },
        { name: 'Sandro Tonali', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Brahim Díaz', position: 'Midfielder', flag: '🇲🇦', nationality: 'Moroccan' },
      ],
      2023: [
        { name: 'Rafael Leão', position: 'Winger', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Olivier Giroud', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Théo Hernández', position: 'Defender', flag: '🇫🇷', nationality: 'French' },
        { name: 'Fikayo Tomori', position: 'Defender', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', nationality: 'English' },
        { name: 'Yunus Musah', position: 'Midfielder', flag: '🇺🇸', nationality: 'American' },
      ],
      2024: [
        { name: 'Rafael Leão', position: 'Winger', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Álvaro Morata', position: 'Striker', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Christian Pulisic', position: 'Midfielder', flag: '🇺🇸', nationality: 'American' },
        { name: 'Théo Hernández', position: 'Defender', flag: '🇫🇷', nationality: 'French' },
        { name: 'Tijjani Reijnders', position: 'Midfielder', flag: '🇳🇱', nationality: 'Dutch' },
      ]
    }
  },
  'PSG': {
    name: 'Paris Saint-Germain', city: 'Paris', country: 'France', lat: 48.841, lng: 2.253,
    color: '#004170', founded: 1970, league: 'Ligue 1', badge: 'PSG',
    history: 'Paris Saint-Germain were a mid-table club until Qatar Sports Investments acquired them in 2011 for €70 million. What followed was a transformation unprecedented in football: Ibrahimovic, Beckham, Neymar (€222M), Mbappé — Paris became the most talked-about club on the planet.',
    titles: ['Ligue 1 × 12', 'Coupe de France × 15', 'Champions League × 0 (3× finalist)'],
    owner: 'Qatar Sports Investments (QSI) — State of Qatar sovereign wealth',
    stadiumName: 'Parc des Princes', capacity: 47929,
    squad: {
      2022: [
        { name: 'Kylian Mbappé', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Neymar', position: 'Forward', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Lionel Messi', position: 'Forward', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Marco Verratti', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Marquinhos', position: 'Defender', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2023: [
        { name: 'Kylian Mbappé', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Neymar', position: 'Forward', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Ousmane Dembélé', position: 'Winger', flag: '🇫🇷', nationality: 'French' },
        { name: 'Marco Asensio', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Marquinhos', position: 'Defender', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2024: [
        { name: 'Bradley Barcola', position: 'Winger', flag: '🇫🇷', nationality: 'French' },
        { name: 'Ousmane Dembélé', position: 'Winger', flag: '🇫🇷', nationality: 'French' },
        { name: 'Fabian Ruiz', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Marquinhos', position: 'Defender', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Gonçalo Ramos', position: 'Striker', flag: '🇵🇹', nationality: 'Portuguese' },
      ]
    }
  }
};

// ---- COUNTRY CLUB MARKERS ----
const COUNTRY_CLUBS = {
  'England': [
    { name: 'Arsenal', lat: 51.555, lng: -0.108, color: '#EF0107' },
    { name: 'Manchester City', lat: 53.483, lng: -2.200, color: '#6CABDD' },
    { name: 'Manchester Utd', lat: 53.463, lng: -2.292, color: '#DA291C' },
    { name: 'Liverpool', lat: 53.431, lng: -2.961, color: '#C8102E' },
    { name: 'Chelsea', lat: 51.482, lng: -0.191, color: '#034694' },
    { name: 'Tottenham', lat: 51.604, lng: -0.066, color: '#132257' },
    { name: 'Newcastle', lat: 54.975, lng: -1.622, color: '#241F20' },
    { name: 'Aston Villa', lat: 52.509, lng: -1.885, color: '#95BFE5' },
    { name: 'West Ham', lat: 51.538, lng: 0.017, color: '#7A263A' },
    { name: 'Brighton', lat: 50.862, lng: -0.083, color: '#0057B8' },
  ],
  'Spain': [
    { name: 'Real Madrid', lat: 40.453, lng: -3.689, color: '#FEBE10' },
    { name: 'Barcelona', lat: 41.381, lng: 2.123, color: '#A50044' },
    { name: 'Atlético Madrid', lat: 40.436, lng: -3.600, color: '#CB3524' },
    { name: 'Sevilla', lat: 37.384, lng: -5.970, color: '#D4021D' },
    { name: 'Real Sociedad', lat: 43.301, lng: -1.974, color: '#0067B1' },
    { name: 'Villarreal', lat: 39.944, lng: -0.103, color: '#FFE000' },
    { name: 'Athletic Bilbao', lat: 43.264, lng: -2.949, color: '#EF2523' },
    { name: 'Valencia', lat: 39.475, lng: -0.358, color: '#F7A800' },
  ],
  'Italy': [
    { name: 'AC Milan', lat: 45.478, lng: 9.124, color: '#FB090B' },
    { name: 'Inter Milan', lat: 45.478, lng: 9.124, color: '#010E80' },
    { name: 'Juventus', lat: 45.109, lng: 7.641, color: '#000000' },
    { name: 'Napoli', lat: 40.828, lng: 14.193, color: '#12A0C3' },
    { name: 'AS Roma', lat: 41.934, lng: 12.455, color: '#8E1F2F' },
    { name: 'Lazio', lat: 41.934, lng: 12.455, color: '#87D8F7' },
    { name: 'Fiorentina', lat: 43.780, lng: 11.282, color: '#4C2684' },
    { name: 'Atalanta', lat: 45.709, lng: 9.680, color: '#1E6AB5' },
  ],
  'France': [
    { name: 'PSG', lat: 48.841, lng: 2.253, color: '#004170' },
    { name: 'Marseille', lat: 43.270, lng: 5.396, color: '#2CBFEF' },
    { name: 'Lyon', lat: 45.765, lng: 4.834, color: '#C8102E' },
    { name: 'Monaco', lat: 43.728, lng: 7.415, color: '#E51937' },
    { name: 'Lille', lat: 50.612, lng: 3.130, color: '#E31C23' },
    { name: 'Lens', lat: 50.434, lng: 2.833, color: '#E31C23' },
  ],
  'Germany': [
    { name: 'Bayern Munich', lat: 48.219, lng: 11.625, color: '#DC052D' },
    { name: 'Borussia Dortmund', lat: 51.493, lng: 7.452, color: '#FDE100' },
    { name: 'RB Leipzig', lat: 51.346, lng: 12.349, color: '#DD0741' },
    { name: 'Bayer Leverkusen', lat: 51.038, lng: 7.002, color: '#E32221' },
    { name: 'Eintracht Frankfurt', lat: 50.069, lng: 8.645, color: '#E1000F' },
    { name: 'Wolfsburg', lat: 52.432, lng: 10.804, color: '#64B42D' },
  ]
};

// ---- NATIONAL TEAMS ----
const NATIONAL_TEAMS = {
  'Portugal': {
    name: 'Portugal', flag: '🇵🇹', color: '#006600',
    founded: 1914, confederation: 'UEFA',
    tournaments: [
      { year: 2016, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Cristiano Ronaldo (3 goals)' },
      { year: 2019, competition: 'UEFA Nations League', result: '🏆 Champions', topScorer: 'Cristiano Ronaldo (3 goals)' },
      { year: 2006, competition: 'FIFA World Cup', result: '🥉 3rd Place', topScorer: 'Pauleta / Ronaldo' },
      { year: 2022, competition: 'FIFA World Cup', result: 'Quarter-finals', topScorer: 'Cristiano Ronaldo (3 goals)' },
    ],
    allTimeGreats: ['Cristiano Ronaldo', 'Luís Figo', 'Rui Costa', 'Eusébio', 'Paulo Futre'],
    currentSquad: [
      { name: 'Cristiano Ronaldo', position: 'Striker', flag: '🇵🇹', caps: 212, goals: 130 },
      { name: 'Bruno Fernandes', position: 'Midfielder', flag: '🇵🇹', caps: 75, goals: 22 },
      { name: 'Bernardo Silva', position: 'Midfielder', flag: '🇵🇹', caps: 90, goals: 12 },
      { name: 'Rafael Leão', position: 'Winger', flag: '🇵🇹', caps: 32, goals: 8 },
      { name: 'Rúben Dias', position: 'Defender', flag: '🇵🇹', caps: 68, goals: 2 },
    ]
  },
  'Argentina': {
    name: 'Argentina', flag: '🇦🇷', color: '#74ACDF',
    founded: 1893, confederation: 'CONMEBOL',
    tournaments: [
      { year: 2022, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Lionel Messi (7 goals, Golden Ball)' },
      { year: 2021, competition: 'Copa América', result: '🏆 Champions', topScorer: 'Lionel Messi (4 goals)' },
      { year: 2019, competition: 'Copa América', result: '🥉 3rd Place', topScorer: 'Lionel Messi (2 goals)' },
      { year: 1986, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Diego Maradona (5 goals)' },
    ],
    allTimeGreats: ['Lionel Messi', 'Diego Maradona', 'Gabriel Batistuta', 'Hernán Crespo', 'Javier Zanetti'],
    currentSquad: [
      { name: 'Lionel Messi', position: 'Forward', flag: '🇦🇷', caps: 187, goals: 109 },
      { name: 'Lautaro Martínez', position: 'Striker', flag: '🇦🇷', caps: 62, goals: 29 },
      { name: 'Rodrigo De Paul', position: 'Midfielder', flag: '🇦🇷', caps: 72, goals: 9 },
      { name: 'Ángel Di María', position: 'Winger', flag: '🇦🇷', caps: 145, goals: 31 },
      { name: 'Lisandro Martínez', position: 'Defender', flag: '🇦🇷', caps: 32, goals: 2 },
    ]
  },
  'Brazil': {
    name: 'Brazil', flag: '🇧🇷', color: '#009C3B',
    founded: 1914, confederation: 'CONMEBOL',
    tournaments: [
      { year: 2002, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Ronaldo (8 goals)' },
      { year: 2019, competition: 'Copa América', result: '🏆 Champions', topScorer: 'Gabriel Jesus (3 goals)' },
      { year: 1994, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Romário (5 goals)' },
      { year: 2022, competition: 'FIFA World Cup', result: 'Quarter-finals', topScorer: 'Neymar / Richarlison' },
    ],
    allTimeGreats: ['Pelé', 'Ronaldo', 'Ronaldinho', 'Zico', 'Romário', 'Roberto Carlos'],
    currentSquad: [
      { name: 'Vinicius Jr', position: 'Winger', flag: '🇧🇷', caps: 48, goals: 14 },
      { name: 'Rodrygo', position: 'Winger', flag: '🇧🇷', caps: 38, goals: 11 },
      { name: 'Casemiro', position: 'Midfielder', flag: '🇧🇷', caps: 83, goals: 7 },
      { name: 'Raphinha', position: 'Winger', flag: '🇧🇷', caps: 46, goals: 12 },
      { name: 'Marquinhos', position: 'Defender', flag: '🇧🇷', caps: 92, goals: 9 },
    ]
  },
  'Sweden': {
    name: 'Sweden', flag: '🇸🇪', color: '#006AA7',
    founded: 1904, confederation: 'UEFA',
    tournaments: [
      { year: 1994, competition: 'FIFA World Cup', result: '🥉 3rd Place', topScorer: 'Kennet Andersson (5 goals)' },
      { year: 2018, competition: 'FIFA World Cup', result: 'Quarter-finals', topScorer: 'Viktor Claesson' },
      { year: 1958, competition: 'FIFA World Cup', result: '🥈 Runners-up', topScorer: 'Gunnar Gren' },
    ],
    allTimeGreats: ['Zlatan Ibrahimović', 'Henrik Larsson', 'Gunnar Nordahl', 'Anders Svensson', 'Freddie Ljungberg'],
    currentSquad: [
      { name: 'Dejan Kulusevski', position: 'Winger', flag: '🇸🇪', caps: 44, goals: 9 },
      { name: 'Emil Forsberg', position: 'Midfielder', flag: '🇸🇪', caps: 110, goals: 29 },
      { name: 'Alexander Isak', position: 'Striker', flag: '🇸🇪', caps: 36, goals: 13 },
      { name: 'Victor Nilsson Lindelöf', position: 'Defender', flag: '🇸🇪', caps: 96, goals: 1 },
      { name: 'Robin Quaison', position: 'Midfielder', flag: '🇸🇪', caps: 44, goals: 12 },
    ]
  },
  'Norway': {
    name: 'Norway', flag: '🇳🇴', color: '#EF2B2D',
    founded: 1902, confederation: 'UEFA',
    tournaments: [
      { year: 1998, competition: 'FIFA World Cup', result: 'Round of 16', topScorer: 'Tore André Flo (2 goals)' },
    ],
    allTimeGreats: ['Erling Haaland', 'Ole Gunnar Solskjær', 'John Arne Riise', 'Henning Berg', 'Tore André Flo'],
    currentSquad: [
      { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', caps: 38, goals: 31 },
      { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', caps: 76, goals: 14 },
      { name: 'Alexander Sørloth', position: 'Striker', flag: '🇳🇴', caps: 52, goals: 17 },
      { name: 'Sander Berge', position: 'Midfielder', flag: '🇳🇴', caps: 50, goals: 5 },
      { name: 'Mohamed Elyounoussi', position: 'Winger', flag: '🇳🇴', caps: 68, goals: 17 },
    ]
  },
  'France': {
    name: 'France', flag: '🇫🇷', color: '#002395',
    founded: 1919, confederation: 'UEFA',
    tournaments: [
      { year: 2018, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Kylian Mbappé (4 goals)' },
      { year: 2022, competition: 'FIFA World Cup', result: '🥈 Runners-up', topScorer: 'Kylian Mbappé (8 goals, Golden Boot)' },
      { year: 2000, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Thierry Henry / Sylvain Wiltord' },
      { year: 1998, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Thierry Henry / Zidane' },
    ],
    allTimeGreats: ['Thierry Henry', 'Zinedine Zidane', 'Kylian Mbappé', 'Just Fontaine', 'Michel Platini'],
    currentSquad: [
      { name: 'Kylian Mbappé', position: 'Striker', flag: '🇫🇷', caps: 91, goals: 48 },
      { name: 'Antoine Griezmann', position: 'Forward', flag: '🇫🇷', caps: 131, goals: 44 },
      { name: 'Aurélien Tchouaméni', position: 'Midfielder', flag: '🇫🇷', caps: 34, goals: 2 },
      { name: 'William Saliba', position: 'Defender', flag: '🇫🇷', caps: 18, goals: 1 },
      { name: 'Ousmane Dembélé', position: 'Winger', flag: '🇫🇷', caps: 57, goals: 9 },
    ]
  }
};

// ---- NATIONAL TEAM LOOKUP (player → team) ----
const PLAYER_NATIONAL_TEAMS = {
  'Zlatan Ibrahimović': 'Sweden',
  'Cristiano Ronaldo': 'Portugal',
  'Lionel Messi': 'Argentina',
  'Ronaldinho': 'Brazil',
  'Thierry Henry': 'France',
  'Neymar': 'Brazil',
  'Erling Haaland': 'Norway',
};
