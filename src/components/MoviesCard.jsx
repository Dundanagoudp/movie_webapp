import { useEffect, useState, useRef } from "react";
import "../components/MoviesCard.css";
import { Link } from "react-router-dom";
import { MovieCards, MovieKannada, MovieHindi, SportsIpl } from "../api/MovieDataApi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const MoviesCard = ({ searchTerm }) => {
  const [englishMovies, setEnglishMovies] = useState([]);
  const [kannadaMovies, setKannadaMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [iplnews, setIplNews] = useState([]);
  const englishCardContainerRef = useRef(null);
  const kannadaCardContainerRef = useRef(null);

  const fetchEnglishMovies = async () => {
    try {
      const res = await MovieCards();
      setEnglishMovies(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchKannadaMovies = async () => {
    try {
      const res = await MovieKannada();
      setKannadaMovies(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHindiMovies = async () => {
    try {
      const res = await MovieHindi();
      setHindiMovies(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIplNews = async () => {
    try {
      const res = await SportsIpl();
      setIplNews(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEnglishMovies();
    fetchKannadaMovies();
    fetchHindiMovies();
    fetchIplNews();
  }, []);

  // Function to filter movies based on the search term
  const filterMovies = (movies) => {
    if (!searchTerm) return movies; // If no search term, return all movies
  
    return movies.filter(movie => {
      // Check if movie.Title exists and is a string, then apply toLowerCase
      return movie.Title && movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollLeft -= 200;
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollLeft += 200;
    }
  };

  return (
    <div className="movies-section">
      {/* English Movies Section */}
      <h1 className="title">Recommended for You (English)</h1>
      <div className="movies-list">
        <button className="pre-btn" onClick={() => scrollLeft(englishCardContainerRef)}>
          <AiOutlineLeft size={24} color="white" />
        </button>
        <button className="nxt-btn" onClick={() => scrollRight(englishCardContainerRef)}>
          <AiOutlineRight size={24} color="white" />
        </button>

        <div className="card-container" ref={englishCardContainerRef}>
          {filterMovies(englishMovies).length > 0 ? (
            filterMovies(englishMovies).map((movie) => (
              <div className="card" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="card-img" />
                <div className="card-body">
                  <h2 className="name">{movie.Title}</h2>
                  <p className="des">Year: {movie.Year}</p>
                  <Link to={`/moviecarddetails/${movie.imdbID}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>

      {/* Kannada Movies Section */}
      <h1 className="title">Kannada Movies</h1>
      <div className="movies-list">
        <div className="card-container" ref={kannadaCardContainerRef}>
          {filterMovies(kannadaMovies).length > 0 ? (
            filterMovies(kannadaMovies).map((movie) => (
              <div className="card" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="card-img" />
                <div className="card-body">
                  <h2 className="name">{movie.Title}</h2>
                  <p className="des">Year: {movie.Year}</p>
                  <Link to={`/moviecarddetails/${movie.imdbID}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>

      {/* Hindi Movies Section */}
      <h1 className="title">Hindi Movies</h1>
      <div className="movies-list">
        <div className="card-container" ref={kannadaCardContainerRef}>
          {filterMovies(hindiMovies).length > 0 ? (
            filterMovies(hindiMovies).map((movie) => (
              <div className="card" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="card-img" />
                <div className="card-body">
                  <h2 className="name">{movie.Title}</h2>
                  <p className="des">Year: {movie.Year}</p>
                  <Link to={`/moviecarddetails/${movie.imdbID}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>

      {/* Sports News Section */}
      <h1 className="title">Sports News</h1>
      <div className="movies-list">
        <div className="card-container" ref={kannadaCardContainerRef}>
          {filterMovies(iplnews).length > 0 ? (
            filterMovies(iplnews).map((movie) => (
              <div className="card" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="card-img" />
                <div className="card-body">
                  <h2 className="name">{movie.Title}</h2>
                  <p className="des">Year: {movie.Year}</p>
                  <Link to={`/moviecarddetails/${movie.imdbID}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No news found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
