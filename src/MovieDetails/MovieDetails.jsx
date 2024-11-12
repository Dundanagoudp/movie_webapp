import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getMovieDetails } from "../api/MovieGetDataApi";
import "../MovieDetails/MovieDetails.css";
import { MovieCards, MovieKannada ,MovieHindi,SportsIpl} from "../api/MovieDataApi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const MovieCardDetails = () => {
  const [englishMovies, setEnglishMovies] = useState([]);
  const [kannadaMovies, setKannadaMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [iplNews, setIplNews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const englishCardContainerRef = useRef(null);
  const kannadaCardContainerRef = useRef(null);
  const hindiCardContainerRef = useRef(null);
  const iplCardContainerRef = useRef(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  }, [id]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resEnglish = await MovieCards();
        setEnglishMovies(resEnglish.data.Search);
        
        const resKannada = await MovieKannada();
        setKannadaMovies(resKannada.data.Search);
        
        const resHindi = await MovieHindi();
        setHindiMovies(resHindi.data.Search);

        const resIpl = await SportsIpl();
        setIplNews(resIpl.data.Search);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    Awards,
    imdbRating
  } = movieData;

  const handleGoBack = () => navigate(-1);

  return (
    <div className="movie-details-container">
      <div className="movie-details-poster-container">
        <img src={Poster} alt={Title} className="movie-details-poster" />
        <button className="movie-details-toggle-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      <div className={`movie-details-info ${showDetails ? "show" : ""}`}>
        <h2 className="movie-details-title">{Title} ({Year})</h2>
        <div className="movie-details-content">
          <span className="movie-details-movie-detail-item">Type: {Type}</span>
          <span className="movie-details-movie-detail-item">IMDb Rating: {imdbRating}</span>
          <span className="movie-details-movie-detail-item">Runtime: {Runtime}</span>
          <span className="movie-details-movie-detail-item">Genre: {Genre}</span>
          <p className="movie-details-plot"><strong>Plot:</strong> {Plot}</p>
          <p className="movie-details-actors"><strong>Actors:</strong> {Actors}</p>
          <p className="movie-details-awards"><strong>Awards:</strong> {Awards || "N/A"}</p>
          <p className="movie-details-box-office"><strong>Box Office:</strong> {BoxOffice || "N/A"}</p>
          <button className="movie-details-go-back-btn" onClick={handleGoBack}>Go Back</button>
        </div>
      </div>

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

      {/* Hindi Movies Section */}
      <h1 className="title">Hindi Movies</h1>
      <div className="movies-list">
        <div className="card-container" ref={hindiCardContainerRef}>
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

      {/* IPL News Section */}
      <h1 className="title">Sports News</h1>
      <div className="movies-list">
        <div className="card-container" ref={iplCardContainerRef}>
          {iplNews && iplNews.length > 0 ? (
            iplNews.map((news) => (
              <div className="card" key={news.imdbID}>
                <img src={news.Poster} alt={news.Title} className="card-img" />
                <div className="card-body">
                  <h2 className="name">{news.Title}</h2>
                  <p className="des">Year: {news.Year}</p>
                  <Link to={`/moviecarddetails/${news.imdbID}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </div>
    </div>
  );
};
