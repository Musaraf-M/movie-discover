import { useEffect, useState } from "react";
import { fetchMovies, Movie } from "../utils/api";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies<Movie>("/movie/popular").then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>
              {movie.title} ({movie.release_date.split("-")[0]})
            </h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
