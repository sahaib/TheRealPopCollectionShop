// Define the type for the moviePosters object
type MoviePostersType = {
  [key: string]: string;  // This allows string indexing
};

// Cast the moviePosters object to the type
const moviePosters: MoviePostersType = {
  War: "/images/movies/war.jpg",
  Baby: "/images/movies/baby.jpg",
  Andhadhun: "/images/movies/andhadhun.jpg",
  Pathaan: "/images/movies/pathaan.jpg",
  "Dhoom-Series": "/images/movies/dhoom.jpg",
  "the-avengers-series": "/images/movies/avengers.jpg",
  "iron-man-trilogy": "/images/movies/ironman.jpg",
  "captain-america-trilogy": "/images/movies/captain-america.jpg",
  "thor-series": "/images/movies/thor.jpg",
  "Mad-Max-Series": "/images/movies/mad-max.jpg",
  // ... rest of your movie posters
};

export const PLACEHOLDER_IMAGE = "/images/placeholder.jpg";

export const getMoviePoster = (movieId: string): string => {
  return moviePosters[movieId] || PLACEHOLDER_IMAGE;
};

// Optional: Preload important images
export const preloadImages = () => {
  Object.values(moviePosters).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}; 