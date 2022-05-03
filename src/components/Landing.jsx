import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = "049038a1b7b5164539618773284e61c8";

const Landing = () => {
    const [trendingMovies, setTrendingMovies] = useState();
    const [randomMovie, setRandomMovie] = useState([])

    useEffect(() => {
        async function getTrendingMovies() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`)
            setTrendingMovies(response.data.results);
            const randomNumber = Math.floor(Math.random() * 20);
            setRandomMovie(response.data.results[randomNumber])
        }
        getTrendingMovies();
    }, [])

    return (
        <section className='landing'>
            <h1 className='title'>Find your perfect movie</h1>
            <figure className='landing__img--wrapper'>
                {
                    !trendingMovies ? (
                        <div className='black'></div>
                    ) : (
                        <img
                            className="landing__img"
                            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
                            alt="landing page img"
                        />
                    )
                }
            </figure>
            <div className='landing__input--wrapper'>
                <input
                    className="landing__input"
                    type="text"
                    placeholder={!trendingMovies ? "Find a movie" : `${randomMovie.original_title}`}
                />
                <span className="material-symbols-outlined search--icon click">
                    search
                </span>
            </div>
            <a href="#top-rated-movies">
                <span className="material-symbols-outlined go-down--icon">
                    expand_more
                </span>
            </a>
        </section>
    )
}

export default Landing;