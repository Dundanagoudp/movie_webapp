import React, { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";  // To access searchTerm from AppLayout
import '../Pages/Home.css';
import { MoviesCard } from '../components/MoviesCard';

const movieImages = [
  "./movie3.png",
  "./movie1.png",
  "./movie2.png",
  "./movie4.png",
  "./movie1.png",
];

export const Home = () => {
  const { searchTerm } = useOutletContext();  // Access searchTerm from AppLayout
  const [slideIndex, setSlideIndex] = useState(0);

  const createSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % movieImages.length);
  };

  useEffect(() => {
    const interval = setInterval(createSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel">
          <div className="slider" key={slideIndex}>
            <img src={movieImages[slideIndex]} alt="carousel slide" />
          </div>
        </div>
      </div>

      <div className="video-card-container">
        {movieImages.map((image, index) => (
          <div className="video-card" key={index}>
            <img src={image} className="video-card-image" alt="video card" />
          </div>
        ))}
      </div>

      <div>
        <MoviesCard searchTerm={searchTerm} /> {/* Pass searchTerm to MoviesCard */}
      </div>
    </div>
  );
};
