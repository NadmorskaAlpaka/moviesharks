import React from 'react';
import { Link } from 'react-router-dom';

const Moviecard = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`} className="movie-card__link">
            <div className="movie-card">
                <img
                    className="movie__img"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="poster img"
                />
                <span className="movie__title">
                    {
                        movie.title
                    }
                </span>
                <span className="movie__rating">
                    {
                        movie.vote_average.toFixed(1)
                    }
                </span>
            </div>
        </Link>
    );
}

export default Moviecard;
