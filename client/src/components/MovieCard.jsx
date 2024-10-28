import React from 'react';
import './styles/movieCard.css';

function MovieCard() {
  const movieData = {
    title: 'The Marvels',
    releaseDate: 'Nov 10, 2023',
    genres: ['Action', 'Adventure', 'Fantasy'],
    languages: 'English',
    showDetails: () => {
      console.log("Showing details for The Marvels");
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src="/img/themarvels.jpg"  alt={`${movieData.title} poster`} className="poster-image" />
      </div>
      <div className='card'>
      <div className="movie-card-info">
        <h2 className="movie-title">{movieData.title}</h2>
        <p className="movie-release-date">Released: {movieData.releaseDate}</p>
        <div className="movie-genres">
          {movieData.genres.map((genre) => (
            <span key={genre} className="movie-genre">
              {genre}
            </span>
          ))}
        </div>
        <p className="movie-language">Language: {movieData.languages}</p>
        <button className="show-details-button" onClick={movieData.showDetails}>
          Show Details
        </button>
      </div>
      </div>
    </div>
  );
}

export default MovieCard;
