import React, { useEffect, useRef, useState } from 'react';
import '../Pages/Home.css';

const movies = [
  { name: "loki", des: "Loki series description", image: "./movie3.png" },
  { name: "falcon and the winter soldier", des: "Falcon series description", image: "./movie1.png" },
  { name: "WandaVision", des: "WandaVision description", image: "./movie2.png" },
  { name: "Raya and the Last Dragon", des: "Raya series description", image: "./movie4.png" },
  { name: "Luca", des: "Luca series description", image: "./movie1.png" },
];

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const createSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  useEffect(() => {
    const interval = setInterval(createSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseOver = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <div className="slider" key={slideIndex}>
            <img src={movies[slideIndex].image} alt={movies[slideIndex].name} />
            <div className="slide-content">
              <h1>{movies[slideIndex].name}</h1>
              <p>{movies[slideIndex].des}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-card-container">
        {movies.map((movie, index) => {
          const videoRef = useRef(null);
          return (
            <div
              className="video-card"
              key={index}
              onMouseOver={() => handleMouseOver(videoRef)}
              onMouseLeave={() => handleMouseLeave(videoRef)}
            >
              <img src={movie.image} alt={`${movie.name} thumbnail`} className="video-card-image" />
              <video ref={videoRef} src={`./videos/${movie.name.replace(/\s+/g, '-').toLowerCase()}.mp4`} muted loop className="card-video" />
            </div>
          );
        })}
      </div>
    </div>
    
  );
};
