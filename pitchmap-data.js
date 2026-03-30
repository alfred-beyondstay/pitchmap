// ============================================================
// PITCHMAP — Data Layer v5
// 20+ Players, Full Club Rich Data, National Teams
// ============================================================

// ---- CLUBS ----
const CLUBS = {
  'Arsenal': {
    name: 'Arsenal', city: 'London', country: 'England', lat: 51.555, lng: -0.108,
    color: '#EF0107', founded: 1886, league: 'Premier League', badge: 'AFC',
    history: 'Founded in 1886 in Woolwich, Arsenal became the first London club in the Football League First Division. Under Arsène Wenger they became "The Invincibles" — going a full 49-game league run unbeaten in 2003-04. No other English club has matched it since.',
    titles: ['Premier League × 13', 'FA Cup × 14', 'European Fairs Cup × 1'],
    owner: 'Stan Kroenke (KSE) — American billionaire sports mogul',
    stadiumName: 'Emirates Stadium', capacity: 60704,
    squad: {
      2022: [
        { name: 'Bukayo Saka', position: 'Winger', flag: '🏴', nationality: 'English' },
        { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Gabriel Martinelli', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Gabriel Jesus', position: 'Striker', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Thomas Partey', position: 'Midfielder', flag: '🇬🇭', nationality: 'Ghanaian' },
      ],
      2023: [
        { name: 'Bukayo Saka', position: 'Winger', flag: '🏴', nationality: 'English' },
        { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Declan Rice', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Kai Havertz', position: 'Forward', flag: '🇩🇪', nationality: 'German' },
        { name: 'Gabriel Magalhães', position: 'Defender', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2024: [
        { name: 'Bukayo Saka', position: 'Winger', flag: '🏴', nationality: 'English' },
        { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Declan Rice', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Leandro Trossard', position: 'Forward', flag: '🇧🇪', nationality: 'Belgian' },
        { name: 'Ben White', position: 'Defender', flag: '🏴', nationality: 'English' },
      ]
    }
  },
  'Manchester City': {
    name: 'Manchester City', city: 'Manchester', country: 'England', lat: 53.483, lng: -2.200,
    color: '#6CABDD', founded: 1880, league: 'Premier League', badge: 'MCFC',
    history: 'Founded as St Mark\'s Church in 1880. Rose to global dominance under Sheikh Mansour\'s Abu Dhabi United Group ownership from 2008. Pep Guardiola\'s era produced arguably the greatest team in English football history — the 2022-23 Treble side.',
    titles: ['Premier League × 9', 'FA Cup × 7', 'Champions League × 1', 'Club World Cup × 1'],
    owner: 'Sheikh Mansour bin Zayed Al Nahyan — Abu Dhabi United Group',
    stadiumName: 'Etihad Stadium', capacity: 53400,
    squad: {
      2022: [
        { name: 'Kevin De Bruyne', position: 'Midfielder', flag: '🇧🇪', nationality: 'Belgian' },
        { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Phil Foden', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Bernardo Silva', position: 'Midfielder', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
      ],
      2023: [
        { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Kevin De Bruyne', position: 'Midfielder', flag: '🇧🇪', nationality: 'Belgian' },
        { name: 'Phil Foden', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Jack Grealish', position: 'Winger', flag: '🏴', nationality: 'English' },
      ],
      2024: [
        { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', nationality: 'Norwegian' },
        { name: 'Phil Foden', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Bernardo Silva', position: 'Midfielder', flag: '🇵🇹', nationality: 'Portuguese' },
        { name: 'Matheus Nunes', position: 'Midfielder', flag: '🇵🇹', nationality: 'Portuguese' },
      ]
    }
  },
  'Barcelona': {
    name: 'Barcelona', city: 'Barcelona', country: 'Spain', lat: 41.381, lng: 2.123,
    color: '#A50044', founded: 1899, league: 'La Liga', badge: 'FCB',
    history: 'Més que un club — More than a club. Founded in 1899 by Swiss businessman Joan Gamper, Barcelona became the symbol of Catalan identity. The Cruyff era, the Dream Team, Guardiola\'s Tiki-Taka dynasty, and the Messi years define football\'s most storied institution.',
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
        { name: 'Vinícius Jr', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Casemiro', position: 'Midfielder', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2023: [
        { name: 'Jude Bellingham', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Vinícius Jr', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
        { name: 'Luka Modrić', position: 'Midfielder', flag: '🇭🇷', nationality: 'Croatian' },
        { name: 'Toni Kroos', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Rodrygo', position: 'Winger', flag: '🇧🇷', nationality: 'Brazilian' },
      ],
      2024: [
        { name: 'Kylian Mbappé', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Jude Bellingham', position: 'Midfielder', flag: '🏴', nationality: 'English' },
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
        { name: 'Fikayo Tomori', position: 'Defender', flag: '🏴', nationality: 'English' },
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
    history: 'Paris Saint-Germain were a mid-table club until Qatar Sports Investments acquired them in 2011. What followed was unprecedented: Ibrahimovic, Beckham, Neymar (€222M), Mbappé — Paris became the most talked-about club on the planet. Still hunting that elusive Champions League.',
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
  },
  'Bayern Munich': {
    name: 'Bayern Munich', city: 'Munich', country: 'Germany', lat: 48.219, lng: 11.625,
    color: '#DC052D', founded: 1900, league: 'Bundesliga', badge: 'FCB',
    history: 'Germany\'s most successful club. Founded in 1900, Bayern have won 32 Bundesliga titles. Franz Beckenbauer, Gerd Müller, Oliver Kahn — legends built the dynasty. Under Pep Guardiola and then Hansi Flick (2020 Sextuple), they became Europe\'s most dominant side.',
    titles: ['Bundesliga × 32', 'Champions League × 6', 'DFB-Pokal × 20', 'Club World Cup × 2'],
    owner: 'FC Bayern München AG — member-owned, with Allianz, Adidas, Audi stakes',
    stadiumName: 'Allianz Arena', capacity: 75024,
    squad: {
      2022: [
        { name: 'Robert Lewandowski', position: 'Striker', flag: '🇵🇱', nationality: 'Polish' },
        { name: 'Thomas Müller', position: 'Attacker', flag: '🇩🇪', nationality: 'German' },
        { name: 'Leroy Sané', position: 'Winger', flag: '🇩🇪', nationality: 'German' },
        { name: 'Joshua Kimmich', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Manuel Neuer', position: 'Goalkeeper', flag: '🇩🇪', nationality: 'German' },
      ],
      2023: [
        { name: 'Harry Kane', position: 'Striker', flag: '🏴', nationality: 'English' },
        { name: 'Leroy Sané', position: 'Winger', flag: '🇩🇪', nationality: 'German' },
        { name: 'Jamal Musiala', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Joshua Kimmich', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Thomas Müller', position: 'Attacker', flag: '🇩🇪', nationality: 'German' },
      ],
      2024: [
        { name: 'Harry Kane', position: 'Striker', flag: '🏴', nationality: 'English' },
        { name: 'Jamal Musiala', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
        { name: 'Leroy Sané', position: 'Winger', flag: '🇩🇪', nationality: 'German' },
        { name: 'Serge Gnabry', position: 'Winger', flag: '🇩🇪', nationality: 'German' },
        { name: 'Joshua Kimmich', position: 'Midfielder', flag: '🇩🇪', nationality: 'German' },
      ]
    }
  },
  'Juventus': {
    name: 'Juventus', city: 'Turin', country: 'Italy', lat: 45.109, lng: 7.641,
    color: '#000000', founded: 1897, league: 'Serie A', badge: 'JUV',
    history: 'La Vecchia Signora — The Old Lady. Italy\'s most successful club with 36 Serie A titles. Two stripped during Calciopoli 2006. Nine consecutive titles 2012-2020. One of the few clubs powerful enough to attract Ronaldo mid-career.',
    titles: ['Serie A × 36 (2 stripped)', 'Champions League × 2', 'Coppa Italia × 14'],
    owner: 'Exor N.V. (Agnelli family, Fiat empire) — Giovanni Agnelli founded Fiat in the same city',
    stadiumName: 'Allianz Stadium', capacity: 41507,
    squad: {
      2022: [
        { name: 'Paulo Dybala', position: 'Forward', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Álvaro Morata', position: 'Striker', flag: '🇪🇸', nationality: 'Spanish' },
        { name: 'Federico Chiesa', position: 'Winger', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Manuel Locatelli', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Matthijs de Ligt', position: 'Defender', flag: '🇳🇱', nationality: 'Dutch' },
      ],
      2023: [
        { name: 'Dušan Vlahović', position: 'Striker', flag: '🇷🇸', nationality: 'Serbian' },
        { name: 'Federico Chiesa', position: 'Winger', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Paul Pogba', position: 'Midfielder', flag: '🇫🇷', nationality: 'French' },
        { name: 'Ángel Di María', position: 'Winger', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Adrien Rabiot', position: 'Midfielder', flag: '🇫🇷', nationality: 'French' },
      ],
      2024: [
        { name: 'Dušan Vlahović', position: 'Striker', flag: '🇷🇸', nationality: 'Serbian' },
        { name: 'Timothy Weah', position: 'Winger', flag: '🇺🇸', nationality: 'American' },
        { name: 'Weston McKennie', position: 'Midfielder', flag: '🇺🇸', nationality: 'American' },
        { name: 'Manuel Locatelli', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Gleison Bremer', position: 'Defender', flag: '🇧🇷', nationality: 'Brazilian' },
      ]
    }
  },
  'Inter Milan': {
    name: 'Inter Milan', city: 'Milan', country: 'Italy', lat: 45.480, lng: 9.126,
    color: '#010E80', founded: 1908, league: 'Serie A', badge: 'INT',
    history: 'Il Biscione. Founded in 1908 by a breakaway from AC Milan. Won the Treble under José Mourinho in 2010 — still the only Italian club to achieve it. Antonio Conte revived the dynasty in 2021 after 11 years without a Scudetto.',
    titles: ['Serie A × 19', 'Champions League × 3', 'Coppa Italia × 9', 'Club World Cup × 2'],
    owner: 'Oaktree Capital Management (US) — acquired from Zhang family in 2024',
    stadiumName: 'San Siro', capacity: 80018,
    squad: {
      2022: [
        { name: 'Lautaro Martínez', position: 'Striker', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Edin Džeko', position: 'Striker', flag: '🇧🇦', nationality: 'Bosnian' },
        { name: 'Marcelo Brozović', position: 'Midfielder', flag: '🇭🇷', nationality: 'Croatian' },
        { name: 'Nicolò Barella', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Milan Škriniar', position: 'Defender', flag: '🇸🇰', nationality: 'Slovak' },
      ],
      2023: [
        { name: 'Lautaro Martínez', position: 'Striker', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Marcus Thuram', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Nicolò Barella', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Hakan Çalhanoğlu', position: 'Midfielder', flag: '🇹🇷', nationality: 'Turkish' },
        { name: 'Alessandro Bastoni', position: 'Defender', flag: '🇮🇹', nationality: 'Italian' },
      ],
      2024: [
        { name: 'Lautaro Martínez', position: 'Striker', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Marcus Thuram', position: 'Striker', flag: '🇫🇷', nationality: 'French' },
        { name: 'Hakan Çalhanoğlu', position: 'Midfielder', flag: '🇹🇷', nationality: 'Turkish' },
        { name: 'Nicolò Barella', position: 'Midfielder', flag: '🇮🇹', nationality: 'Italian' },
        { name: 'Federico Dimarco', position: 'Defender', flag: '🇮🇹', nationality: 'Italian' },
      ]
    }
  },
  'Chelsea': {
    name: 'Chelsea', city: 'London', country: 'England', lat: 51.482, lng: -0.191,
    color: '#034694', founded: 1905, league: 'Premier League', badge: 'CFC',
    history: 'The club Roman Abramovich turned into a European powerhouse with €2 billion in transfer spending. Back-to-back UCL wins under Tuchel in 2021. Sold under UK sanctions in 2022 for £4.25bn — football\'s most expensive sale ever. The Boehly era: chaotic but never boring.',
    titles: ['Premier League × 6', 'Champions League × 2', 'FA Cup × 8', 'Europa League × 2'],
    owner: 'BlueCo (Todd Boehly / Clearlake Capital) — acquired 2022 for £4.25bn',
    stadiumName: 'Stamford Bridge', capacity: 40343,
    squad: {
      2022: [
        { name: 'Mason Mount', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Raheem Sterling', position: 'Winger', flag: '🏴', nationality: 'English' },
        { name: 'Kalidou Koulibaly', position: 'Defender', flag: '🇸🇳', nationality: 'Senegalese' },
        { name: 'Reece James', position: 'Defender', flag: '🏴', nationality: 'English' },
        { name: 'Christian Pulisic', position: 'Midfielder', flag: '🇺🇸', nationality: 'American' },
      ],
      2023: [
        { name: 'Cole Palmer', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Nicolas Jackson', position: 'Striker', flag: '🇸🇳', nationality: 'Senegalese' },
        { name: 'Moisés Caicedo', position: 'Midfielder', flag: '🇪🇨', nationality: 'Ecuadorian' },
        { name: 'Enzo Fernández', position: 'Midfielder', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Reece James', position: 'Defender', flag: '🏴', nationality: 'English' },
      ],
      2024: [
        { name: 'Cole Palmer', position: 'Midfielder', flag: '🏴', nationality: 'English' },
        { name: 'Nicolas Jackson', position: 'Striker', flag: '🇸🇳', nationality: 'Senegalese' },
        { name: 'Moisés Caicedo', position: 'Midfielder', flag: '🇪🇨', nationality: 'Ecuadorian' },
        { name: 'Enzo Fernández', position: 'Midfielder', flag: '🇦🇷', nationality: 'Argentine' },
        { name: 'Pedro Neto', position: 'Winger', flag: '🇵🇹', nationality: 'Portuguese' },
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
    { name: 'Inter Milan', lat: 45.480, lng: 9.126, color: '#010E80' },
    { name: 'Juventus', lat: 45.109, lng: 7.641, color: '#000000' },
    { name: 'Napoli', lat: 40.828, lng: 14.193, color: '#12A0C3' },
    { name: 'AS Roma', lat: 41.934, lng: 12.455, color: '#8E1F2F' },
    { name: 'Lazio', lat: 41.936, lng: 12.457, color: '#87D8F7' },
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
    name: 'Portugal', flag: '🇵🇹', color: '#006600', founded: 1914, confederation: 'UEFA',
    tournaments: [
      { year: 2016, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Cristiano Ronaldo (3 goals)' },
      { year: 2019, competition: 'UEFA Nations League', result: '🏆 Champions', topScorer: 'Cristiano Ronaldo (3 goals)' },
      { year: 2006, competition: 'FIFA World Cup', result: '🥉 3rd Place', topScorer: 'Pauleta / Ronaldo' },
      { year: 2022, competition: 'FIFA World Cup', result: 'Quarter-finals', topScorer: 'Cristiano Ronaldo (3 goals)' },
    ],
    allTimeGreats: ['Cristiano Ronaldo', 'Luís Figo', 'Rui Costa', 'Eusébio', 'Paulo Futre'],
    currentSquad: [
      { name: 'Cristiano Ronaldo', position: 'Striker', flag: '🇵🇹', caps: 215, goals: 133 },
      { name: 'Bruno Fernandes', position: 'Midfielder', flag: '🇵🇹', caps: 78, goals: 23 },
      { name: 'Bernardo Silva', position: 'Midfielder', flag: '🇵🇹', caps: 93, goals: 13 },
      { name: 'Rafael Leão', position: 'Winger', flag: '🇵🇹', caps: 35, goals: 9 },
      { name: 'Rúben Dias', position: 'Defender', flag: '🇵🇹', caps: 71, goals: 2 },
    ]
  },
  'Argentina': {
    name: 'Argentina', flag: '🇦🇷', color: '#74ACDF', founded: 1893, confederation: 'CONMEBOL',
    tournaments: [
      { year: 2022, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Lionel Messi (7 goals, Golden Ball)' },
      { year: 2021, competition: 'Copa América', result: '🏆 Champions', topScorer: 'Lionel Messi (4 goals)' },
      { year: 1986, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Diego Maradona (5 goals)' },
      { year: 1978, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Mario Kempes (6 goals)' },
    ],
    allTimeGreats: ['Lionel Messi', 'Diego Maradona', 'Gabriel Batistuta', 'Hernán Crespo', 'Javier Zanetti'],
    currentSquad: [
      { name: 'Lionel Messi', position: 'Forward', flag: '🇦🇷', caps: 192, goals: 112 },
      { name: 'Lautaro Martínez', position: 'Striker', flag: '🇦🇷', caps: 65, goals: 30 },
      { name: 'Rodrigo De Paul', position: 'Midfielder', flag: '🇦🇷', caps: 75, goals: 9 },
      { name: 'Ángel Di María', position: 'Winger', flag: '🇦🇷', caps: 145, goals: 31 },
      { name: 'Lisandro Martínez', position: 'Defender', flag: '🇦🇷', caps: 35, goals: 2 },
    ]
  },
  'Brazil': {
    name: 'Brazil', flag: '🇧🇷', color: '#009C3B', founded: 1914, confederation: 'CONMEBOL',
    tournaments: [
      { year: 2002, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Ronaldo (8 goals)' },
      { year: 2019, competition: 'Copa América', result: '🏆 Champions', topScorer: 'Gabriel Jesus (3 goals)' },
      { year: 1994, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Romário (5 goals)' },
      { year: 1970, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Jairzinho (7 goals)' },
    ],
    allTimeGreats: ['Pelé', 'Ronaldo', 'Ronaldinho', 'Zico', 'Romário', 'Roberto Carlos'],
    currentSquad: [
      { name: 'Vinicius Jr', position: 'Winger', flag: '🇧🇷', caps: 51, goals: 16 },
      { name: 'Rodrygo', position: 'Winger', flag: '🇧🇷', caps: 40, goals: 12 },
      { name: 'Raphinha', position: 'Winger', flag: '🇧🇷', caps: 49, goals: 14 },
      { name: 'Casemiro', position: 'Midfielder', flag: '🇧🇷', caps: 85, goals: 7 },
      { name: 'Marquinhos', position: 'Defender', flag: '🇧🇷', caps: 94, goals: 9 },
    ]
  },
  'Sweden': {
    name: 'Sweden', flag: '🇸🇪', color: '#006AA7', founded: 1904, confederation: 'UEFA',
    tournaments: [
      { year: 1994, competition: 'FIFA World Cup', result: '🥉 3rd Place', topScorer: 'Kennet Andersson (5 goals)' },
      { year: 2018, competition: 'FIFA World Cup', result: 'Quarter-finals', topScorer: 'Viktor Claesson' },
      { year: 1958, competition: 'FIFA World Cup', result: '🥈 Runners-up', topScorer: 'Gunnar Gren' },
    ],
    allTimeGreats: ['Zlatan Ibrahimović', 'Henrik Larsson', 'Gunnar Nordahl', 'Anders Svensson', 'Freddie Ljungberg'],
    currentSquad: [
      { name: 'Dejan Kulusevski', position: 'Winger', flag: '🇸🇪', caps: 47, goals: 10 },
      { name: 'Emil Forsberg', position: 'Midfielder', flag: '🇸🇪', caps: 113, goals: 29 },
      { name: 'Alexander Isak', position: 'Striker', flag: '🇸🇪', caps: 39, goals: 15 },
      { name: 'Victor Nilsson Lindelöf', position: 'Defender', flag: '🇸🇪', caps: 99, goals: 1 },
      { name: 'Zlatan Ibrahimović', position: 'Striker (ret.)', flag: '🇸🇪', caps: 122, goals: 62 },
    ]
  },
  'Norway': {
    name: 'Norway', flag: '🇳🇴', color: '#EF2B2D', founded: 1902, confederation: 'UEFA',
    tournaments: [
      { year: 1998, competition: 'FIFA World Cup', result: 'Round of 16', topScorer: 'Tore André Flo (2 goals)' },
    ],
    allTimeGreats: ['Erling Haaland', 'Ole Gunnar Solskjær', 'John Arne Riise', 'Henning Berg', 'Tore André Flo'],
    currentSquad: [
      { name: 'Erling Haaland', position: 'Striker', flag: '🇳🇴', caps: 41, goals: 34 },
      { name: 'Martin Ødegaard', position: 'Midfielder', flag: '🇳🇴', caps: 79, goals: 15 },
      { name: 'Alexander Sørloth', position: 'Striker', flag: '🇳🇴', caps: 55, goals: 18 },
      { name: 'Sander Berge', position: 'Midfielder', flag: '🇳🇴', caps: 53, goals: 5 },
      { name: 'Mohamed Elyounoussi', position: 'Winger', flag: '🇳🇴', caps: 71, goals: 17 },
    ]
  },
  'France': {
    name: 'France', flag: '🇫🇷', color: '#002395', founded: 1919, confederation: 'UEFA',
    tournaments: [
      { year: 2018, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Kylian Mbappé (4 goals)' },
      { year: 2022, competition: 'FIFA World Cup', result: '🥈 Runners-up', topScorer: 'Kylian Mbappé (8 goals, Golden Boot)' },
      { year: 2000, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Thierry Henry / Sylvain Wiltord' },
      { year: 1998, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Thierry Henry / Zidane' },
    ],
    allTimeGreats: ['Thierry Henry', 'Zinedine Zidane', 'Kylian Mbappé', 'Just Fontaine', 'Michel Platini'],
    currentSquad: [
      { name: 'Kylian Mbappé', position: 'Striker', flag: '🇫🇷', caps: 94, goals: 51 },
      { name: 'Antoine Griezmann', position: 'Forward', flag: '🇫🇷', caps: 134, goals: 44 },
      { name: 'Aurélien Tchouaméni', position: 'Midfielder', flag: '🇫🇷', caps: 36, goals: 2 },
      { name: 'William Saliba', position: 'Defender', flag: '🇫🇷', caps: 22, goals: 1 },
      { name: 'Ousmane Dembélé', position: 'Winger', flag: '🇫🇷', caps: 60, goals: 10 },
    ]
  },
  'Germany': {
    name: 'Germany', flag: '🇩🇪', color: '#000000', founded: 1900, confederation: 'UEFA',
    tournaments: [
      { year: 2014, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Thomas Müller (5 goals)' },
      { year: 1990, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Rudi Völler (3 goals)' },
      { year: 1996, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Oliver Bierhoff (3 goals)' },
      { year: 2024, competition: 'UEFA Euro', result: 'Quarter-finals (host)', topScorer: 'Niclas Füllkrug (3 goals)' },
    ],
    allTimeGreats: ['Franz Beckenbauer', 'Gerd Müller', 'Lothar Matthäus', 'Oliver Kahn', 'Michael Ballack'],
    currentSquad: [
      { name: 'Jamal Musiala', position: 'Midfielder', flag: '🇩🇪', caps: 42, goals: 11 },
      { name: 'Florian Wirtz', position: 'Midfielder', flag: '🇩🇪', caps: 29, goals: 8 },
      { name: 'Joshua Kimmich', position: 'Midfielder', flag: '🇩🇪', caps: 88, goals: 7 },
      { name: 'Leroy Sané', position: 'Winger', flag: '🇩🇪', caps: 65, goals: 15 },
      { name: 'Manuel Neuer', position: 'Goalkeeper', flag: '🇩🇪', caps: 124, goals: 0 },
    ]
  },
  'Spain': {
    name: 'Spain', flag: '🇪🇸', color: '#AA151B', founded: 1913, confederation: 'UEFA',
    tournaments: [
      { year: 2010, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'David Villa (5 goals, Golden Boot)' },
      { year: 2008, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'David Villa (4 goals)' },
      { year: 2012, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Fernando Torres (3 goals)' },
      { year: 2024, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Dani Olmo (3 goals)' },
    ],
    allTimeGreats: ['Xavi', 'Andrés Iniesta', 'Sergio Ramos', 'David Villa', 'Raúl'],
    currentSquad: [
      { name: 'Lamine Yamal', position: 'Winger', flag: '🇪🇸', caps: 18, goals: 7 },
      { name: 'Pedri', position: 'Midfielder', flag: '🇪🇸', caps: 41, goals: 4 },
      { name: 'Rodri', position: 'Midfielder', flag: '🇪🇸', caps: 61, goals: 6 },
      { name: 'Álvaro Morata', position: 'Striker', flag: '🇪🇸', caps: 82, goals: 37 },
      { name: 'Dani Carvajal', position: 'Defender', flag: '🇪🇸', caps: 50, goals: 3 },
    ]
  },
  'Italy': {
    name: 'Italy', flag: '🇮🇹', color: '#0066CC', founded: 1898, confederation: 'UEFA',
    tournaments: [
      { year: 2021, competition: 'UEFA Euro', result: '🏆 Champions', topScorer: 'Lorenzo Insigne / Ciro Immobile' },
      { year: 2006, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Luca Toni (2 goals)' },
      { year: 1982, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Paolo Rossi (6 goals)' },
      { year: 2024, competition: 'UEFA Euro', result: 'Round of 16 (holders)', topScorer: 'Mattia Zaccagni (2 goals)' },
    ],
    allTimeGreats: ['Paolo Maldini', 'Roberto Baggio', 'Gianluigi Buffon', 'Andrea Pirlo', 'Alessandro Del Piero'],
    currentSquad: [
      { name: 'Gianluigi Donnarumma', position: 'Goalkeeper', flag: '🇮🇹', caps: 68, goals: 0 },
      { name: 'Federico Chiesa', position: 'Winger', flag: '🇮🇹', caps: 55, goals: 18 },
      { name: 'Nicolo Barella', position: 'Midfielder', flag: '🇮🇹', caps: 72, goals: 9 },
      { name: 'Ciro Immobile', position: 'Striker', flag: '🇮🇹', caps: 62, goals: 17 },
      { name: 'Alessandro Bastoni', position: 'Defender', flag: '🇮🇹', caps: 38, goals: 2 },
    ]
  },

  'England': {
    name: 'England', flag: '🏴', color: '#CF081F', founded: 1863, confederation: 'UEFA',
    tournaments: [
      { year: 1966, competition: 'FIFA World Cup', result: '🏆 Champions', topScorer: 'Geoff Hurst (4 goals)' },
      { year: 2021, competition: 'UEFA Euro', result: '🥈 Runners-up', topScorer: 'Harry Kane (4 goals)' },
      { year: 2024, competition: 'UEFA Euro', result: '🥈 Runners-up', topScorer: 'Harry Kane (3 goals)' },
      { year: 2022, competition: 'FIFA World Cup', result: 'Quarter-finals', topScorer: 'Bukayo Saka (3 goals)' },
    ],
    allTimeGreats: ['Bobby Moore', 'Gary Lineker', 'Michael Owen', 'Wayne Rooney', 'David Beckham'],
    currentSquad: [
      { name: 'Harry Kane', position: 'Striker', flag: '🏴', caps: 98, goals: 68 },
      { name: 'Bukayo Saka', position: 'Winger', flag: '🏴', caps: 49, goals: 15 },
      { name: 'Jude Bellingham', position: 'Midfielder', flag: '🏴', caps: 42, goals: 10 },
      { name: 'Phil Foden', position: 'Midfielder', flag: '🏴', caps: 36, goals: 8 },
      { name: 'Declan Rice', position: 'Midfielder', flag: '🏴', caps: 55, goals: 4 },
    ]
  }
};

// ---- PLAYER NATIONAL TEAM LOOKUP ----
const PLAYER_NATIONAL_TEAMS = {
  'Zlatan Ibrahimović': 'Sweden',
  'Cristiano Ronaldo': 'Portugal',
  'Lionel Messi': 'Argentina',
  'Ronaldinho': 'Brazil',
  'Thierry Henry': 'France',
  'Neymar': 'Brazil',
  'Erling Haaland': 'Norway',
  'Kylian Mbappé': 'France',
  'Kevin De Bruyne': 'Belgium',
  'Luka Modrić': 'Croatia',
  'Karim Benzema': 'France',
  'Robert Lewandowski': 'Poland',
  'Ronaldo Nazário': 'Brazil',
  'Zinedine Zidane': 'France',
  'Ronaldo (R9)': 'Brazil',
  'Andrés Iniesta': 'Spain',
  'Wayne Rooney': 'England',
  'Didier Drogba': 'Ivory Coast',
  'Samuel Eto\'o': 'Cameroon',
  'Gianluigi Buffon': 'Italy',
  'Franck Ribéry': 'France',
  'Arjen Robben': 'Netherlands',
  'Xavi': 'Spain',
  'Harry Kane': 'England',
  'Paul Pogba': 'France',
  'Raheem Sterling': 'England',
  'Mohamed Salah': 'Egypt',
  'Toni Kroos': 'Germany',
  'Sergio Ramos': 'Spain',
  'Andrea Pirlo': 'Italy',
  'Sadio Mané': 'Senegal',
};

// ---- PLAYERS ----
const PLAYERS = {

  // ============================================================
  'Zlatan Ibrahimović': {
    name: 'Zlatan Ibrahimović', nationality: 'Swedish', flag: '🇸🇪',
    born: 'Malmö, Sweden', dob: '1981-10-03', position: 'Striker',
    career: [
      { club: 'Malmö FF', country: 'Sweden', city: 'Malmö', flag: '🇸🇪', lat: 55.605, lng: 13.003, from: 1999, to: 2001, apps: 47, goals: 18, assists: 12,
        funFact: 'Zlatan refused to carry veterans\' bags as a 17-year-old. Even then, no one argued.',
        drama: 'Ajax scouts paid €8.7M — a huge fee for an unknown Swedish teenager.',
        highlight: '16 league goals in his final season, earning Malmö a European spot.',
        teammates: ['Henrik Larsson', 'Niclas Alexandersson', 'Anders Svensson', 'Hakan Mild'] },
      { club: 'Ajax', country: 'Netherlands', city: 'Amsterdam', flag: '🇳🇱', lat: 52.314, lng: 4.942, from: 2001, to: 2004, apps: 110, goals: 48, assists: 22,
        funFact: '"I don\'t do auditions." Ronald Koeman asked for a trial. Zlatan refused. He got the contract anyway.',
        drama: '€16M transfer — one of the biggest Dutch exports of that era.',
        highlight: '3 consecutive Eredivisie titles. The world noticed.',
        teammates: ['Rafael van der Vaart', 'Wesley Sneijder', 'Maxwell', 'Cristian Chivu'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2004, to: 2006, apps: 92, goals: 26, assists: 18,
        funFact: 'Juventus stripped of 2 titles during his time — the most dramatic backdrop of his career.',
        drama: 'Juve relegated for match-fixing. Zlatan walked out on a free transfer to Inter.',
        highlight: 'Partnership with Del Piero. Titles later stripped.',
        teammates: ['Alessandro Del Piero', 'Pavel Nedvěd', 'Patrick Vieira', 'Gianluigi Buffon'] },
      { club: 'Inter Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2006, to: 2009, apps: 117, goals: 66, assists: 34,
        funFact: '3 consecutive Serie A titles — his first undisputed league championships.',
        drama: 'Barcelona traded Eto\'o + €46M for him. Zlatan was literally exchanged for another player.',
        highlight: 'Top scorer for Inter all 3 seasons. Dominant.',
        teammates: ['Patrick Vieira', 'Adriano', 'Dejan Stanković', 'Javier Zanetti'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2009, to: 2010, apps: 46, goals: 22, assists: 10,
        funFact: 'Called Guardiola "a coward" in his autobiography. The feud is a football legend.',
        drama: 'Arrived €46M. Left after 1 year for €24M. Guardiola wanted total possession control.',
        highlight: 'Won La Liga. 22 goals despite the philosophical clash.',
        teammates: ['Lionel Messi', 'Xavi', 'Andrés Iniesta', 'Samuel Eto\'o'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2010, to: 2012, apps: 85, goals: 56, assists: 27,
        funFact: 'Led Milan to first Scudetto in 7 years. Voted Serie A best foreign player both seasons.',
        drama: 'PSG offered €20M/year. The biggest French football transfer of that era.',
        highlight: 'Serie A Golden Boot. 28 league goals in 2011-12.',
        teammates: ['Ronaldinho', 'Alexandre Pato', 'Robinho', 'Clarence Seedorf'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2012, to: 2016, apps: 180, goals: 156, assists: 60,
        funFact: 'Bought a Paris restaurant. Named it after himself. Called Paris his city. Paris agreed.',
        drama: 'Left on a free at 34. Most expected a retirement. He didn\'t.',
        highlight: '4 Ligue 1 titles. 38 goals in 2015-16. Immortalised in France.',
        teammates: ['Edinson Cavani', 'Angel Di Maria', 'Thiago Silva', 'Marco Verratti'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.463, lng: -2.292, from: 2016, to: 2018, apps: 53, goals: 29, assists: 14,
        funFact: 'Bicycle kick on debut vs Galatasaray pre-season. ACL rupture. Comeback. Europa League final winner. All on a free transfer.',
        drama: 'Critics said too old at 34. He won a European trophy.',
        highlight: 'Europa League winner. The comeback nobody expected.',
        teammates: ['Paul Pogba', 'Henrikh Mkhitaryan', 'Wayne Rooney', 'Marcus Rashford'] },
      { club: 'LA Galaxy', country: 'USA', city: 'Los Angeles', flag: '🇺🇸', lat: 33.864, lng: -118.261, from: 2018, to: 2019, apps: 58, goals: 53, assists: 18,
        funFact: '"I have come here to save soccer." He scored on debut from 40 yards — a lob over the keeper. MLS stood up.',
        drama: 'Media expected a farewell tour. He led MLS in goals and assists combined.',
        highlight: 'That halfway line lob vs LAFC. The goal that broke the internet.',
        teammates: ['Giovani dos Santos', 'Romain Alessandrini', 'Jonathan dos Santos', 'Daniel Steres'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2020, to: 2023, apps: 88, goals: 49, assists: 15,
        funFact: 'Won Serie A at 40 — one of the oldest title winners in top European football history.',
        drama: 'Retired at 41. Immediately became Hammarby co-owner. Even retirement is dramatic.',
        highlight: 'Serie A Champion 2021-22 at age 40. Full circle.',
        teammates: ['Olivier Giroud', 'Rafael Leão', 'Brahim Díaz', 'Théo Hernández'] },
    ]
  },

  // ============================================================
  'Cristiano Ronaldo': {
    name: 'Cristiano Ronaldo', nationality: 'Portuguese', flag: '🇵🇹',
    born: 'Funchal, Madeira', dob: '1985-02-05', position: 'Winger / Striker',
    career: [
      { club: 'Sporting CP', country: 'Portugal', city: 'Lisbon', flag: '🇵🇹', lat: 38.762, lng: -9.161, from: 2001, to: 2003, apps: 31, goals: 5, assists: 8,
        funFact: 'So impressive in a pre-season friendly against Man United that United players begged Ferguson to sign him on the spot.',
        drama: '£12.24M — then a record fee for a teenager in English football.',
        highlight: 'First 1980s-born player to play for Sporting\'s first team.',
        teammates: ['Ricardo Quaresma', 'Nuno Valente', 'João Pinto', 'Rui Jorge'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.463, lng: -2.292, from: 2003, to: 2009, apps: 292, goals: 118, assists: 67,
        funFact: 'Won the Ballon d\'Or in 2008 and completely reinvented what a modern winger could achieve.',
        drama: '2006 World Cup wink vs England. Police escort to training. Still won three PL titles.',
        highlight: 'Premier League, Champions League, FA Cup. Left for £80M — world record.',
        teammates: ['Wayne Rooney', 'Ryan Giggs', 'Paul Scholes', 'Carlos Tévez'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2009, to: 2018, apps: 438, goals: 450, assists: 131,
        funFact: '450 goals in 438 games. The greatest goalscoring run in football history — full stop.',
        drama: 'The Messi vs Ronaldo rivalry defined a golden era. Left having broken every Real Madrid record.',
        highlight: 'All-time Real Madrid top scorer. 3 consecutive Champions League titles.',
        teammates: ['Karim Benzema', 'Gareth Bale', 'Sergio Ramos', 'Luka Modrić'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2018, to: 2021, apps: 134, goals: 101, assists: 22,
        funFact: '101 goals in 134 games at age 33-36. Everyone said he was past his best.',
        drama: 'Joined for €100M. Left after Juve\'s UCL exit to Porto. Contract paid off early.',
        highlight: 'Hat-trick vs Atlético overturning a 2-0 deficit. His most extraordinary UCL night.',
        teammates: ['Paulo Dybala', 'Giorgio Chiellini', 'Aaron Ramsey', 'Matthijs de Ligt'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.463, lng: -2.292, from: 2021, to: 2022, apps: 54, goals: 27, assists: 3,
        funFact: 'Two goals on debut. Standing ovation. Then the bombshell Piers Morgan interview.',
        drama: '"I feel betrayed." Contract terminated. Most dramatic exit in modern football.',
        highlight: '27 goals despite the chaos around him.',
        teammates: ['Bruno Fernandes', 'Marcus Rashford', 'Raphaël Varane', 'Harry Maguire'] },
      { club: 'Al Nassr', country: 'Saudi Arabia', city: 'Riyadh', flag: '🇸🇦', lat: 24.774, lng: 46.738, from: 2023, to: null, apps: 92, goals: 78, assists: 20,
        funFact: '€200M per year reportedly — the highest-paid footballer in human history.',
        drama: 'Many called it retirement. He continued breaking individual records without blinking.',
        highlight: 'First player to score 900 career goals. Then 900 became a floor.',
        teammates: ['Sadio Mané', 'Marcelo Brozović', 'Aymeric Laporte', 'Alex Telles'] },
    ]
  },

  // ============================================================
  'Lionel Messi': {
    name: 'Lionel Messi', nationality: 'Argentine', flag: '🇦🇷',
    born: 'Rosario, Argentina', dob: '1987-06-24', position: 'Forward',
    career: [
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2004, to: 2021, apps: 778, goals: 672, assists: 305,
        funFact: 'Barca agreed to pay for his growth hormone treatment when he was 13 — literally invested in the man he became.',
        drama: 'The 2020 burofax resignation letter. He stayed. Then left in tears in 2021 — Barca couldn\'t afford his pay cut.',
        highlight: '10 La Ligas, 4 Champions Leagues, 7 Ballons d\'Or. The greatest club career in history.',
        teammates: ['Xavi', 'Andrés Iniesta', 'Ronaldinho', 'Luis Suárez'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2021, to: 2023, apps: 75, goals: 32, assists: 35,
        funFact: 'A million people reportedly turned out near Le Bourget airport the day he landed in Paris.',
        drama: 'Booed by PSG fans in 2022. The most shocking crowd reaction in modern football.',
        highlight: 'Won Ligue 1 both seasons. Won the World Cup in Qatar 2022 while at PSG.',
        teammates: ['Neymar', 'Kylian Mbappé', 'Sergio Ramos', 'Marco Verratti'] },
      { club: 'Inter Miami', country: 'USA', city: 'Fort Lauderdale', flag: '🇺🇸', lat: 25.958, lng: -80.239, from: 2023, to: null, apps: 63, goals: 52, assists: 20,
        funFact: 'Apple TV+ subscriptions jumped 65% when he signed. Free kick winner on his very first appearance.',
        drama: 'Saudi Arabia offered $1.5 billion. He chose Miami and took a pay cut. Football over money.',
        highlight: 'Leagues Cup champion on debut. 8th Ballon d\'Or. His career refuses to wind down.',
        teammates: ['Sergio Busquets', 'Jordi Alba', 'Luis Suárez', 'DeAndre Yedlin'] },
    ]
  },

  // ============================================================
  'Erling Haaland': {
    name: 'Erling Haaland', nationality: 'Norwegian', flag: '🇳🇴',
    born: 'Leeds, England', dob: '2000-07-21', position: 'Striker',
    career: [
      { club: 'Molde', country: 'Norway', city: 'Molde', flag: '🇳🇴', lat: 62.737, lng: 7.159, from: 2017, to: 2019, apps: 50, goals: 20, assists: 8,
        funFact: 'Ole Gunnar Solskjær was his manager at Molde. He later tried to sign him for Manchester United.',
        drama: 'Multiple Bundesliga clubs circled. RB Salzburg were the smartest about his development path.',
        highlight: 'Norwegian debut at 16. 20 goals in 50 games. The beginning.',
        teammates: ['Ola Kamara', 'Martin Linnes', 'Fredrik Aursnes', 'Ørjan Nyland'] },
      { club: 'RB Salzburg', country: 'Austria', city: 'Salzburg', flag: '🇦🇹', lat: 47.822, lng: 13.049, from: 2019, to: 2020, apps: 27, goals: 29, assists: 8,
        funFact: 'UCL hat-trick on his Champions League debut at 19. The entire continent dropped its jaw.',
        drama: 'Every giant wanted him. Borussia Dortmund paid €20M. Bargain of the decade.',
        highlight: '29 goals in 27 games. UCL hat-trick on debut. Nothing was ever the same.',
        teammates: ['Takumi Minamino', 'Patson Daka', 'Dominik Szoboszlai', 'Andreas Ulmer'] },
      { club: 'Borussia Dortmund', country: 'Germany', city: 'Dortmund', flag: '🇩🇪', lat: 51.493, lng: 7.452, from: 2020, to: 2022, apps: 89, goals: 86, assists: 23,
        funFact: '86 goals in 89 games. No Bundesliga player had ever maintained that ratio.',
        drama: '€60M release clause activated. Man City were first and fastest to move.',
        highlight: 'Bundesliga Player of the Year. UCL top scorer two seasons running.',
        teammates: ['Marco Reus', 'Jude Bellingham', 'Jadon Sancho', 'Thomas Meunier'] },
      { club: 'Manchester City', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.483, lng: -2.200, from: 2022, to: null, apps: 113, goals: 103, assists: 23,
        funFact: '52 goals in his debut Premier League season — the new all-time single-season record.',
        drama: 'Real Madrid rumours every transfer window. He keeps scoring. They keep waiting.',
        highlight: 'Treble 2022-23. PL Golden Boot. First to 100 City goals in fewest games.',
        teammates: ['Kevin De Bruyne', 'Phil Foden', 'Bernardo Silva', 'Rodri'] },
    ]
  },

  // ============================================================
  'Ronaldinho': {
    name: 'Ronaldinho', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Porto Alegre, Brazil', dob: '1980-03-21', position: 'Attacking Midfielder',
    career: [
      { club: 'Grêmio', country: 'Brazil', city: 'Porto Alegre', flag: '🇧🇷', lat: -30.066, lng: -51.228, from: 1998, to: 2001, apps: 47, goals: 23, assists: 21,
        funFact: 'Opponents would actually stop and watch his tricks — then complain to the referee it was unsportsmanlike.',
        drama: 'PSG won him for €5M over multiple European clubs. One of football\'s great early bargains.',
        highlight: 'Copa Sul-Minas as a teenager. The world hadn\'t seen him yet.',
        teammates: ['Anderson Luis', 'Leandro', 'Jardel', 'Émerson'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2001, to: 2003, apps: 77, goals: 25, assists: 30,
        funFact: 'Arrested at a Brazilian airport for a fake passport in 2002. PSG paid bail. He went straight to training.',
        drama: 'His mother chose Barcelona\'s sunshine over Manchester United\'s rain. Ferguson never forgave the weather.',
        highlight: 'Elevated to global superstar status. The smile went worldwide.',
        teammates: ['Nicolas Anelka', 'Mikel Arteta', 'Jay-Jay Okocha', 'Gabriel Heinze'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2003, to: 2008, apps: 207, goals: 94, assists: 91,
        funFact: 'Real Madrid fans gave him a standing ovation at the Bernabéu in 2005. They simply do not do that for opponents.',
        drama: 'His nightlife eventually cost him his place. Guardiola told him directly: time to go.',
        highlight: '2 La Ligas, UCL winner, Ballon d\'Or. The most joyful footballer of his generation.',
        teammates: ['Lionel Messi', 'Samuel Eto\'o', 'Deco', 'Xavi'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2008, to: 2011, apps: 96, goals: 30, assists: 28,
        funFact: 'He and Kaká were roommates — two former World Players of the Year. Same dressing room.',
        drama: 'Milan waited three years for the Barcelona Ronaldinho to arrive. He never quite came back.',
        highlight: 'Moments of pure genius that no one else could replicate. Magic in flashes.',
        teammates: ['Kaká', 'Alexandre Pato', 'Andrea Pirlo', 'Zlatan Ibrahimović'] },
      { club: 'Atlético Mineiro', country: 'Brazil', city: 'Belo Horizonte', flag: '🇧🇷', lat: -19.865, lng: -43.971, from: 2012, to: 2014, apps: 74, goals: 30, assists: 22,
        funFact: 'Won the Copa Libertadores 2013 — Atletico\'s first in 44 years. His most emotional trophy.',
        drama: 'His last real trophy at the highest level. Arguably the most meaningful.',
        highlight: 'Copa Libertadores winner. Recopa Sudamericana. The full circle.',
        teammates: ['Bernard', 'Diego Tardelli', 'Jô', 'Réver'] },
    ]
  },

  // ============================================================
  'Thierry Henry': {
    name: 'Thierry Henry', nationality: 'French', flag: '🇫🇷',
    born: 'Les Ulis, France', dob: '1977-08-17', position: 'Striker',
    career: [
      { club: 'Monaco', country: 'France', city: 'Monaco', flag: '🇲🇨', lat: 43.728, lng: 7.415, from: 1994, to: 1999, apps: 105, goals: 28, assists: 35,
        funFact: 'Wenger spotted a natural striker inside a winger\'s body and waited for his moment to act.',
        drama: 'Juventus played him as a left winger. He was miserable. Wenger called, paid £10.5M, transformed him.',
        highlight: 'Ligue 1 with Monaco 1997. Won the World Cup with France 1998 as a teenager.',
        teammates: ['David Trezeguet', 'Emmanuel Petit', 'Victor Ikpeba', 'Ali Benarbia'] },
      { club: 'Arsenal', country: 'England', city: 'London', flag: '🏴', lat: 51.555, lng: -0.108, from: 1999, to: 2007, apps: 369, goals: 228, assists: 103,
        funFact: 'Arsenal\'s all-time record scorer. The Invincibles — 49 unbeaten games — centre of an era.',
        drama: 'When he left for €25M, Highbury closed and a generation wept.',
        highlight: '2 Premier League titles. 2 Golden Boots. The Invincible season 2003-04. A statue.',
        teammates: ['Robert Pires', 'Patrick Vieira', 'Dennis Bergkamp', 'Ashley Cole'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2007, to: 2010, apps: 121, goals: 49, assists: 53,
        funFact: 'Won the UCL, La Liga, Copa del Rey, Club World Cup and European Super Cup all in one season.',
        drama: 'The handball vs Ireland — one of football\'s most controversial moments. He later admitted it.',
        highlight: 'Treble winner 2008-09. Part of the greatest Barcelona side ever assembled.',
        teammates: ['Lionel Messi', 'Samuel Eto\'o', 'Xavi', 'Andrés Iniesta'] },
      { club: 'NY Red Bulls', country: 'USA', city: 'New York', flag: '🇺🇸', lat: 40.737, lng: -74.151, from: 2010, to: 2014, apps: 135, goals: 52, assists: 57,
        funFact: 'Teammates said training with him completely changed how they understood football.',
        drama: 'January 2012 Arsenal loan. Scored. Pointed to the sky. Old Trafford would never know that feeling.',
        highlight: 'Made the Red Bulls a genuine club. 52 goals, 57 assists in 135 games.',
        teammates: ['Tim Cahill', 'Rafael Márquez', 'Jan Gunnar Solbakken', 'Roy Miller'] },
    ]
  },

  // ============================================================
  'Neymar': {
    name: 'Neymar', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Mogi das Cruzes, Brazil', dob: '1992-02-05', position: 'Forward',
    career: [
      { club: 'Santos', country: 'Brazil', city: 'Santos', flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2009, to: 2013, apps: 225, goals: 136, assists: 64,
        funFact: 'Won Copa Libertadores with Santos before turning 20. The boy from Brazil.',
        drama: 'Real Madrid offered €40M. Santos refused. Barcelona paid €57M. Madrid were furious for years.',
        highlight: 'Libertadores champion. South American Player of Year twice. A national hero.',
        teammates: ['Robinho', 'Ganso', 'Borges', 'Elano'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2013, to: 2017, apps: 186, goals: 105, assists: 76,
        funFact: 'The MSN — Messi, Suárez, Neymar — scored 122 goals combined in 2014-15. History had no comparison.',
        drama: 'PSG triggered the €222M release clause. The most expensive transfer in history shocked the sport.',
        highlight: 'Treble 2014-15. The MSN era. Arguably the greatest attacking trio ever assembled.',
        teammates: ['Lionel Messi', 'Luis Suárez', 'Xavi', 'Andrés Iniesta'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2017, to: 2023, apps: 173, goals: 118, assists: 77,
        funFact: '€222M — nearly double the previous world record. Banks had to independently verify the transaction.',
        drama: 'UCL Final 2020 lost to Bayern Munich. Years of near-misses. Injuries at the worst moments.',
        highlight: '5 Ligue 1 titles. UCL finalist. The most expensive footballer in history delivered at club level.',
        teammates: ['Kylian Mbappé', 'Edinson Cavani', 'Angel Di Maria', 'Marco Verratti'] },
      { club: 'Al Hilal', country: 'Saudi Arabia', city: 'Riyadh', flag: '🇸🇦', lat: 24.774, lng: 46.738, from: 2023, to: 2025, apps: 7, goals: 1, assists: 2,
        funFact: 'Signed for €90M/yr. Then tore his ACL in his 5th game and missed an entire season.',
        drama: 'Long injury rehab. Al Hilal won the Saudi title without him. Difficult chapter.',
        highlight: 'The salary set a benchmark. His return to Brazil was the real story.',
        teammates: ['Aleksandar Mitrović', 'Sergej Milinković-Savić', 'Rúben Neves', 'Kalidou Koulibaly'] },
      { club: 'Santos', country: 'Brazil', city: 'Santos', flag: '🇧🇷', lat: -23.966, lng: -46.333, from: 2025, to: null, apps: 12, goals: 4, assists: 5,
        funFact: 'Saudi Arabia had offered $1.5 billion over his career. He chose heart over money and came home.',
        drama: 'Santos were in Serie B. His contract helped them rebuild. Career came full circle.',
        highlight: 'The boy from Santos returned home. The story wrote itself.',
        teammates: ['Marcos Leonardo', 'Soteldo', 'Diego Pituca', 'João Basso'] },
    ]
  },

  // ============================================================
  'Kylian Mbappé': {
    name: 'Kylian Mbappé', nationality: 'French', flag: '🇫🇷',
    born: 'Paris, France', dob: '1998-12-20', position: 'Striker',
    career: [
      { club: 'Monaco', country: 'France', city: 'Monaco', flag: '🇲🇨', lat: 43.728, lng: 7.415, from: 2016, to: 2017, apps: 44, goals: 27, assists: 14,
        funFact: 'At 18 he led Monaco to their first league title in 17 years and UCL semi-final. Nobody expected either.',
        drama: 'Real Madrid offered €180M. PSG (homecity) made it personal and won the race.',
        highlight: 'Ligue 1 title at 18. UCL semi-final. The world\'s fastest emerging talent.',
        teammates: ['Radamel Falcao', 'Bernardo Silva', 'Tiémoué Bakayoko', 'Fabinho'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2017, to: 2024, apps: 308, goals: 256, assists: 108,
        funFact: 'Renewing his contract in 2022 reportedly cost PSG €630M total — more than his original transfer fee.',
        drama: 'Refused to renew again in 2024 and walked out on a free. PSG were furious. Football loved it.',
        highlight: '6 Ligue 1 titles. All-time PSG top scorer. The captain who left on his own terms.',
        teammates: ['Neymar', 'Lionel Messi', 'Marquinhos', 'Achraf Hakimi'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2024, to: null, apps: 38, goals: 22, assists: 9,
        funFact: 'His childhood dream. He had a Real Madrid poster on his bedroom wall as a kid.',
        drama: 'Difficult first season by his standards. Adapting to Ancelotti\'s system at the biggest club.',
        highlight: 'The journey continues. Bernabéu on his side.',
        teammates: ['Vinícius Jr', 'Jude Bellingham', 'Luka Modrić', 'Rodrygo'] },
    ]
  },

  // ============================================================
  'Kevin De Bruyne': {
    name: 'Kevin De Bruyne', nationality: 'Belgian', flag: '🇧🇪',
    born: 'Ghent, Belgium', dob: '1991-06-28', position: 'Midfielder',
    career: [
      { club: 'Genk', country: 'Belgium', city: 'Genk', flag: '🇧🇪', lat: 50.966, lng: 5.496, from: 2008, to: 2012, apps: 97, goals: 17, assists: 24,
        funFact: 'Won the Belgian Pro League title in his first senior season. The standard he set for himself from day one.',
        drama: 'Chelsea bought him for €7M. Then barely played him. Then sold him for €18M.',
        highlight: 'Belgian title 2010-11. The foundation of everything that followed.',
        teammates: ['Tore Andre Flo', 'Jelle Vossen', 'Bryan Rutten', 'Sandy Walsh'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2012, to: 2014, apps: 3, goals: 0, assists: 1,
        funFact: 'Loaned to Werder Bremen twice. Chelsea barely used him. One of football\'s most expensive mistakes.',
        drama: 'Sold to Wolfsburg for €18M. Three years later worth €76M. Mourinho\'s call will haunt Chelsea.',
        highlight: 'The awakening: Bundesliga Player of Year at Wolfsburg proved them all wrong.',
        teammates: ['Frank Lampard', 'John Terry', 'Eden Hazard', 'Fernando Torres'] },
      { club: 'Wolfsburg', country: 'Germany', city: 'Wolfsburg', flag: '🇩🇪', lat: 52.432, lng: 10.804, from: 2014, to: 2015, apps: 51, goals: 16, assists: 27,
        funFact: 'Bundesliga Player of the Year. 21 goals and assists combined in one Bundesliga season.',
        drama: 'Man City paid €76M — a record for a midfielder in 2015. Worth every cent.',
        highlight: 'Bundesliga Player of Year. The performances that forced City to break the bank.',
        teammates: ['Bas Dost', 'Nicklas Bendtner', 'Diego Benaglio', 'Ricardo Rodríguez'] },
      { club: 'Manchester City', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.483, lng: -2.200, from: 2015, to: null, apps: 380, goals: 98, assists: 174,
        funFact: 'Four PFA Players\' Player of the Year awards. No midfielder in Premier League history has dominated an era like this.',
        drama: 'Missed the 2023 UCL final through injury. Watched teammates lift the trophy.',
        highlight: 'Treble 2022-23. 6 Premier League titles. The finest midfielder of his generation.',
        teammates: ['Erling Haaland', 'Phil Foden', 'Bernardo Silva', 'Rodri'] },
    ]
  },

  // ============================================================
  'Luka Modrić': {
    name: 'Luka Modrić', nationality: 'Croatian', flag: '🇭🇷',
    born: 'Zadar, Croatia', dob: '1985-09-09', position: 'Midfielder',
    career: [
      { club: 'Dinamo Zagreb', country: 'Croatia', city: 'Zagreb', flag: '🇭🇷', lat: 45.800, lng: 16.004, from: 2003, to: 2008, apps: 124, goals: 23, assists: 31,
        funFact: 'Skinny, small. Multiple clubs said he\'d never make it. Dinamo believed. He proved everyone wrong.',
        drama: 'Tottenham paid £16.5M for a player many doubted. It looked like a gamble.',
        highlight: '3 Croatian league titles. A homegrown legend.',
        teammates: ['Eduardo da Silva', 'Dario Šimić', 'Ivica Olić', 'Niko Kranjčar'] },
      { club: 'Tottenham', country: 'England', city: 'London', flag: '🏴', lat: 51.604, lng: -0.066, from: 2008, to: 2012, apps: 160, goals: 17, assists: 44,
        funFact: '"He\'s too small and weak." A scout report on Modrić aged 17. He went on to win the Ballon d\'Or.',
        drama: 'Man City bid £40M rejected twice. Chelsea bid rejected. Real Madrid paid £30M and it changed everything.',
        highlight: 'PL assists record for a season. Made Spurs midfield sing.',
        teammates: ['Gareth Bale', 'Rafael van der Vaart', 'Vedran Ćorluka', 'Peter Crouch'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2012, to: null, apps: 530, goals: 42, assists: 108,
        funFact: 'Won Ballon d\'Or 2018 — ended the Messi/Ronaldo stranglehold after 10 consecutive years.',
        drama: 'At 37 he was still starting in UCL knockouts. Ancelotti trusted him over players 15 years younger.',
        highlight: '6 UCL titles. 4 La Ligas. Ballon d\'Or. The greatest midfielder of his generation.',
        teammates: ['Cristiano Ronaldo', 'Karim Benzema', 'Toni Kroos', 'Sergio Ramos'] },
    ]
  },

  // ============================================================
  'Karim Benzema': {
    name: 'Karim Benzema', nationality: 'French', flag: '🇫🇷',
    born: 'Lyon, France', dob: '1987-12-19', position: 'Striker',
    career: [
      { club: 'Lyon', country: 'France', city: 'Lyon', flag: '🇫🇷', lat: 45.765, lng: 4.834, from: 2004, to: 2009, apps: 148, goals: 66, assists: 41,
        funFact: 'Won 4 consecutive Ligue 1 titles and was named French Player of the Year at 21.',
        drama: '€35M to Real Madrid — then record outgoing fee for a French club.',
        highlight: '4 Ligue 1 titles. French championship era. The Lyon boy done good.',
        teammates: ['Sidney Govou', 'Juninho Pernambucano', 'Florent Malouda', 'Jérémy Toulalan'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2009, to: 2023, apps: 648, goals: 354, assists: 165,
        funFact: 'After Ronaldo left, Benzema scored 354 goals in 648 games and won the Ballon d\'Or at 34.',
        drama: 'For 5 years he was labelled Ronaldo\'s assistant. Then Ronaldo left. The mask came off.',
        highlight: '5 UCL titles. Ballon d\'Or 2022. 4 La Ligas. Real Madrid\'s greatest striker since Raúl.',
        teammates: ['Cristiano Ronaldo', 'Gareth Bale', 'Luka Modrić', 'Vinícius Jr'] },
      { club: 'Al Ittihad', country: 'Saudi Arabia', city: 'Jeddah', flag: '🇸🇦', lat: 21.491, lng: 39.186, from: 2023, to: null, apps: 30, goals: 14, assists: 6,
        funFact: 'First Ballon d\'Or winner to play in Saudi Arabia. Signed for €400M total package.',
        drama: 'Left Real Madrid after 14 years. The farewell brought grown men to tears.',
        highlight: 'Saudi Pro League champion 2023-24. Setting the standard in a new frontier.',
        teammates: ['N\'Golo Kanté', 'Fabinho', 'Jota', 'Ayman Yahya'] },
    ]
  },

  // ============================================================
  'Robert Lewandowski': {
    name: 'Robert Lewandowski', nationality: 'Polish', flag: '🇵🇱',
    born: 'Warsaw, Poland', dob: '1988-08-21', position: 'Striker',
    career: [
      { club: 'Lech Poznań', country: 'Poland', city: 'Poznań', flag: '🇵🇱', lat: 52.396, lng: 16.843, from: 2008, to: 2010, apps: 82, goals: 41, assists: 18,
        funFact: 'Relegated one season, promoted back up and won the Polish Ekstraklasa. Built on adversity.',
        drama: 'Borussia Dortmund signed him on a free. Critics thought he was too raw for the Bundesliga.',
        highlight: 'Polish Ekstraklasa title 2009-10. Top scorer. The launch pad.',
        teammates: ['Artjoms Rudnevs', 'Semir Štilić', 'Sławomir Peszko', 'Szymon Pawłowski'] },
      { club: 'Borussia Dortmund', country: 'Germany', city: 'Dortmund', flag: '🇩🇪', lat: 51.493, lng: 7.452, from: 2010, to: 2014, apps: 187, goals: 103, assists: 45,
        funFact: 'Won back-to-back Bundesliga titles alongside Jürgen Klopp. Became one of Europe\'s elite.',
        drama: 'Scored 4 goals in 4 minutes as a substitute vs Real Madrid UCL semi 2013 — greatest individual half in UCL history.',
        highlight: '4 goals in 4 minutes sub. UCL finalist. 2 Bundesliga titles.',
        teammates: ['Marco Reus', 'Mario Götze', 'Mats Hummels', 'Ilkay Gündogan'] },
      { club: 'Bayern Munich', country: 'Germany', city: 'Munich', flag: '🇩🇪', lat: 48.219, lng: 11.625, from: 2014, to: 2022, apps: 374, goals: 344, assists: 73,
        funFact: 'Scored 41 Bundesliga goals in 2020-21 — breaking Gerd Müller\'s 49-year-old record.',
        drama: 'Asked to leave after 8 years. Forced a move to Barcelona at 34. Nobody expected it to work.',
        highlight: 'Sextuple 2019-20. 344 goals. Broke Gerd Müller\'s sacred record.',
        teammates: ['Thomas Müller', 'Arjen Robben', 'Franck Ribéry', 'Manuel Neuer'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2022, to: null, apps: 100, goals: 72, assists: 14,
        funFact: 'At 34 he was the top scorer in La Liga twice. Age is just a number when you\'re this clinical.',
        drama: 'Financial chaos at Barca. His own contract restructured. He kept scoring anyway.',
        highlight: 'La Liga Pichichi 2022-23. 72 goals in 100 games. Peak efficiency at 35+.',
        teammates: ['Pedri', 'Gavi', 'Frenkie de Jong', 'Lamine Yamal'] },
    ]
  },

  // ============================================================
  'Wayne Rooney': {
    name: 'Wayne Rooney', nationality: 'English', flag: '🏴',
    born: 'Croxteth, Liverpool', dob: '1985-10-24', position: 'Forward',
    career: [
      { club: 'Everton', country: 'England', city: 'Liverpool', flag: '🏴', lat: 53.438, lng: -2.966, from: 2002, to: 2004, apps: 77, goals: 17, assists: 12,
        funFact: 'Scored against Arsenal at 16 to end their 30-game unbeaten run. That goal announced him to the world.',
        drama: '£25.6M to Man United — shockingly large fee for a 18-year-old in 2004.',
        highlight: 'That goal vs Arsenal. The nation sat up. The teenager was real.',
        teammates: ['Alan Stubbs', 'Duncan Ferguson', 'David Unsworth', 'Thomas Gravesen'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.463, lng: -2.292, from: 2004, to: 2017, apps: 559, goals: 253, assists: 145,
        funFact: 'United\'s all-time top scorer with 253 goals. Achieved it in a team with Ronaldo, Tevez, Berbatov.',
        drama: 'Transfer request in 2010. Ferguson\'s legendary response. He stayed. Won the league.',
        highlight: '5 PL titles, 1 UCL. That overhead kick vs Man City 2011. England captain.',
        teammates: ['Cristiano Ronaldo', 'Ryan Giggs', 'Paul Scholes', 'Michael Carrick'] },
      { club: 'Everton', country: 'England', city: 'Liverpool', flag: '🏴', lat: 53.438, lng: -2.966, from: 2017, to: 2018, apps: 40, goals: 11, assists: 5,
        funFact: 'Returned to boyhood club at 31. The crowd gave him a standing ovation on debut.',
        drama: 'Left for DC United in MLS despite interest from China. America over money.',
        highlight: 'Emotional homecoming. The full circle began.',
        teammates: ['Jordan Pickford', 'Leighton Baines', 'Gylfi Sigurðsson', 'Seamus Coleman'] },
      { club: 'DC United', country: 'USA', city: 'Washington DC', flag: '🇺🇸', lat: 38.869, lng: -77.012, from: 2018, to: 2019, apps: 48, goals: 25, assists: 15,
        funFact: 'Scored a 95th-minute winner on debut to keep DC in the playoff race. Iconic entry.',
        drama: 'Returned to England to Derby County. Kept playing while managing simultaneously.',
        highlight: '25 goals. Made DC United relevant. That debut winner was peak Rooney.',
        teammates: ['Luciano Acosta', 'Bill Hamid', 'Ulises Segura', 'Patrick Mullins'] },
      { club: 'Derby County', country: 'England', city: 'Derby', flag: '🏴', lat: 52.915, lng: -1.447, from: 2019, to: 2021, apps: 36, goals: 8, assists: 9,
        funFact: 'Named player-manager at 34. Led Derby through administration, 21-point deductions and oblivion.',
        drama: 'The club nearly ceased to exist. He stayed on. Professional dignity over self-interest.',
        highlight: 'Managed Derby through the darkest chapter in their history.',
        teammates: ['Martyn Waghorn', 'Tom Lawrence', 'Colin Kazim-Richards', 'Lee Gregory'] },
    ]
  },

  // ============================================================
  'Didier Drogba': {
    name: 'Didier Drogba', nationality: 'Ivorian', flag: '🇨🇮',
    born: 'Abidjan, Ivory Coast', dob: '1978-03-11', position: 'Striker',
    career: [
      { club: 'Le Mans', country: 'France', city: 'Le Mans', flag: '🇫🇷', lat: 48.000, lng: 0.200, from: 2002, to: 2003, apps: 45, goals: 17, assists: 8,
        funFact: 'Didn\'t make his first-team debut until 21. Proof that some careers take time to ignite.',
        drama: 'Guingamp spotted him in Ligue 2 and sold him to Marseille who sold him to Chelsea. Three clubs, two years.',
        highlight: 'Top scorer in Ligue 2. The late developer who exploded.',
        teammates: ['Florent Sinama Pongolle', 'Lamine Sakho', 'Cyrill Jeunechamp', 'Yohann Pele'] },
      { club: 'Marseille', country: 'France', city: 'Marseille', flag: '🇫🇷', lat: 43.270, lng: 5.396, from: 2003, to: 2004, apps: 35, goals: 19, assists: 11,
        funFact: '19 goals in 35 games convinced Chelsea to pay €37M — record English transfer at the time.',
        drama: 'Chelsea and Roman Abramovich broke the English transfer record for a striker from Ligue 1.',
        highlight: 'Top scorer Ligue 1. French Player of Year. That was enough.',
        teammates: ['Samir Nasri', 'Franck Sauzée', 'Salomon Olembe', 'Nihat Kahveci'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2004, to: 2012, apps: 341, goals: 157, assists: 64,
        funFact: '157 goals, 4 FA Cups, 3 PL titles, and one Munich night that will never be forgotten.',
        drama: 'UCL Final 2012. 88th minute equaliser. Won on penalties. Left in tears.',
        highlight: 'That UCL Final header. The most dramatic individual moment in Chelsea history.',
        teammates: ['Frank Lampard', 'John Terry', 'Michael Essien', 'Nicolas Anelka'] },
      { club: 'Galatasaray', country: 'Turkey', city: 'Istanbul', flag: '🇹🇷', lat: 41.064, lng: 29.011, from: 2013, to: 2014, apps: 44, goals: 26, assists: 14,
        funFact: 'Won Turkish title and is still revered as a god in Istanbul. They built a statue of him.',
        drama: 'Chelsea came calling. He returned. Second chapter at 36.',
        highlight: 'Turkish championship 2013. Beloved hero.',
        teammates: ['Wesley Sneijder', 'Burak Yılmaz', 'Hamit Altıntop', 'Emmanuel Eboué'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2014, to: 2015, apps: 40, goals: 16, assists: 7,
        funFact: 'Returned at 36 and won the Premier League title. Then gracefully stepped aside.',
        drama: 'The second farewell was quieter. The first one mattered more.',
        highlight: 'PL title 2014-15. Full circle. The perfect ending.',
        teammates: ['Eden Hazard', 'Oscar', 'Cesc Fàbregas', 'Diego Costa'] },
    ]
  },

  // ============================================================
  'Samuel Eto\'o': {
    name: 'Samuel Eto\'o', nationality: 'Cameroonian', flag: '🇨🇲',
    born: 'Nkon, Cameroon', dob: '1981-03-10', position: 'Striker',
    career: [
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 1997, to: 2000, apps: 4, goals: 0, assists: 1,
        funFact: 'Signed by Real Madrid at 15. Faked his age to get trials — listed as a year younger than he was.',
        drama: 'Loaned to multiple Spanish clubs. Never broke through at Madrid. The rejection fuelled him.',
        highlight: 'First steps. The foundation before the explosion.',
        teammates: ['Raúl', 'Roberto Carlos', 'Fernando Morientes', 'Clarence Seedorf'] },
      { club: 'Mallorca', country: 'Spain', city: 'Palma', flag: '🇪🇸', lat: 39.590, lng: 2.661, from: 2000, to: 2004, apps: 121, goals: 54, assists: 22,
        funFact: 'Barcelona loaned him back to Mallorca because their own president didn\'t want him. He scored 54 goals.',
        drama: 'Barca loaned him out. He scored 54 in 4 years. They finally woke up and bought him.',
        highlight: 'Back-to-back top 5 La Liga scorer. Forced Barcelona\'s hand.',
        teammates: ['Dani Güiza', 'Artur Moraes', 'Ibán Ramos', 'Carlos García'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2004, to: 2009, apps: 199, goals: 130, assists: 51,
        funFact: '3× African Player of Year back-to-back at Barcelona. Ronaldinho said Eto\'o made him look better.',
        drama: 'Pep Guardiola wanted to sell him in 2009. He was traded to Inter for Ibrahimović.',
        highlight: '3 La Ligas. 2 UCL finals. African Player of Year × 3.',
        teammates: ['Ronaldinho', 'Xavi', 'Andrés Iniesta', 'Zlatan Ibrahimović'] },
      { club: 'Inter Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2009, to: 2011, apps: 102, goals: 53, assists: 20,
        funFact: 'Won the Treble with Inter 2010. Only player ever to win the UCL in consecutive years with different clubs.',
        drama: 'Traded AS Ibrahimović. Won the Treble immediately. Zlatan won nothing.',
        highlight: 'Champions League 2010. Italian title. The unique double.',
        teammates: ['Wesley Sneijder', 'Diego Milito', 'Javier Zanetti', 'Zlatan (brief)'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2013, to: 2014, apps: 40, goals: 9, assists: 7,
        funFact: 'Arrived at Chelsea at 32 on a free. Scored against Barcelona in the UCL. Of course he did.',
        drama: 'Short stint. Longer legacy. Everything he touched in football was memorable.',
        highlight: 'UCL goal vs Barca. Professional to the last.',
        teammates: ['Didier Drogba', 'Frank Lampard', 'Eden Hazard', 'Fernando Torres'] },
    ]
  },

  // ============================================================
  'Zinedine Zidane': {
    name: 'Zinedine Zidane', nationality: 'French', flag: '🇫🇷',
    born: 'Marseille, France', dob: '1972-06-23', position: 'Attacking Midfielder',
    career: [
      { club: 'Cannes', country: 'France', city: 'Cannes', flag: '🇫🇷', lat: 43.552, lng: 7.019, from: 1989, to: 1992, apps: 61, goals: 6, assists: 14,
        funFact: 'Refused the number 10 shirt — gave it to a teammate saying he hadn\'t earned it yet.',
        drama: 'Girondins de Bordeaux spotted him and transformed his career.',
        highlight: 'First professional steps. Quiet beginning to the greatest story.',
        teammates: ['Laurent Blanc', 'Philippe Lucas', 'Luc Perez', 'Frédéric Barros'] },
      { club: 'Bordeaux', country: 'France', city: 'Bordeaux', flag: '🇫🇷', lat: 44.828, lng: -0.611, from: 1992, to: 1996, apps: 162, goals: 28, assists: 45,
        funFact: 'UEFA Cup runner-up 1996. His performances convinced Juventus to spend a record fee on a French midfielder.',
        drama: '£3.2M to Juventus. Italian football would never be the same.',
        highlight: 'UEFA Cup finalist. 4 seasons, 162 games. The real apprenticeship.',
        teammates: ['Bixente Lizarazu', 'Christophe Dugarry', 'Mickael Landreau', 'Marc Keller'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 1996, to: 2001, apps: 212, goals: 31, assists: 64,
        funFact: 'Won consecutive Ballon d\'Or awards. Calciopoli later stripped the Serie A titles, not his reputation.',
        drama: 'Real Madrid paid £64M in 2001 — then a world record. Florentino Pérez\'s first Galáctico signing.',
        highlight: '2× Ballon d\'Or. 2 Serie A titles. The Galáctico era began here.',
        teammates: ['Alessandro Del Piero', 'Filippo Inzaghi', 'Edgar Davids', 'Didier Deschamps'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2001, to: 2006, apps: 227, goals: 49, assists: 71,
        funFact: 'That 2002 UCL Final volley vs Bayer Leverkusen. Widely considered the best goal in Champions League history.',
        drama: 'Headbutt on Materazzi. World Cup Final 2006. Last action of his career. The most famous exit in sport.',
        highlight: 'UCL 2002 winner. That volley. World Cup 1998. 3× Ballon d\'Or. And then the headbutt.',
        teammates: ['Ronaldo', 'Luís Figo', 'Roberto Carlos', 'Raúl'] },
    ]
  },

  // ============================================================
  'Franck Ribéry': {
    name: 'Franck Ribéry', nationality: 'French', flag: '🇫🇷',
    born: 'Boulogne-sur-Mer, France', dob: '1983-04-07', position: 'Winger',
    career: [
      { club: 'Galatasaray', country: 'Turkey', city: 'Istanbul', flag: '🇹🇷', lat: 41.064, lng: 29.011, from: 2005, to: 2006, apps: 31, goals: 4, assists: 12,
        funFact: 'His Turkish adventure convinced Marseille to buy him permanently. Istanbul as a launch pad.',
        drama: 'Three clubs in France before Turkey. Career was in danger of stalling at 21.',
        highlight: 'Found his confidence. Marseille came calling.',
        teammates: ['Hakan Şükür', 'Umit Davala', 'Cüneyt Çakır', 'Tolga Seyhan'] },
      { club: 'Marseille', country: 'France', city: 'Marseille', flag: '🇫🇷', lat: 43.270, lng: 5.396, from: 2006, to: 2007, apps: 40, goals: 8, assists: 16,
        funFact: 'One strong Ligue 1 season convinced Bayern Munich to pay €25M. His face was scarred from a car crash at age two. He became the most recognised winger in Europe.',
        drama: '€25M to Bayern Munich. The Bundesliga had no idea what was coming.',
        highlight: 'Ligue 1 form. 16 assists. Ready for the biggest stage.',
        teammates: ['Samir Nasri', 'Djibril Cissé', 'Lorik Cana', 'Mamadou Niang'] },
      { club: 'Bayern Munich', country: 'Germany', city: 'Munich', flag: '🇩🇪', lat: 48.219, lng: 11.625, from: 2007, to: 2019, apps: 425, goals: 124, assists: 186,
        funFact: 'The Robbery era — Ribéry and Robben. The most feared wide duo in world football for nearly a decade.',
        drama: 'UCL Final 2013 vs Dortmund. Won the Treble. Third in Ballon d\'Or that year — many said he deserved the win.',
        highlight: 'Bundesliga × 8. Treble 2012-13. Third in Ballon d\'Or. Bayern\'s most decorated player.',
        teammates: ['Arjen Robben', 'Thomas Müller', 'Robert Lewandowski', 'Manuel Neuer'] },
      { club: 'Fiorentina', country: 'Italy', city: 'Florence', flag: '🇮🇹', lat: 43.780, lng: 11.282, from: 2019, to: 2021, apps: 48, goals: 5, assists: 14,
        funFact: 'Left Bayern at 36. Still performing at Serie A level. Florence embraced him completely.',
        drama: 'A quiet goodbye. No fanfare. Just quality to the end.',
        highlight: 'Fiorentina fans adored him. Decorated career ended with dignity.',
        teammates: ['Nikola Milenković', 'German Pezzella', 'Gaetano Castrovilli', 'Dušan Vlahović'] },
    ]
  },

  // ============================================================
  'Arjen Robben': {
    name: 'Arjen Robben', nationality: 'Dutch', flag: '🇳🇱',
    born: 'Bedum, Netherlands', dob: '1984-01-23', position: 'Winger',
    career: [
      { club: 'PSV Eindhoven', country: 'Netherlands', city: 'Eindhoven', flag: '🇳🇱', lat: 51.442, lng: 5.467, from: 2000, to: 2004, apps: 96, goals: 28, assists: 30,
        funFact: '2 Eredivisie titles and sold to Chelsea for €12M at 20. An early bargain.',
        drama: 'Chelsea won the race over Arsenal and Man United. Different career might have been.',
        highlight: 'Dutch title × 2. The pace and cut-inside move, already fully formed at 19.',
        teammates: ['Park Ji-sung', 'Philip Cocu', 'Johann Vogel', 'Mark van Bommel'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2004, to: 2007, apps: 106, goals: 19, assists: 38,
        funFact: 'Won back-to-back PL titles with Chelsea. Plagued by injuries but a menace when fit.',
        drama: 'Real Madrid paid €35M — sold relatively cheaply due to injury record.',
        highlight: 'PL × 2 with Chelsea. The injury curse began here.',
        teammates: ['Frank Lampard', 'Didier Drogba', 'John Terry', 'Claude Makélélé'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2007, to: 2009, apps: 94, goals: 23, assists: 31,
        funFact: 'Two seasons at Madrid produced enough quality to justify €35M but Bayern\'s offer suited better.',
        drama: 'Struggled with injuries. Bayern paid €25M and unlocked the real Robben.',
        highlight: 'La Liga 2007-08. Foundation for the Bayern dynasty that followed.',
        teammates: ['Cristiano Ronaldo', 'Raúl', 'Gonzalo Higuaín', 'Sergio Ramos'] },
      { club: 'Bayern Munich', country: 'Germany', city: 'Munich', flag: '🇩🇪', lat: 48.219, lng: 11.625, from: 2009, to: 2019, apps: 309, goals: 144, assists: 100,
        funFact: 'That 2013 UCL Final winner vs Dortmund. After a missed penalty in 2012 final, he wrote the redemption story himself.',
        drama: '2012: missed penalty in UCL final, own city, own stadium. 2013: scored the winner. Full redemption.',
        highlight: 'Bundesliga × 8. UCL winner 2013. That goal in the final. The Robbery duo.',
        teammates: ['Franck Ribéry', 'Thomas Müller', 'Robert Lewandowski', 'Manuel Neuer'] },
    ]
  },

  // ============================================================
  'Gianluigi Buffon': {
    name: 'Gianluigi Buffon', nationality: 'Italian', flag: '🇮🇹',
    born: 'Carrara, Italy', dob: '1978-01-28', position: 'Goalkeeper',
    career: [
      { club: 'Parma', country: 'Italy', city: 'Parma', flag: '🇮🇹', lat: 44.799, lng: 10.332, from: 1995, to: 2001, apps: 220, goals: 0, assists: 0,
        funFact: 'Made his Serie A debut at 17 and promptly kept a clean sheet against AC Milan. Literally on day one.',
        drama: 'Juventus paid €52M — then a world record for a goalkeeper. He justified every cent.',
        highlight: 'Coppa Italia × 2. UEFA Cup × 1. The world\'s finest keeper identified at 22.',
        teammates: ['Hernan Crespo', 'Juan Sebastián Verón', 'Dino Baggio', 'Fabio Cannavaro'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2001, to: 2018, apps: 656, goals: 0, assists: 3,
        funFact: '10 Serie A titles, 6 Coppa Italias, one never-ending pursuit of the Champions League he deserved.',
        drama: 'Stayed loyal when Juve were relegated for Calciopoli 2006. The definition of character.',
        highlight: '10 Serie A titles. UCL finalist twice. Italy World Cup 2006. The greatest keeper ever.',
        teammates: ['Alessandro Del Piero', 'Pavel Nedvěd', 'Zlatan Ibrahimović', 'Cristiano Ronaldo'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2018, to: 2019, apps: 25, goals: 0, assists: 0,
        funFact: 'At 40 he was still playing at the highest level and winning Ligue 1 with PSG.',
        drama: 'Paris year then back to Juventus. The pride of Italy, unbending to the end.',
        highlight: 'Ligue 1 winner. Still world-class at 40.',
        teammates: ['Neymar', 'Kylian Mbappé', 'Marco Verratti', 'Marquinhos'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2019, to: 2021, apps: 52, goals: 0, assists: 0,
        funFact: 'Returned to Juventus at 41. Kept clean sheets in UCL knockouts. The career simply would not end.',
        drama: 'Retired officially in 2023 after Parma stint. 28 professional years.',
        highlight: 'Serie A title 2019-20 at 41. The final chapter.',
        teammates: ['Cristiano Ronaldo', 'Paulo Dybala', 'Leonardo Bonucci', 'Álvaro Morata'] },
    ]
  },

  // ============================================================
  'Andrés Iniesta': {
    name: 'Andrés Iniesta', nationality: 'Spanish', flag: '🇪🇸',
    born: 'Fuentealbilla, Spain', dob: '1984-05-11', position: 'Midfielder',
    career: [
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2002, to: 2018, apps: 674, goals: 57, assists: 136,
        funFact: 'The Stamford Bridge goal in 2009 UCL semi. He pointed to the sky for Dani Jarque who had just died. Football cried.',
        drama: 'Suffered severe depression in 2009. Scored one of football\'s most iconic goals at the worst moment of his life.',
        highlight: '9 La Ligas, 4 UCL titles, World Cup 2010 winner\'s goal. The most complete midfielder.',
        teammates: ['Xavi', 'Lionel Messi', 'Ronaldinho', 'Xabi Alonso'] },
      { club: 'Vissel Kobe', country: 'Japan', city: 'Kobe', flag: '🇯🇵', lat: 34.689, lng: 135.197, from: 2018, to: 2023, apps: 136, goals: 26, assists: 40,
        funFact: 'Won the Emperor\'s Cup in Japan. The most celebrated footballer in Japanese history who didn\'t grow up there.',
        drama: 'Rejected richer offers to experience Japan. Said it was the best decision of his life.',
        highlight: 'Emperor\'s Cup. Changed Japanese football. A cultural ambassador.',
        teammates: ['David Villa', 'Thomas Vermaelen', 'Lukas Podolski', 'Bojan Krkić'] },
      { club: 'Emirates Club', country: 'UAE', city: 'Ras Al Khaimah', flag: '🇦🇪', lat: 25.789, lng: 55.943, from: 2023, to: 2024, apps: 18, goals: 2, assists: 7,
        funFact: 'Final professional season at 39. UAE clubs brought him to inspire the next generation.',
        drama: 'Quiet finale. The loudest career ended with grace.',
        highlight: 'Retired 2024. One of the sport\'s all-time great players.',
        teammates: ['Luís Figo (honorary)', 'Various UAE youth players'] },
    ]
  },


  // ============================================================
  'Ronaldo Nazário': {
    name: 'Ronaldo Nazário', nationality: 'Brazilian', flag: '🇧🇷',
    born: 'Rio de Janeiro, Brazil', dob: '1976-09-18', position: 'Striker',
    career: [
      { club: 'Cruzeiro', country: 'Brazil', city: 'Belo Horizonte', flag: '🇧🇷', lat: -19.865, lng: -43.971, from: 1993, to: 1994, apps: 47, goals: 44, assists: 12,
        funFact: '44 goals in 47 games at 17 years old. Before Europe had even heard his name, Brazil already knew.',
        drama: 'PSV Eindhoven paid €6M — a major fee for a 17-year-old who had played fewer than 50 games.',
        highlight: 'Copa do Brasil winner. 44 goals. Scouts across Europe had one name on their lips.',
        teammates: ['Márcio Santos', 'Viola', 'Paulo Roberto', 'Charles'] },
      { club: 'PSV Eindhoven', country: 'Netherlands', city: 'Eindhoven', flag: '🇳🇱', lat: 51.442, lng: 5.467, from: 1994, to: 1996, apps: 58, goals: 55, assists: 22,
        funFact: '55 goals in 58 games. It remains one of the most staggering debut spells by a teenager in European football history.',
        drama: 'Barcelona opened negotiations before his second season had ended. The fee — €19.5M — was continental news.',
        highlight: 'Eredivisie top scorer. Bobby Robson flew from Barcelona just to confirm he was real.',
        teammates: ['Jan Heintze', 'Wim Jonk', 'Luc Nilis', 'John de Wolf'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 1996, to: 1997, apps: 49, goals: 47, assists: 15,
        funFact: 'Won the Copa del Rey and UEFA Cup Winners Cup in a single season. FIFA World Player of the Year at 20.',
        drama: 'One incredible season. Then Inter Milan won a legal battle for his services. Bobby Robson was furious.',
        highlight: 'FIFA World Player of the Year 1996. Copa del Rey. UEFA Cup Winners Cup. 47 goals. In one year.',
        teammates: ['Luis Figo', 'Pep Guardiola', 'Laurent Blanc', 'Luis Enrique'] },
      { club: 'Inter Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 1997, to: 2002, apps: 99, goals: 59, assists: 21,
        funFact: 'Won FIFA World Player of the Year in 1997 and 2002. Injury robbed him of his peak — but he came back anyway.',
        drama: 'A devastating ACL injury in 1999 sparked a convulsion on the pitch in front of 80,000 fans. Many feared he would never play again.',
        highlight: 'FIFA World Player of Year 1997. Two ACL injuries survived. The comeback no one believed possible.',
        teammates: ['Roberto Baggio', 'Javier Zanetti', 'Christian Vieri', 'Youri Djorkaeff'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2002, to: 2007, apps: 177, goals: 104, assists: 39,
        funFact: 'Won the 2002 World Cup before his Real Madrid debut. Arrived as the most famous footballer alive.',
        drama: 'The 2002 World Cup. His hair. The hat-trick. The goal vs Germany in the final. Literally a different species.',
        highlight: '2 La Ligas. FIFA World Player of Year x3. 2002 World Cup Golden Boot. The legend cemented.',
        teammates: ['Zinedine Zidane', 'Luis Figo', 'Roberto Carlos', 'Raul'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2007, to: 2008, apps: 20, goals: 9, assists: 4,
        funFact: 'Scored on his debut against Livorno. Even at the end, the magic was visible in flashes.',
        drama: 'Weight and injury struggles limited his appearances. He left for Brazil at 31.',
        highlight: 'A swansong in red and black. Goodbye on his own terms.',
        teammates: ['Ronaldinho', 'Kaka', 'Alexandre Pato', 'Andrea Pirlo'] },
      { club: 'Corinthians', country: 'Brazil', city: 'Sao Paulo', flag: '🇧🇷', lat: -23.546, lng: -46.477, from: 2009, to: 2011, apps: 69, goals: 34, assists: 12,
        funFact: 'Won the Brazilian championship with Corinthians in 2011. The retirement press conference left every journalist in tears.',
        drama: 'His farewell speech: the most honest, emotional goodbye in football. Not a performance. Just truth.',
        highlight: 'Brazilian title 2011. The farewell the football world deserved.',
        teammates: ['Alessandro', 'Dentinho', 'Jorge Henrique', 'Paulinho'] },
    ]
  },

  // ============================================================
  'Xavi': {
    name: 'Xavi', nationality: 'Spanish', flag: '🇪🇸',
    born: 'Terrassa, Spain', dob: '1980-01-25', position: 'Midfielder',
    career: [
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 1998, to: 2015, apps: 767, goals: 85, assists: 185,
        funFact: '767 games for Barcelona. The metronome that Guardiola built his system around. Manchester United offered a fortune — Xavi said no.',
        drama: 'Barcelona rejected a massive United offer when Ronaldo left. Xavi stayed. Football history was written instead.',
        highlight: '8 La Ligas, 4 UCL titles. World Cup 2010. Euro 2008 and 2012. The greatest passer in football history.',
        teammates: ['Andres Iniesta', 'Lionel Messi', 'Ronaldinho', 'Deco'] },
      { club: 'Al Sadd', country: 'Qatar', city: 'Doha', flag: '🇶🇦', lat: 25.284, lng: 51.511, from: 2015, to: 2019, apps: 102, goals: 14, assists: 33,
        funFact: 'Became Al Sadd player-manager. Learned to lead from the front in a completely different football environment.',
        drama: 'The call from Barcelona came in 2021 — not as a player but as manager. He answered immediately.',
        highlight: 'Qatar Stars League title. Emir Cup. The transition from icon to coach.',
        teammates: ['Andre Ayew', 'Santi Cazorla', 'Rodrigo Tabata', 'Gabi'] },
      { club: 'Barcelona', country: 'Spain', city: 'Barcelona', flag: '🇪🇸', lat: 41.381, lng: 2.123, from: 2021, to: 2024, apps: 0, goals: 0, assists: 0,
        funFact: 'Returned as manager. Won La Liga 2022-23. Introduced Lamine Yamal to the world. Left in 2024.',
        drama: 'Announced resignation then reversed it. Eventually parted ways. Management is harder than playing.',
        highlight: 'La Liga title 2022-23 as manager. Barcelona rebuilt around youth. The DNA restored.',
        teammates: ['Robert Lewandowski', 'Pedri', 'Gavi', 'Lamine Yamal'] },
    ]
  },

  // ============================================================
  'Harry Kane': {
    name: 'Harry Kane', nationality: 'English', flag: '🏴',
    born: 'Chingford, London', dob: '1993-07-28', position: 'Striker',
    career: [
      { club: 'Tottenham', country: 'England', city: 'London', flag: '🏴', lat: 51.604, lng: -0.066, from: 2009, to: 2023, apps: 435, goals: 280, assists: 62,
        funFact: 'Had loan spells at 4 different clubs before becoming Tottenham starter at 21. Patience is underrated.',
        drama: '2021 transfer request. Man City bid 100M. Spurs rejected it. He stayed. Won nothing. Left for Munich two years later.',
        highlight: '280 goals — Spurs all-time record. 2 PL Golden Boots. UCL finalist 2019. The one-club nearly-man.',
        teammates: ['Heung-min Son', 'Dele Alli', 'Hugo Lloris', 'Christian Eriksen'] },
      { club: 'Bayern Munich', country: 'Germany', city: 'Munich', flag: '🇩🇪', lat: 48.219, lng: 11.625, from: 2023, to: null, apps: 80, goals: 70, assists: 22,
        funFact: '36 Bundesliga goals in his debut campaign — a new record for any player in their first Bundesliga season.',
        drama: 'Bundesliga runner-up on the final day of his first season. The trophy curse follows him to Germany.',
        highlight: 'Bundesliga record debut: 36 goals in 2023-24. The scoring continues. The trophy still waits.',
        teammates: ['Jamal Musiala', 'Leroy Sane', 'Joshua Kimmich', 'Thomas Muller'] },
    ]
  },

  // ============================================================
  'Paul Pogba': {
    name: 'Paul Pogba', nationality: 'French', flag: '🇫🇷',
    born: 'Lagny-sur-Marne, France', dob: '1993-03-15', position: 'Midfielder',
    career: [
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.463, lng: -2.292, from: 2011, to: 2012, apps: 7, goals: 1, assists: 1,
        funFact: 'Sir Alex Ferguson released him on a free. Ferguson later admitted it was one of his biggest regrets.',
        drama: 'United let him go for nothing. Juventus took him. United paid 89M to get him back four years later.',
        highlight: 'The beginning. The teenager who refused to wait his turn.',
        teammates: ['Ryan Giggs', 'Michael Carrick', 'Wayne Rooney', 'Robin van Persie'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2012, to: 2016, apps: 178, goals: 34, assists: 40,
        funFact: 'Won 4 consecutive Serie A titles and was named Best Young Player at the 2014 World Cup. The world was watching.',
        drama: 'United came back with 89M — then a world record for a midfielder. Turin said goodbye reluctantly.',
        highlight: '4 Serie A titles. 2 Coppa Italias. Best Young Player World Cup 2014. The absolute peak.',
        teammates: ['Andrea Pirlo', 'Carlos Tevez', 'Alvaro Morata', 'Gianluigi Buffon'] },
      { club: 'Manchester Utd', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.463, lng: -2.292, from: 2016, to: 2022, apps: 233, goals: 39, assists: 51,
        funFact: 'Europa League winner, EFL Cup, World Cup 2018 champion. The talent gap between what Pogba was and what he could have been became football biggest debate.',
        drama: 'Four-year WADA doping ban in 2023. The career ended before the Juventus second chapter could truly begin.',
        highlight: 'Europa League 2017. EFL Cup. World Cup 2018 champion with France.',
        teammates: ['Bruno Fernandes', 'Marcus Rashford', 'Romelu Lukaku', 'Juan Mata'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2022, to: 2024, apps: 10, goals: 1, assists: 2,
        funFact: 'The comeback cut short by a WADA doping ban. A sad final chapter to one of football greatest talents.',
        drama: 'Returned to the club that made him great. Then banned for four years. Career over.',
        highlight: 'Remembered for the brilliance, not the ending.',
        teammates: ['Dusan Vlahovic', 'Federico Chiesa', 'Adrien Rabiot', 'Angel Di Maria'] },
    ]
  },

  // ============================================================
  'Raheem Sterling': {
    name: 'Raheem Sterling', nationality: 'English', flag: '🏴',
    born: 'Kingston, Jamaica', dob: '1994-12-08', position: 'Winger',
    career: [
      { club: 'Liverpool', country: 'England', city: 'Liverpool', flag: '🏴', lat: 53.431, lng: -2.961, from: 2012, to: 2015, apps: 129, goals: 23, assists: 30,
        funFact: 'Forced a move at 20 via a leaked contract interview. Liverpool fans furious. Man City delighted.',
        drama: 'Published his salary demands. Worst transfer exit since Judas. Then proved everyone wrong.',
        highlight: 'UCL semi-final 2015. FWA Young Player of the Year. The raw talent before the refinement.',
        teammates: ['Steven Gerrard', 'Luis Suarez', 'Daniel Sturridge', 'Philippe Coutinho'] },
      { club: 'Manchester City', country: 'England', city: 'Manchester', flag: '🏴', lat: 53.483, lng: -2.200, from: 2015, to: 2022, apps: 339, goals: 131, assists: 94,
        funFact: 'Signed for 49M. Over 7 years won 4 Premier League titles and became one of the world best wide players.',
        drama: 'Sterling publicly called out unfair media bias. A watershed moment for football journalism and race.',
        highlight: '4 PL titles, 1 FA Cup, 4 League Cups. 131 goals. Completely rebuilt himself.',
        teammates: ['Kevin De Bruyne', 'Leroy Sane', 'Bernardo Silva', 'Riyad Mahrez'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2022, to: 2024, apps: 71, goals: 19, assists: 13,
        funFact: 'Bought for 47.5M, struggled under four different managers. The Boehly era claimed another victim.',
        drama: 'Loaned to Arsenal in January 2025 as his Chelsea career stalled completely.',
        highlight: 'International-class performer who never found his system at Stamford Bridge.',
        teammates: ['Cole Palmer', 'Nicolas Jackson', 'Reece James', 'Enzo Fernandez'] },
      { club: 'Arsenal', country: 'England', city: 'London', flag: '🏴', lat: 51.555, lng: -0.108, from: 2025, to: null, apps: 15, goals: 6, assists: 5,
        funFact: 'Loan from Chelsea. Arteta immediately unlocked him. The London redemption arc is underway.',
        drama: 'At 30, back to form under the manager who knows exactly how to use him.',
        highlight: 'Rejuvenated under Arteta. The class remains. One more chapter still to write.',
        teammates: ['Bukayo Saka', 'Martin Odegaard', 'Declan Rice', 'Gabriel Martinelli'] },
    ]
  },

// ============================================================
  'Mohamed Salah': {
    name: 'Mohamed Salah', nationality: 'Egyptian', flag: '🇪🇬',
    born: 'Nagrig, Egypt', dob: '1992-06-15', position: 'Winger',
    career: [
      { club: 'Al Mokawloon', country: 'Egypt', city: 'Cairo', flag: '🇪🇬', lat: 30.065, lng: 31.249, from: 2010, to: 2012, apps: 45, goals: 13, assists: 8,
        funFact: "Egypt's most watched youth talent. Basel scouts saw him in the 2011 Arab Youth Championship and flew him to Switzerland.",
        drama: 'Moving from Egypt to Switzerland at 19 — a cultural and footballing leap few teenagers could handle.',
        highlight: 'Led Al Mokawloon to Egyptian Premier League title. The foundation of everything.',
        teammates: ['Ahmed Fathy', 'Amr Zaki', 'Mohamed Aboutrika', 'Hazem Emam'] },
      { club: 'Basel', country: 'Switzerland', city: 'Basel', flag: '🇨🇭', lat: 47.541, lng: 7.619, from: 2012, to: 2014, apps: 79, goals: 20, assists: 16,
        funFact: 'Scored in both legs vs Chelsea in the Champions League. Chelsea immediately signed him. Full circle moment.',
        drama: '£11M to Chelsea. At 21, the biggest moment of his life.',
        highlight: 'Swiss championship twice. Those UCL goals vs Chelsea changed his career forever.',
        teammates: ['Marco Streller', 'Xherdan Shaqiri', 'Fabian Frei', 'Derlis González'] },
      { club: 'Chelsea', country: 'England', city: 'London', flag: '🏴', lat: 51.482, lng: -0.191, from: 2014, to: 2016, apps: 19, goals: 2, assists: 4,
        funFact: "Mourinho didn't trust him. 19 appearances, loaned twice. Then Liverpool paid £36.9M and the rest is history.",
        drama: "One of football's most dramatic \"what if\" transfers. Mourinho's biggest miss.",
        highlight: 'The Chelsea chapter hurt. It also built the hunger that drove everything after.',
        teammates: ['Eden Hazard', 'Didier Drogba', 'Cesc Fàbregas', 'Diego Costa'] },
      { club: 'Fiorentina', country: 'Italy', city: 'Florence', flag: '🇮🇹', lat: 43.780, lng: 11.282, from: 2015, to: 2015, apps: 26, goals: 9, assists: 5,
        funFact: 'Serie A loan unlocked the clinical edge Chelsea never found. He was transformed.',
        drama: 'Florence fell in love with him. He chose Liverpool over returning.',
        highlight: '9 goals in 26 Serie A games. The Italian sun agreed with him.',
        teammates: ['Mario Gómez', 'Josip Iličić', 'Juan Cuadrado', 'Marcos Alonso'] },
      { club: 'AS Roma', country: 'Italy', city: 'Rome', flag: '🇮🇹', lat: 41.934, lng: 12.455, from: 2015, to: 2017, apps: 83, goals: 34, assists: 23,
        funFact: 'Serie A Player of the Year. His 15 goals forced Liverpool to break their transfer record.',
        drama: 'Liverpool paid £36.9M — then their club record. Then he repaid it 100 times over.',
        highlight: 'Serie A Player of the Year 2016-17. The season that launched the legend.',
        teammates: ['Francesco Totti', 'Radja Nainggolan', 'Edin Džeko', 'Diego Perotti'] },
      { club: 'Liverpool', country: 'England', city: 'Liverpool', flag: '🏴', lat: 53.431, lng: -2.961, from: 2017, to: null, apps: 357, goals: 233, assists: 95,
        funFact: '44 goals in his first Premier League season — a new record. They called him the Egyptian King.',
        drama: 'UCL Final 2018 — shoulder injury from Ramos foul in the first half. Watched Liverpool lose in tears.',
        highlight: 'UCL winner 2019. PL title 2019-20. 233 goals. PL all-time leading scorer. The greatest ever at Anfield.',
        teammates: ['Sadio Mané', 'Roberto Firmino', 'Virgil van Dijk', 'Trent Alexander-Arnold'] },
    ]
  },

  // ============================================================
  'Toni Kroos': {
    name: 'Toni Kroos', nationality: 'German', flag: '🇩🇪',
    born: 'Greifswald, Germany', dob: '1990-01-04', position: 'Midfielder',
    career: [
      { club: 'Bayern Munich', country: 'Germany', city: 'Munich', flag: '🇩🇪', lat: 48.219, lng: 11.625, from: 2007, to: 2014, apps: 183, goals: 23, assists: 50,
        funFact: 'Loaned to Bayer Leverkusen and performed so well Bayern had to take him back — and then he left anyway.',
        drama: 'Wanted more playing time. Bayern refused to promise it. Real Madrid offered guaranteed starts.',
        highlight: 'UCL winner 2013. Bundesliga × 4. World Cup winner 2014 with Germany. The platform was perfect.',
        teammates: ['Franck Ribéry', 'Arjen Robben', 'Thomas Müller', 'Bastian Schweinsteiger'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2014, to: 2024, apps: 463, goals: 28, assists: 110,
        funFact: 'Retired in 2022. Came back in 2023 for one final season because Real needed him. Could not help himself.',
        drama: 'His free kick in stoppage time vs Sweden in the 2018 World Cup qualifier. 90+5. Germany qualified. The internet exploded.',
        highlight: '4 UCL titles. 3 La Ligas. The most pass-accurate midfielder in European football history.',
        teammates: ['Cristiano Ronaldo', 'Luka Modrić', 'Karim Benzema', 'Jude Bellingham'] },
    ]
  },

  // ============================================================
  'Sergio Ramos': {
    name: 'Sergio Ramos', nationality: 'Spanish', flag: '🇪🇸',
    born: 'Camas, Seville', dob: '1986-03-30', position: 'Defender',
    career: [
      { club: 'Sevilla', country: 'Spain', city: 'Seville', flag: '🇪🇸', lat: 37.384, lng: -5.970, from: 2003, to: 2005, apps: 49, goals: 2, assists: 3,
        funFact: "Became Sevilla's youngest La Liga player at 15. The club record stood for years.",
        drama: 'Real Madrid paid €27M — then record for a Spanish defender. Sevilla ultras never forgave him.',
        highlight: 'Youngest-ever Sevilla debutant. The beginning of one of the great careers.',
        teammates: ['Dario Silva', 'Fernando Sales', 'José Antonio Reyes', 'Javi Navarro'] },
      { club: 'Real Madrid', country: 'Spain', city: 'Madrid', flag: '🇪🇸', lat: 40.453, lng: -3.689, from: 2005, to: 2021, apps: 671, goals: 101, assists: 56,
        funFact: '101 goals as a defender — the most by any central defender in European football history.',
        drama: 'That 93:20 header vs Atlético in UCL Final 2014. One of the most dramatic moments in sport.',
        highlight: '4 UCL titles. 5 La Ligas. Spain captain. World Cup 2010, Euro 2008 & 2012. The complete legend.',
        teammates: ['Cristiano Ronaldo', 'Luka Modrić', 'Karim Benzema', 'Iker Casillas'] },
      { club: 'PSG', country: 'France', city: 'Paris', flag: '🇫🇷', lat: 48.841, lng: 2.253, from: 2021, to: 2023, apps: 54, goals: 2, assists: 4,
        funFact: 'Plagued by injury at PSG — the body finally catching up after 16 years at the absolute peak.',
        drama: 'Left PSG in 2023. Returned to Sevilla. The shirt was once burned. They now chanted his name.',
        highlight: 'Ligue 1 title 2021-22. Leadership in the dressing room never faded.',
        teammates: ['Neymar', 'Kylian Mbappé', 'Lionel Messi', 'Marquinhos'] },
      { club: 'Sevilla', country: 'Spain', city: 'Seville', flag: '🇪🇸', lat: 37.384, lng: -5.970, from: 2023, to: 2024, apps: 24, goals: 2, assists: 1,
        funFact: 'Returned to the club that made him. Sevilla fans — who once burned his shirt — gave him a tearful welcome back.',
        drama: 'The shirt was burned. The statue will probably follow. Football has a wonderful memory.',
        highlight: 'Full circle. One of the greatest careers in football history — begun and ended at Sevilla.',
        teammates: ['Jesús Navas', 'Youssef En-Nesyri', 'Ivan Rakitić', 'Juanlu Sánchez'] },
    ]
  },

  // ============================================================
  'Andrea Pirlo': {
    name: 'Andrea Pirlo', nationality: 'Italian', flag: '🇮🇹',
    born: 'Flero, Brescia', dob: '1979-05-19', position: 'Midfielder',
    career: [
      { club: 'Brescia', country: 'Italy', city: 'Brescia', flag: '🇮🇹', lat: 45.534, lng: 10.220, from: 1995, to: 2001, apps: 76, goals: 12, assists: 19,
        funFact: 'Roberto Baggio was his idol and his teammate at Brescia. He studied Baggio every training session.',
        drama: 'Inter Milan signed him but never used him properly. AC Milan saw what Inter missed.',
        highlight: 'Serie B promotion. The Italian tradition at its most pure. The launch pad.',
        teammates: ['Roberto Baggio', 'Andrea Caracciolo', 'Luca Toni', 'Massimo Cellino'] },
      { club: 'Inter Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.480, lng: 9.126, from: 2001, to: 2001, apps: 5, goals: 0, assists: 1,
        funFact: 'Inter used him in five games and decided he was not ready. AC Milan paid €17M and transformed his position.',
        drama: 'AC Milan moved him from attacking mid to deep-lying regista. The role change made him a generational talent.',
        highlight: 'Five appearances. Enough to understand he needed a completely different direction.',
        teammates: ['Ronaldo Nazário', 'Javier Zanetti', 'Christian Vieri', 'Sandro Mazzola'] },
      { club: 'AC Milan', country: 'Italy', city: 'Milan', flag: '🇮🇹', lat: 45.478, lng: 9.124, from: 2001, to: 2011, apps: 401, goals: 32, assists: 91,
        funFact: 'Ancelotti moved him from attacking midfielder to deep-lying regista at Milan. The position change made him immortal.',
        drama: 'Milan let him go on a free at 32. Juventus built a new dynasty around him. Football gave the gift back.',
        highlight: '2 UCL titles. 2 Serie A titles. World Cup 2006. He redefined the deep playmaker role forever.',
        teammates: ['Kaká', 'Ronaldinho', 'Zlatan Ibrahimović', 'Gennaro Gattuso'] },
      { club: 'Juventus', country: 'Italy', city: 'Turin', flag: '🇮🇹', lat: 45.109, lng: 7.641, from: 2011, to: 2015, apps: 164, goals: 22, assists: 56,
        funFact: 'Won 4 consecutive Scudetti at Juventus in his 30s. The older he got, the more elegant he became.',
        drama: 'New York City FC offered him the final act. He took it — and became MLS ambassador for the beautiful game.',
        highlight: 'Juventus dynasty × 4. Still the best passer in Serie A at 36. A legend in every city he touched.',
        teammates: ['Gianluigi Buffon', 'Paul Pogba', 'Carlos Tevez', 'Leonardo Bonucci'] },
      { club: 'New York City FC', country: 'USA', city: 'New York', flag: '🇺🇸', lat: 40.757, lng: -73.846, from: 2015, to: 2017, apps: 60, goals: 9, assists: 26,
        funFact: 'His debut at Yankee Stadium with David Villa alongside him. Pirlo played every pass like a man with all the time in the world — because he had.',
        drama: 'Returned to Italy to finish his career and immediately became Juventus B manager. Then somehow Juventus head coach.',
        highlight: 'Ambassador for the game itself. NYCFC most elegant player to date.',
        teammates: ['David Villa', 'Frank Lampard', 'Mix Diskerud', 'Tommy McNamara'] },
    ]
  },

  // ============================================================
  'Sadio Mané': {
    name: 'Sadio Mané', nationality: 'Senegalese', flag: '🇸🇳',
    born: 'Sédhiou, Senegal', dob: '1992-04-10', position: 'Winger',
    career: [
      { club: 'Metz', country: 'France', city: 'Metz', flag: '🇫🇷', lat: 49.109, lng: 6.176, from: 2011, to: 2012, apps: 22, goals: 2, assists: 3,
        funFact: 'Joined Metz from Senegalese football at 19 speaking almost no French. Adapted in months. The hunger was visible from day one.',
        drama: 'Red Bull Salzburg outbid multiple French clubs. Austria\'s gain.',
        highlight: 'His European foundation. The first chapter outside Africa.',
        teammates: ['Ibrahima Baldé', 'Alexandre Oukidja', 'Abou Diallo', 'Lenny Nangis'] },
      { club: 'RB Salzburg', country: 'Austria', city: 'Salzburg', flag: '🇦🇹', lat: 47.822, lng: 13.049, from: 2012, to: 2014, apps: 87, goals: 45, assists: 23,
        funFact: 'Scored the fastest hat-trick in Premier League history the season after leaving Salzburg — they released him too early.',
        drama: 'Southampton bought him for €4M. That would turn into Liverpool for £34M. The ladder climbed fast.',
        highlight: 'Austrian Bundesliga × 2. Europa League semi-finalist. 45 goals in 87 games.',
        teammates: ['Alan', 'Jonatan Soriano', 'Marc Janko', 'Kevin Kampl'] },
      { club: 'Southampton', country: 'England', city: 'Southampton', flag: '🏴', lat: 50.906, lng: -1.391, from: 2014, to: 2016, apps: 75, goals: 25, assists: 14,
        funFact: 'Scored a hat-trick in 2 minutes 56 seconds vs Aston Villa — the fastest hat-trick in Premier League history. The record still stands.',
        drama: 'Liverpool paid £34M. Southampton fans heartbroken. Third summer selling a world-class star.',
        highlight: 'That hat-trick record will stand for years. PL top-6 form. Liverpool came calling.',
        teammates: ['Graziano Pellè', 'Dusan Tadic', 'Victor Wanyama', 'Ryan Bertrand'] },
      { club: 'Liverpool', country: 'England', city: 'Liverpool', flag: '🏴', lat: 53.431, lng: -2.961, from: 2016, to: 2022, apps: 269, goals: 120, assists: 48,
        funFact: 'Won the UCL, PL, FA Cup, League Cup and Club World Cup with Liverpool. The SAS + Salah era will never be forgotten.',
        drama: 'Left for Bayern Munich to grow as a player and a man. The departure broke Liverpool hearts.',
        highlight: 'UCL winner 2019. PL winner 2020. African Player of Year × 3 while at Liverpool.',
        teammates: ['Mohamed Salah', 'Roberto Firmino', 'Virgil van Dijk', 'Alisson'] },
      { club: 'Bayern Munich', country: 'Germany', city: 'Munich', flag: '🇩🇪', lat: 48.219, lng: 11.625, from: 2022, to: 2023, apps: 38, goals: 12, assists: 8,
        funFact: '€32M transfer. One difficult season in the Bundesliga. The system did not suit his style the way Klopp had.',
        drama: 'Bayern sold him to Al Nassr after just one season. Surprising — and painful — exit.',
        highlight: 'Bundesliga champion 2022-23. Team player to the end, even when it hurt.',
        teammates: ['Leroy Sané', 'Jamal Musiala', 'Thomas Müller', 'Manuel Neuer'] },
      { club: 'Al Nassr', country: 'Saudi Arabia', city: 'Riyadh', flag: '🇸🇦', lat: 24.774, lng: 46.738, from: 2023, to: null, apps: 67, goals: 36, assists: 18,
        funFact: 'Reunited with Cristiano Ronaldo at Al Nassr. Two of the sport\'s greatest wide forwards, playing together in Saudi Arabia. Football is strange and wonderful.',
        drama: "Africa's greatest winger of his generation, finishing his career in Saudi Arabia. The continent had mixed feelings.",
        highlight: 'AFCON winner 2022 with Senegal. His legacy at absolute peak.',
        teammates: ['Cristiano Ronaldo', 'Marcelo Brozović', 'Aymeric Laporte', 'Alex Telles'] },
    ]
  },

}; // end PLAYERS
