import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api/MovieGetDataApi";
import "../MovieDetails/MovieDetails.css";

export const MovieCardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

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
    </div>
  );
};
