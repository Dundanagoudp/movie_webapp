import { useEffect, useState } from "react";
import "../Pages/Sports.css";
import { Link } from "react-router-dom";
import {  SportsIpl, SportsIplIcc, SportsIplIcc2, SportsIplNews } from "../api/MovieDataApi";

export const Sports = () => {
const [iplnews, setIplNews] = useState([]);
const[sports1,setSports1]=useState([]);
const[sporticc,setSportsIcc]=useState([]);
const[sporticc1,setSportsIcc1]=useState([])

  const fetchIplNews = async () => {
    try {
      const res = await SportsIpl();
      setIplNews(res.data.Search);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const Sports2 = async () => {
      try {
        const res = await SportsIplNews();
        setSports1(res.data.Search);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    const SportsIcc = async () => {
      try {
        const res = await SportsIplIcc();
        setSportsIcc(res.data.Search);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    const SportsIcc2 = async () => {
      try {
        const res = await SportsIplIcc2();
        setSportsIcc1(res.data.Search);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

  useEffect(() => {
      fetchIplNews();
      Sports2();
      SportsIcc();
      SportsIcc2();
  }, []);

  return (
    <div className="movies-section1">
      <h1 className="title1">Latest Sports News</h1>
      <div className="card-container1">
        {sporticc && sporticc.length > 0 ? (
          sporticc.map((movie) => (
            <div className="card1" key={movie.imdbID}>
              <Link to={`/moviecarddetails/${movie.imdbID}`} className="card-link">
                <img src={movie.Poster} alt={movie.Title} className="card-img1" />
                <div className="card-body1">
                  <h2 className="name1">{movie.Title}</h2>
                  <p className="des1">Year: {movie.Year}</p>
                  <button className="view-details-button1">View Details</button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading sports news...</p>
        )}
      </div>
      <div className="card-container1">
        {sporticc1 && sporticc1.length > 0 ? (
          sporticc1.map((movie) => (
            <div className="card1" key={movie.imdbID}>
              <Link to={`/moviecarddetails/${movie.imdbID}`} className="card-link">
                <img src={movie.Poster} alt={movie.Title} className="card-img1" />
                <div className="card-body1">
                  <h2 className="name1">{movie.Title}</h2>
                  <p className="des1">Year: {movie.Year}</p>
                  <button className="view-details-button1">View Details</button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading sports news...</p>
        )}
      </div>
      <div className="card-container1">
        {iplnews && iplnews.length > 0 ? (
          iplnews.map((movie) => (
            <div className="card1" key={movie.imdbID}>
              <Link to={`/moviecarddetails/${movie.imdbID}`} className="card-link">
                <img src={movie.Poster} alt={movie.Title} className="card-img1" />
                <div className="card-body1">
                  <h2 className="name1">{movie.Title}</h2>
                  <p className="des1">Year: {movie.Year}</p>
                  <button className="view-details-button1">View Details</button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading sports news...</p>
        )}
      </div>
      <div className="card-container1">
        {sports1 && sports1.length > 0 ? (
          sports1.map((movie) => (
            <div className="card1" key={movie.imdbID}>
              <Link to={`/moviecarddetails/${movie.imdbID}`} className="card-link">
                <img src={movie.Poster} alt={movie.Title} className="card-img1" />
                <div className="card-body1">
                  <h2 className="name1">{movie.Title}</h2>
                  <p className="des1">Year: {movie.Year}</p>
                  <button className="view-details-button1">View Details</button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading sports news...</p>
        )}
      </div>
     
    </div>
  );
};
