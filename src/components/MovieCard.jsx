import React from 'react';

const Moviecard = ({movie}) => {
    return (
        <div className="movie-card">
            <img
                className="movie__img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster img"
            />
            <span className="movie__title">
                {
                    movie.original_title
                }
            </span>
            <span className="movie__rating">
                {
                    movie.vote_average.toFixed(1)
                }
            </span>
        </div>
    );
}

export default Moviecard;
