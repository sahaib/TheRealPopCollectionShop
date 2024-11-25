export interface Collection {
  id: string;
  name: string;
  categories: {
    [key: string]: string[];
  };
}

export const collections = {
  'bollywood-action': {
    id: 'bollywood-action',
    name: "Bollywood Action & Thriller",
    categories: {
      "Action Blockbusters": [
        "War",
        "Pathaan",
        "Tiger Zinda Hai",
        "Dhoom Trilogy",
        "Race Series",
        "Don Series",
        "Krrish Series",
        "Bang Bang!",
        "Ek Tha Tiger"
      ],
      "Crime & Action": [
        "Baby",
        "Sooryavanshi",
        "Singham Series",
        "Dabangg Series",
        "Wanted",
        "Kick",
        "Baaghi Series"
      ],
      "Thriller & Mystery": [
        "Andhadhun",
        "Badla",
        "Kahaani Series",
        "Drishyam Series",
        "Raazi",
        "Article 15",
        "Raat Akeli Hai"
      ]
    }
  },
  'hollywood-action': {
    id: 'hollywood-action',
    name: "Hollywood Action & Adventure",
    categories: {
      "Superhero Universe": [
        "The Avengers Series",
        "Iron Man Trilogy",
        "Captain America Trilogy",
        "Thor Series",
        "Black Panther Series",
        "Doctor Strange Series",
        "Spider-Man MCU Trilogy",
        "Guardians of the Galaxy Series",
        "Ant-Man Series"
      ],
      "Action Franchises": [
        "Mission Impossible Series",
        "Fast & Furious Series",
        "John Wick Series",
        "James Bond Series",
        "Jason Bourne Series",
        "The Expendables Series",
        "Bad Boys Series",
        "Die Hard Series"
      ],
      "Modern Action": [
        "Top Gun: Maverick",
        "The Gray Man",
        "Extraction Series",
        "The Old Guard",
        "Nobody",
        "Bullet Train",
        "Free Guy"
      ]
    }
  },
  'scifi-fantasy': {
    id: 'scifi-fantasy',
    name: "Science Fiction & Fantasy",
    categories: {
      "Epic Fantasy Series": [
        "The Lord of the Rings Trilogy",
        "The Hobbit Trilogy",
        "Harry Potter Series",
        "Fantastic Beasts Series",
        "The Chronicles of Narnia",
        "Percy Jackson Series"
      ],
      "Sci-Fi Franchises": [
        "Star Wars Complete Saga",
        "The Matrix Series",
        "Alien Series",
        "Terminator Series",
        "Planet of the Apes Series",
        "Jurassic Park & World Series"
      ],
      "Modern Sci-Fi Epics": [
        "Dune",
        "Blade Runner Series",
        "Inception",
        "Interstellar",
        "Tenet",
        "Avatar Series",
        "Edge of Tomorrow",
        "Arrival"
      ],
      "Time Travel & Reality": [
        "Back to the Future Trilogy",
        "Predestination",
        "About Time",
        "The Butterfly Effect",
        "Donnie Darko",
        "Source Code",
        "12 Monkeys"
      ]
    }
  },
  'international-cinema': {
    id: 'international-cinema',
    name: "International Cinema",
    categories: {
      "Korean Cinema": [
        "Parasite",
        "Oldboy",
        "Train to Busan",
        "The Handmaiden",
        "Memories of Murder",
        "Decision to Leave"
      ],
      "Japanese Cinema": {
        "Studio Ghibli": [
          "Spirited Away",
          "My Neighbor Totoro",
          "Princess Mononoke",
          "Howl's Moving Castle",
          "Castle in the Sky"
        ],
        "Live Action": [
          "Seven Samurai",
          "Rashomon",
          "Tokyo Story",
          "Drive My Car",
          "Shoplifters"
        ]
      },
      "European Masters": [
        "Amélie",
        "La Haine",
        "Pan's Labyrinth",
        "Cinema Paradiso",
        "Life is Beautiful",
        "Run Lola Run"
      ],
      "Indian Regional": [
        "Baahubali Series",
        "RRR",
        "KGF Series",
        "Super Deluxe",
        "Vikram",
        "Kantara"
      ]
    }
  },
  'animation': {
    id: 'animation',
    name: "Animation Collection",
    categories: {
      "Disney Classics": [
        "Snow White and the Seven Dwarfs",
        "The Lion King",
        "Beauty and the Beast",
        "Aladdin",
        "Frozen Series",
        "Moana",
        "Encanto"
      ],
      "Pixar Universe": [
        "Toy Story Series",
        "The Incredibles Series",
        "Finding Nemo/Dory",
        "Inside Out",
        "Coco",
        "Soul",
        "Up"
      ],
      "DreamWorks Animation": [
        "Shrek Series",
        "How to Train Your Dragon Trilogy",
        "Kung Fu Panda Series",
        "Madagascar Series",
        "The Prince of Egypt"
      ],
      "Stop Motion & Artistic": [
        "Spider-Man: Into the Spider-Verse",
        "Coraline",
        "Kubo and the Two Strings",
        "The Nightmare Before Christmas",
        "Wallace & Gromit Series"
      ]
    }
  },
  'classic-cinema': {
    id: 'classic-cinema',
    name: "Classic Collection",
    categories: {
      "Golden Age Hollywood": [
        "Casablanca",
        "Citizen Kane",
        "Gone with the Wind",
        "The Wizard of Oz",
        "Singin' in the Rain",
        "It's a Wonderful Life"
      ],
      "New Hollywood Era": [
        "The Godfather Series",
        "Apocalypse Now",
        "Taxi Driver",
        "Jaws",
        "One Flew Over the Cuckoo's Nest"
      ],
      "Film Noir Classics": [
        "The Maltese Falcon",
        "Double Indemnity",
        "Touch of Evil",
        "The Third Man",
        "The Big Sleep"
      ],
      "International Classics": [
        "Seven Samurai",
        "8½",
        "Bicycle Thieves",
        "The 400 Blows",
        "Breathless"
      ]
    }
  },
  'modern-classics': {
    id: 'modern-classics',
    name: "Modern Classics (1990s-2020s)",
    categories: {
      "90s Masterpieces": [
        "Pulp Fiction",
        "The Shawshank Redemption",
        "Schindler's List",
        "Goodfellas",
        "The Silence of the Lambs",
        "Fight Club"
      ],
      "2000s Landmarks": [
        "The Dark Knight",
        "There Will Be Blood",
        "No Country for Old Men",
        "Memento",
        "City of God",
        "Eternal Sunshine of the Spotless Mind"
      ],
      "2010s Masterworks": [
        "Inception",
        "Mad Max: Fury Road",
        "Parasite",
        "The Grand Budapest Hotel",
        "Whiplash",
        "La La Land"
      ],
      "Recent Acclaimed": [
        "Everything Everywhere All at Once",
        "Dune",
        "The Power of the Dog",
        "Drive My Car",
        "Nomadland"
      ]
    }
  },
  'documentary': {
    id: 'documentary',
    name: "Documentary Masterpieces",
    categories: {
      "Nature & Science": [
        "Planet Earth Series",
        "Blue Planet Series",
        "My Octopus Teacher",
        "March of the Penguins",
        "Chasing Coral",
        "A Life on Our Planet"
      ],
      "Social & Cultural": [
        "Won't You Be My Neighbor?",
        "RBG",
        "The Last Dance",
        "Summer of Soul",
        "Free Solo",
        "Amy"
      ],
      "True Crime": [
        "The Thin Blue Line",
        "Making a Murderer",
        "The Jinx",
        "Don't F**k with Cats",
        "Tiger King",
        "The Keepers"
      ],
      "Music & Arts": [
        "What Happened, Miss Simone?",
        "Searching for Sugar Man",
        "20 Feet from Stardom",
        "Woodstock",
        "This Is It",
        "Amazing Grace"
      ]
    }
  },
  'cult-classics': {
    id: 'cult-classics',
    name: "Cult & Underground Classics",
    categories: {
      "Midnight Movies": [
        "The Rocky Horror Picture Show",
        "The Room",
        "Pink Flamingos",
        "Eraserhead",
        "Repo Man",
        "They Live"
      ],
      "Cult Action": [
        "The Warriors",
        "Big Trouble in Little China",
        "Army of Darkness",
        "Escape from New York",
        "Flash Gordon",
        "Barbarella"
      ],
      "Cult Horror": [
        "Evil Dead Series",
        "Phantasm Series",
        "Re-Animator",
        "Night of the Demons",
        "Basket Case",
        "Troll 2"
      ],
      "Cult Comedy": [
        "This Is Spinal Tap",
        "The Big Lebowski",
        "Office Space",
        "Clerks",
        "Napoleon Dynamite",
        "Wet Hot American Summer"
      ]
    }
  },
  'genre-horror': {
    id: 'genre-horror',
    name: "Horror Collection",
    categories: {
      "Classic Horror": [
        "The Exorcist",
        "The Shining",
        "Halloween",
        "A Nightmare on Elm Street",
        "Rosemary's Baby",
        "The Thing"
      ],
      "Modern Horror": [
        "Get Out",
        "Hereditary",
        "A Quiet Place",
        "The Babadook",
        "It Follows",
        "Midsommar"
      ],
      "Supernatural": [
        "The Conjuring Universe",
        "Insidious Series",
        "Sinister",
        "The Others",
        "The Ring",
        "Drag Me to Hell"
      ],
      "Psychological": [
        "Black Swan",
        "The Silence of the Lambs",
        "Mother!",
        "The Lighthouse",
        "Saint Maud",
        "The Witch"
      ]
    }
  },
  'genre-romance': {
    id: 'genre-romance',
    name: "Romance Collection",
    categories: {
      "Classic Romance": [
        "Casablanca",
        "Gone with the Wind",
        "Roman Holiday",
        "Breakfast at Tiffany's",
        "An Affair to Remember",
        "Doctor Zhivago"
      ],
      "Modern Romance": [
        "The Notebook",
        "Eternal Sunshine of the Spotless Mind",
        "500 Days of Summer",
        "La La Land",
        "Call Me by Your Name",
        "The Shape of Water"
      ],
      "Romantic Comedy": [
        "When Harry Met Sally",
        "Pretty Woman",
        "Notting Hill",
        "Bridget Jones's Diary",
        "Love Actually",
        "Crazy Rich Asians"
      ],
      "International Romance": [
        "In the Mood for Love",
        "Amélie",
        "Cinema Paradiso",
        "Y Tu Mamá También",
        "Portrait of a Lady on Fire",
        "The Handmaiden"
      ]
    }
  },
  'director-showcase': {
    id: 'director-showcase',
    name: "Director Showcases",
    categories: {
      "Christopher Nolan": [
        "Inception",
        "Interstellar",
        "The Dark Knight Trilogy",
        "Memento",
        "Dunkirk",
        "Tenet",
        "Oppenheimer"
      ],
      "Martin Scorsese": [
        "Goodfellas",
        "The Departed",
        "Taxi Driver",
        "Raging Bull",
        "The Wolf of Wall Street",
        "Casino",
        "Killers of the Flower Moon"
      ],
      "Steven Spielberg": [
        "Jurassic Park",
        "E.T.",
        "Schindler's List",
        "Saving Private Ryan",
        "Raiders of the Lost Ark",
        "Jaws",
        "The Fabelmans"
      ],
      "Quentin Tarantino": [
        "Pulp Fiction",
        "Kill Bill Vol. 1 & 2",
        "Inglourious Basterds",
        "Django Unchained",
        "Once Upon a Time in Hollywood",
        "Reservoir Dogs"
      ]
    }
  },
  'award-winners': {
    id: 'award-winners',
    name: "Award-Winning Cinema",
    categories: {
      "Best Picture Oscar Winners": [
        "CODA (2022)",
        "Nomadland (2021)",
        "Parasite (2020)",
        "Green Book (2019)",
        "The Shape of Water (2018)",
        "Moonlight (2017)",
        "Spotlight (2016)"
      ],
      "Foreign Language Oscar Winners": [
        "Drive My Car (2022)",
        "Another Round (2021)",
        "Parasite (2020)",
        "Roma (2019)",
        "A Fantastic Woman (2018)",
        "The Salesman (2017)"
      ],
      "Cannes Palm d'Or Winners": [
        "Triangle of Sadness (2022)",
        "Titane (2021)",
        "Parasite (2019)",
        "Shoplifters (2018)",
        "The Square (2017)",
        "I, Daniel Blake (2016)"
      ],
      "Venice Golden Lion Winners": [
        "All the Beauty and the Bloodshed (2022)",
        "Happening (2021)",
        "Nomadland (2020)",
        "Joker (2019)",
        "Roma (2018)",
        "The Shape of Water (2017)"
      ]
    }
  },
  'family-children': {
    id: 'family-children',
    name: "Family & Children's Collection",
    categories: {
      "Live-Action Adventures": [
        "The Chronicles of Narnia Series",
        "Harry Potter Series",
        "Mary Poppins Returns",
        "Paddington Series",
        "The Princess Bride",
        "The NeverEnding Story"
      ],
      "Family Comedies": [
        "Home Alone Series",
        "Night at the Museum Series",
        "Mrs. Doubtfire",
        "The Parent Trap",
        "Honey, I Shrunk the Kids",
        "The Goonies"
      ],
      "Educational & Inspiring": [
        "Hidden Figures",
        "Wonder",
        "The Theory of Everything",
        "October Sky",
        "Remember the Titans",
        "Bridge to Terabithia"
      ],
      "Holiday Classics": [
        "The Polar Express",
        "Elf",
        "How the Grinch Stole Christmas",
        "A Christmas Story",
        "Miracle on 34th Street",
        "The Santa Clause"
      ]
    }
  },
  'sports-adventure': {
    id: 'sports-adventure',
    name: "Sports & Adventure",
    categories: {
      "Sports Dramas": [
        "Rocky Series",
        "Creed Series",
        "Moneyball",
        "Remember the Titans",
        "Coach Carter",
        "The Blind Side",
        "Million Dollar Baby"
      ],
      "Adventure Epics": [
        "Indiana Jones Series",
        "The Mummy Series",
        "National Treasure Series",
        "Jumanji Series",
        "Journey to the Center of the Earth",
        "Tomb Raider Series"
      ],
      "Survival Stories": [
        "Cast Away",
        "Life of Pi",
        "127 Hours",
        "The Martian",
        "Gravity",
        "All Is Lost"
      ],
      "Extreme Sports": [
        "Point Break",
        "Lords of Dogtown",
        "Blue Crush",
        "Steep",
        "The Art of Flight",
        "Free Solo"
      ]
    }
  },
  'war-films': {
    id: 'war-films',
    name: "War Cinema",
    categories: {
      "World War II": [
        "Saving Private Ryan",
        "Schindler's List",
        "Dunkirk",
        "The Pianist",
        "Hacksaw Ridge",
        "Inglourious Basterds"
      ],
      "Modern Warfare": [
        "Black Hawk Down",
        "Zero Dark Thirty",
        "The Hurt Locker",
        "American Sniper",
        "1917",
        "Jarhead"
      ],
      "Vietnam War": [
        "Apocalypse Now",
        "Full Metal Jacket",
        "Platoon",
        "Good Morning, Vietnam",
        "Born on the Fourth of July",
        "We Were Soldiers"
      ],
      "War & Society": [
        "The Deer Hunter",
        "Letters from Iwo Jima",
        "The Bridge on the River Kwai",
        "Das Boot",
        "Life Is Beautiful",
        "Grave of the Fireflies"
      ]
    }
  },
  'comedy-classics': {
    id: 'comedy-classics',
    name: "Comedy Collection",
    categories: {
      "Classic Comedy": [
        "Some Like It Hot",
        "Dr. Strangelove",
        "The Great Dictator",
        "Duck Soup",
        "Modern Times",
        "It Happened One Night"
      ],
      "Modern Comedy": [
        "The Hangover Series",
        "Bridesmaids",
        "Superbad",
        "The Grand Budapest Hotel",
        "Shaun of the Dead",
        "The Big Sick"
      ],
      "Romantic Comedy": [
        "When Harry Met Sally",
        "Pretty Woman",
        "Bridget Jones's Diary",
        "10 Things I Hate About You",
        "Crazy, Stupid, Love",
        "500 Days of Summer"
      ],
      "Parody & Satire": [
        "Airplane!",
        "Blazing Saddles",
        "This Is Spinal Tap",
        "Galaxy Quest",
        "The Princess Bride",
        "Monty Python Series"
      ]
    }
  },
  'thriller': {
    id: 'thriller',
    name: "Thriller Collection",
    categories: {
      "Psychological Thrillers": [
        "Gone Girl",
        "Black Swan",
        "Shutter Island",
        "Memento",
        "Fight Club",
        "Inception",
        "Mulholland Drive"
      ],
      "Crime Thrillers": [
        "Seven",
        "Prisoners",
        "Zodiac",
        "No Country for Old Men",
        "Sicario",
        "Nightcrawler",
        "Wind River"
      ],
      "Spy Thrillers": [
        "The Bourne Series",
        "Bridge of Spies",
        "Tinker Tailor Soldier Spy",
        "Zero Dark Thirty",
        "Munich",
        "The Lives of Others"
      ],
      "Mystery Thrillers": [
        "Knives Out",
        "The Girl with the Dragon Tattoo",
        "The Usual Suspects",
        "L.A. Confidential",
        "Mystic River",
        "The Silence of the Lambs"
      ]
    }
  },
  'film-noir': {
    id: 'film-noir',
    name: "Film Noir Collection",
    categories: {
      "Classic Noir": [
        "Double Indemnity",
        "The Maltese Falcon",
        "Touch of Evil",
        "The Big Sleep",
        "Out of the Past",
        "The Third Man"
      ],
      "Neo-Noir": [
        "Chinatown",
        "Blade Runner",
        "L.A. Confidential",
        "Drive",
        "Sin City",
        "The Long Goodbye"
      ],
      "Modern Noir": [
        "Gone Baby Gone",
        "Brick",
        "Dark City",
        "Memento",
        "Mulholland Drive",
        "Nightcrawler"
      ],
      "International Noir": [
        "Oldboy",
        "The Lives of Others",
        "Tell No One",
        "A Prophet",
        "The Secret in Their Eyes",
        "Victoria"
      ]
    }
  },
  'musicals': {
    id: 'musicals',
    name: "Musical Collection",
    categories: {
      "Classic Musicals": [
        "Singin' in the Rain",
        "The Sound of Music",
        "West Side Story (1961)",
        "My Fair Lady",
        "The Wizard of Oz",
        "Mary Poppins"
      ],
      "Modern Musicals": [
        "La La Land",
        "Les Misérables",
        "Chicago",
        "Moulin Rouge!",
        "The Greatest Showman",
        "West Side Story (2021)"
      ],
      "Rock & Pop Musicals": [
        "A Star Is Born",
        "Bohemian Rhapsody",
        "Rocketman",
        "Across the Universe",
        "Rock of Ages",
        "Mamma Mia!"
      ],
      "Animated Musicals": [
        "Beauty and the Beast",
        "The Lion King",
        "Encanto",
        "Frozen",
        "Coco",
        "Aladdin"
      ]
    }
  },
  'experimental': {
    id: 'experimental',
    name: "Experimental & Avant-garde",
    categories: {
      "Surrealist Cinema": [
        "Un Chien Andalou",
        "The Holy Mountain",
        "Eraserhead",
        "Meshes of the Afternoon",
        "Last Year at Marienbad",
        "Enter the Void"
      ],
      "Experimental Narratives": [
        "Synecdoche, New York",
        "The Tree of Life",
        "Holy Motors",
        "Upstream Color",
        "Persona",
        "8½"
      ],
      "Visual Experiments": [
        "Koyaanisqatsi",
        "Samsara",
        "Baraka",
        "Russian Ark",
        "The Fall",
        "Loving Vincent"
      ],
      "Art House": [
        "The Seventh Seal",
        "Wings of Desire",
        "Three Colors Trilogy",
        "Uncle Boonmee",
        "Holy Motors",
        "The Great Beauty"
      ]
    }
  },
  'asian-action': {
    id: 'asian-action',
    name: "Asian Action Cinema",
    categories: {
      "Martial Arts Classics": [
        "Enter the Dragon",
        "Fist of Fury",
        "The 36th Chamber of Shaolin",
        "Once Upon a Time in China",
        "Drunken Master",
        "Hero"
      ],
      "Modern Martial Arts": [
        "Crouching Tiger, Hidden Dragon",
        "House of Flying Daggers",
        "Ip Man Series",
        "The Raid Series",
        "Ong-Bak",
        "The Grandmaster"
      ],
      "Korean Action": [
        "Oldboy",
        "The Man from Nowhere",
        "A Bittersweet Life",
        "The Good, the Bad, the Weird",
        "The Villainess",
        "Train to Busan"
      ],
      "Japanese Action": [
        "13 Assassins",
        "Blade of the Immortal",
        "Zatoichi",
        "Azumi",
        "Rurouni Kenshin Series",
        "Battle Royale"
      ]
    }
  },
  'crime-gangster': {
    id: 'crime-gangster',
    name: "Crime & Gangster Films",
    categories: {
      "Classic Gangster": [
        "The Godfather Trilogy",
        "Goodfellas",
        "Casino",
        "Once Upon a Time in America",
        "The Untouchables",
        "Miller's Crossing"
      ],
      "Modern Crime": [
        "The Departed",
        "Heat",
        "The Town",
        "Drive",
        "No Country for Old Men",
        "Hell or High Water"
      ],
      "Heist Films": [
        "Ocean's Series",
        "Inside Man",
        "The Italian Job",
        "Heat",
        "Inception",
        "Baby Driver"
      ],
      "True Crime": [
        "The Wolf of Wall Street",
        "American Gangster",
        "Black Mass",
        "Donnie Brasco",
        "Public Enemies",
        "Catch Me If You Can"
      ]
    }
  },
  'fantasy': {
    id: 'fantasy',
    name: "Fantasy Collection",
    categories: {
      "Epic Fantasy": [
        "The Lord of the Rings Trilogy",
        "The Hobbit Trilogy",
        "The Chronicles of Narnia Series",
        "Pan's Labyrinth",
        "The NeverEnding Story",
        "Stardust"
      ],
      "Urban Fantasy": [
        "Harry Potter Series",
        "Fantastic Beasts Series",
        "Doctor Strange",
        "Constantine",
        "Hellboy Series",
        "The Golden Compass"
      ],
      "Dark Fantasy": [
        "The Dark Crystal",
        "Coraline",
        "MirrorMask",
        "The Shape of Water",
        "Crimson Peak",
        "The City of Lost Children"
      ],
      "Mythological": [
        "Clash of the Titans",
        "300",
        "Immortals",
        "Gods of Egypt",
        "Percy Jackson Series",
        "Troy"
      ]
    }
  },
  'historical-epics': {
    id: 'historical-epics',
    name: "Historical Epics",
    categories: {
      "Ancient World": [
        "Gladiator",
        "Troy",
        "300",
        "Alexander",
        "Kingdom of Heaven",
        "Ben-Hur"
      ],
      "Medieval": [
        "Braveheart",
        "Robin Hood",
        "The Last Duel",
        "Outlaw King",
        "The King",
        "Elizabeth"
      ],
      "Renaissance & Colonial": [
        "The Last of the Mohicans",
        "The Mission",
        "The Other Boleyn Girl",
        "The New World",
        "Master and Commander",
        "Barry Lyndon"
      ],
      "Modern History": [
        "Lawrence of Arabia",
        "The Last Emperor",
        "Gandhi",
        "Schindler's List",
        "The Pianist",
        "Apocalypse Now"
      ]
    }
  },
  'biographical': {
    id: 'biographical',
    name: "Biographical Films",
    categories: {
      "Artists & Musicians": [
        "Amadeus",
        "Ray",
        "Walk the Line",
        "Bohemian Rhapsody",
        "Rocketman",
        "Frida"
      ],
      "Political Figures": [
        "Lincoln",
        "Darkest Hour",
        "The Iron Lady",
        "Gandhi",
        "JFK",
        "The Queen"
      ],
      "Scientists & Innovators": [
        "The Theory of Everything",
        "A Beautiful Mind",
        "The Imitation Game",
        "Hidden Figures",
        "Tesla",
        "Steve Jobs"
      ],
      "Sports Legends": [
        "Ali",
        "Rush",
        "Moneyball",
        "42",
        "The Blind Side",
        "Ford v Ferrari"
      ]
    }
  },
  'teen-coming-age': {
    id: 'teen-coming-age',
    name: "Teen & Coming of Age",
    categories: {
      "Classic Coming of Age": [
        "Stand By Me",
        "Dead Poets Society",
        "The Breakfast Club",
        "Ferris Bueller's Day Off",
        "Dazed and Confused",
        "American Graffiti"
      ],
      "Modern Teen": [
        "Lady Bird",
        "The Perks of Being a Wallflower",
        "Juno",
        "Easy A",
        "Booksmart",
        "The Edge of Seventeen"
      ],
      "High School Stories": [
        "Mean Girls",
        "10 Things I Hate About You",
        "Clueless",
        "Superbad",
        "Election",
        "Fast Times at Ridgemont High"
      ],
      "International Coming of Age": [
        "Y Tu Mamá También",
        "Amélie",
        "Cinema Paradiso",
        "The 400 Blows",
        "Boyhood",
        "Call Me by Your Name"
      ]
    }
  },
  'political-thriller': {
    id: 'political-thriller',
    name: "Political Thrillers",
    categories: {
      "Conspiracy": [
        "All the President's Men",
        "The Manchurian Candidate",
        "Three Days of the Condor",
        "JFK",
        "The Parallax View",
        "Z"
      ],
      "Espionage": [
        "Bridge of Spies",
        "The Lives of Others",
        "Munich",
        "Zero Dark Thirty",
        "Argo",
        "The Good Shepherd"
      ],
      "Political Drama": [
        "The Post",
        "Spotlight",
        "Vice",
        "The Report",
        "Fair Game",
        "Official Secrets"
      ],
      "International Politics": [
        "Eye in the Sky",
        "Charlie Wilson's War",
        "The Last King of Scotland",
        "No",
        "The Constant Gardener",
        "Miss Sloane"
      ]
    }
  }
}

