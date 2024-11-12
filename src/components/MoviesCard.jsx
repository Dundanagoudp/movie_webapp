import { useEffect, useState, useRef } from "react";
import "../components/MoviesCard.css";
import { Link } from "react-router-dom";
import { MovieCards, MovieKannada ,MovieHindi,SportsIpl} from "../api/MovieDataApi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const MoviesCard = () => {
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
          {englishMovies && englishMovies.length > 0 ? (
            englishMovies.map((movie) => (
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
            <p>Loading movies...</p>
          )}
        </div>
      </div>

      {/* Kannada Movies Section */}
      <h1 className="title">Kannada Movies</h1>
      <div className="movies-list">
       

        <div className="card-container" ref={kannadaCardContainerRef}>
          {kannadaMovies && kannadaMovies.length > 0 ? (
            kannadaMovies.map((movie) => (
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
            <p>Loading movies...</p>
          )}
        </div>
      </div>

      
      <h1 className="title">Hindi Movies</h1>
      <div className="movies-list">
        

        <div className="card-container" ref={kannadaCardContainerRef}>
          {hindiMovies && hindiMovies.length > 0 ? (
            hindiMovies.map((movie) => (
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
            <p>Loading movies...</p>
          )}
        </div>
      </div>
      <div className="movies-list">
        
      <h1 className="title">Sports News</h1>
        <div className="card-container" ref={kannadaCardContainerRef}>
          {iplnews && iplnews.length > 0 ? (
            iplnews.map((movie) => (
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
            <p>Loading movies...</p>
          )}
        </div>
      </div>
    </div>
  );
};
