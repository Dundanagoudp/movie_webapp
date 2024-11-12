import { useEffect, useState } from "react";
import "../components/MoviesCard.css";
import { Link } from "react-router-dom";
import { MovieCards } from "../api/MovieDataApi"; // Ensure this fetches the correct data

export const MoviesCard = () => {
  const [moviedata, setMovieData] = useState([]);

  const MovieDataFetch = async () => {
    try {
      const res = await MovieCards();
      setMovieData(res.data.Search);
      console.log(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MovieDataFetch();
  }, []);

  return (
    <div className="movies-section">
      <h1 className="title">Recommended for You</h1>
      <div className="movies-list">
        <button className="pre-btn"><img src="pre.png" alt="Previous" /></button>
        <button className="nxt-btn"><img src="nxt.png" alt="Next" /></button>

        <div className="card-container">
          {moviedata && moviedata.length > 0 ? (
            moviedata.map((movie) => (
              <div className="card" key={movie.imdbID}> {/* Unique key for each movie */}
                <img src={movie.Poster} alt={movie.Title} className="card-img" />
                <div className="card-body">
                  <h2 className="name">{movie.Title}</h2>
                  <p className="des">Year: {movie.Year}</p>
                  <Link to={`/moviedetails/${movie.imdbID}`} className="view-details-button">
                    View Details
                  </Link>
                  <button className="watchlist-btn">Add to Watchlist</button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </div>
    </div>
  );
};
