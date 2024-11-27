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
          image: "https://image.tmdb.org/t/p/w500/m1b9toZe5C68mDdYpadrxkUnqPb.jpg",
          releaseYear: 2023,
          duration: "2h 28m",
          rating: 4.7,
          description: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
          director: "Siddharth Anand",
          cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
          genre: ["Action", "Thriller"],
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
          image: "https://image.tmdb.org/t/p/w500/4NVF5Ej4df1r4eIigf1gwc2m6g0.jpg",
          releaseYear: 2017,
          duration: "2h 41m",
          rating: 4.7,
          description: "When a group of Indian and Pakistani nurses are held hostage in Iraq by a terrorist organization, a secret agent is drawn out of hiding to rescue them.",
          director: "Ali Abbas Zafar",
          cast: ["Salman Khan", "Katrina Kaif", "Paresh Rawal"],
          genre: ["Action", "Thriller"],
          tmdb_id: 450465
        },
        "Dhoom-3": {
          id: "Dhoom-3",
          title: "Dhoom 3",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/1hK4PWjjRGXkdyOfa8UQs7HQhU9.jpg",
          releaseYear: 2013,
          duration: "2h 52m",
          rating: 4.6,
          description: "A circus entertainer steals from a corrupt bank in Chicago as revenge for his father's death.",
          director: "Vijay Krishna Acharya",
          cast: ["Aamir Khan", "Abhishek Bachchan", "Katrina Kaif"],
          genre: ["Action", "Thriller"],
          tmdb_id: 207932
        },
        "Bang-Bang": {
          id: "Bang-Bang",
          title: "Bang Bang",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/aqmVvYP3UUjgVgKkHDzRxQ9Rkc.jpg",
          releaseYear: 2014,
          duration: "2h 33m",
          rating: 4.5,
          description: "A young bank receptionist gets mixed up with a mysterious thief, who has several governments on his trail.",
          director: "Siddharth Anand",
          cast: ["Hrithik Roshan", "Katrina Kaif", "Danny Denzongpa"],
          genre: ["Action", "Comedy", "Romance"],
          tmdb_id: 297090
        },
        "Ek-Tha-Tiger": {
          id: "Ek-Tha-Tiger",
          title: "Ek Tha Tiger",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4zQYMVv0k1g0oY0KJFqHGQyKLuX.jpg",
          releaseYear: 2012,
          duration: "2h 12m",
          rating: 4.6,
          description: "India's top spy Tiger and ISI agent Zoya fall in love during an investigation and what follows forms the crux of the story.",
          director: "Kabir Khan",
          cast: ["Salman Khan", "Katrina Kaif", "Ranvir Shorey"],
          genre: ["Action", "Romance", "Thriller"],
          tmdb_id: 125947
        },
        "Krrish": {
          id: "Krrish",
          title: "Krrish",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/komBnpwR8yVjYxkNwh1YkPSOgmE.jpg",
          releaseYear: 2006,
          duration: "2h 35m",
          rating: 4.5,
          description: "Krishna is forced by circumstances to use his superpowers and become a superhero, but he must also keep his identity secret from the world.",
          director: "Rakesh Roshan",
          cast: ["Hrithik Roshan", "Priyanka Chopra", "Naseeruddin Shah"],
          genre: ["Action", "Sci-Fi"],
          tmdb_id: 14286
        },
        "Sholay": {
          id: "Sholay",
          title: "Sholay",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/2gJxuEdJn8GVV7EK8yDmTZd7Mp4.jpg",
          releaseYear: 1975,
          duration: "3h 24m",
          rating: 4.9,
          description: "Two ex-convicts are hired by a retired police officer to capture a ruthless bandit terrorizing the countryside. A landmark film that defined the 'curry western' genre.",
          director: "Ramesh Sippy",
          cast: ["Dharmendra", "Amitabh Bachchan", "Sanjeev Kumar", "Hema Malini", "Amjad Khan"],
          genre: ["Action", "Adventure", "Drama"],
          tmdb_id: 20453
        },
        "Deewaar": {
          id: "Deewaar",
          title: "Deewaar",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/A8PHzQmDzHOvf6vWawc2QkuqVb9.jpg",
          releaseYear: 1975,
          duration: "2h 54m",
          rating: 4.8,
          description: "A powerful crime drama about two brothers on opposite sides of the law. One of the defining films of Amitabh Bachchan's 'angry young man' persona.",
          director: "Yash Chopra",
          cast: ["Amitabh Bachchan", "Shashi Kapoor", "Nirupa Roy"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 47904
        },
        "Don": {
          id: "Don",
          title: "Don",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3zWqRNRb7iJBqFWgZPqJAFlCg8p.jpg",
          releaseYear: 1978,
          duration: "2h 45m",
          rating: 4.8,
          description: "A simple look-alike is recruited to impersonate a powerful crime boss. The original classic that spawned multiple remakes.",
          director: "Chandra Barot",
          cast: ["Amitabh Bachchan", "Zeenat Aman", "Pran"],
          genre: ["Action", "Crime", "Thriller"],
          tmdb_id: 40090
        },
        "Zanjeer": {
          id: "Zanjeer",
          title: "Zanjeer",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9M8qHJkRBHYBxmKxUqCLGTjGfxL.jpg",
          releaseYear: 1973,
          duration: "2h 26m",
          rating: 4.7,
          description: "The film that established Amitabh Bachchan as the 'angry young man' of Bollywood. A honest police officer seeks revenge against the criminal who killed his parents.",
          director: "Prakash Mehra",
          cast: ["Amitabh Bachchan", "Jaya Bhaduri", "Pran"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 50312
        },
        "Amar-Akbar-Anthony": {
          id: "Amar-Akbar-Anthony",
          title: "Amar Akbar Anthony",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tRRqV1YhGkMqRgHyuNxZANnRj0h.jpg",
          releaseYear: 1977,
          duration: "2h 55m",
          rating: 4.8,
          description: "Three brothers separated in childhood reunite as adults, unaware of their relationship. A perfect blend of action, comedy and drama.",
          director: "Manmohan Desai",
          cast: ["Amitabh Bachchan", "Vinod Khanna", "Rishi Kapoor"],
          genre: ["Action", "Comedy", "Drama"],
          tmdb_id: 51686
        },
        "Muqaddar-Ka-Sikandar": {
          id: "Muqaddar-Ka-Sikandar",
          title: "Muqaddar Ka Sikandar",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/7VJqP1Xz8iYtjhXTM9O7yWvZcVx.jpg",
          releaseYear: 1978,
          duration: "2h 45m",
          rating: 4.7,
          description: "A classic tale of an orphan who rises to power but faces tragic consequences in love. Features iconic action sequences and memorable music.",
          director: "Prakash Mehra",
          cast: ["Amitabh Bachchan", "Raakhee", "Vinod Khanna"],
          genre: ["Action", "Drama", "Romance"],
          tmdb_id: 51693
        },
        "Mr-India": {
          id: "Mr-India",
          title: "Mr. India",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qx4rZwlmqLHVWgqt1CkXgGPuJJU.jpg",
          releaseYear: 1987,
          duration: "2h 59m",
          rating: 4.8,
          description: "A poor but big-hearted man takes orphans into his home. After discovering his scientist father's invention of an invisibility device, he fights to save his children and the country from a megalomaniac.",
          director: "Shekhar Kapur",
          cast: ["Anil Kapoor", "Sridevi", "Amrish Puri"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 45041
        },
        "Trishul": {
          id: "Trishul",
          title: "Trishul",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9M3mKYvHAyBZ9tol6FbAMDhPABz.jpg",
          releaseYear: 1978,
          duration: "2h 57m",
          rating: 4.7,
          description: "A man seeks revenge against his father who abandoned his mother before his birth. Features intense action and powerful dramatic performances.",
          director: "Yash Chopra",
          cast: ["Amitabh Bachchan", "Sanjeev Kumar", "Shashi Kapoor", "Raakhee"],
          genre: ["Action", "Drama", "Family"],
          tmdb_id: 51697
        },
        "Shakti": {
          id: "Shakti",
          title: "Shakti",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5XrVqwaiMxXF75m3qYNNZ4xjCOg.jpg",
          releaseYear: 1982,
          duration: "2h 45m",
          rating: 4.8,
          description: "The clash between a father's duty as a police officer and his son's criminal path. A landmark film featuring two generations of legendary actors.",
          director: "Ramesh Sippy",
          cast: ["Dilip Kumar", "Amitabh Bachchan", "Raakhee", "Smita Patil"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 51694
        },
        "Coolie": {
          id: "Coolie",
          title: "Coolie",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tVz9K9wH8QO8SZL1Gw6aBdrXJBX.jpg",
          releaseYear: 1983,
          duration: "2h 40m",
          rating: 4.6,
          description: "A railway porter fights against social injustice and a powerful crime syndicate. Famous for its action sequences and the real-life accident that nearly cost Amitabh Bachchan his life during filming.",
          director: "Manmohan Desai",
          cast: ["Amitabh Bachchan", "Rishi Kapoor", "Rati Agnihotri"],
          genre: ["Action", "Drama", "Romance"],
          tmdb_id: 51688
        },
        "Mard": {
          id: "Mard",
          title: "Mard",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kxng6uPyYPSxiCYLXzGAzf9kOAm.jpg",
          releaseYear: 1985,
          duration: "2h 51m",
          rating: 4.6,
          description: "A period action drama about a freedom fighter's son who takes on British colonials and local collaborators. Known for its larger-than-life action sequences.",
          director: "Manmohan Desai",
          cast: ["Amitabh Bachchan", "Amrita Singh", "Nirupa Roy"],
          genre: ["Action", "Drama", "History"],
          tmdb_id: 51691
        },
        "Shahenshah": {
          id: "Shahenshah",
          title: "Shahenshah",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9pHXzb3MtH7NyXwE7kpL5Z2wVY8.jpg",
          releaseYear: 1988,
          duration: "2h 35m",
          rating: 4.7,
          description: "A corrupt police inspector's son leads a double life - a meek officer by day and a vigilante by night. Famous for its iconic dialogue and costume design.",
          director: "Tinnu Anand",
          cast: ["Amitabh Bachchan", "Meenakshi Sheshadri", "Amrish Puri"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 51696
        },
        "Naseeb": {
          id: "Naseeb",
          title: "Naseeb",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tZWXqBWMNxQRtjqtPWrE5icbBTY.jpg",
          releaseYear: 1981,
          duration: "2h 55m",
          rating: 4.6,
          description: "A waiter seeks justice for his friends who were cheated out of their share in a lottery ticket. Features innovative action sequences including the famous revolving restaurant fight scene.",
          director: "Manmohan Desai",
          cast: ["Amitabh Bachchan", "Hema Malini", "Rishi Kapoor"],
          genre: ["Action", "Drama", "Musical"],
          tmdb_id: 51692
        },
        "Kaalia": {
          id: "Kaalia",
          title: "Kaalia",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kZGfx5JCYunqGZ0z0y0DnLPEgEt.jpg",
          releaseYear: 1981,
          duration: "2h 45m",
          rating: 4.6,
          description: "A man seeks revenge against a corrupt businessman who framed him for a crime he didn't commit. Features iconic dialogues and action sequences.",
          director: "Tinnu Anand",
          cast: ["Amitabh Bachchan", "Parveen Babi", "Amjad Khan"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 51689
        },
        "Karma": {
          id: "Karma",
          title: "Karma",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/7XJwqpjdz1mN7MKz2VuiKjuoVXw.jpg",
          releaseYear: 1986,
          duration: "2h 54m",
          rating: 4.7,
          description: "A jailer recruits three death-row inmates to fight terrorism. Notable for bringing together three generations of leading actors.",
          director: "Subhash Ghai",
          cast: ["Dilip Kumar", "Nutan", "Jackie Shroff", "Anil Kapoor"],
          genre: ["Action", "Drama", "Thriller"],
          tmdb_id: 51695
        }
      },
      "Crime-Action": {
        "Satya": {
          id: "Satya",
          title: "Satya",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5UQPSvZg1HxJMUYvxYwOPbTBVOX.jpg",
          releaseYear: 1998,
          duration: "2h 50m",
          rating: 4.8,
          description: "A migrant arrives in Mumbai and gets pulled into the underworld. Considered a landmark film in Indian gangster cinema.",
          director: "Ram Gopal Varma",
          cast: ["J.D. Chakravarthy", "Manoj Bajpayee", "Urmila Matondkar"],
          genre: ["Crime", "Drama", "Action"],
          tmdb_id: 51699
        },
        "Company": {
          id: "Company",
          title: "Company",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9QqBcYKHrUJkpRaJJrvP3GgGR6D.jpg",
          releaseYear: 2002,
          duration: "2h 35m",
          rating: 4.7,
          description: "A realistic look at Mumbai's underworld and the rise and fall of a gangster. Known for its gritty realism and powerful performances.",
          director: "Ram Gopal Varma",
          cast: ["Ajay Devgn", "Vivek Oberoi", "Manisha Koirala"],
          genre: ["Crime", "Drama", "Thriller"],
          tmdb_id: 51701
        },
        "Vaastav": {
          id: "Vaastav",
          title: "Vaastav: The Reality",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/A8CHRUIXoKJqXrz4VVLXgBKvHjF.jpg",
          releaseYear: 1999,
          duration: "2h 25m",
          rating: 4.8,
          description: "A common man's descent into the Mumbai underworld. Acclaimed for its realistic portrayal of gangster life and social commentary.",
          director: "Mahesh Manjrekar",
          cast: ["Sanjay Dutt", "Namrata Shirodkar", "Mohnish Bahl"],
          genre: ["Crime", "Drama", "Action"],
          tmdb_id: 51702
        },
        "Parinda": {
          id: "Parinda",
          title: "Parinda",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tYz4gMTM3tqUGGYS0mGHQK7Qh4x.jpg",
          releaseYear: 1989,
          duration: "2h 35m",
          rating: 4.8,
          description: "Two brothers find themselves on opposite sides of the law in this groundbreaking gangster film that redefined the genre in Indian cinema.",
          director: "Vidhu Vinod Chopra",
          cast: ["Jackie Shroff", "Anil Kapoor", "Nana Patekar", "Madhuri Dixit"],
          genre: ["Crime", "Drama", "Action"],
          tmdb_id: 51703
        },
        "Ardh-Satya": {
          id: "Ardh-Satya",
          title: "Ardh Satya",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
          releaseYear: 1983,
          duration: "2h 12m",
          rating: 4.9,
          description: "A honest police officer struggles with the corruption within the system and his own inner demons. Considered one of the finest police dramas ever made in India.",
          director: "Govind Nihalani",
          cast: ["Om Puri", "Smita Patil", "Sadashiv Amrapurkar"],
          genre: ["Crime", "Drama", "Action"],
          tmdb_id: 51704
        },
        "Once-Upon-a-Time-in-Mumbai": {
          id: "Once-Upon-a-Time-in-Mumbai",
          title: "Once Upon a Time in Mumbai",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5jvxEXqEr9uPxGBiJvYYWanxRkh.jpg",
          releaseYear: 2010,
          duration: "2h 14m",
          rating: 4.7,
          description: "A retelling of Mumbai's gangster history from the 70s to 80s, chronicling the rise and fall of a smuggler turned gangster.",
          director: "Milan Luthria",
          cast: ["Ajay Devgn", "Emraan Hashmi", "Kangana Ranaut"],
          genre: ["Crime", "Drama", "Action"],
          tmdb_id: 51705
        },
        "Ab-Tak-Chhappan": {
          id: "Ab-Tak-Chhappan",
          title: "Ab Tak Chhappan",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3KR6RDd7ZxV5LVTqFQtGYP5HF1X.jpg",
          releaseYear: 2004,
          duration: "2h 8m",
          rating: 4.7,
          description: "Based on real-life encounter specialist Daya Nayak, this film follows a police officer famous for his record of eliminating criminals in encounters.",
          director: "Shimit Amin",
          cast: ["Nana Patekar", "Revathi", "Mohan Agashe"],
          genre: ["Crime", "Action", "Thriller"],
          tmdb_id: 51706
        },
        "Gangaajal": {
          id: "Gangaajal",
          title: "Gangaajal",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
          releaseYear: 2003,
          duration: "2h 30m",
          rating: 4.7,
          description: "An honest SP tries to reform a corrupt police force in Bihar while dealing with political interference and criminal elements.",
          director: "Prakash Jha",
          cast: ["Ajay Devgn", "Gracy Singh", "Mohan Joshi"],
          genre: ["Crime", "Drama", "Action"],
          tmdb_id: 51707
        },
        "D-Day": {
          id: "D-Day",
          title: "D-Day",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9EpQGQQ4YjH1ZqU5vMPPxJ8nKGh.jpg",
          releaseYear: 2013,
          duration: "2h 20m",
          rating: 4.6,
          description: "Indian intelligence agents embark on a covert mission to bring back India's most wanted criminal from Pakistan.",
          director: "Nikhil Advani",
          cast: ["Rishi Kapoor", "Irrfan Khan", "Arjun Rampal"],
          genre: ["Crime", "Action", "Thriller"],
          tmdb_id: 51708
        },
        "Black-Friday": {
          id: "Black-Friday",
          title: "Black Friday",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ3gPwfHpgJe5Ux7QHbcxHqQpN9.jpg",
          releaseYear: 2004,
          duration: "2h 43m",
          rating: 4.8,
          description: "Based on the 1993 Mumbai bombings, this film chronicles the events leading up to the blasts and the subsequent police investigation.",
          director: "Anurag Kashyap",
          cast: ["Kay Kay Menon", "Pavan Malhotra", "Aditya Srivastava"],
          genre: ["Crime", "Drama", "Thriller"],
          tmdb_id: 51709
        },
        "Shootout-at-Lokhandwala": {
          id: "Shootout-at-Lokhandwala",
          title: "Shootout at Lokhandwala",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kR7bxXgIYr8yWy7QvhAFhGp6PJv.jpg",
          releaseYear: 2007,
          duration: "2h 2m",
          rating: 4.6,
          description: "Based on a real-life Mumbai police encounter, this film depicts the famous 1991 Lokhandwala Complex shootout.",
          director: "Apoorva Lakhia",
          cast: ["Amitabh Bachchan", "Sanjay Dutt", "Vivek Oberoi"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 51710
        },
        "Maqbool": {
          id: "Maqbool",
          title: "Maqbool",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tYcmVKvqbXPxvRqz8Qb8RF8qwMy.jpg",
          releaseYear: 2003,
          duration: "2h 12m",
          rating: 4.7,
          description: "An adaptation of Shakespeare's Macbeth set in the Mumbai underworld, exploring power, betrayal, and conscience.",
          director: "Vishal Bhardwaj",
          cast: ["Irrfan Khan", "Tabu", "Pankaj Kapur"],
          genre: ["Crime", "Drama", "Thriller"],
          tmdb_id: 51711
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
        },
        "Kahaani": {
          id: "Kahaani",
          title: "Kahaani",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
          releaseYear: 2012,
          duration: "2h 2m",
          rating: 4.8,
          description: "A pregnant woman's search for her missing husband takes her from London to Kolkata, where she uncovers a deeper conspiracy.",
          director: "Sujoy Ghosh",
          cast: ["Vidya Balan", "Parambrata Chatterjee", "Nawazuddin Siddiqui"],
          genre: ["Mystery", "Thriller"],
          tmdb_id: 51712
        },
        "Talaash": {
          id: "Talaash",
          title: "Talaash",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yqWr7fzGc0JGGTZZrZHEUSNVKj7.jpg",
          releaseYear: 2012,
          duration: "2h 20m",
          rating: 4.7,
          description: "A police officer must confront his past while investigating a high-profile murder case that leads him into Mumbai's dark underbelly.",
          director: "Reema Kagti",
          cast: ["Aamir Khan", "Kareena Kapoor", "Rani Mukerji"],
          genre: ["Crime", "Drama", "Mystery"],
          tmdb_id: 51713
        },
        "Drishyam-2": {
          id: "Drishyam-2",
          title: "Drishyam 2",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9KQDhqJ9pHXgHV4KlxPxD5T4yJ9.jpg",
          releaseYear: 2015,
          duration: "2h 43m",
          rating: 4.8,
          description: "A simple family man's life turns upside down when his family gets entangled in a crime. His desperate measures to protect them lead to an intense cat-and-mouse game.",
          director: "Nishikant Kamat",
          cast: ["Ajay Devgn", "Tabu", "Shriya Saran"],
          genre: ["Crime", "Drama", "Mystery"],
          tmdb_id: 51714
        },
        "Talvar": {
          id: "Talvar",
          title: "Talvar",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yAZFzEH1NQXVJvqHT3HEhQQDgpU.jpg",
          releaseYear: 2015,
          duration: "2h 12m",
          rating: 4.8,
          description: "Based on the 2008 Noida double murder case, this film follows three investigations into the mysterious deaths of a teenage girl and her family's servant.",
          director: "Meghna Gulzar",
          cast: ["Irrfan Khan", "Konkona Sen Sharma", "Neeraj Kabi"],
          genre: ["Crime", "Drama", "Mystery"],
          tmdb_id: 359940
        },
        "Raat-Akeli-Hai": {
          id: "Raat-Akeli-Hai",
          title: "Raat Akeli Hai",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6vVuH0EwFfUxel9RhRdl7nFBVZj.jpg",
          releaseYear: 2020,
          duration: "2h 29m",
          rating: 4.6,
          description: "A small-town cop investigates the murder of a powerful landlord, uncovering dark secrets within a wealthy family.",
          director: "Honey Trehan",
          cast: ["Nawazuddin Siddiqui", "Radhika Apte", "Aditya Srivastava"],
          genre: ["Crime", "Mystery", "Thriller"],
          tmdb_id: 721452
        },
        "Table-No-21": {
          id: "Table-No-21",
          title: "Table No. 21",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/m4Ggx2kXKtG6yeB1MQdc1kqzWUA.jpg",
          releaseYear: 2013,
          duration: "1h 48m",
          rating: 4.5,
          description: "A couple accepts an offer to participate in a live game show for a huge prize, but the game turns increasingly sinister.",
          director: "Aditya Datt",
          cast: ["Rajeev Khandelwal", "Tena Desae", "Paresh Rawal"],
          genre: ["Thriller", "Mystery", "Drama"],
          tmdb_id: 51718
        },
        "404-Error-Not-Found": {
          id: "404-Error-Not-Found",
          title: "404: Error Not Found",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/vB7yNrxYX7dnhcZRvjhkUYDqGYH.jpg",
          releaseYear: 2011,
          duration: "2h 0m",
          rating: 4.5,
          description: "A psychological thriller set in a medical college, where a student investigates the mysterious death of his predecessor.",
          director: "Prawaal Raman",
          cast: ["Rajvvir Aroraa", "Nishikant Kamat", "Satish Kaushik"],
          genre: ["Horror", "Mystery", "Thriller"],
          tmdb_id: 51719
        },
        "Samay": {
          id: "Samay",
          title: "Samay: When Time Strikes",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qKkjXoWjYJJJJJJJJJJJJJJJJJJ.jpg",
          releaseYear: 2003,
          duration: "2h 15m",
          rating: 4.6,
          description: "A female police officer pursues a serial killer who leaves complex mathematical equations at crime scenes.",
          director: "Robby Grewal",
          cast: ["Sushmita Sen", "Sushant Singh", "Namrata Shirodkar"],
          genre: ["Crime", "Mystery", "Thriller"],
          tmdb_id: 51720
        },
        "Ittefaq": {
          id: "Ittefaq",
          title: "Ittefaq",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5nEeI5UXwEsFE9PMwZPjnfXhxEQ.jpg",
          releaseYear: 2017,
          duration: "1h 45m",
          rating: 4.6,
          description: "A detective investigates a double murder case that has only two witnesses, who are also the prime suspects. The suspects have different stories to tell.",
          director: "Abhay Chopra",
          cast: ["Sidharth Malhotra", "Sonakshi Sinha", "Akshaye Khanna"],
          genre: ["Mystery", "Thriller", "Crime"],
          tmdb_id: 445651
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
        },
        "Die-Hard": {
          id: "Die-Hard",
          title: "Die Hard",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOqTdIKpr.jpg",
          releaseYear: 1988,
          duration: "2h 12m",
          rating: 4.8,
          description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
          director: "John McTiernan",
          cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
          genre: ["Action", "Thriller"],
          tmdb_id: 562
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
          genre: ["Drama", "Thriller", "Comedy"],
          tmdb_id: 496243
        },
        // Add more movies...
      },
      "European-Masters": {
        "Amélie": {
          id: "Amélie",
          title: "Amélie",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tdUdRHg5HqOpqwYZsl9GIYyw3j7.jpg",
          releaseYear: 2001,
          duration: "2h 2m",
          rating: 4.8,
          description: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
          director: "Jean-Pierre Jeunet",
          cast: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
          genre: ["Comedy", "Romance"],
          tmdb_id: 194
        },
        // Add more movies...
      },
      "Indian-Regional": {
        "Baahubali-Series": {
          id: "Baahubali-Series",
          title: "Baahubali: The Beginning",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
          releaseYear: 2015,
          duration: "2h 39m",
          rating: 4.8,
          description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
          director: "S.S. Rajamouli",
          cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
          genre: ["Action", "Drama", "Fantasy"],
          tmdb_id: 256040
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
        },
        "Kubo-and-the-Two-Strings": {
          id: "Kubo-and-the-Two-Strings",
          title: "Kubo and the Two Strings",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3Kr9CIIMcXTPlm6cdZ9y3QTe4Y7.jpg",
          releaseYear: 2016,
          duration: "1h 42m",
          rating: 4.7,
          description: "A young boy named Kubo must locate a magical suit of armour worn by his late father in order to defeat a vengeful spirit from the past.",
          director: "Travis Knight",
          cast: ["Charlize Theron", "Art Parkinson", "Matthew McConaughey"],
          genre: ["Animation", "Action", "Adventure"],
          tmdb_id: 313297
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
          image: "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
          releaseYear: 1942,
          duration: "1h 42m",
          rating: 4.9,
          description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
          director: "Michael Curtiz",
          cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
          genre: ["Drama", "Romance", "War"],
          tmdb_id: 289
        },
        // Add more movies...
      },
      "New-Hollywood-Era": {
        "The-Godfather": {
          id: "The-Godfather",
          title: "The Godfather",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          releaseYear: 1972,
          duration: "2h 55m",
          rating: 4.9,
          description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          director: "Francis Ford Coppola",
          cast: ["Marlon Brando", "Al Pacino", "James Caan"],
          genre: ["Crime", "Drama"],
          tmdb_id: 238
        },
        // Add more movies...
      },
      "Film-Noir-Classics": {
        "The-Maltese-Falcon": {
          id: "The-Maltese-Falcon",
          title: "The Maltese Falcon",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/bf4o6Uzk2MoLwqxBJMz6dpdQH0F.jpg",
          releaseYear: 1941,
          duration: "1h 40m",
          rating: 4.7,
          description: "Private detective Sam Spade gets more than he bargained for when he takes a case brought to him by a beautiful but secretive woman.",
          director: "John Huston",
          cast: ["Humphrey Bogart", "Mary Astor", "Peter Lorre"],
          genre: ["Crime", "Film-Noir", "Mystery"],
          tmdb_id: 963
        },
        // Add more movies...
      },
      "International-Classics": {
        "Seven-Samurai": {
          id: "Seven-Samurai",
          title: "Seven Samurai",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
          releaseYear: 1954,
          duration: "3h 27m",
          rating: 4.8,
          description: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
          director: "Akira Kurosawa",
          cast: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima"],
          genre: ["Action", "Drama", "Adventure"],
          tmdb_id: 346
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
          image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
          releaseYear: 1994,
          duration: "2h 34m",
          rating: 4.8,
          description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          director: "Quentin Tarantino",
          cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
          genre: ["Crime", "Drama"],
          tmdb_id: 680
        },
        // Add more movies...
      },
      "2000s-Landmarks": {
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
        // Add more movies...
      },
      "2010s-Masterworks": {
        "Inception": {
          id: "Inception",
          title: "Inception",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
          releaseYear: 2010,
          duration: "2h 28m",
          rating: 4.8,
          description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
          director: "Christopher Nolan",
          cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 27205
        },
        // Add more movies...
      },
      "Recent-Acclaimed": {
        "Everything-Everywhere-All-at-Once": {
          id: "Everything-Everywhere-All-at-Once",
          title: "Everything Everywhere All at Once",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
          releaseYear: 2022,
          duration: "2h 19m",
          rating: 4.8,
          description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
          director: "Daniel Kwan, Daniel Scheinert",
          cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
          genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
          tmdb_id: 545611
        },
        // Add more movies...
      },
      "Modern-Classics": {
        "Fight-Club": {
          id: "Fight-Club",
          title: "Fight Club",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
          releaseYear: 1999,
          duration: "2h 19m",
          rating: 4.8,
          description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          director: "David Fincher",
          cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
          genre: ["Drama", "Thriller"],
          tmdb_id: 550
        }
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
          title: "Planet Earth",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/dRMuqarra4ZpwVhQSB3nWxZIqGp.jpg",
          releaseYear: 2006,
          duration: "11 Episodes",
          rating: 4.9,
          description: "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC.",
          director: "Alastair Fothergill",
          cast: ["David Attenborough"],
          genre: ["Documentary", "Nature"],
          tmdb_id: 1137
        },
        // Add more movies...
      },
      "Social-&-Cultural": {
        "Won't-You-Be-My-Neighbor": {
          id: "Won't-You-Be-My-Neighbor",
          title: "Won't You Be My Neighbor?",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/fvX8S8aVkxQ72WxE7kn3O0j5q3h.jpg",
          releaseYear: 2018,
          duration: "1h 34m",
          rating: 4.8,
          description: "An exploration of the life, lessons, and legacy of iconic children's television host, Fred Rogers.",
          director: "Morgan Neville",
          cast: ["Fred Rogers", "Joanne Rogers", "François Scarborough Clemmons"],
          genre: ["Documentary", "Biography"],
          tmdb_id: 495764
        },
        // Add more movies...
      },
      "True-Crime": {
        "The-Thin-Blue-Line": {
          id: "The-Thin-Blue-Line",
          title: "The Thin Blue Line",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5WXeYnezavNI6hXH74aQYv6yFzj.jpg",
          releaseYear: 1988,
          duration: "1h 43m",
          rating: 4.8,
          description: "A film that successfully argued that a man was wrongly convicted for murder by a corrupt justice system in Dallas County, Texas.",
          director: "Errol Morris",
          cast: ["Randall Adams", "David Harris", "Gus Rose"],
          genre: ["Documentary", "Crime"],
          tmdb_id: 24807
        },
        // Add more movies...
      },
      "Music-&-Arts": {
        "What-Happened-Miss-Simone": {
          id: "What-Happened-Miss-Simone",
          title: "What Happened, Miss Simone?",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/vlkyDyeKqk6Ai8qQqEqoVVwBGXh.jpg",
          releaseYear: 2015,
          duration: "1h 41m",
          rating: 4.7,
          description: "A documentary about the life and legend Nina Simone, an American singer, pianist, and civil rights activist labeled the 'High Priestess of Soul.'",
          director: "Liz Garbus",
          cast: ["Nina Simone", "Lisa Simone Kelly", "Roger Nupie"],
          genre: ["Documentary", "Music", "Biography"],
          tmdb_id: 317557
        },
        // Add more movies...
      },
      "Nature-Documentary": {
        "March-of-the-Penguins": {
          id: "March-of-the-Penguins",
          title: "March of the Penguins",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/ksX3H8I76oQRHybUMPDhTYw4dEw.jpg",
          releaseYear: 2005,
          duration: "1h 20m",
          rating: 4.7,
          description: "In the Antarctic, every March since the beginning of time, the quest begins to find the perfect mate and start a family.",
          director: "Luc Jacquet",
          cast: ["Morgan Freeman", "Charles Berling", "Romane Bohringer"],
          genre: ["Documentary", "Family"],
          tmdb_id: 1255
        }
      },
      "Political-Documentary": {
        "The-Fog-of-War": {
          id: "The-Fog-of-War",
          title: "The Fog of War",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6Jn4FX0XO3pXZJYNcHNOpB6lPLP.jpg",
          releaseYear: 2003,
          duration: "1h 47m",
          rating: 4.8,
          description: "The story of America as seen through the eyes of former Secretary of Defense Robert S. McNamara.",
          director: "Errol Morris",
          cast: ["Robert McNamara"],
          genre: ["Documentary", "History", "War"],
          tmdb_id: 12698
        }
      },
      "French-New-Wave": {
        "The-400-Blows": {
          id: "The-400-Blows",
          title: "The 400 Blows",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/fT1qHtk5lsxTjPIwJEFAHFR0T3E.jpg",
          releaseYear: 1959,
          duration: "1h 39m",
          rating: 4.8,
          description: "A young boy, left without attention, delves into a life of petty crime.",
          director: "François Truffaut",
          cast: ["Jean-Pierre Léaud", "Albert Rémy", "Claire Maurier"],
          genre: ["Crime", "Drama"],
          tmdb_id: 147
        }
      },
      "Italian-Neorealism": {
        "Bicycle-Thieves": {
          id: "Bicycle-Thieves",
          title: "Bicycle Thieves",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/zGdXuXVZO8cqZVKZ9gtXvLJ8bc8.jpg",
          releaseYear: 1948,
          duration: "1h 29m",
          rating: 4.8,
          description: "In post-war Italy, a working-class man's bicycle is stolen. He and his son set out to find it.",
          director: "Vittorio De Sica",
          cast: ["Lamberto Maggiorani", "Enzo Staiola", "Lianella Carell"],
          genre: ["Drama"],
          tmdb_id: 5156
        }
      },
      "German-Expressionism": {
        "Metropolis": {
          id: "Metropolis",
          title: "Metropolis",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/hUK9rewffKGqtXynH5SW3v9hzcu.jpg",
          releaseYear: 1927,
          duration: "2h 33m",
          rating: 4.8,
          description: "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet.",
          director: "Fritz Lang",
          cast: ["Brigitte Helm", "Alfred Abel", "Gustav Fröhlich"],
          genre: ["Drama", "Sci-Fi"],
          tmdb_id: 19
        }
      },
      "Silent-Comedy": {
        "Modern-Times": {
          id: "Modern-Times",
          title: "Modern Times",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/7uoiKOEjxBBW0AgDGQWrlfGQ90w.jpg",
          releaseYear: 1936,
          duration: "1h 27m",
          rating: 4.8,
          description: "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
          director: "Charles Chaplin",
          cast: ["Charles Chaplin", "Paulette Goddard", "Henry Bergman"],
          genre: ["Comedy", "Drama", "Romance"],
          tmdb_id: 3082
        }
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
          image: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg",
          releaseYear: 1973,
          duration: "2h 2m",
          rating: 4.8,
          description: "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
          director: "William Friedkin",
          cast: ["Ellen Burstyn", "Max von Sydow", "Linda Blair"],
          genre: ["Horror", "Drama"],
          tmdb_id: 9552
        },
        // Add more movies...
      },
      "Modern-Horror": {
        "Get-Out": {
          id: "Get-Out",
          title: "Get Out",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
          releaseYear: 2017,
          duration: "1h 44m",
          rating: 4.8,
          description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
          director: "Jordan Peele",
          cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
          genre: ["Horror", "Mystery", "Thriller"],
          tmdb_id: 419430
        },
        // Add more movies...
      },
      "Supernatural": {
        "The-Conjuring": {
          id: "The-Conjuring",
          title: "The Conjuring",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
          releaseYear: 2013,
          duration: "1h 52m",
          rating: 4.7,
          description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
          director: "James Wan",
          cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
          genre: ["Horror", "Mystery", "Thriller"],
          tmdb_id: 138843
        },
        // Add more movies...
      },
      "Psychological": {
        "Black-Swan": {
          id: "Black-Swan",
          title: "Black Swan",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/rH19vkjAKcXPrzQy1iXxqmDR0tf.jpg",
          releaseYear: 2010,
          duration: "1h 48m",
          rating: 4.7,
          description: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake.",
          director: "Darren Aronofsky",
          cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"],
          genre: ["Drama", "Thriller"],
          tmdb_id: 44214
        },
        // Add more movies...
      },
      "Supernatural-Horror": {
        "The-Sixth-Sense": {
          id: "The-Sixth-Sense",
          title: "The Sixth Sense",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/fIssD3w3SvIhPPmVo4WMgZDVLID.jpg",
          releaseYear: 1999,
          duration: "1h 47m",
          rating: 4.8,
          description: "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
          director: "M. Night Shyamalan",
          cast: ["Bruce Willis", "Haley Joel Osment", "Toni Collette"],
          genre: ["Drama", "Mystery", "Thriller"],
          tmdb_id: 745
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
        "West-Side-Story": {
          id: "West-Side-Story",
          title: "West Side Story",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/v5LoK4xvxvzBVjE73Y2HRQBrxQT.jpg",
          releaseYear: 1961,
          duration: "2h 33m",
          rating: 4.7,
          description: "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
          director: "Jerome Robbins, Robert Wise",
          cast: ["Natalie Wood", "Richard Beymer", "Rita Moreno"],
          genre: ["Crime", "Drama", "Musical"],
          tmdb_id: 1725
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
        "Hamilton": {
          id: "Hamilton",
          title: "Hamilton",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/h1B7tW0t399VDjAcWJh8m87469b.jpg",
          releaseYear: 2020,
          duration: "2h 40m",
          rating: 4.8,
          description: "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater.",
          director: "Thomas Kail",
          cast: ["Lin-Manuel Miranda", "Leslie Odom Jr.", "Renée Elise Goldsberry"],
          genre: ["Drama", "History", "Musical"],
          tmdb_id: 556574
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
        },
        "Whiplash": {
          id: "Whiplash",
          title: "Whiplash",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6uSPcdGNA2A6vJmCagXkvnutegs.jpg",
          releaseYear: 2014,
          duration: "1h 47m",
          rating: 4.8,
          description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
          director: "Damien Chazelle",
          cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
          genre: ["Drama", "Music"],
          tmdb_id: 244786
        }
      },
      "Film-Movements": {
        "Breathless": {
          id: "Breathless",
          title: "Breathless",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9Wx0Wdn2EOqeCZU4SP6tlS3LOml.jpg",
          releaseYear: 1960,
          duration: "1h 30m",
          rating: 4.7,
          description: "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he reunites with a hip American journalism student and attempts to persuade her to run away with him to Italy.",
          director: "Jean-Luc Godard",
          cast: ["Jean-Paul Belmondo", "Jean Seberg", "Daniel Boulanger"],
          genre: ["Crime", "Drama", "Romance"],
          tmdb_id: 269
        }
      },
      "Modern-Epic": {
        "Lawrence-of-Arabia": {
          id: "Lawrence-of-Arabia",
          title: "Lawrence of Arabia",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/AiAm0EtDvyGqNpVoieRw4u65vD1.jpg",
          releaseYear: 1962,
          duration: "3h 48m",
          rating: 4.8,
          description: "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
          director: "David Lean",
          cast: ["Peter O'Toole", "Alec Guinness", "Anthony Quinn"],
          genre: ["Adventure", "Biography", "Drama"],
          tmdb_id: 947
        }
      },
      "Cyberpunk": {
        "Blade-Runner": {
          id: "Blade-Runner",
          title: "Blade Runner",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
          releaseYear: 1982,
          duration: "1h 57m",
          rating: 4.8,
          description: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
          director: "Ridley Scott",
          cast: ["Harrison Ford", "Rutger Hauer", "Sean Young"],
          genre: ["Action", "Sci-Fi", "Thriller"],
          tmdb_id: 78
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
          image: "https://image.tmdb.org/t/p/w500/42C9WvwrqOFUvwGxAiHitg8yPH8.jpg",
          releaseYear: 1929,
          duration: "16m",
          rating: 4.7,
          description: "Luis Buñuel and Salvador Dalí present seventeen minutes of bizarre, surreal imagery.",
          director: "Luis Buñuel",
          cast: ["Pierre Batcheff", "Simone Mareuil", "Luis Buñuel"],
          genre: ["Fantasy", "Horror", "Short"],
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
          image: "https://image.tmdb.org/t/p/w500/6P5rjKWn7myYgAFaFyj0G4gkXDg.jpg",
          releaseYear: 1973,
          duration: "1h 42m",
          rating: 4.7,
          description: "A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.",
          director: "Robert Clouse",
          cast: ["Bruce Lee", "John Saxon", "Jim Kelly"],
          genre: ["Action", "Crime", "Drama"],
          tmdb_id: 9461
        },
        // Add more movies...
      },
      "Modern-Martial-Arts": {
        "Crouching-Tiger-Hidden-Dragon": {
          id: "Crouching-Tiger-Hidden-Dragon",
          title: "Crouching Tiger, Hidden Dragon",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/nkFrkn5NZuGHvGrVNlFhqCKTggf.jpg",
          releaseYear: 2000,
          duration: "2h",
          rating: 4.8,
          description: "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
          director: "Ang Lee",
          cast: ["Chow Yun-Fat", "Michelle Yeoh", "Zhang Ziyi"],
          genre: ["Action", "Adventure", "Fantasy"],
          tmdb_id: 146
        },
        // Add more movies...
      },
      "Korean-Action": {
        "Oldboy": {
          id: "Oldboy",
          title: "Oldboy",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
          releaseYear: 2003,
          duration: "2h",
          rating: 4.8,
          description: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
          director: "Park Chan-wook",
          cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung"],
          genre: ["Action", "Drama", "Mystery"],
          tmdb_id: 670
        },
        // Add more movies...
      },
      "Japanese-Action": {
        "13-Assassins": {
          id: "13-Assassins",
          title: "13 Assassins",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9Wx0Wdn2EOqeCZU4SP6tlS3LOml.jpg",
          releaseYear: 2010,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 745
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
          image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          releaseYear: 1972,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 238
        },
        // Add more movies...
      },
      "Modern-Crime": {
        "The-Departed": {
          id: "The-Departed",
          title: "The Departed",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/rrBuGu0Pjq7Y2BWSI6teGfZzviY.jpg",
          releaseYear: 2006,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 949
        },
        // Add more movies...
      },
      "Heist-Films": {
        "Ocean's-Series": {
          id: "Ocean's-Series",
          title: "Ocean's Series",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
          releaseYear: 1999,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 769
        },
        // Add more movies...
      },
      "True-Crime": {
        "The-Wolf-of-Wall-Street": {
          id: "The-Wolf-of-Wall-Street",
          title: "The Wolf of Wall Street",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5DpmtMBXXNDujIuSlKW3WLKuqEd.jpg",
          releaseYear: 2013,
          duration: "2h 23m",
          rating: 4.8,
          description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          director: "Joss Whedon",
          cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
          genre: ["Action", "Adventure", "Sci-Fi"],
          tmdb_id: 115
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
          image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
          releaseYear: 2000,
          duration: "2h 35m",
          rating: 4.8,
          description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
          director: "Ridley Scott",
          cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
          genre: ["Action", "Drama", "History"],
          tmdb_id: 98
        },
        // Add more movies...
      },
      "Medieval": {
        "Braveheart": {
          id: "Braveheart",
          title: "Braveheart",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tUqhFfwYeVa4zjY3Q6RmjWUadO6.jpg",
          releaseYear: 1995,
          duration: "2h 57m",
          rating: 4.8,
          description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
          director: "Mel Gibson",
          cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
          genre: ["Biography", "Drama", "History", "War"],
          tmdb_id: 817
        },
        // Add more movies...
      },
      "Renaissance-&-Colonial": {
        "The-Last-of-the-Mohicans": {
          id: "The-Last-of-the-Mohicans",
          title: "The Last of the Mohicans",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qJ2hAERdNgAhj3hOlWYZgYdckpN.jpg",
          releaseYear: 1992,
          duration: "2h 34m",
          rating: 4.8,
          description: "Three trappers protect an English prisoner, Hawkeye, from being delivered to the Huron tribe, who want to use him for scalps.",
          director: "Michael Mann",
          cast: ["Daniel Day-Lewis", "Madeleine Stowe", "Russell Means"],
          genre: ["Action", "Adventure", "Drama", "History", "War"],
          tmdb_id: 1077
        },
        // Add more movies...
      },
      "Modern-History": {
        "Lawrence-of-Arabia": {
          id: "Lawrence-of-Arabia",
          title: "Lawrence of Arabia",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/jJ8K2vKqjBpIFb0lHf7HLc3b7p2.jpg",
          releaseYear: 1962,
          duration: "3h 36m",
          rating: 4.8,
          description: "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
          director: "David Lean",
          cast: ["Peter O'Toole", "Alec Guinness", "Anthony Quinn"],
          genre: ["Biography", "Drama", "History", "War"],
          tmdb_id: 122
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
        },
        "Walk-the-Line": {
          id: "Walk-the-Line",
          title: "Walk the Line",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/p4vjvuYX5nBRHBrwxgjCH7nXn6Y.jpg",
          releaseYear: 2005,
          duration: "2h 16m",
          rating: 4.7,
          description: "A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis.",
          director: "James Mangold",
          cast: ["Joaquin Phoenix", "Reese Witherspoon", "Ginnifer Goodwin"],
          genre: ["Biography", "Drama", "Music", "Romance"],
          tmdb_id: 69
        },
        "Ray": {
          id: "Ray",
          title: "Ray",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/vCzGV28YFaR5UbLcYLWqBkF8kh6.jpg",
          releaseYear: 2004,
          duration: "2h 32m",
          rating: 4.7,
          description: "The story of the life and career of the legendary rhythm and blues musician Ray Charles, from his humble beginnings in the South to his meteoric rise to stardom.",
          director: "Taylor Hackford",
          cast: ["Jamie Foxx", "Kerry Washington", "Regina King"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 1542
        },
        "La-Vie-en-Rose": {
          id: "La-Vie-en-Rose",
          title: "La Vie en Rose",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/vFqMj7R1NIADdWgDNBGNkHd7qyy.jpg",
          releaseYear: 2007,
          duration: "2h 20m",
          rating: 4.7,
          description: "The life story of singer Édith Piaf, from her humble beginnings to her tragic death at age 47.",
          director: "Olivier Dahan",
          cast: ["Marion Cotillard", "Sylvie Testud", "Pascal Greggory"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 1407
        },
        "Im-Not-There": {
          id: "Im-Not-There",
          title: "I'm Not There",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/xn8JiX7QHrdVZQYG7o4LLMSYzOP.jpg",
          releaseYear: 2007,
          duration: "2h 15m",
          rating: 4.6,
          description: "Depicting the life and times of Bob Dylan through multiple personas, each representing different aspects of his life and music.",
          director: "Todd Haynes",
          cast: ["Cate Blanchett", "Christian Bale", "Heath Ledger"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 15312
        },
        "The-Doors": {
          id: "The-Doors",
          title: "The Doors",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3Rj7b4wZAryBx5kpZkQzACFmWvj.jpg",
          releaseYear: 1991,
          duration: "2h 20m",
          rating: 4.6,
          description: "The story of the famous and influential 1960s rock band The Doors and its lead singer and composer, Jim Morrison.",
          director: "Oliver Stone",
          cast: ["Val Kilmer", "Meg Ryan", "Kyle MacLachlan"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 11640
        },
        "Whats-Love-Got-to-Do-with-It": {
          id: "Whats-Love-Got-to-Do-with-It",
          title: "What's Love Got to Do with It",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qdqVPqwXEdFRZkpFpXtCsn8Zcj3.jpg",
          releaseYear: 1993,
          duration: "1h 58m",
          rating: 4.7,
          description: "The story of Tina Turner's rise to stardom and her abusive relationship with Ike Turner.",
          director: "Brian Gibson",
          cast: ["Angela Bassett", "Laurence Fishburne", "RaéVen Kelly"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 11907
        },
        "Immortal-Beloved": {
          id: "Immortal-Beloved",
          title: "Immortal Beloved",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/2mbS0uHhvY7h5QKQz6abXjzXHxR.jpg",
          releaseYear: 1994,
          duration: "2h 1m",
          rating: 4.6,
          description: "The life of Ludwig van Beethoven, as revealed by his secretary and first biographer Anton Schindler after the composer's death.",
          director: "Bernard Rose",
          cast: ["Gary Oldman", "Jeroen Krabbé", "Isabella Rossellini"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 13763
        },
        "Rocketman": {
          id: "Rocketman",
          title: "Rocketman",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/f4FF18ia7yTvHf2izNrHqBmgH8U.jpg",
          releaseYear: 2019,
          duration: "2h 1m",
          rating: 4.7,
          description: "A musical fantasy about the fantastical human story of Elton John's breakthrough years.",
          director: "Dexter Fletcher",
          cast: ["Taron Egerton", "Jamie Bell", "Richard Madden"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 504608
        },
        "Straight-Outta-Compton": {
          id: "Straight-Outta-Compton",
          title: "Straight Outta Compton",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg",
          releaseYear: 2015,
          duration: "2h 27m",
          rating: 4.8,
          description: "The story of rap group N.W.A. and their rise from the streets of Compton, Los Angeles.",
          director: "F. Gary Gray",
          cast: ["O'Shea Jackson Jr.", "Corey Hawkins", "Jason Mitchell"],
          genre: ["Biography", "Drama", "Music"],
          tmdb_id: 277216
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
        },
        "Gandhi": {
          id: "Gandhi",
          title: "Gandhi",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qB0rj3UEaRNRBNIGPkRI7Qz2YRF.jpg",
          releaseYear: 1982,
          duration: "3h 11m",
          rating: 4.8,
          description: "The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
          director: "Richard Attenborough",
          cast: ["Ben Kingsley", "John Gielgud", "Rohini Hattangadi"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 34615
        },
        "Darkest-Hour": {
          id: "Darkest-Hour",
          title: "Darkest Hour",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/z0K8uoNL6RKfKbpUrcz6YiXl3Tr.jpg",
          releaseYear: 2017,
          duration: "2h 5m",
          rating: 4.7,
          description: "In May 1940, the fate of World War II hangs on Winston Churchill, who must decide whether to negotiate with Adolf Hitler, or fight on knowing that it could mean the end of the British Empire.",
          director: "Joe Wright",
          cast: ["Gary Oldman", "Lily James", "Kristin Scott Thomas"],
          genre: ["Biography", "Drama", "History", "War"],
          tmdb_id: 399404
        },
        "JFK": {
          id: "JFK",
          title: "JFK",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/r0VWVTYlqdRuHC2y3rF3zHH8Sf3.jpg",
          releaseYear: 1991,
          duration: "3h 9m",
          rating: 4.7,
          description: "New Orleans District Attorney Jim Garrison discovers there's more to the Kennedy assassination than the official story.",
          director: "Oliver Stone",
          cast: ["Kevin Costner", "Gary Oldman", "Jack Lemmon"],
          genre: ["Drama", "History", "Thriller"],
          tmdb_id: 820
        },
        "Nixon": {
          id: "Nixon",
          title: "Nixon",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/edCmMd6ckFYyHFPMREVXyYBWh5F.jpg",
          releaseYear: 1995,
          duration: "3h 12m",
          rating: 4.6,
          description: "A biographical story of former U.S. President Richard Milhous Nixon, from his days as a young boy, to his eventual Presidency, which ended in shame.",
          director: "Oliver Stone",
          cast: ["Anthony Hopkins", "Joan Allen", "Powers Boothe"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 10351
        },
        "The-Iron-Lady": {
          id: "The-Iron-Lady",
          title: "The Iron Lady",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/gCpUWh0YhMRCyVpWBqyBw6A8ac2.jpg",
          releaseYear: 2011,
          duration: "1h 45m",
          rating: 4.6,
          description: "An elderly Margaret Thatcher talks to the imagined presence of her recently deceased husband as she struggles to come to terms with his death while scenes from her past life, from girlhood to British prime minister, intervene.",
          director: "Phyllida Lloyd",
          cast: ["Meryl Streep", "Jim Broadbent", "Richard E. Grant"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 51012
        },
        "Mandela-Long-Walk-to-Freedom": {
          id: "Mandela-Long-Walk-to-Freedom",
          title: "Mandela: Long Walk to Freedom",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qB28rT6ioJ8ZjlFVuJh8K9DhP8n.jpg",
          releaseYear: 2013,
          duration: "2h 21m",
          rating: 4.7,
          description: "A chronicle of Nelson Mandela's life journey from his childhood in a rural village through to his inauguration as the first democratically elected president of South Africa.",
          director: "Justin Chadwick",
          cast: ["Idris Elba", "Naomie Harris", "Tony Kgoroge"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 84175
        },
        "The-Last-Emperor": {
          id: "The-Last-Emperor",
          title: "The Last Emperor",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8J5h95YQ8qPFMHVGPgzGGYiY0F1.jpg",
          releaseYear: 1987,
          duration: "2h 43m",
          rating: 4.7,
          description: "The story of Puyi, the last Emperor of China, from his lofty birth and brief reign in the Forbidden City, the object of worship by half a billion people, through his abdication, his decline and dissolute lifestyle.",
          director: "Bernardo Bertolucci",
          cast: ["John Lone", "Joan Chen", "Peter O'Toole"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 746
        },
        "Malcolm-X": {
          id: "Malcolm-X",
          title: "Malcolm X",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/f4yxHPJxZUyXknxoldZYSBhyqWx.jpg",
          releaseYear: 1992,
          duration: "3h 22m",
          rating: 4.8,
          description: "Biographical epic of the controversial and influential Black Nationalist leader Malcolm X, from his criminal beginnings to his conversion to Islam, his rise in the Nation of Islam, and his subsequent falling out with the organization.",
          director: "Spike Lee",
          cast: ["Denzel Washington", "Angela Bassett", "Delroy Lindo"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 1883
        },
        "Thirteen-Days": {
          id: "Thirteen-Days",
          title: "Thirteen Days",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/nF8cRnRhxH4PQRS5XEhJfNdYKB8.jpg",
          releaseYear: 2000,
          duration: "2h 25m",
          rating: 4.7,
          description: "A dramatization of President Kennedy's administration's struggle to contain the Cuban Missile Crisis in October of 1962.",
          director: "Roger Donaldson",
          cast: ["Kevin Costner", "Bruce Greenwood", "Steven Culp"],
          genre: ["Drama", "History", "Thriller"],
          tmdb_id: 3557
        },
        "The-Queen": {
          id: "The-Queen",
          title: "The Queen",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qD3X4THEqWXo5tKvGxj9CRf2IfK.jpg",
          releaseYear: 2006,
          duration: "1h 43m",
          rating: 4.7,
          description: "After the death of Princess Diana, Queen Elizabeth II struggles with her reaction to a sequence of events nobody could have predicted.",
          director: "Stephen Frears",
          cast: ["Helen Mirren", "Michael Sheen", "James Cromwell"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 1165
        },
        "Vice": {
          id: "Vice",
          title: "Vice",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/1gCab6rNv1r6V64cwsU4oEr649Y.jpg",
          releaseYear: 2018,
          duration: "2h 12m",
          rating: 4.6,
          description: "The story of Dick Cheney, an unassuming bureaucratic Washington insider, who quietly wielded immense power as Vice President to George W. Bush.",
          director: "Adam McKay",
          cast: ["Christian Bale", "Amy Adams", "Steve Carell"],
          genre: ["Biography", "Comedy", "Drama"],
          tmdb_id: 429197
        },
        "Frost-Nixon": {
          id: "Frost-Nixon",
          title: "Frost/Nixon",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/pxc9EFCMVkKqvVUtGPvtJPwxXeJ.jpg",
          releaseYear: 2008,
          duration: "2h 2m",
          rating: 4.7,
          description: "A dramatic retelling of the post-Watergate television interviews between British talk-show host David Frost and former president Richard Nixon.",
          director: "Ron Howard",
          cast: ["Frank Langella", "Michael Sheen", "Kevin Bacon"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 11499
        },
        "All-the-Way": {
          id: "All-the-Way",
          title: "All the Way",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/q8RGf4SbVCObCySZ4PIX2d5c8Mr.jpg",
          releaseYear: 2016,
          duration: "2h 12m",
          rating: 4.6,
          description: "Lyndon B. Johnson becomes the President of the United States in the chaotic aftermath of John F. Kennedy's assassination and spends his first year in office fighting to pass the Civil Rights Act.",
          director: "Jay Roach",
          cast: ["Bryan Cranston", "Anthony Mackie", "Melissa Leo"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 384680
        }
      },
      "Scientists-&-Innovators": {
        "A-Beautiful-Mind": {
          id: "A-Beautiful-Mind",
          title: "A Beautiful Mind",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
          releaseYear: 2001,
          duration: "2h 15m",
          rating: 4.8,
          description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
          director: "Ron Howard",
          cast: ["Russell Crowe", "Ed Harris", "Jennifer Connelly"],
          genre: ["Biography", "Drama"],
          tmdb_id: 453
        },
        "The-Theory-of-Everything": {
          id: "The-Theory-of-Everything",
          title: "The Theory of Everything",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/4jspr8hLLuju59wsDUuXviXrMl4.jpg",
          releaseYear: 2014,
          duration: "2h 3m",
          rating: 4.7,
          description: "A look at the relationship between the famous physicist Stephen Hawking and his wife Jane, from their meeting at Cambridge through his diagnosis with motor neuron disease.",
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
        },
        "Hidden-Figures": {
          id: "Hidden-Figures",
          title: "Hidden Figures",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg",
          releaseYear: 2016,
          duration: "2h 7m",
          rating: 4.8,
          description: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
          director: "Theodore Melfi",
          cast: ["Taraji P. Henson", "Octavia Spencer", "Janelle Monáe"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 381284
        },
        "Creation": {
          id: "Creation",
          title: "Creation",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/hWHFPhGvCvN9GXHvqsE8F3mXyh9.jpg",
          releaseYear: 2009,
          duration: "1h 48m",
          rating: 4.6,
          description: "Tells the story of Charles Darwin's struggle to publish 'On the Origin of Species' and the conflict between faith and reason.",
          director: "Jon Amiel",
          cast: ["Paul Bettany", "Jennifer Connelly", "Jeremy Northam"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 25519
        },
        "Radioactive": {
          id: "Radioactive",
          title: "Radioactive",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/l8HyObVj8fPrzacAPtGWWLDhcfh.jpg",
          releaseYear: 2019,
          duration: "1h 49m",
          rating: 4.6,
          description: "The story of Nobel Prize winner Marie Curie and her extraordinary scientific discoveries that revolutionized medicine with her research on radioactivity.",
          director: "Marjane Satrapi",
          cast: ["Rosamund Pike", "Sam Riley", "Anya Taylor-Joy"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 458305
        },
        "Tesla": {
          id: "Tesla",
          title: "Tesla",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/v0guO0kOpIqXQxQG9MNHyZhAcVS.jpg",
          releaseYear: 2020,
          duration: "1h 42m",
          rating: 4.5,
          description: "A freewheeling take on visionary inventor Nikola Tesla, his interactions with Thomas Edison and J.P. Morgan's daughter Anne, and his breakthroughs in transmitting electrical power and light.",
          director: "Michael Almereyda",
          cast: ["Ethan Hawke", "Eve Hewson", "Kyle MacLachlan"],
          genre: ["Biography", "Drama"],
          tmdb_id: 517412
        },
        "The-Current-War": {
          id: "The-Current-War",
          title: "The Current War",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/1ZQWvJ8hxNxWxvWfRtAkWdqJvgR.jpg",
          releaseYear: 2017,
          duration: "1h 47m",
          rating: 4.6,
          description: "The dramatic story of the cutthroat race between electricity titans Thomas Edison and George Westinghouse to determine whose electrical system would power the modern world.",
          director: "Alfonso Gomez-Rejon",
          cast: ["Benedict Cumberbatch", "Michael Shannon", "Nicholas Hoult"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 432301
        },
        "Agora": {
          id: "Agora",
          title: "Agora",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/uJmQsMSHKJiNveXPQmj8EWBfp9T.jpg",
          releaseYear: 2009,
          duration: "2h 7m",
          rating: 4.7,
          description: "A historical drama set in Roman Egypt, concerning a slave who turns to the rising tide of Christianity in the hope of pursuing freedom while falling in love with his mistress, the philosophy and mathematics professor Hypatia.",
          director: "Alejandro Amenábar",
          cast: ["Rachel Weisz", "Max Minghella", "Oscar Isaac"],
          genre: ["Adventure", "Biography", "Drama", "History"],
          tmdb_id: 20057
        },
        "Infinity": {
          id: "Infinity",
          title: "Infinity",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/A7DxHhGZn3UEzqZtxBWkZnIXJ8F.jpg",
          releaseYear: 1996,
          duration: "2h",
          rating: 4.5,
          description: "A biographical film about the life of physicist Richard Feynman, focusing on his relationship with his first wife Arline and his work on the Manhattan Project.",
          director: "Matthew Broderick",
          cast: ["Matthew Broderick", "Patricia Arquette", "Peter Riegert"],
          genre: ["Biography", "Drama"],
          tmdb_id: 168672
        },
        "Einstein-and-Eddington": {
          id: "Einstein-and-Eddington",
          title: "Einstein and Eddington",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kT1GaBxFzxXWEQNfPbUXgUyxIOS.jpg",
          releaseYear: 2008,
          duration: "1h 34m",
          rating: 4.6,
          description: "A look at the evolution of Albert Einstein's theory of relativity, and Einstein's relationship with British scientist Sir Arthur Eddington, the first physicist to experimentally prove his ideas.",
          director: "Philip Martin",
          cast: ["David Tennant", "Andy Serkis", "Jim Broadbent"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 14694
        },
        "Hawking": {
          id: "Hawking",
          title: "Hawking",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kYd1ZMWvG9K2Jeop3XWXcpy6edq.jpg",
          releaseYear: 2004,
          duration: "1h 30m",
          rating: 4.7,
          description: "A drama documenting the life and work of the theoretical physicist Professor Stephen Hawking who, despite being diagnosed with motor neurone disease at the age of 21, has galvanized the scientific world.",
          director: "Philip Martin",
          cast: ["Benedict Cumberbatch", "Michael Brandon", "Tom Hodgkins"],
          genre: ["Biography", "Drama"],
          tmdb_id: 24844
        },
        "Experimenter": {
          id: "Experimenter",
          title: "Experimenter",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/o3iBFiy7Jh33hHHkHuGvuVTsU38.jpg",
          releaseYear: 2015,
          duration: "1h 38m",
          rating: 4.6,
          description: "In 1961, famed social psychologist Stanley Milgram conducted a series of radical behavior experiments that tested ordinary humans' willingness to obey authority.",
          director: "Michael Almereyda",
          cast: ["Peter Sarsgaard", "Winona Ryder", "Jim Gaffigan"],
          genre: ["Biography", "Drama", "History"],
          tmdb_id: 308751
        }
      },
      "Sports-Figures": {
        "Raging-Bull": {
          id: "Raging-Bull",
          title: "Raging Bull",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/rEviyDWNbAFmvvCyVPoCHtKK8pj.jpg",
          releaseYear: 1980,
          duration: "2h 9m",
          rating: 4.8,
          description: "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
          director: "Martin Scorsese",
          cast: ["Robert De Niro", "Cathy Moriarty", "Joe Pesci"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 1578
        },
        "Ali": {
          id: "Ali",
          title: "Ali",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5zqmOXn7LnKCiRSWlwFOi7o3gOP.jpg",
          releaseYear: 2001,
          duration: "2h 37m",
          rating: 4.7,
          description: "A biography of Muhammad Ali's life and career from the 1960s to the 1970s, including his championship title fights and his beliefs outside the ring.",
          director: "Michael Mann",
          cast: ["Will Smith", "Jamie Foxx", "Jon Voight"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 2017
        },
        "Rush": {
          id: "Rush",
          title: "Rush",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/cjEepHZOZAwmK6nAj5jis6HV75E.jpg",
          releaseYear: 2013,
          duration: "2h 3m",
          rating: 4.7,
          description: "The merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
          director: "Ron Howard",
          cast: ["Chris Hemsworth", "Daniel Brühl", "Olivia Wilde"],
          genre: ["Action", "Biography", "Drama", "Sport"],
          tmdb_id: 96721
        },
        "Moneyball": {
          id: "Moneyball",
          title: "Moneyball",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg",
          releaseYear: 2011,
          duration: "2h 13m",
          rating: 4.7,
          description: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
          director: "Bennett Miller",
          cast: ["Brad Pitt", "Jonah Hill", "Philip Seymour Hoffman"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 60308
        },
        "The-Fighter": {
          id: "The-Fighter",
          title: "The Fighter",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/pJXxKwMV6WL7qmJcKkJ5vz3BPZu.jpg",
          releaseYear: 2010,
          duration: "1h 56m",
          rating: 4.7,
          description: "A look at the early years of boxer 'Irish' Micky Ward and his brother who helped train him before going pro in the mid 1980s.",
          director: "David O. Russell",
          cast: ["Mark Wahlberg", "Christian Bale", "Amy Adams"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 44833
        },
        "Cinderella-Man": {
          id: "Cinderella-Man",
          title: "Cinderella Man",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/6vGk0jgDOYUxEjcjoZA8oLXNyW8.jpg",
          releaseYear: 2005,
          duration: "2h 24m",
          rating: 4.8,
          description: "The story of James Braddock, a supposedly washed-up boxer who came back to become a champion and an inspiration in the 1930s.",
          director: "Ron Howard",
          cast: ["Russell Crowe", "Renée Zellweger", "Paul Giamatti"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 921
        },
        "42": {
          id: "42",
          title: "42",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/bbSTNPwxr7FzjK1JwTR8jqVnkCJ.jpg",
          releaseYear: 2013,
          duration: "2h 8m",
          rating: 4.7,
          description: "In 1947, Jackie Robinson becomes the first African-American to play in Major League Baseball in the modern era when he was signed by the Brooklyn Dodgers.",
          director: "Brian Helgeland",
          cast: ["Chadwick Boseman", "Harrison Ford", "Nicole Beharie"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 109410
        }
      },
      "Literary-Figures": {
        "Capote": {
          id: "Capote",
          title: "Capote",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/xJ3cH3DWJ5YxAhSUL8F9cegvb86.jpg",
          releaseYear: 2005,
          duration: "1h 54m",
          rating: 4.7,
          description: "In 1959, Truman Capote learns of the murder of a Kansas family and decides to write a book about the case. While researching for his novel In Cold Blood, Capote forms a relationship with one of the killers, Perry Smith.",
          director: "Bennett Miller",
          cast: ["Philip Seymour Hoffman", "Catherine Keener", "Clifton Collins Jr."],
          genre: ["Biography", "Crime", "Drama"],
          tmdb_id: 14437
        },
        "Finding-Neverland": {
          id: "Finding-Neverland",
          title: "Finding Neverland",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/q4UmXVYuZHoY2DjhAC9P6mKEJBg.jpg",
          releaseYear: 2004,
          duration: "1h 46m",
          rating: 4.7,
          description: "The story of Sir J.M. Barrie's friendship with a family who inspired him to create Peter Pan.",
          director: "Marc Forster",
          cast: ["Johnny Depp", "Kate Winslet", "Julie Christie"],
          genre: ["Biography", "Drama", "Family"],
          tmdb_id: 866
        },
        "Sylvia": {
          id: "Sylvia",
          title: "Sylvia",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/7CSJvY3BxFLRQUzWvKhxPfFVqZI.jpg",
          releaseYear: 2003,
          duration: "1h 50m",
          rating: 4.6,
          description: "Story of the relationship between poets Ted Hughes and Sylvia Plath.",
          director: "Christine Jeffs",
          cast: ["Gwyneth Paltrow", "Daniel Craig", "Jared Harris"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 14918
        },
        "Bright-Star": {
          id: "Bright-Star",
          title: "Bright Star",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/gvGJsFYAZKsRUqz1D5wWuGVyuIy.jpg",
          releaseYear: 2009,
          duration: "1h 59m",
          rating: 4.7,
          description: "The three-year romance between 19th-century poet John Keats and Fanny Brawne near the end of his life.",
          director: "Jane Campion",
          cast: ["Abbie Cornish", "Ben Whishaw", "Paul Schneider"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 23835
        },
        "The-Hours": {
          id: "The-Hours",
          title: "The Hours",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/niqc0v3Lc3yPpBHjUnpM3m1nYhC.jpg",
          releaseYear: 2002,
          duration: "1h 54m",
          rating: 4.7,
          description: "The story of how the novel 'Mrs. Dalloway' affects three generations of women, all of whom, in one way or another, have had to deal with suicide in their lives.",
          director: "Stephen Daldry",
          cast: ["Meryl Streep", "Nicole Kidman", "Julianne Moore"],
          genre: ["Drama", "Romance"],
          tmdb_id: 165
        },
        "Wilde": {
          id: "Wilde",
          title: "Wilde",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yhzTeZU5OULn3GJgzJDZGKnSUVN.jpg",
          releaseYear: 1997,
          duration: "1h 58m",
          rating: 4.6,
          description: "The story of Oscar Wilde, genius, poet, playwright and the First Modern Man.",
          director: "Brian Gilbert",
          cast: ["Stephen Fry", "Jude Law", "Vanessa Redgrave"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 17977
        },
        "Miss-Potter": {
          id: "Miss-Potter",
          title: "Miss Potter",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qKkjGzYGUkVJwz8WuYgLCTZWVD7.jpg",
          releaseYear: 2006,
          duration: "1h 32m",
          rating: 4.6,
          description: "The story of Beatrix Potter, the author of the beloved and best-selling children's book, 'The Tale of Peter Rabbit', and her struggle for love, happiness, and success.",
          director: "Chris Noonan",
          cast: ["Renée Zellweger", "Ewan McGregor", "Emily Watson"],
          genre: ["Biography", "Drama"],
          tmdb_id: 1039
        },
        "Midnight-in-Paris": {
          id: "Midnight-in-Paris",
          title: "Midnight in Paris",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3bwzdAwpHFVtDafvtIU0lRmYHco.jpg",
          releaseYear: 2011,
          duration: "1h 34m",
          rating: 4.7,
          description: "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight, meeting famous writers and artists.",
          director: "Woody Allen",
          cast: ["Owen Wilson", "Rachel McAdams", "Kathy Bates"],
          genre: ["Comedy", "Fantasy", "Romance"],
          tmdb_id: 59436
        },
        "Total-Eclipse": {
          id: "Total-Eclipse",
          title: "Total Eclipse",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kZyXoLPBjlYo5K3ZNvGypEjGQfE.jpg",
          releaseYear: 1995,
          duration: "1h 51m",
          rating: 4.5,
          description: "Young poet Arthur Rimbaud and his mentor Paul Verlaine engage in a passionate but tumultuous relationship while revolutionizing 19th-century poetry.",
          director: "Agnieszka Holland",
          cast: ["Leonardo DiCaprio", "David Thewlis", "Romane Bohringer"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 36685
        },
        "The-Last-Station": {
          id: "The-Last-Station",
          title: "The Last Station",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/A3qMmUEuXHFEPRQtqbzGYipuUKw.jpg",
          releaseYear: 2009,
          duration: "1h 52m",
          rating: 4.6,
          description: "A historical drama that illustrates Russian author Leo Tolstoy's struggle to balance fame and wealth with his commitment to a life devoid of material things.",
          director: "Michael Hoffman",
          cast: ["Helen Mirren", "Christopher Plummer", "James McAvoy"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 28902
        },
        "Iris": {
          id: "Iris",
          title: "Iris",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/jVVtxYQyMKnhGfpWUkGzFzlPnqj.jpg",
          releaseYear: 2001,
          duration: "1h 31m",
          rating: 4.7,
          description: "True story of the lifelong romance between novelist Iris Murdoch and her husband John Bayley, from their student days through her battle with Alzheimer's disease.",
          director: "Richard Eyre",
          cast: ["Judi Dench", "Jim Broadbent", "Kate Winslet"],
          genre: ["Biography", "Drama", "Romance"],
          tmdb_id: 10308
        },
        "An-Angel-at-My-Table": {
          id: "An-Angel-at-My-Table",
          title: "An Angel at My Table",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9pVnvPWfkVZwDmY6PJVAXxdVhE7.jpg",
          releaseYear: 1990,
          duration: "2h 38m",
          rating: 4.7,
          description: "The true story of Janet Frame, New Zealand's most distinguished author. The film follows her growth from a shy schoolgirl through years spent in mental institutions.",
          director: "Jane Campion",
          cast: ["Kerry Fox", "Alexia Keogh", "Karen Fergusson"],
          genre: ["Biography", "Drama"],
          tmdb_id: 34953
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
          image: "https://image.tmdb.org/t/p/w500/qjJjJRJXJXZYjJlJjJJJJJJJJJJ.jpg",
          releaseYear: 1986,
          duration: "1h 29m",
          rating: 4.8,
          description: "After the death of a friend, a writer recounts a boyhood journey to find the body of a missing boy.",
          director: "Rob Reiner",
          cast: ["Wil Wheaton", "River Phoenix", "Corey Feldman"],
          genre: ["Adventure", "Drama"],
          tmdb_id: 1074
        },
        "Dead-Poets-Society": {
          id: "Dead-Poets-Society",
          title: "Dead Poets Society",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/ai40gM7SUaGA6fthvsd87o8IQq4.jpg",
          releaseYear: 1989,
          duration: "2h 8m",
          rating: 4.8,
          description: "English teacher John Keating inspires his students to look at poetry with a different perspective of authentic knowledge and feelings.",
          director: "Peter Weir",
          cast: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke"],
          genre: ["Comedy", "Drama"],
          tmdb_id: 207
        }
      },
      "Modern-Teen": {
        "Lady-Bird": {
          id: "Lady-Bird",
          title: "Lady Bird",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
          releaseYear: 2017,
          duration: "1h 33m",
          rating: 4.8,
          description: "A California high school student realizes that she might be nothing more than a footnote in her own life story.",
          director: "Greta Gerwig",
          cast: ["Saoirse Ronan", "Laura Dern", "Tracy Letts"],
          genre: ["Comedy", "Drama"],
          tmdb_id: 427744
        },
        // Add more movies...
      },
      "High-School-Stories": {
        "Mean-Girls": {
          id: "Mean-Girls",
          title: "Mean Girls",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgkYmhXBx.jpg",
          releaseYear: 2004,
          duration: "1h 37m",
          rating: 4.8,
          description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
          director: "Mark Waters",
          cast: ["Lindsay Lohan", "Rachel McAdams", "Tina Fey"],
          genre: ["Comedy"],
          tmdb_id: 276
        },
        // Add more movies...
      },
      "International-Coming-of-Age": {
        "Y-Tu-Mamá-También": {
          id: "Y-Tu-Mamá-También",
          title: "Y Tu Mamá También",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/qjJjJRJXJXZYjJlJjJJJJJJJJJJ.jpg",
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
          image: "https://image.tmdb.org/t/p/w500/qjJjJRJXJXZYjJlJjJJJJJJJJJJ.jpg",
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
          image: "https://image.tmdb.org/t/p/w500/qjJjJRJXJXZYjJlJjJJJJJJJJJJ.jpg",
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
          image: "https://image.tmdb.org/t/p/w500/qjJjJRJXJXZYjJlJjJJJJJJJJJJ.jpg",
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
          image: "https://image.tmdb.org/t/p/w500/qjJjJRJXJXZYjJlJjJJJJJJJJJJ.jpg",
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
  'sports-legends': {
    id: 'sports-legends',
    name: "Sports Legends",
    categories: {
      "Rugby-World-Cup": {
        "Invictus": {
          id: "Invictus",
          title: "Invictus",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/esq6axj5aJh9kw4cY0qhUiQqS1N.jpg",
          releaseYear: 2009,
          duration: "2h 14m",
          rating: 4.7,
          description: "Nelson Mandela, in his first term as President of South Africa, initiates a unique venture to unite the Apartheid-torn land: enlist the national rugby team on a mission to win the 1995 Rugby World Cup.",
          director: "Clint Eastwood",
          cast: ["Morgan Freeman", "Matt Damon", "Tony Kgoroge"],
          genre: ["Biography", "Drama", "History", "Sport"],
          tmdb_id: 23977
        },
        // Add more movies...
      },
      "Boxing": {
        "Raging-Bull": {
          id: "Raging-Bull",
          title: "Raging Bull",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/rEviyDWNbAFmvvCyVPoCHtKK8pj.jpg",
          releaseYear: 1980,
          duration: "2h 9m",
          rating: 4.8,
          description: "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
          director: "Martin Scorsese",
          cast: ["Robert De Niro", "Cathy Moriarty", "Joe Pesci"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 1578
        },
        // Add more movies...
      },
      "American-Football": {
        "The-Blind-Side": {
          id: "The-Blind-Side",
          title: "The Blind Side",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/5ZPbBXyjkgIbOasAIduF19EYYGZ.jpg",
          releaseYear: 2009,
          duration: "2h 9m",
          rating: 4.7,
          description: "The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family.",
          director: "John Lee Hancock",
          cast: ["Sandra Bullock", "Tim McGraw", "Quinton Aaron"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 22881
        },
        // Add more movies...
      },
      "Tennis": {
        "Remember-the-Titans": {
          id: "Remember-the-Titans",
          title: "Remember the Titans",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8Jc4KIYK9wkzHcIhgE4x2DgQoW6.jpg",
          releaseYear: 2000,
          duration: "1h 53m",
          rating: 4.8,
          description: "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit.",
          director: "Boaz Yakin",
          cast: ["Denzel Washington", "Will Patton", "Wood Harris"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 10637
        },
        // Add more movies...
      },
      "Mixed-Martial-Arts": {
        "Warrior": {
          id: "Warrior",
          title: "Warrior",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/zxRB1qIKWxNwZKQJzJXRnQaBxhY.jpg",
          releaseYear: 2011,
          duration: "2h 20m",
          rating: 4.7,
          description: "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
          director: "Gavin O'Connor",
          cast: ["Tom Hardy", "Joel Edgerton", "Nick Nolte"],
          genre: ["Drama", "Sport"],
          tmdb_id: 59440
        },
        // Add more movies...
      },
      "Boxing-Drama": {
        "Million-Dollar-Baby": {
          id: "Million-Dollar-Baby",
          title: "Million Dollar Baby",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/mq2EGHzE5OLYdtwsxKyQWQJwrQS.jpg",
          releaseYear: 2004,
          duration: "2h 12m",
          rating: 4.8,
          description: "A determined woman works with a hardened boxing trainer to become a professional.",
          director: "Clint Eastwood",
          cast: ["Hilary Swank", "Clint Eastwood", "Morgan Freeman"],
          genre: ["Drama", "Sport"],
          tmdb_id: 70
        },
        // Add more movies...
      },
      "Wrestling": {
        "Foxcatcher": {
          id: "Foxcatcher",
          title: "Foxcatcher",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/mZO1T8Z5q0YzXoQJFjwzYYlauB1.jpg",
          releaseYear: 2014,
          duration: "2h 14m",
          rating: 4.6,
          description: "The story of Olympic Wrestling Champion Mark Schultz and how paranoid schizophrenic John du Pont killed his brother, Olympic Champion Dave Schultz.",
          director: "Bennett Miller",
          cast: ["Steve Carell", "Channing Tatum", "Mark Ruffalo"],
          genre: ["Biography", "Drama", "Sport"],
          tmdb_id: 181283
        },
        // Add more movies...
      }
    }
  },
  // ... previous categories remain ...

"bollywood-comedy": {
  id: "bollywood-comedy",
  name: "Bollywood Comedy",
  categories: {
    "Classic-Comedy": {
      "Andaz-Apna-Apna": {
        id: "Andaz-Apna-Apna",
        title: "Andaz Apna Apna",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/8NPqUoGh3R1jefxXqwKwYwHxKe2.jpg",
        releaseYear: 1994,
        duration: "2h 40m",
        rating: 4.9,
        description: "Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal. A cult classic known for its quotable dialogues.",
        director: "Rajkumar Santoshi",
        cast: ["Aamir Khan", "Salman Khan", "Raveena Tandon", "Karisma Kapoor"],
        genre: ["Comedy", "Romance"],
        tmdb_id: 51721
      },
      "Chupke-Chupke": {
        id: "Chupke-Chupke",
        title: "Chupke Chupke",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/9KQDhqJ9pHXgHV4KlxPxD5T4yJ9.jpg",
        releaseYear: 1975,
        duration: "2h 27m",
        rating: 4.8,
        description: "A newly married professor plays a prank on his wife's family with hilarious consequences. Features legendary performances from the golden age of comedy.",
        director: "Hrishikesh Mukherjee",
        cast: ["Dharmendra", "Amitabh Bachchan", "Sharmila Tagore"],
        genre: ["Comedy", "Romance"],
        tmdb_id: 51722
      },
      "Golmaal": {
        id: "Golmaal",
        title: "Gol Maal",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
        releaseYear: 1979,
        duration: "2h 24m",
        rating: 4.8,
        description: "A young man creates an elaborate double life to keep his job, leading to a series of comedic misunderstandings. A masterpiece of situational comedy.",
        director: "Hrishikesh Mukherjee",
        cast: ["Amol Palekar", "Utpal Dutt", "Bindiya Goswami"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 51723
      },
      "Jaane-Bhi-Do-Yaaro": {
        id: "Jaane-Bhi-Do-Yaaro",
        title: "Jaane Bhi Do Yaaro",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
        releaseYear: 1983,
        duration: "2h 12m",
        rating: 4.8,
        description: "Two photographers unwittingly become entangled in a web of corruption. A dark comedy that's considered a cult classic.",
        director: "Kundan Shah",
        cast: ["Naseeruddin Shah", "Ravi Baswani", "Om Puri"],
        genre: ["Comedy", "Satire"],
        tmdb_id: 51725
      },
      "Padosan": {
        id: "Padosan",
        title: "Padosan",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
        releaseYear: 1968,
        duration: "2h 37m",
        rating: 4.7,
        description: "A simple man falls in love with his neighbor and seeks the help of his musical friends to win her heart. Known for its legendary comedic performances.",
        director: "Jyoti Swaroop",
        cast: ["Sunil Dutt", "Saira Banu", "Mehmood"],
        genre: ["Comedy", "Romance", "Musical"],
        tmdb_id: 51726
      },
      "Angoor": {
        id: "Angoor",
        title: "Angoor",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/tYz4gMTM3tqUGGYS0mGHQK7Qh4x.jpg",
        releaseYear: 1982,
        duration: "2h 11m",
        rating: 4.8,
        description: "Based on Shakespeare's Comedy of Errors, this film follows two pairs of identical twins who were separated at birth, leading to hilarious confusion.",
        director: "Gulzar",
        cast: ["Sanjeev Kumar", "Deven Verma", "Moushumi Chatterjee"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 51727
      },
      "Amar-Akbar-Anthony": {
        id: "Amar-Akbar-Anthony",
        title: "Amar Akbar Anthony",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/tRRqV1YhGkMqRgHyuNxZANnRj0h.jpg",
        releaseYear: 1977,
        duration: "2h 55m",
        rating: 4.8,
        description: "Three brothers separated in childhood grow up in different faiths. A perfect blend of comedy, drama and action.",
        director: "Manmohan Desai",
        cast: ["Amitabh Bachchan", "Vinod Khanna", "Rishi Kapoor"],
        genre: ["Comedy", "Drama", "Action"],
        tmdb_id: 51731
      }
    },
    "Modern-Comedy": {
      "3-Idiots": {
        id: "3-Idiots",
        title: "3 Idiots",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
        releaseYear: 2009,
        duration: "2h 50m",
        rating: 4.9,
        description: "Two friends search for their long lost companion who inspired them to think differently. A perfect blend of comedy and social commentary.",
        director: "Rajkumar Hirani",
        cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 20453
      },
      "Munna-Bhai-MBBS": {
        id: "Munna-Bhai-MBBS",
        title: "Munna Bhai M.B.B.S.",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/3KR6RDd7ZxV5LVTqFQtGYP5HF1X.jpg",
        releaseYear: 2003,
        duration: "2h 36m",
        rating: 4.8,
        description: "A gangster sets out to fulfill his father's dream of becoming a doctor. Revolutionized comedy in modern Bollywood.",
        director: "Rajkumar Hirani",
        cast: ["Sanjay Dutt", "Arshad Warsi", "Boman Irani"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 51724
      },
      "Hera-Pheri": {
        id: "Hera-Pheri",
        title: "Hera Pheri",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/qKkjXoWjYJJJJJJJJJJJJJJJJJJ.jpg",
        releaseYear: 2000,
        duration: "2h 36m",
        rating: 4.8,
        description: "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. But nothing is as simple as it seems.",
        director: "Priyadarshan",
        cast: ["Akshay Kumar", "Sunil Shetty", "Paresh Rawal"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 51728
      },
      "Lage-Raho-Munna-Bhai": {
        id: "Lage-Raho-Munna-Bhai",
        title: "Lage Raho Munna Bhai",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/5UQPSvZg1HxJMUYvxYwOPbTBVOX.jpg",
        releaseYear: 2006,
        duration: "2h 24m",
        rating: 4.8,
        description: "The sequel to Munna Bhai M.B.B.S., where a gangster begins to see Gandhi's spirit and adopts his principles of non-violence and truth.",
        director: "Rajkumar Hirani",
        cast: ["Sanjay Dutt", "Arshad Warsi", "Vidya Balan"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 51729
      },
      "Chachi-420": {
        id: "Chachi-420",
        title: "Chachi 420",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/9EpQGQQ4YjH1ZqU5vMPPxJ8nKGh.jpg",
        releaseYear: 1997,
        duration: "2h 35m",
        rating: 4.7,
        description: "A father disguises himself as an elderly female housekeeper to be close to his daughter after a bitter divorce. An Indian adaptation of Mrs. Doubtfire.",
        director: "Kamal Haasan",
        cast: ["Kamal Haasan", "Amrish Puri", "Om Puri"],
        genre: ["Comedy", "Drama", "Family"],
        tmdb_id: 51730
      },
      "Phir-Hera-Pheri": {
        id: "Phir-Hera-Pheri",
        title: "Phir Hera Pheri",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/9KQDhqJ9pHXgHV4KlxPxD5T4yJ9.jpg",
        releaseYear: 2006,
        duration: "2h 33m",
        rating: 4.7,
        description: "The trio from Hera Pheri return in this sequel involving a get-rich-quick scheme that goes hilariously wrong.",
        director: "Neeraj Vora",
        cast: ["Akshay Kumar", "Suniel Shetty", "Paresh Rawal"],
        genre: ["Comedy", "Drama"],
        tmdb_id: 51732
      }
    }
    }
  },
  "bollywood-horror": {
    id: "bollywood-horror",
    name: "Bollywood Horror",
    categories: {
      "Supernatural-Horror": {
        "Raat": {
          id: "Raat",
          title: "Raat",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
          releaseYear: 1992,
          duration: "2h 25m",
          rating: 4.6,
          description: "A young woman becomes possessed by a spirit after moving into a new house. A landmark film in Indian horror cinema.",
          director: "Ram Gopal Varma",
          cast: ["Revathi", "Om Puri", "Rohini Hattangadi"],
          genre: ["Horror", "Supernatural"],
          tmdb_id: 51745
        },
        "Junoon": {
          id: "Junoon",
          title: "Junoon",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kZGfx5JCYunqGZ0z0y0DnLPEgEt.jpg",
          releaseYear: 1992,
          duration: "2h 15m",
          rating: 4.5,
          description: "A man is cursed to transform into a tiger during full moon nights. A unique take on the werewolf genre.",
          director: "Mahesh Bhatt",
          cast: ["Rahul Roy", "Pooja Bhatt", "Avinash Wadhawan"],
          genre: ["Horror", "Thriller", "Romance"],
          tmdb_id: 51746
        },
        "Purana-Mandir": {
          id: "Purana-Mandir",
          title: "Purana Mandir",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
          releaseYear: 1984,
          duration: "2h 25m",
          rating: 4.4,
          description: "A family is haunted by an ancient curse that threatens the life of every firstborn daughter. A classic of the Ramsay Brothers era.",
          director: "Shyam Ramsay",
          cast: ["Mohnish Bahl", "Puneet Issar", "Arti Gupta"],
          genre: ["Horror", "Supernatural"],
          tmdb_id: 51747
        },
        "Bandh-Darwaza": {
          id: "Bandh-Darwaza",
          title: "Bandh Darwaza",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tYz4gMTM3tqUGGYS0mGHQK7Qh4x.jpg",
          releaseYear: 1990,
          duration: "2h 15m",
          rating: 4.3,
          description: "A vampire-like creature is awakened from its ancient slumber and terrorizes a village. Another Ramsay Brothers classic.",
          director: "Shyam Ramsay",
          cast: ["Hashmat Khan", "Manjeet Kullar", "Aruna Irani"],
          genre: ["Horror", "Supernatural"],
          tmdb_id: 51748
        },
        "Veerana": {
          id: "Veerana",
          title: "Veerana",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9EpQGQQ4YjH1ZqU5vMPPxJ8nKGh.jpg",
          releaseYear: 1988,
          duration: "2h 25m",
          rating: 4.4,
          description: "A young woman is possessed by the spirit of a witch seeking revenge. Features iconic horror elements of the era.",
          director: "Shyam Ramsay",
          cast: ["Jasmin", "Hemant Birje", "Sahila Chadha"],
          genre: ["Horror", "Supernatural"],
          tmdb_id: 51749
        },
        "Dak-Bangla": {
          id: "Dak-Bangla",
          title: "Dak Bangla",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/vB5w3qD8XwPKgYxz8kYnZY9Yy2l.jpg",
          releaseYear: 1987,
          duration: "2h 20m",
          rating: 4.3,
          description: "Strange occurrences in a remote rest house lead to the discovery of its dark past. A atmospheric horror thriller.",
          director: "Keshu Ramsay",
          cast: ["Vinod Mehra", "Prema Narayan", "Girish Karnad"],
          genre: ["Horror", "Mystery"],
          tmdb_id: 51750
        }
      },
      "Psychological-Horror": {
        "Bhoot": {
          id: "Bhoot",
          title: "Bhoot",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
          releaseYear: 2003,
          duration: "2h 25m",
          rating: 4.5,
          description: "A married couple moves into a flat that is haunted by the spirit of its previous tenant.",
          director: "Ram Gopal Varma",
          cast: ["Ajay Devgn", "Urmila Matondkar", "Nana Patekar"],
          genre: ["Horror", "Psychological"],
          tmdb_id: 51735
        },
        "13B": {
          id: "13B",
          title: "13B: Fear Has a New Address",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9pHXzb3MtH7NyXwE7kpL5Z2wVY8.jpg",
          releaseYear: 2009,
          duration: "2h 20m",
          rating: 4.6,
          description: "A family's television starts showing them their future, leading to disturbing revelations.",
          director: "Vikram Kumar",
          cast: ["R. Madhavan", "Neetu Chandra", "Poonam Dhillon"],
          genre: ["Horror", "Psychological", "Mystery"],
          tmdb_id: 51738
        },
        "Ek-Thi-Daayan": {
          id: "Ek-Thi-Daayan",
          title: "Ek Thi Daayan",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
          releaseYear: 2013,
          duration: "2h 15m",
          rating: 4.5,
          description: "A famous magician must confront his past and face the possibility that his life has been influenced by dark supernatural forces.",
          director: "Kannan Iyer",
          cast: ["Emraan Hashmi", "Konkona Sen Sharma", "Kalki Koechlin"],
          genre: ["Horror", "Psychological", "Thriller"],
          tmdb_id: 51743
        },
        "Phobia": {
          id: "Phobia",
          title: "Phobia",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
          releaseYear: 2016,
          duration: "1h 51m",
          rating: 4.6,
          description: "An artist suffering from agoraphobia struggles to cope with her condition as she begins experiencing paranormal activity in her new apartment.",
          director: "Pavan Kirpalani",
          cast: ["Radhika Apte", "Satyadeep Mishra", "Yashaswini Dayama"],
          genre: ["Horror", "Psychological", "Thriller"],
          tmdb_id: 51744
        }
      },
      "Folk-Horror": {
        "Tumbbad": {
          id: "Tumbbad",
          title: "Tumbbad",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
          releaseYear: 2018,
          duration: "1h 44m",
          rating: 4.8,
          description: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her.",
          director: "Rahi Anil Barve",
          cast: ["Sohum Shah", "Jyoti Malshe", "Anita Date"],
          genre: ["Horror", "Folk", "Mythology"],
          tmdb_id: 51736
        },
        "Pari": {
          id: "Pari",
          title: "Pari",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/wJ2qZ6YkxARJwTprqp6FqHQNYwE.jpg",
          releaseYear: 2018,
          duration: "2h 16m",
          rating: 4.5,
          description: "A man tries to help a woman named Ruksana, who is found under mysterious circumstances in a house. Based on Bengali folklore.",
          director: "Prosit Roy",
          cast: ["Anushka Sharma", "Parambrata Chatterjee", "Rajat Kapoor"],
          genre: ["Horror", "Folk", "Supernatural"],
          tmdb_id: 51739
        }
      },
      "Modern-Horror-Thrillers": {
        "Bhool-Bhulaiyaa": {
          id: "Bhool-Bhulaiyaa",
          title: "Bhool Bhulaiyaa",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/3KR6RDd7ZxV5LVTqFQtGYP5HF1X.jpg",
          releaseYear: 2007,
          duration: "2h 39m",
          rating: 4.7,
          description: "A psychiatrist deals with a case of apparent possession in an ancient mansion, blending horror with psychological elements.",
          director: "Priyadarshan",
          cast: ["Akshay Kumar", "Vidya Balan", "Shiney Ahuja"],
          genre: ["Horror", "Comedy", "Thriller"],
          tmdb_id: 51751
        },
        "Kaun": {
          id: "Kaun",
          title: "Kaun?",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/tYz4gMTM3tqUGGYS0mGHQK7Qh4x.jpg",
          releaseYear: 1999,
          duration: "1h 30m",
          rating: 4.6,
          description: "A woman alone at home encounters two mysterious visitors during a stormy night. A psychological horror masterpiece.",
          director: "Ram Gopal Varma",
          cast: ["Urmila Matondkar", "Manoj Bajpayee", "Sushant Singh"],
          genre: ["Horror", "Thriller", "Mystery"],
          tmdb_id: 51752
        },
        "Pizza": {
          id: "Pizza",
          title: "Pizza",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
          releaseYear: 2014,
          duration: "2h 7m",
          rating: 4.5,
          description: "A pizza delivery boy gets trapped in a haunted house. As the night progresses, he realizes there's more to the situation than meets the eye.",
          director: "Akshay Akkineni",
          cast: ["Akshay Oberoi", "Parvathy Omanakuttan", "Dipannita Sharma"],
          genre: ["Horror", "Thriller"],
          tmdb_id: 51753
        }
      },
      "Horror-Anthology": {
        "Darna-Mana-Hai": {
          id: "Darna-Mana-Hai",
          title: "Darna Mana Hai",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
          releaseYear: 2003,
          duration: "2h 17m",
          rating: 4.5,
          description: "Seven friends stranded in a forest share horror stories. Each tale reveals a different facet of fear.",
          director: "Prawaal Raman",
          cast: ["Saif Ali Khan", "Shilpa Shetty", "Sameera Reddy"],
          genre: ["Horror", "Anthology"],
          tmdb_id: 51754
        },
        "Darna-Zaroori-Hai": {
          id: "Darna-Zaroori-Hai",
          title: "Darna Zaroori Hai",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/kZGfx5JCYunqGZ0z0y0DnLPEgEt.jpg",
          releaseYear: 2006,
          duration: "2h 19m",
          rating: 4.4,
          description: "Six horror stories told by different directors, each exploring a unique aspect of fear and supernatural.",
          director: "Ram Gopal Varma",
          cast: ["Amitabh Bachchan", "Anil Kapoor", "Ritesh Deshmukh"],
          genre: ["Horror", "Anthology"],
          tmdb_id: 51755
        },
        "Ghost-Stories": {
          id: "Ghost-Stories",
          title: "Ghost Stories",
          price: 49.99,
          image: "https://image.tmdb.org/t/p/w500/9EpQGQQ4YjH1ZqU5vMPPxJ8nKGh.jpg",
          releaseYear: 2020,
          duration: "2h 24m",
          rating: 4.5,
          description: "Four short films by four of India's promising directors, each telling a unique horror story.",
          director: "Various",
          cast: ["Janhvi Kapoor", "Sobhita Dhulipala", "Mrunal Thakur"],
          genre: ["Horror", "Anthology"],
          tmdb_id: 51756
        }
      }
    }
  },
  "bollywood-romance": {
  id: "bollywood-romance",
  name: "Bollywood Romance",
  categories: {
    "Classic-Romance": {
      "Dilwale-Dulhania-Le-Jayenge": {
        id: "Dilwale-Dulhania-Le-Jayenge",
        title: "Dilwale Dulhania Le Jayenge",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        releaseYear: 1995,
        duration: "3h 10m",
        rating: 4.9,
        description: "A young non-resident Indian couple fall in love during a vacation through Europe, but her traditional father has already arranged her marriage to someone else.",
        director: "Aditya Chopra",
        cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
        genre: ["Romance", "Drama", "Musical"],
        tmdb_id: 19404
      },
      "Kuch-Kuch-Hota-Hai": {
        id: "Kuch-Kuch-Hota-Hai",
        title: "Kuch Kuch Hota Hai",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/5nEeI5UXwEsFE9PMwZPjnfXhxEQ.jpg",
        releaseYear: 1998,
        duration: "3h 5m",
        rating: 4.8,
        description: "A dying mother leaves letters asking her daughter to play matchmaker for her father and his college best friend.",
        director: "Karan Johar",
        cast: ["Shah Rukh Khan", "Kajol", "Rani Mukerji"],
        genre: ["Romance", "Drama", "Musical"],
        tmdb_id: 51757
      },
      "Qayamat-Se-Qayamat-Tak": {
        id: "Qayamat-Se-Qayamat-Tak",
        title: "Qayamat Se Qayamat Tak",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/8mxG1SPw3aswhqHDH6RzHJKJ9Jx.jpg",
        releaseYear: 1988,
        duration: "2h 42m",
        rating: 4.7,
        description: "Two young lovers from feuding families elope, facing dire consequences. A modern adaptation of Romeo and Juliet.",
        director: "Mansoor Khan",
        cast: ["Aamir Khan", "Juhi Chawla", "Goga Kapoor"],
        genre: ["Romance", "Drama", "Musical"],
        tmdb_id: 51758
      }
    },
    "Modern-Romance": {
      "Jab-We-Met": {
        id: "Jab-We-Met",
        title: "Jab We Met",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/tYz4gMTM3tqUGGYS0mGHQK7Qh4x.jpg",
        releaseYear: 2007,
        duration: "2h 18m",
        rating: 4.8,
        description: "A depressed businessman finds his life changing after he meets a vivacious girl on a train.",
        director: "Imtiaz Ali",
        cast: ["Shahid Kapoor", "Kareena Kapoor", "Tarun Arora"],
        genre: ["Romance", "Comedy", "Drama"],
        tmdb_id: 51759
      },
      "Yeh-Jawaani-Hai-Deewani": {
        id: "Yeh-Jawaani-Hai-Deewani",
        title: "Yeh Jawaani Hai Deewani",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/9KQDhqJ9pHXgHV4KlxPxD5T4yJ9.jpg",
        releaseYear: 2013,
        duration: "2h 40m",
        rating: 4.7,
        description: "A free-spirited traveler and an ambitious medical student reconnect years after their first meeting, exploring love and personal dreams.",
        director: "Ayan Mukerji",
        cast: ["Ranbir Kapoor", "Deepika Padukone", "Kalki Koechlin"],
        genre: ["Romance", "Drama", "Musical"],
        tmdb_id: 51760
      }
    },
    "Tragic-Romance": {
      "Devdas": {
        id: "Devdas",
        title: "Devdas",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/6zqXIMwBJjRTnqc9Y0ZOtFwHhEF.jpg",
        releaseYear: 2002,
        duration: "3h 5m",
        rating: 4.8,
        description: "A wealthy law graduate returns home to find his childhood sweetheart married to another man, leading him down a path of self-destruction.",
        director: "Sanjay Leela Bhansali",
        cast: ["Shah Rukh Khan", "Aishwarya Rai", "Madhuri Dixit"],
        genre: ["Romance", "Drama", "Tragedy"],
        tmdb_id: 51761
      },
      "Aashiqui-2": {
        id: "Aashiqui-2",
        title: "Aashiqui 2",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/3KR6RDd7ZxV5LVTqFQtGYP5HF1X.jpg",
        releaseYear: 2013,
        duration: "2h 12m",
        rating: 4.7,
        description: "A successful musician helps a young singer find fame, even as age and alcoholism send his own career into a downward spiral.",
        director: "Mohit Suri",
        cast: ["Aditya Roy Kapur", "Shraddha Kapoor", "Shaad Randhawa"],
        genre: ["Romance", "Drama", "Musical"],
        tmdb_id: 51762
      },
      "Veer-Zaara": {
        id: "Veer-Zaara",
        title: "Veer-Zaara",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/2gVf2uZxsGBwqUzUv6eX9Qqf3tE.jpg",
        releaseYear: 2004,
        duration: "3h 12m",
        rating: 4.8,
        description: "A tale of love between an Indian Air Force pilot and a Pakistani woman, separated by war and united by destiny.",
        director: "Yash Chopra",
        cast: ["Shah Rukh Khan", "Preity Zinta", "Rani Mukerji"],
        genre: ["Romance", "Drama"],
        tmdb_id: 51763
      }
    },
    "Musical-Romance": {
      "Aashiqui": {
        id: "Aashiqui",
        title: "Aashiqui",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/yJ9aPx4Q5tTaeBmRqZf8hRdwKjB.jpg",
        releaseYear: 1990,
        duration: "2h 35m",
        rating: 4.6,
        description: "A young aspiring singer falls in love with an orphaned girl, leading to a musical journey of love and success.",
        director: "Mahesh Bhatt",
        cast: ["Rahul Roy", "Anu Aggarwal", "Deepak Tijori"],
        genre: ["Romance", "Musical", "Drama"],
        tmdb_id: 51764
      },
      "Rockstar": {
        id: "Rockstar",
        title: "Rockstar",
        price: 49.99,
        image: "https://image.tmdb.org/t/p/w500/9EpQGQQ4YjH1ZqU5vMPPxJ8nKGh.jpg",
        releaseYear: 2011,
        duration: "2h 39m",
        rating: 4.7,
        description: "A middle-class boy's journey from a Delhi college student to a famous musician, inspired by heartbreak and loss.",
        director: "Imtiaz Ali",
        cast: ["Ranbir Kapoor", "Nargis Fakhri", "Shammi Kapoor"],
        genre: ["Romance", "Musical", "Drama"],
        tmdb_id: 51765
      }
    }
    }
  }
}



export default collections;
