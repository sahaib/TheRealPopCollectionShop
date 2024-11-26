// This will be your data interface
export interface Movie {
  id: number
  name: string
  price: number
  image: string
  releaseYear: number
  duration: string
  rating: number
  description: string
  director: string
  cast: string[]
  genre: string[]
  reviews: Review[]
  relatedMovies: number[] // IDs of related movies
  trailerUrl?: string
  features: string[]
}

export interface Review {
  id: number
  userName: string
  rating: number
  comment: string
  date: string
}

// Sample expanded data
export const movies: Movie[] = [
  {
    id: 1,
    name: 'Back to the Future Trilogy',
    price: 29.99,
    image: '/images/dvd-covers/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
    releaseYear: 1985,
    duration: '1h 56m',
    rating: 4.8,
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
    director: 'Robert Zemeckis',
    cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
    genre: ['Adventure', 'Comedy', 'Sci-Fi'],
    features: [
      '4K Ultra HD',
      'Digital Copy',
      'Behind the Scenes',
      'Director Commentary'
    ],
    reviews: [
      {
        id: 1,
        userName: 'MovieFan85',
        rating: 5,
        comment: 'A timeless classic that never gets old!',
        date: '2024-02-15'
      }
    ],
    relatedMovies: [2, 3, 4],
    trailerUrl: 'https://www.youtube.com/watch?v=qvsgGtivCgs'
  },
  {
    id: 2,
    name: 'Jurassic Park Collection',
    price: 39.99,
    image: '/images/dvd-covers/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg',
    releaseYear: 1993,
    duration: '2h 7m',
    rating: 4.7,
    description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
    director: 'Steven Spielberg',
    cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    features: ['4K Ultra HD', 'Digital Copy', 'Making Of', 'Deleted Scenes'],
    reviews: [{ id: 1, userName: 'DinoLover', rating: 5, comment: 'Spectacular effects!', date: '2024-02-14' }],
    relatedMovies: [1, 3, 4],
    trailerUrl: 'https://www.youtube.com/watch?v=QWBKEmWWL38'
  },
  {
    id: 3,
    name: 'The Matrix Trilogy',
    price: 34.99,
    image: '/images/dvd-covers/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    releaseYear: 1999,
    duration: '2h 16m',
    rating: 4.9,
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    director: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    genre: ['Action', 'Sci-Fi'],
    features: ['4K Ultra HD', 'Digital Copy', 'Behind the Scenes', 'Commentary'],
    reviews: [{ id: 1, userName: 'Neo2024', rating: 5, comment: 'Mind-bending masterpiece!', date: '2024-02-13' }],
    relatedMovies: [1, 2, 4],
    trailerUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8'
  },
  {
    id: 4,
    name: 'Star Wars: The Original Trilogy',
    price: 49.99,
    image: '/images/dvd-covers/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    releaseYear: 1977,
    duration: '2h 1m',
    rating: 4.9,
    description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station.',
    director: 'George Lucas',
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    genre: ['Action', 'Adventure', 'Fantasy'],
    features: ['4K Ultra HD', 'Digital Copy', 'Bonus Content', 'Director\'s Cut'],
    reviews: [{ id: 1, userName: 'JediMaster', rating: 5, comment: 'The force is strong with this one!', date: '2024-02-12' }],
    relatedMovies: [1, 2, 3],
    trailerUrl: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
  }
]

export async function getMovie(id: number): Promise<Movie | null> {
  return movies.find(m => m.id === id) || null
}

export async function getRelatedMovies(ids: number[]): Promise<Movie[]> {
  return movies.filter(m => ids.includes(m.id))
} 