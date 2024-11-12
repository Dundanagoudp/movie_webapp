import React, { useEffect, useState } from 'react';
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
            <img src={movieImages[slideIndex]} />
          </div>
        </div>
      </div>

      <div className="video-card-container">
        {movieImages.map((image, index) => (
          <div className="video-card" key={index}>
            <img src={image} className="video-card-image" />
          </div>
        ))}
      </div>
      <div>
        <MoviesCard />
      </div>
    </div>
  );
};
