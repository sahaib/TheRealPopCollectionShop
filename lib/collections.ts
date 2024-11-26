export interface MovieDetails {
  id: string;
  title: string;
  price: number;
  image: string;
  releaseYear: number;
  duration: string;
  rating: number;
  description: string;
  director: string;
  cast: string[];
  genre: string[];
  tmdb_id?: number;
}

export interface CategoryContent {
  [key: string]: MovieDetails;
}

export interface Collection {
  id: string;
  name: string;
  categories: {
    [key: string]: CategoryContent;
  };
}

export const collections: { [key: string]: Collection } = {
  'bollywood-action': {
    id: 'bollywood-action',
    name: "Bollywood Action & Thriller",
    categories: {
      "Action-Blockbusters": {
        "Pathaan": {
          id: "Pathaan",
          title: "Pathaan",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/m1b9toZe5C68UUrD7qgC7fVqKjG.jpg",
          releaseYear: 2023,
          duration: "2h 26m",
          rating: 4.7,
          description: "A soldier caught by enemies and presumed dead comes back to complete his mission, accompanied by his old companion.",
          director: "Siddharth Anand",
          cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
          genre: ["Action", "Thriller", "Drama"],
          tmdb_id: 864692
        },
        "War": {
          id: "War",
          title: "War",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/aQOWnw3HydsCQZ10O0wvxFOaWc3.jpg",
          releaseYear: 2019,
          duration: "2h 34m",
          rating: 4.8,
          description: "An Indian soldier is assigned to eliminate his former mentor who has gone rogue.",
          director: "Siddharth Anand",
          cast: ["Hrithik Roshan", "Tiger Shroff", "Vaani Kapoor"],
          genre: ["Action", "Thriller"],
          tmdb_id: 593961
        },
        "Tiger-Zinda-Hai": {
          id: "Tiger-Zinda-Hai",
          title: "Tiger Zinda Hai",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4zQsW71RVk8i5ojhGsxSFtfFHtp.jpg",
          releaseYear: 2017,
          duration: "2h 41m",
          rating: 4.7,
          description: "When a group of Indian and Pakistani nurses are held hostage in Iraq by a terrorist organization, a secret agent is drawn out of hiding to rescue them.",
          director: "Ali Abbas Zafar",
          cast: ["Salman Khan", "Katrina Kaif", "Paresh Rawal"],
          genre: ["Action", "Thriller"],
          tmdb_id: 450465
        }
      },
      "Crime-Action": {
        "Baby": {
          id: "Baby",
          title: "Baby",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9H7oVnG4P75bda0Sr45dZp1Wi3y.jpg",
          releaseYear: 2015,
          duration: "2h 39m",
          rating: 4.8,
          description: "An elite counter-intelligence unit learns of a plot orchestrated by a maniacal madman. With time running out, the unit must track the terrorists' international tentacles and prevent them from striking at the heart of India.",
          director: "Neeraj Pandey",
          cast: ["Akshay Kumar", "Danny Denzongpa", "Rana Daggubati"],
          genre: ["Action", "Thriller"],
          tmdb_id: 316749
        },
        "Sooryavanshi": {
          id: "Sooryavanshi",
          title: "Sooryavanshi",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6cHPbqGspqGhpJ4T9QgGfZXfkSu.jpg",
          releaseYear: 2021,
          duration: "2h 25m",
          rating: 4.6,
          description: "A fearless, faithful albeit slightly forgetful Mumbai cop, Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India pulls out all the stops and stunts to thwart a major conspiracy to attack his city.",
          director: "Rohit Shetty",
          cast: ["Akshay Kumar", "Katrina Kaif", "Ajay Devgn"],
          genre: ["Action", "Drama", "Thriller"],
          tmdb_id: 764835
        }
      },
      "Thriller-Mystery": {
        "Andhadhun": {
          id: "Andhadhun",
          title: "Andhadhun",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/xkANqZXpbN2yr7XGqvH0OPsQUhZ.jpg",
          releaseYear: 2018,
          duration: "2h 19m",
          rating: 4.8,
          description: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing about.",
          director: "Sriram Raghavan",
          cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte"],
          genre: ["Thriller", "Mystery", "Crime"],
          tmdb_id: 534780
        },
        "Drishyam": {
          id: "Drishyam",
          title: "Drishyam",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9KQDfZTEqmWc5YGVQQjz0mKhqiX.jpg",
          releaseYear: 2015,
          duration: "2h 43m",
          rating: 4.8,
          description: "When his family is threatened by a powerful cop looking for her missing son, a man creates an elaborate plan to protect them.",
          director: "Nishikant Kamat",
          cast: ["Ajay Devgn", "Shriya Saran", "Tabu"],
          genre: ["Thriller", "Drama", "Mystery"],
          tmdb_id: 334356
        }
      }
    }
  },
  'hollywood-action': {
    id: 'hollywood-action',
    name: "Hollywood Action & Adventure",
    categories: {
      "Superhero-Universe": {
        "The-Dark-Knight": {
          id: "The-Dark-Knight",
          title: "The Dark Knight",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          releaseYear: 2008,
          duration: "2h 32m",
          rating: 4.9,
          description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          director: "Christopher Nolan",
          cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
          genre: ["Action", "Crime", "Drama", "Thriller"],
          tmdb_id: 155
        },
        "Black-Panther": {
          id: "Black-Panther",
          title: "Black Panther",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
          releaseYear: 2018,
          duration: "2h 14m",
          rating: 4.7,
          description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
          director: "Ryan Coogler",
          cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
          genre: ["Action", "Adventure", "Science Fiction"],
          tmdb_id: 284054
        }
      },
      "Action-Franchises": {
        "John-Wick": {
          id: "John-Wick",
          title: "John Wick",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
          releaseYear: 2014,
          duration: "1h 41m",
          rating: 4.7,
          description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
          director: "Chad Stahelski",
          cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
          genre: ["Action", "Thriller"],
          tmdb_id: 245891
        },
        "Mission-Impossible": {
          id: "Mission-Impossible",
          title: "Mission: Impossible - Fallout",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
          releaseYear: 2018,
          duration: "2h 27m",
          rating: 4.8,
          description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
          director: "Christopher McQuarrie",
          cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames"],
          genre: ["Action", "Adventure", "Thriller"],
          tmdb_id: 353081
        }
      },
      "Modern-Action": {
        "Baby-Driver": {
          id: "Baby-Driver",
          title: "Baby Driver",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
          releaseYear: 2017,
          duration: "1h 53m",
          rating: 4.7,
          description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
          director: "Edgar Wright",
          cast: ["Ansel Elgort", "Kevin Spacey", "Lily James"],
          genre: ["Action", "Crime", "Music"],
          tmdb_id: 339403
        },
        "Mad-Max-Fury-Road": {
          id: "Mad-Max-Fury-Road",
          title: "Mad Max: Fury Road",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
          releaseYear: 2015,
          duration: "2h",
          rating: 4.8,
          description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
          director: "George Miller",
          cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
          genre: ["Action", "Adventure", "Science Fiction"],
          tmdb_id: 76341
        }
      }
    }
  },
  'scifi-fantasy': {
    id: 'scifi-fantasy',
    name: "Science Fiction & Fantasy",
    categories: {
      "Epic-Fantasy": {
        "Lord-of-the-Rings": {
          id: "Lord-of-the-Rings",
          title: "The Lord of the Rings: The Fellowship of the Ring",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
          releaseYear: 2001,
          duration: "2h 58m",
          rating: 4.8,
          description: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.",
          director: "Peter Jackson",
          cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
          genre: ["Fantasy", "Adventure", "Action"],
          tmdb_id: 120
        },
        "Harry-Potter": {
          id: "Harry-Potter",
          title: "Harry Potter and the Philosopher's Stone",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
          releaseYear: 2001,
          duration: "2h 32m",
          rating: 4.7,
          description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
          director: "Chris Columbus",
          cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
          genre: ["Fantasy", "Adventure", "Family"],
          tmdb_id: 671
        }
      },
      "Sci-Fi-Franchises": {
        "Inception": {
          id: "Inception",
          title: "Inception",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
          releaseYear: 2010,
          duration: "2h 28m",
          rating: 4.8,
          description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          director: "Christopher Nolan",
          cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
          genre: ["Science Fiction", "Action", "Adventure"],
          tmdb_id: 27205
        },
        "The-Matrix": {
          id: "The-Matrix",
          title: "The Matrix",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
          releaseYear: 1999,
          duration: "2h 16m",
          rating: 4.8,
          description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
          director: "Lana Wachowski, Lilly Wachowski",
          cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
          genre: ["Science Fiction", "Action"],
          tmdb_id: 603
        },
        "Blade-Runner-2049": {
          id: "Blade-Runner-2049",
          title: "Blade Runner 2049",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
          releaseYear: 2017,
          duration: "2h 44m",
          rating: 4.7,
          description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
          director: "Denis Villeneuve",
          cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
          genre: ["Science Fiction", "Drama"],
          tmdb_id: 335984
        }
      },
      "Modern-Sci-Fi": {
        "Dune": {
          id: "Dune",
          title: "Dune",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
          releaseYear: 2021,
          duration: "2h 35m",
          rating: 4.7,
          description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
          director: "Denis Villeneuve",
          cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
          genre: ["Science Fiction", "Adventure"],
          tmdb_id: 438631
        },
        "Interstellar": {
          id: "Interstellar",
          title: "Interstellar",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
          releaseYear: 2014,
          duration: "2h 49m",
          rating: 4.8,
          description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          director: "Christopher Nolan",
          cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
          genre: ["Science Fiction", "Adventure", "Drama"],
          tmdb_id: 157336
        }
      }
    }
  },
  'international-cinema': {
    id: 'international-cinema',
    name: "International Cinema",
    categories: {
      "Korean Cinema": {
        "Parasite": {
          id: "Parasite",
          title: "Parasite",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          releaseYear: 2019,
          duration: "2h 12m",
          rating: 4.9,
          description: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          director: "Bong Joon-ho",
          cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
          genre: ["Drama", "Thriller", "Comedy"]
        },
        // Add more movies...
      },
      "Japanese Cinema": {
        "Studio-Ghibli": {
          "Spirited-Away": {
            id: "Spirited-Away",
            title: "Spirited Away",
            price: 49.99,
            image: "/images/movies/spirited-away.jpg",
            releaseYear: 2001,
            duration: "2h 23m",
            rating: 4.8,
            description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            director: "Joss Whedon",
            cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
            genre: ["Action", "Adventure", "Sci-Fi"]
          },
          // Add more movies...
        },
        "Live-Action": {
          "Seven-Samurai": {
            id: "Seven-Samurai",
            title: "Seven Samurai",
            price: 49.99,
            image: "/images/movies/seven-samurai.jpg",
            releaseYear: 1954,
            duration: "2h 23m",
            rating: 4.8,
            description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            director: "Joss Whedon",
            cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
            genre: ["Action", "Adventure", "Sci-Fi"]
          },
          // Add more movies...
        }
      },
      "European-Masters": {
        "Amélie": {
          id: "Amélie",
          title: "Amélie",
          price: 49.99,
          image: "/images/movies/amélie.jpg",
          releaseYear: 2001,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Indian-Regional": {
        "Baahubali-Series": {
          id: "Baahubali-Series",
          title: "Baahubali Series",
          price: 49.99,
          image: "/images/movies/baahubali.jpg",
          releaseYear: 2015,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'animation': {
    id: 'animation',
    name: "Animation Collection",
    categories: {
      "Disney-Classics": {
        "Snow-White": {
          id: "Snow-White",
          title: "Snow White and the Seven Dwarfs",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/49qGqpkXP1ruwpxZJODdRbLMjZg.jpg",
          releaseYear: 1937,
          duration: "1h 23m",
          rating: 4.7,
          description: "A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as 'the fairest in the land.'",
          director: "David Hand",
          cast: ["Adriana Caselotti", "Harry Stockwell", "Lucille La Verne"],
          genre: ["Animation", "Fantasy", "Family"],
          tmdb_id: 408
        },
        "Moana": {
          id: "Moana",
          title: "Moana",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4JeejGugONWpJkbnvL12hVoYEDa.jpg",
          releaseYear: 2016,
          duration: "1h 47m",
          rating: 4.8,
          description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
          director: "Ron Clements, John Musker",
          cast: ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House"],
          genre: ["Animation", "Adventure", "Family"],
          tmdb_id: 277834
        },
        "Zootopia": {
          id: "Zootopia",
          title: "Zootopia",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
          releaseYear: 2016,
          duration: "1h 48m",
          rating: 4.7,
          description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
          director: "Byron Howard, Rich Moore",
          cast: ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"],
          genre: ["Animation", "Adventure", "Comedy", "Family"],
          tmdb_id: 269149
        },
        "The-Lion-King": {
          id: "The-Lion-King",
          title: "The Lion King",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
          releaseYear: 1994,
          duration: "1h 28m",
          rating: 4.8,
          description: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.",
          director: "Roger Allers, Rob Minkoff",
          cast: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons"],
          genre: ["Animation", "Family", "Drama"],
          tmdb_id: 8587
        },
        "Frozen": {
          id: "Frozen",
          title: "Frozen",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
          releaseYear: 2013,
          duration: "1h 42m",
          rating: 4.7,
          description: "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa's coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom.",
          director: "Chris Buck, Jennifer Lee",
          cast: ["Kristen Bell", "Idina Menzel", "Jonathan Groff"],
          genre: ["Animation", "Adventure", "Family"],
          tmdb_id: 109445
        },
        "Encanto": {
          id: "Encanto",
          title: "Encanto",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
          releaseYear: 2021,
          duration: "1h 42m",
          rating: 4.7,
          description: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.",
          director: "Jared Bush, Byron Howard",
          cast: ["Stephanie Beatriz", "María Cecilia Botero", "John Leguizamo"],
          genre: ["Animation", "Comedy", "Family", "Fantasy"],
          tmdb_id: 568124
        }
      },
      "Pixar-Universe": {
        "Coco": {
          id: "Coco",
          title: "Coco",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
          releaseYear: 2017,
          duration: "1h 45m",
          rating: 4.8,
          description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
          director: "Lee Unkrich",
          cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
          genre: ["Animation", "Family", "Fantasy", "Music"],
          tmdb_id: 354912
        },
        "Inside-Out": {
          id: "Inside-Out",
          title: "Inside Out",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
          releaseYear: 2015,
          duration: "1h 35m",
          rating: 4.8,
          description: "The emotions inside a young girl's head come to life and help her deal with her family's cross-country move.",
          director: "Pete Docter",
          cast: ["Amy Poehler", "Phyllis Smith", "Richard Kind"],
          genre: ["Animation", "Family", "Adventure", "Comedy"],
          tmdb_id: 150540
        },
        "Up": {
          id: "Up",
          title: "Up",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
          releaseYear: 2009,
          duration: "1h 36m",
          rating: 4.8,
          description: "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
          director: "Pete Docter",
          cast: ["Ed Asner", "Christopher Plummer", "Jordan Nagai"],
          genre: ["Animation", "Comedy", "Family", "Adventure"],
          tmdb_id: 14160
        },
        "Wall-E": {
          id: "Wall-E",
          title: "WALL·E",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/2501miKp1StQpq6uh3Ub8QxKia8.jpg",
          releaseYear: 2008,
          duration: "1h 38m",
          rating: 4.8,
          description: "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities.",
          director: "Andrew Stanton",
          cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin"],
          genre: ["Animation", "Family", "Science Fiction"],
          tmdb_id: 10681
        },
        "Ratatouille": {
          id: "Ratatouille",
          title: "Ratatouille",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
          releaseYear: 2007,
          duration: "1h 51m",
          rating: 4.7,
          description: "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession.",
          director: "Brad Bird",
          cast: ["Patton Oswalt", "Lou Romano", "Peter O'Toole"],
          genre: ["Animation", "Comedy", "Family", "Fantasy"],
          tmdb_id: 2062
        }
      },
      "DreamWorks-Animation": {
        "How-to-Train-Your-Dragon": {
          id: "How-to-Train-Your-Dragon",
          title: "How to Train Your Dragon",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
          releaseYear: 2010,
          duration: "1h 38m",
          rating: 4.8,
          description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
          director: "Chris Sanders, Dean DeBlois",
          cast: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson"],
          genre: ["Animation", "Adventure", "Family", "Fantasy"],
          tmdb_id: 10191
        },
        "Shrek": {
          id: "Shrek",
          title: "Shrek",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/dyhaB19AICF7TO7CK2aD6KfymnQ.jpg",
          releaseYear: 2001,
          duration: "1h 30m",
          rating: 4.7,
          description: "An ogre, in order to regain his swamp, travels along with an annoying donkey in order to bring a princess to a scheming lord, wishing himself King.",
          director: "Andrew Adamson, Vicky Jenson",
          cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
          genre: ["Animation", "Comedy", "Family", "Fantasy"],
          tmdb_id: 808
        },
        "Kung-Fu-Panda": {
          id: "Kung-Fu-Panda",
          title: "Kung Fu Panda",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
          releaseYear: 2008,
          duration: "1h 32m",
          rating: 4.7,
          description: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.",
          director: "Mark Osborne, John Stevenson",
          cast: ["Jack Black", "Dustin Hoffman", "Angelina Jolie"],
          genre: ["Animation", "Action", "Adventure", "Comedy"],
          tmdb_id: 9502
        }
      },
      "Stop-Motion-&-Artistic": {
        "Spider-Man-Into-the-Spider-Verse": {
          id: "Spider-Man-Into-the-Spider-Verse",
          title: "Spider-Man: Into the Spider-Verse",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
          releaseYear: 2018,
          duration: "1h 57m",
          rating: 4.9,
          description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
          director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
          cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
          genre: ["Animation", "Action", "Adventure", "Science Fiction"],
          tmdb_id: 324857
        },
        "Coraline": {
          id: "Coraline",
          title: "Coraline",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4jeFXQYvNdXLEVBWkZ0PCvVHknc.jpg",
          releaseYear: 2009,
          duration: "1h 40m",
          rating: 4.7,
          description: "An adventurous girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets.",
          director: "Henry Selick",
          cast: ["Dakota Fanning", "Teri Hatcher", "Jennifer Saunders"],
          genre: ["Animation", "Fantasy", "Family"],
          tmdb_id: 14836
        }
      }
    }
  },
  'classic-cinema': {
    id: 'classic-cinema',
    name: "Classic Collection",
    categories: {
      "Golden-Age-Hollywood": {
        "Casablanca": {
          id: "Casablanca",
          title: "Casablanca",
          price: 49.99,
          image: "/images/movies/casablanca.jpg",
          releaseYear: 1942,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "New-Hollywood-Era": {
        "The-Godfather-Series": {
          id: "The-Godfather-Series",
          title: "The Godfather Series",
          price: 49.99,
          image: "/images/movies/godfather.jpg",
          releaseYear: 1972,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Film-Noir-Classics": {
        "The-Maltese-Falcon": {
          id: "The-Maltese-Falcon",
          title: "The Maltese Falcon",
          price: 49.99,
          image: "/images/movies/maltese-falcon.jpg",
          releaseYear: 1941,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "International-Classics": {
        "Seven-Samurai": {
          id: "Seven-Samurai",
          title: "Seven Samurai",
          price: 49.99,
          image: "/images/movies/seven-samurai.jpg",
          releaseYear: 1954,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'modern-classics': {
    id: 'modern-classics',
    name: "Modern Classics (1990s-2020s)",
    categories: {
      "90s-Masterpieces": {
        "Pulp-Fiction": {
          id: "Pulp-Fiction",
          title: "Pulp Fiction",
          price: 49.99,
          image: "/images/movies/pulp-fiction.jpg",
          releaseYear: 1994,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "2000s-Landmarks": {
        "The-Dark-Knight": {
          id: "The-Dark-Knight",
          title: "The Dark Knight",
          price: 49.99,
          image: "/images/movies/dark-knight.jpg",
          releaseYear: 2008,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "2010s-Masterworks": {
        "Inception": {
          id: "Inception",
          title: "Inception",
          price: 49.99,
          image: "/images/movies/inception.jpg",
          releaseYear: 2010,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Recent-Acclaimed": {
        "Everything-Everywhere-All-at-Once": {
          id: "Everything-Everywhere-All-at-Once",
          title: "Everything Everywhere All at Once",
          price: 49.99,
          image: "/images/movies/everything-everywhere.jpg",
          releaseYear: 2022,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'documentary': {
    id: 'documentary',
    name: "Documentary Masterpieces",
    categories: {
      "Nature-&-Science": {
        "Planet-Earth-Series": {
          id: "Planet-Earth-Series",
          title: "Planet Earth Series",
          price: 49.99,
          image: "/images/movies/planet-earth.jpg",
          releaseYear: 2006,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Social-&-Cultural": {
        "Won't-You-Be-My-Neighbor": {
          id: "Won't-You-Be-My-Neighbor",
          title: "Won't You Be My Neighbor?",
          price: 49.99,
          image: "/images/movies/won't-you-be-my-neighbor.jpg",
          releaseYear: 2018,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "True-Crime": {
        "The-Thin-Blue-Line": {
          id: "The-Thin-Blue-Line",
          title: "The Thin Blue Line",
          price: 49.99,
          image: "/images/movies/the-thin-blue-line.jpg",
          releaseYear: 1988,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Music-&-Arts": {
        "What-Happened-Miss-Simone": {
          id: "What-Happened-Miss-Simone",
          title: "What Happened, Miss Simone?",
          price: 49.99,
          image: "/images/movies/what-happened-miss-simone.jpg",
          releaseYear: 2015,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'cult-classics': {
    id: 'cult-classics',
    name: "Cult & Underground Classics",
    categories: {
      "Midnight-Movies": {
        "The-Rocky-Horror-Picture-Show": {
          id: "The-Rocky-Horror-Picture-Show",
          title: "The Rocky Horror Picture Show",
          price: 49.99,
          image: "/images/movies/rocky-horror.jpg",
          releaseYear: 1975,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Cult-Action": {
        "The-Warriors": {
          id: "The-Warriors",
          title: "The Warriors",
          price: 49.99,
          image: "/images/movies/the-warriors.jpg",
          releaseYear: 1979,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Cult-Horror": {
        "Evil-Dead-Series": {
          id: "Evil-Dead-Series",
          title: "Evil Dead Series",
          price: 49.99,
          image: "/images/movies/evil-dead.jpg",
          releaseYear: 1981,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Cult-Comedy": {
        "This-Is-Spinal-Tap": {
          id: "This-Is-Spinal-Tap",
          title: "This Is Spinal Tap",
          price: 49.99,
          image: "/images/movies/this-is-spinal-tap.jpg",
          releaseYear: 1984,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'genre-horror': {
    id: 'genre-horror',
    name: "Horror Collection",
    categories: {
      "Classic-Horror": {
        "The-Exorcist": {
          id: "The-Exorcist",
          title: "The Exorcist",
          price: 49.99,
          image: "/images/movies/the-exorcist.jpg",
          releaseYear: 1973,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Horror": {
        "Get-Out": {
          id: "Get-Out",
          title: "Get Out",
          price: 49.99,
          image: "/images/movies/get-out.jpg",
          releaseYear: 2017,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Supernatural": {
        "The-Conjuring-Universe": {
          id: "The-Conjuring-Universe",
          title: "The Conjuring Universe",
          price: 49.99,
          image: "/images/movies/conjuring.jpg",
          releaseYear: 2013,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Psychological": {
        "Black-Swan": {
          id: "Black-Swan",
          title: "Black Swan",
          price: 49.99,
          image: "/images/movies/black-swan.jpg",
          releaseYear: 2010,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'genre-romance': {
    id: 'genre-romance',
    name: "Romance Collection",
    categories: {
      "Classic-Romance": {
        "Casablanca": {
          id: "Casablanca",
          title: "Casablanca",
          price: 49.99,
          image: "/images/movies/casablanca.jpg",
          releaseYear: 1942,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Romance": {
        "The-Notebook": {
          id: "The-Notebook",
          title: "The Notebook",
          price: 49.99,
          image: "/images/movies/the-notebook.jpg",
          releaseYear: 2004,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Romantic-Comedy": {
        "When-Harry-Met-Sally": {
          id: "When-Harry-Met-Sally",
          title: "When Harry Met Sally",
          price: 49.99,
          image: "/images/movies/when-harry-met-sally.jpg",
          releaseYear: 1989,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "International-Romance": {
        "In-the-Mood-for-Love": {
          id: "In-the-Mood-for-Love",
          title: "In the Mood for Love",
          price: 49.99,
          image: "/images/movies/in-the-mood-for-love.jpg",
          releaseYear: 2000,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'director-showcase': {
    id: 'director-showcase',
    name: "Director Showcases",
    categories: {
      "Christopher-Nolan": {
        "Inception": {
          id: "Inception",
          title: "Inception",
          price: 49.99,
          image: "/images/movies/inception.jpg",
          releaseYear: 2010,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Martin-Scorsese": {
        "Goodfellas": {
          id: "Goodfellas",
          title: "Goodfellas",
          price: 49.99,
          image: "/images/movies/goodfellas.jpg",
          releaseYear: 1990,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Steven-Spielberg": {
        "Jurassic-Park": {
          id: "Jurassic-Park",
          title: "Jurassic Park",
          price: 49.99,
          image: "/images/movies/jurassic-park.jpg",
          releaseYear: 1993,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Quentin-Tarantino": {
        "Pulp-Fiction": {
          id: "Pulp-Fiction",
          title: "Pulp Fiction",
          price: 49.99,
          image: "/images/movies/pulp-fiction.jpg",
          releaseYear: 1994,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'award-winners': {
    id: 'award-winners',
    name: "Award-Winning Cinema",
    categories: {
      "Best-Picture-Oscar-Winners": {
        "CODA-2022": {
          id: "CODA-2022",
          title: "CODA (2022)",
          price: 49.99,
          image: "/images/movies/coda.jpg",
          releaseYear: 2022,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Foreign-Language-Oscar-Winners": {
        "Drive-My-Car-2022": {
          id: "Drive-My-Car-2022",
          title: "Drive My Car (2022)",
          price: 49.99,
          image: "/images/movies/drive-my-car.jpg",
          releaseYear: 2022,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Cannes-Palm-d'Or-Winners": {
        "Triangle-of-Sadness-2022": {
          id: "Triangle-of-Sadness-2022",
          title: "Triangle of Sadness (2022)",
          price: 49.99,
          image: "/images/movies/triangle-of-sadness.jpg",
          releaseYear: 2022,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Venice-Golden-Lion-Winners": {
        "All-the-Beauty-and-the-Bloodshed-2022": {
          id: "All-the-Beauty-and-the-Bloodshed-2022",
          title: "All the Beauty and the Bloodshed (2022)",
          price: 49.99,
          image: "/images/movies/all-the-beauty-and-the-bloodshed.jpg",
          releaseYear: 2022,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'family-children': {
    id: 'family-children',
    name: "Family & Children's Collection",
    categories: {
      "Live-Action-Adventures": {
        "The-Chronicles-of-Narnia-Series": {
          id: "The-Chronicles-of-Narnia-Series",
          title: "The Chronicles of Narnia Series",
          price: 49.99,
          image: "/images/movies/narnia.jpg",
          releaseYear: 2005,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Family-Comedies": {
        "Home-Alone-Series": {
          id: "Home-Alone-Series",
          title: "Home Alone Series",
          price: 49.99,
          image: "/images/movies/home-alone.jpg",
          releaseYear: 1990,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Educational-&-Inspiring": {
        "Hidden-Figures": {
          id: "Hidden-Figures",
          title: "Hidden Figures",
          price: 49.99,
          image: "/images/movies/hidden-figures.jpg",
          releaseYear: 2016,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Holiday-Classics": {
        "The-Polar-Express": {
          id: "The-Polar-Express",
          title: "The Polar Express",
          price: 49.99,
          image: "/images/movies/polar-express.jpg",
          releaseYear: 2004,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'sports-adventure': {
    id: 'sports-adventure',
    name: "Sports & Adventure",
    categories: {
      "Sports-Dramas": {
        "Rocky-Series": {
          id: "Rocky-Series",
          title: "Rocky Series",
          price: 49.99,
          image: "/images/movies/rocky.jpg",
          releaseYear: 1976,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Adventure-Epics": {
        "Indiana-Jones-Series": {
          id: "Indiana-Jones-Series",
          title: "Indiana Jones Series",
          price: 49.99,
          image: "/images/movies/indiana-jones.jpg",
          releaseYear: 1981,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Survival-Stories": {
        "Cast-Away": {
          id: "Cast-Away",
          title: "Cast Away",
          price: 49.99,
          image: "/images/movies/cast-away.jpg",
          releaseYear: 2000,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Extreme-Sports": {
        "Point-Break": {
          id: "Point-Break",
          title: "Point Break",
          price: 49.99,
          image: "/images/movies/point-break.jpg",
          releaseYear: 1991,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'war-films': {
    id: 'war-films',
    name: "War Cinema",
    categories: {
      "World-War-II": {
        "Saving-Private-Ryan": {
          id: "Saving-Private-Ryan",
          title: "Saving Private Ryan",
          price: 49.99,
          image: "/images/movies/saving-private-ryan.jpg",
          releaseYear: 1998,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Warfare": {
        "Black-Hawk-Down": {
          id: "Black-Hawk-Down",
          title: "Black Hawk Down",
          price: 49.99,
          image: "/images/movies/black-hawk-down.jpg",
          releaseYear: 2001,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Vietnam-War": {
        "Apocalypse-Now": {
          id: "Apocalypse-Now",
          title: "Apocalypse Now",
          price: 49.99,
          image: "/images/movies/apocalypse-now.jpg",
          releaseYear: 1979,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "War-&-Society": {
        "The-Deer-Hunter": {
          id: "The-Deer-Hunter",
          title: "The Deer Hunter",
          price: 49.99,
          image: "/images/movies/the-deer-hunter.jpg",
          releaseYear: 1978,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'comedy-classics': {
    id: 'comedy-classics',
    name: "Comedy Collection",
    categories: {
      "Classic-Comedy": {
        "Some-Like-It-Hot": {
          id: "Some-Like-It-Hot",
          title: "Some Like It Hot",
          price: 49.99,
          image: "/images/movies/some-like-it-hot.jpg",
          releaseYear: 1959,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Comedy": {
        "The-Hangover-Series": {
          id: "The-Hangover-Series",
          title: "The Hangover Series",
          price: 49.99,
          image: "/images/movies/the-hangover.jpg",
          releaseYear: 2009,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Romantic-Comedy": {
        "When-Harry-Met-Sally": {
          id: "When-Harry-Met-Sally",
          title: "When Harry Met Sally",
          price: 49.99,
          image: "/images/movies/when-harry-met-sally.jpg",
          releaseYear: 1989,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Parody-&-Satire": {
        "Airplane": {
          id: "Airplane",
          title: "Airplane!",
          price: 49.99,
          image: "/images/movies/airplane.jpg",
          releaseYear: 1980,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'thriller': {
    id: 'thriller',
    name: "Thriller Movies",
    categories: {
      "Psychological-Thrillers": {
        "Gone-Girl": {
          id: "Gone-Girl",
          title: "Gone Girl",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qymaJhucquOApseDHoNVYc1hoZZ.jpg",
          releaseYear: 2014,
          duration: "2h 29m",
          rating: 4.8,
          description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
          director: "David Fincher",
          cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"],
          genre: ["Drama", "Thriller", "Mystery"],
          tmdb_id: 210577
        }
      }
    }
  },
  'filmnoir': {
    id: 'filmnoir',
    name: "Film Noir Collection",
    categories: {
      "Classic-Noir": {
        "Double-Indemnity": {
          id: "Double-Indemnity",
          title: "Double Indemnity",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qvqyDj34Uivf1aXvdzhwCzOvRHr.jpg",
          releaseYear: 1944,
          duration: "1h 47m",
          rating: 4.8,
          description: "An insurance representative lets himself be talked by a seductive housewife into a murder/insurance fraud scheme that arouses the suspicion of an insurance investigator.",
          director: "Billy Wilder",
          cast: ["Fred MacMurray", "Barbara Stanwyck", "Edward G. Robinson"],
          genre: ["Crime", "Drama", "Film-Noir", "Mystery"],
          tmdb_id: 996
        }
      }
    }
  },
  'musicals': {
    id: 'musicals',
    name: "Musical Collection",
    categories: {
      "Classic-Musicals": {
        "Singin-in-the-Rain": {
          id: "Singin-in-the-Rain",
          title: "Singin' in the Rain",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/w03EiUVwFfy5nqVqGwpZGFt7Hgk.jpg",
          releaseYear: 1952,
          duration: "1h 43m",
          rating: 4.8,
          description: "A silent film production company and cast make a difficult transition to sound.",
          director: "Stanley Donen, Gene Kelly",
          cast: ["Gene Kelly", "Donald O'Connor", "Debbie Reynolds"],
          genre: ["Comedy", "Musical", "Romance"],
          tmdb_id: 872
        },
        "The-Sound-of-Music": {
          id: "The-Sound-of-Music",
          title: "The Sound of Music",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kRGbwPIyLKlKBR0gNcTiCvmZH8F.jpg",
          releaseYear: 1965,
          duration: "2h 54m",
          rating: 4.8,
          description: "A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
          director: "Robert Wise",
          cast: ["Julie Andrews", "Christopher Plummer", "Eleanor Parker"],
          genre: ["Drama", "Family", "Musical"],
          tmdb_id: 15121
        }
      },
      "Modern-Musicals": {
        "La-La-Land": {
          id: "La-La-Land",
          title: "La La Land",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
          releaseYear: 2016,
          duration: "2h 8m",
          rating: 4.8,
          description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
          director: "Damien Chazelle",
          cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
          genre: ["Comedy", "Drama", "Music", "Romance"],
          tmdb_id: 313369
        },
        "Les-Miserables": {
          id: "Les-Miserables",
          title: "Les Misérables",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/90PpcfqHWdR4kHFhBBGbaSIO7ny.jpg",
          releaseYear: 2012,
          duration: "2h 38m",
          rating: 4.7,
          description: "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter.",
          director: "Tom Hooper",
          cast: ["Hugh Jackman", "Russell Crowe", "Anne Hathaway"],
          genre: ["Drama", "History", "Musical"],
          tmdb_id: 82695
        }
      },
      "Contemporary-Musical-Drama": {
        "A-Star-Is-Born": {
          id: "A-Star-Is-Born",
          title: "A Star Is Born",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
          releaseYear: 2018,
          duration: "2h 16m",
          rating: 4.7,
          description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
          director: "Bradley Cooper",
          cast: ["Bradley Cooper", "Lady Gaga", "Sam Elliott"],
          genre: ["Drama", "Music", "Romance"],
          tmdb_id: 332562
        },
        "The-Greatest-Showman": {
          id: "The-Greatest-Showman",
          title: "The Greatest Showman",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
          releaseYear: 2017,
          duration: "1h 45m",
          rating: 4.7,
          description: "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
          director: "Michael Gracey",
          cast: ["Hugh Jackman", "Michelle Williams", "Zac Efron"],
          genre: ["Biography", "Drama", "Musical"],
          tmdb_id: 316029
        }
      }
    }
  },
  'experimental': {
    id: 'experimental',
    name: "Experimental & Avant-garde",
    categories: {
      "Surrealist-Cinema": {
        "Un-Chien-Andalou": {
          id: "Un-Chien-Andalou",
          title: "Un Chien Andalou",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/42WDqnRXEidUwNoYCVqzqnXvfn.jpg",
          releaseYear: 1929,
          duration: "16m",
          rating: 4.5,
          description: "Luis Buñuel and Salvador Dalí present seventeen minutes of bizarre, surreal imagery.",
          director: "Luis Buñuel",
          cast: ["Pierre Batcheff", "Simone Mareuil", "Luis Buñuel"],
          genre: ["Fantasy", "Horror", "Experimental"],
          tmdb_id: 626
        },
        "Eraserhead": {
          id: "Eraserhead",
          title: "Eraserhead",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4yiF85qCqbEzuPRYfOnJHQtOcHt.jpg",
          releaseYear: 1977,
          duration: "1h 29m",
          rating: 4.6,
          description: "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
          director: "David Lynch",
          cast: ["Jack Nance", "Charlotte Stewart", "Allen Joseph"],
          genre: ["Horror", "Experimental"],
          tmdb_id: 985
        }
      },
      "Avant-Garde": {
        "The-Holy-Mountain": {
          id: "The-Holy-Mountain",
          title: "The Holy Mountain",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/nLYKzDQOYT5sENkoYZKWXsIHXdX.jpg",
          releaseYear: 1973,
          duration: "1h 54m",
          rating: 4.7,
          description: "In a corrupt, greed-fueled world, a powerful alchemist leads a Christ-like character and seven materialistic figures to the Holy Mountain, where they hope to achieve enlightenment.",
          director: "Alejandro Jodorowsky",
          cast: ["Alejandro Jodorowsky", "Horacio Salinas", "Zamira Saunders"],
          genre: ["Fantasy", "Art House", "Adventure"],
          tmdb_id: 8327
        },
        "Koyaanisqatsi": {
          id: "Koyaanisqatsi",
          title: "Koyaanisqatsi",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/bT3IbCSpPXs8yBoFHRNhqV5qGDt.jpg",
          releaseYear: 1982,
          duration: "1h 26m",
          rating: 4.7,
          description: "A collection of expertly photographed phenomena with no conventional plot. The footage focuses on nature, humanity, and the relationship between them.",
          director: "Godfrey Reggio",
          cast: ["Lou Dobbs", "Ted Koppel"],
          genre: ["Documentary", "Music", "Experimental"],
          tmdb_id: 13392
        }
      },
      "Modern-Experimental": {
        "Enter-the-Void": {
          id: "Enter-the-Void",
          title: "Enter the Void",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/zDTkQxMZJRrw5nzJ3x8dlXWkJZD.jpg",
          releaseYear: 2009,
          duration: "2h 41m",
          rating: 4.6,
          description: "A French drug dealer living in Tokyo is betrayed by his best friend and killed in a drug deal. His soul, observing the repercussions of his death, seeks resurrection.",
          director: "Gaspar Noé",
          cast: ["Nathaniel Brown", "Paz de la Huerta", "Cyril Roy"],
          genre: ["Drama", "Fantasy", "Experimental"],
          tmdb_id: 34647
        },
        "Upstream-Color": {
          id: "Upstream-Color",
          title: "Upstream Color",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/gP5a4mGWqkxYcqSZ8nKpBTZUxkL.jpg",
          releaseYear: 2013,
          duration: "1h 36m",
          rating: 4.5,
          description: "A man and woman are drawn together, entangled in the life cycle of an ageless organism. Identity becomes an illusion as they struggle to assemble the loose fragments of wrecked lives.",
          director: "Shane Carruth",
          cast: ["Amy Seimetz", "Shane Carruth", "Andrew Sensenig"],
          genre: ["Drama", "Science Fiction", "Experimental"],
          tmdb_id: 159313
        }
      }
    }
  },
  'asian-action': {
    id: 'asian-action',
    name: "Asian Action Cinema",
    categories: {
      "Martial-Arts-Classics": {
        "Enter-the-Dragon": {
          id: "Enter-the-Dragon",
          title: "Enter the Dragon",
          price: 49.99,
          image: "/images/movies/enter-the-dragon.jpg",
          releaseYear: 1973,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Martial-Arts": {
        "Crouching-Tiger-Hidden-Dragon": {
          id: "Crouching-Tiger-Hidden-Dragon",
          title: "Crouching Tiger, Hidden Dragon",
          price: 49.99,
          image: "/images/movies/crouching-tiger-hidden-dragon.jpg",
          releaseYear: 2000,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Korean-Action": {
        "Oldboy": {
          id: "Oldboy",
          title: "Oldboy",
          price: 49.99,
          image: "/images/movies/oldboy.jpg",
          releaseYear: 2003,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Japanese-Action": {
        "13-Assassins": {
          id: "13-Assassins",
          title: "13 Assassins",
          price: 49.99,
          image: "/images/movies/13-assassins.jpg",
          releaseYear: 2010,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'crime-gangster': {
    id: 'crime-gangster',
    name: "Crime & Gangster Films",
    categories: {
      "Classic-Gangster": {
        "The-Godfather-Trilogy": {
          id: "The-Godfather-Trilogy",
          title: "The Godfather Trilogy",
          price: 49.99,
          image: "/images/movies/godfather.jpg",
          releaseYear: 1972,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Crime": {
        "The-Departed": {
          id: "The-Departed",
          title: "The Departed",
          price: 49.99,
          image: "/images/movies/the-departed.jpg",
          releaseYear: 2006,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Heist-Films": {
        "Ocean's-Series": {
          id: "Ocean's-Series",
          title: "Ocean's Series",
          price: 49.99,
          image: "/images/movies/oceans.jpg",
          releaseYear: 1999,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "True-Crime": {
        "The-Wolf-of-Wall-Street": {
          id: "The-Wolf-of-Wall-Street",
          title: "The Wolf of Wall Street",
          price: 49.99,
          image: "/images/movies/the-wolf-of-wall-street.jpg",
          releaseYear: 2013,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'fantasy': {
    id: 'fantasy',
    name: "Fantasy Collection",
    categories: {
      "Epic-Fantasy": {
        "The-Lord-of-the-Rings-Trilogy": {
          id: "The-Lord-of-the-Rings-Trilogy",
          title: "The Lord of the Rings Trilogy",
          price: 49.99,
          image: "/images/movies/narnia.jpg",
          releaseYear: 2001,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Urban-Fantasy": {
        "Harry-Potter-Series": {
          id: "Harry-Potter-Series",
          title: "Harry Potter Series",
          price: 49.99,
          image: "/images/movies/harry-potter.jpg",
          releaseYear: 2001,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Dark-Fantasy": {
        "The-Dark-Crystal": {
          id: "The-Dark-Crystal",
          title: "The Dark Crystal",
          price: 49.99,
          image: "/images/movies/the-dark-crystal.jpg",
          releaseYear: 1982,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Mythological": {
        "Clash-of-the-Titans": {
          id: "Clash-of-the-Titans",
          title: "Clash of the Titans",
          price: 49.99,
          image: "/images/movies/clash-of-the-titans.jpg",
          releaseYear: 1981,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'historical-epics': {
    id: 'historical-epics',
    name: "Historical Epics",
    categories: {
      "Ancient-World": {
        "Gladiator": {
          id: "Gladiator",
          title: "Gladiator",
          price: 49.99,
          image: "/images/movies/gladiator.jpg",
          releaseYear: 2000,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Medieval": {
        "Braveheart": {
          id: "Braveheart",
          title: "Braveheart",
          price: 49.99,
          image: "/images/movies/braveheart.jpg",
          releaseYear: 1995,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Renaissance-&-Colonial": {
        "The-Last-of-the-Mohicans": {
          id: "The-Last-of-the-Mohicans",
          title: "The Last of the Mohicans",
          price: 49.99,
          image: "/images/movies/last-of-the-mohicans.jpg",
          releaseYear: 1992,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-History": {
        "Lawrence-of-Arabia": {
          id: "Lawrence-of-Arabia",
          title: "Lawrence of Arabia",
          price: 49.99,
          image: "/images/movies/lawrence-of-arabia.jpg",
          releaseYear: 1962,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'biographical': {
    id: 'biographical',
    name: "Biographical Films",
    categories: {
      "Artists-&-Musicians": {
        "Amadeus": {
          id: "Amadeus",
          title: "Amadeus",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/rQzm4c5v0zKlZaP6Qd4F1DtcKQh.jpg",
          releaseYear: 1984,
          duration: "2h 40m",
          rating: 4.8,
          description: "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
          director: "Milos Forman",
          cast: ["F. Murray Abraham", "Tom Hulce", "Elizabeth Berridge"],
          genre: ["Biography", "Drama", "History", "Music"],
          tmdb_id: 279
        },
        "Bohemian-Rhapsody": {
          id: "Bohemian-Rhapsody",
          title: "Bohemian Rhapsody",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
          releaseYear: 2018,
          duration: "2h 14m",
          rating: 4.7,
          description: "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid in 1985.",
          director: "Bryan Singer",
          cast: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 424694
        }
      },
      "Political-Figures": {
        "Lincoln": {
          id: "Lincoln",
          title: "Lincoln",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/zQXioqxlhqGXHR0ZR4K3EJZD3mj.jpg",
          releaseYear: 2012,
          duration: "2h 30m",
          rating: 4.8,
          description: "As the American Civil War continues to rage, America's president struggles with continuing carnage on the battlefield as he fights with many inside his own cabinet on the decision to emancipate the slaves.",
          director: "Steven Spielberg",
          cast: ["Daniel Day-Lewis", "Sally Field", "David Strathairn"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 72976
        },
        "The-Kings-Speech": {
          id: "The-Kings-Speech",
          title: "The King's Speech",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/uQ538BwwHHBwkHo8rWEwxrgQNFh.jpg",
          releaseYear: 2010,
          duration: "1h 58m",
          rating: 4.8,
          description: "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
          director: "Tom Hooper",
          cast: ["Colin Firth", "Geoffrey Rush", "Helena Bonham Carter"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 45269
        }
      },
      "Scientists-&-Innovators": {
        "The-Theory-of-Everything": {
          id: "The-Theory-of-Everything",
          title: "The Theory of Everything",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4jspr8hLLuju59UKiBF2c8tUeJN.jpg",
          releaseYear: 2014,
          duration: "2h 3m",
          rating: 4.7,
          description: "A look at the relationship between the famous physicist Stephen Hawking and his wife Jane Wilde Hawking, from their meeting at Cambridge University through his diagnosis with motor neuron disease.",
          director: "James Marsh",
          cast: ["Eddie Redmayne", "Felicity Jones", "Tom Prior"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 266856
        },
        "The-Imitation-Game": {
          id: "The-Imitation-Game",
          title: "The Imitation Game",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
          releaseYear: 2014,
          duration: "1h 54m",
          rating: 4.8,
          description: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
          director: "Morten Tyldum",
          cast: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"],
          genre: ["Biography", "Drama", "Thriller", "War"],
          tmdb_id: 205596
        }
      }
    }
  },
  'teen-coming-age': {
    id: 'teen-coming-age',
    name: "Teen & Coming of Age",
    categories: {
      "Classic-Coming-of-Age": {
        "Stand-By-Me": {
          id: "Stand-By-Me",
          title: "Stand By Me",
          price: 49.99,
          image: "/images/movies/stand-by-me.jpg",
          releaseYear: 1986,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Modern-Teen": {
        "Lady-Bird": {
          id: "Lady-Bird",
          title: "Lady Bird",
          price: 49.99,
          image: "/images/movies/lady-bird.jpg",
          releaseYear: 2017,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "High-School-Stories": {
        "Mean-Girls": {
          id: "Mean-Girls",
          title: "Mean Girls",
          price: 49.99,
          image: "/images/movies/mean-girls.jpg",
          releaseYear: 2004,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "International-Coming-of-Age": {
        "Y-Tu-Mamá-También": {
          id: "Y-Tu-Mamá-También",
          title: "Y Tu Mamá También",
          price: 49.99,
          image: "/images/movies/y-tu-mamá-también.jpg",
          releaseYear: 2002,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  },
  'political-thriller': {
    id: 'political-thriller',
    name: "Political Thrillers",
    categories: {
      "Conspiracy": {
        "All-the-President's-Men": {
          id: "All-the-President's-Men",
          title: "All the President's Men",
          price: 49.99,
          image: "/images/movies/all-the-presidents-men.jpg",
          releaseYear: 1976,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Espionage": {
        "Bridge-of-Spies": {
          id: "Bridge-of-Spies",
          title: "Bridge of Spies",
          price: 49.99,
          image: "/images/movies/bridge-of-spies.jpg",
          releaseYear: 2015,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "Political-Drama": {
        "The-Post": {
          id: "The-Post",
          title: "The Post",
          price: 49.99,
          image: "/images/movies/the-post.jpg",
          releaseYear: 2017,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      },
      "International-Politics": {
        "Eye-in-the-Sky": {
          id: "Eye-in-the-Sky",
          title: "Eye in the Sky",
          price: 49.99,
          image: "/images/movies/eye-in-the-sky.jpg",
          releaseYear: 2015,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"]
        },
        // Add more movies...
      }
    }
  }
}

export default collections;
