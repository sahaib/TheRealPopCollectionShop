export interface Subcategory {
  name: string;
  items: string[];
}

export interface Collection {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export const collections: Collection[] = [
  {
    id: 'bollywood',
    name: 'Bollywood Action & Thriller',
    subcategories: [
      {
        name: 'Popular Series',
        items: [
          'War', 'Pathaan', 'Tiger Zinda Hai', 'Dhoom Series', 'Race Series',
          'Don Series', 'Krrish Series', 'Bang Bang!', 'Ek Tha Tiger',
          'Phantom', 'Baby', 'Sooryavanshi', 'Singham Series', 'Dabangg Series'
        ]
      },
      {
        name: 'Action Blockbusters',
        items: [
          'Wanted', 'Kick', 'Baaghi Series', 'Force Series', 'Saaho',
          'Dishoom', 'Brothers', 'Commando Series', 'Holiday', 'Rowdy Rathore',
          'Boss', 'Gabbar is Back', 'Ra.One', 'Agent Vinod', 'D-Day'
        ]
      },
      {
        name: 'Thrillers',
        items: [
          'A Wednesday', 'Special 26', 'Naam Shabana', 'Mardaani Series',
          'Kaabil', 'Ghajini', 'Talaash', 'Andhadhun', 'Badla', 'Kahaani Series',
          'Te3n', 'Ittefaq', 'Mom', 'NH10', 'Drishyam', 'Talvar', 'Raazi',
          'Uri: The Surgical Strike', 'Romeo Akbar Walter', 'Bell Bottom',
          'Batla House', 'Article 15', 'Raat Akeli Hai', 'Section 375'
        ]
      }
    ]
  },
  {
    id: 'hollywood-action',
    name: 'Hollywood Action & Adventure',
    subcategories: [
      {
        name: 'Superhero Universe',
        items: [
          'The Avengers Series', 'Iron Man Trilogy', 'Captain America Trilogy',
          'Thor Series', 'Black Panther', 'Doctor Strange', 'Spider-Man MCU Trilogy',
          'Guardians of the Galaxy', 'Ant-Man Series', 'Black Widow', 'Eternals',
          'Shang-Chi', 'DCEU Series', 'Wonder Woman', 'Suicide Squad', 'Justice League',
          'Aquaman', 'Shazam!', 'Birds of Prey', 'The Batman', 'Black Adam'
        ]
      },
      {
        name: 'Action Franchises',
        items: [
          'Mission Impossible Series', 'Fast & Furious Series', 'John Wick Series',
          'James Bond Series', 'Jason Bourne Series', 'The Expendables Series',
          'Bad Boys Series', 'Rush Hour Trilogy', 'Die Hard Series', 'Rambo Series',
          'Rocky Series', 'Creed Series', 'The Transporter Trilogy', 'Taken Trilogy',
          'Ocean\'s Series'
        ]
      },
      {
        name: 'Adventure & Action',
        items: [
          'Indiana Jones Series', 'National Treasure', 'Jumanji Series',
          'The Mummy Trilogy', 'Tomb Raider Series', 'King Kong', 'Godzilla MonsterVerse',
          'Pacific Rim', '300', 'Troy', 'Gladiator', 'Robin Hood', 'The Last Samurai',
          'Kingdom of Heaven', 'Alexander', 'Apocalypto', 'The Patriot', 'Braveheart'
        ]
      },
      {
        name: 'Modern Action Hits',
        items: [
          'Top Gun', 'Edge of Tomorrow', 'Inception', 'The Equalizer Series',
          'Atomic Blonde', 'Baby Driver', 'Mad Max: Fury Road', 'The Gray Man',
          'Extraction', 'The Old Guard', 'Nobody', 'Bullet Train', 'Free Guy',
          'Uncharted', 'The Adam Project', '6 Underground', 'Red Notice',
          'Without Remorse', 'The Tomorrow War', 'Bloodshot', '21 Bridges',
          'Mile 22', 'Den of Thieves', 'Triple Frontier', 'The Magnificent Seven',
          'Sicario Series', 'Heat', 'Speed', 'Point Break', 'Con Air', 'Face/Off',
          'Air Force One'
        ]
      }
    ]
  },
  {
    id: 'hollywood-scifi',
    name: 'Hollywood Sci-Fi & Fantasy',
    subcategories: [
      {
        name: 'Epic Fantasy Series',
        items: [
          'The Lord of the Rings Trilogy', 'The Hobbit Trilogy', 'Harry Potter Series',
          'Fantastic Beasts Series', 'The Chronicles of Narnia', 'Percy Jackson Series'
        ]
      },
      {
        name: 'Sci-Fi Franchises',
        items: [
          'Star Wars Series', 'The Matrix Series', 'Alien Series', 'Terminator Series',
          'Planet of the Apes Series', 'Jurassic Park Series'
        ]
      },
      {
        name: 'Modern Sci-Fi Epics',
        items: [
          'Dune', 'Blade Runner Series', 'Inception', 'Interstellar', 'Tenet',
          'Avatar Series', 'Edge of Tomorrow', 'Arrival', 'Gravity', 'The Martian',
          'Ad Astra', 'First Man', 'Life', 'Passengers', 'Elysium', 'District 9',
          'Chappie', 'Ex Machina', 'Annihilation', 'Looper', 'Source Code', 'Moon',
          'Sunshine', 'Oblivion', 'Ready Player One', 'Alita: Battle Angel',
          'Valerian', 'Jupiter Ascending', 'Ender\'s Game', 'Pacific Rim'
        ]
      },
      {
        name: 'Time Travel & Alternate Reality',
        items: [
          'Back to the Future Trilogy', 'Edge of Tomorrow', 'Predestination',
          'Project Almanac', 'About Time', 'The Butterfly Effect', 'Donnie Darko',
          'Coherence', 'Primer', '12 Monkeys', 'The Time Machine', 'Frequency',
          'Timeline', 'Source Code'
        ]
      }
    ]
  },
  {
    id: 'international',
    name: 'International Cinema',
    subcategories: [
      {
        name: 'Korean Cinema',
        items: [
          'Parasite', 'Oldboy', 'Train to Busan', 'The Handmaiden',
          'Memories of Murder', 'Mother', 'I Saw the Devil', 'A Tale of Two Sisters',
          'The Host', 'The Wailing', 'Burning', 'Decision to Leave', 'Peninsula',
          'The Man from Nowhere', 'A Bittersweet Life', 'Joint Security Area',
          'Spring, Summer, Fall, Winter... and Spring', 'Poetry', 'Thirst',
          'The Good, the Bad, the Weird', 'The Yellow Sea', 'New World', 'The Chaser',
          'The Attorney', 'Sympathy for Mr. Vengeance', 'Lady Vengeance',
          'The Villainess', 'A Taxi Driver', 'Snowpiercer', 'Space Sweepers'
        ]
      },
      {
        name: 'Japanese Cinema',
        items: [
          'Spirited Away', 'My Neighbor Totoro', 'Princess Mononoke',
          'Howl\'s Moving Castle', 'Castle in the Sky', 'Kiki\'s Delivery Service',
          'Grave of the Fireflies', 'Your Name', 'Weathering with You',
          'Perfect Blue', 'Akira', 'Ghost in the Shell', 'Paprika', 'Summer Wars',
          'Wolf Children', 'Seven Samurai', 'Rashomon', 'Tokyo Story', 'Ran',
          'Battle Royale', '13 Assassins', 'Ringu', 'Audition', 'Departures',
          'Like Father, Like Son', 'Nobody Knows', 'Confessions', 'Shoplifters',
          'Drive My Car', 'Still Walking'
        ]
      },
      {
        name: 'Chinese/Hong Kong Cinema',
        items: [
          'Ip Man Series', 'Hero', 'House of Flying Daggers',
          'Crouching Tiger, Hidden Dragon', 'Internal Affairs Series',
          'Police Story Series', 'Once Upon a Time in China Series', 'Red Cliff',
          'The Raid Series', 'Hard Boiled', 'A Better Tomorrow', 'Kung Fu Hustle',
          'Shaolin Soccer', 'In the Mood for Love', '2046', 'Chungking Express',
          'Fallen Angels', 'The Grandmaster', 'Let the Bullets Fly', 'Lost in Thailand'
        ]
      }
    ]
  },
  {
    id: 'animation',
    name: 'Animation',
    subcategories: [
      {
        name: 'Disney Classics',
        items: [
          'Snow White and the Seven Dwarfs', 'Pinocchio', 'Fantasia', 'Dumbo',
          'Bambi', 'Cinderella', 'Alice in Wonderland', 'Peter Pan',
          'Lady and the Tramp', 'Sleeping Beauty', 'One Hundred and One Dalmatians',
          'The Jungle Book', 'The Little Mermaid', 'Beauty and the Beast', 'Aladdin',
          'The Lion King', 'Pocahontas', 'The Hunchback of Notre Dame', 'Hercules',
          'Mulan', 'Tarzan', 'Lilo & Stitch', 'Treasure Planet', 'Brother Bear',
          'The Princess and the Frog', 'Tangled', 'Frozen Series', 'Big Hero 6',
          'Zootopia', 'Moana', 'Raya and the Last Dragon', 'Encanto'
        ]
      },
      {
        name: 'Pixar Universe',
        items: [
          'Toy Story Series', 'A Bug\'s Life', 'Monsters, Inc.', 'Finding Nemo',
          'The Incredibles Series', 'Cars Series', 'Ratatouille', 'WALL-E', 'Up',
          'Brave', 'Inside Out', 'The Good Dinosaur', 'Coco', 'Onward', 'Soul',
          'Luca', 'Turning Red', 'Elemental'
        ]
      },
      {
        name: 'DreamWorks Animation',
        items: [
          'Shrek Series', 'Madagascar Series', 'Kung Fu Panda Series',
          'How to Train Your Dragon Series', 'The Prince of Egypt',
          'Spirit: Stallion of the Cimarron', 'Shark Tale', 'Over the Hedge',
          'Bee Movie', 'Monsters vs. Aliens', 'Megamind', 'Rise of the Guardians',
          'The Croods Series', 'Turbo', 'Mr. Peabody & Sherman', 'Home',
          'Trolls Series', 'The Boss Baby Series', 'Abominable', 'The Bad Guys'
        ]
      }
    ]
  },
  {
    id: 'classics',
    name: 'Classics (1920s-1980s)',
    subcategories: [
      {
        name: 'Silent Era Masterpieces (1920s)',
        items: [
          'The Kid', 'Metropolis', 'Nosferatu', 'The Gold Rush', 'The General',
          'The Cabinet of Dr. Caligari', 'Safety Last!',
          'The Passion of Joan of Arc', 'Sunrise: A Song of Two Humans',
          'City Lights'
        ]
      },
      {
        name: 'Golden Age Hollywood (1930s-1950s)',
        items: [
          'Gone with the Wind', 'Casablanca', 'Citizen Kane', 'The Wizard of Oz',
          'It\'s a Wonderful Life', 'Singin\' in the Rain', 'Sunset Boulevard',
          'Roman Holiday', 'All About Eve', 'The Third Man', 'Double Indemnity',
          'Vertigo', 'Rear Window', 'North by Northwest', 'The Maltese Falcon',
          'The Big Sleep', 'To Kill a Mockingbird', 'Ben-Hur', 'On the Waterfront',
          'Some Like It Hot'
        ]
      },
      {
        name: 'New Hollywood Era (1960s-1970s)',
        items: [
          'The Godfather Series', 'Apocalypse Now', 'Taxi Driver', 'Chinatown',
          'The Graduate', 'Easy Rider', 'Bonnie and Clyde', 'The Exorcist', 'Jaws',
          'One Flew Over the Cuckoo\'s Nest', 'A Clockwork Orange',
          '2001: A Space Odyssey', 'The French Connection', 'Dog Day Afternoon',
          'Network', 'Annie Hall', 'The Deer Hunter', 'Rocky',
          'Star Wars: A New Hope', 'The Empire Strikes Back'
        ]
      }
    ]
  },
  {
    id: 'modern-classics',
    name: 'Modern Classics (1990s-2020s)',
    subcategories: [
      {
        name: '1990s Masterpieces',
        items: [
          'Pulp Fiction', 'The Shawshank Redemption', 'Schindler\'s List',
          'Goodfellas', 'The Silence of the Lambs', 'Forrest Gump', 'Fight Club',
          'The Matrix', 'Saving Private Ryan', 'American Beauty', 'Jurassic Park',
          'Terminator 2: Judgment Day', 'The Lion King', 'Titanic', 'Se7en',
          'The Usual Suspects', 'Heat', 'Casino', 'L.A. Confidential',
          'Good Will Hunting'
        ]
      },
      {
        name: '2000s Landmarks',
        items: [
          'The Lord of the Rings Trilogy', 'The Dark Knight', 'Gladiator',
          'Memento', 'City of God', 'Spirited Away', 'The Departed',
          'No Country for Old Men', 'There Will Be Blood', 'The Prestige',
          'Pan\'s Labyrinth', 'Eternal Sunshine of the Spotless Mind',
          'Children of Men', 'The Pianist', 'Mulholland Drive',
          'In the Mood for Love', 'Amelie', 'Requiem for a Dream', 'Oldboy',
          'Lost in Translation'
        ]
      },
      {
        name: '2010s Masterworks',
        items: [
          'Inception', 'The Social Network', 'Mad Max: Fury Road', 'Whiplash',
          'La La Land', 'Moonlight', 'Parasite', 'The Grand Budapest Hotel',
          'Interstellar', 'Get Out', 'Arrival', 'Black Swan', 'Drive',
          'The Wolf of Wall Street', 'Birdman', '12 Years a Slave', 'Inside Out',
          'Spider-Man: Into the Spider-Verse', 'Roma', 'Portrait of a Lady on Fire'
        ]
      },
      {
        name: '2020s (So Far)',
        items: [
          'Dune', 'Everything Everywhere All at Once', 'The Power of the Dog',
          'CODA', 'Nomadland', 'Drive My Car', 'The Father', 'Minari',
          'Sound of Metal', 'Promising Young Woman'
        ]
      }
    ]
  }
];

