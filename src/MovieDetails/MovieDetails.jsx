import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api/MovieGetDataApi";
import "../MovieDetails/MovieDetails.css";

export const MovieCardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovieDetails(id);
        console.log(data);
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

  const totalMinutes = Runtime && typeof Runtime === 'string'
    ? parseInt(Runtime.replace("min", "").trim())
    : 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedTime = Runtime ? `${hours}hr ${minutes}min` : "N/A";

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="movie-details-container">
      <div className="movie-details-info-container">
        <div className="movie-details-poster-container">
          <img src={Poster} alt={Title} className="movie-details-poster" />
        </div>
        <div className="movie-details-info">
          <h2 className="movie-details-title">{Title} ({Year})</h2>
          <div className="movie-details-movie-details">
            <span className="movie-details-movie-detail-item">Type: {Type}</span>
            <span className="movie-details-movie-detail-item">IMDb Rating: {imdbRating}</span>
            <span className="movie-details-movie-detail-item">Runtime: {formattedTime}</span>
            <span className="movie-details-movie-detail-item">Genre: {Genre}</span>
          </div>
          <p className="movie-details-plot"><strong>Plot:</strong> <span>{Plot}</span></p>
          <p className="movie-details-actors"><strong>Actors:</strong> <span>{Actors}</span></p>
          <p className="movie-details-awards"><strong>Awards:</strong> <span>{Awards || "N/A"}</span></p>
          <p className="movie-details-box-office"><strong>Box Office:</strong> <span>{BoxOffice || "N/A"}</span></p>
          <button className="movie-details-go-back-btn" onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
};
