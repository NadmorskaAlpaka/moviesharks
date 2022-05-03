import axios from "axios";
import React, { useEffect, useState } from "react";
import Moviecard from "./MovieCard";
const API_KEY = "049038a1b7b5164539618773284e61c8";

const TopRatedMovies = () => {
    const [topRatedMovies, SetTopRatedMovies] = useState();

    useEffect(() => {
        async function getTopRatedMovies() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const firstNineMovies = response.data.results.slice(0, 9);
            SetTopRatedMovies(firstNineMovies);
        }
        getTopRatedMovies();
    }, [])

    return (
        <section id="top-rated-movies">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Top Rated Movies</h2>
                    <div className="top-rated-movies--wrapper">
                        {
                            !topRatedMovies ? (
                                <>
                                    <div className="movie-card--skeleton">
                                        <div className="movie__img--skeleton"/>
                                        <div className="movie__title--skeleton"></div>
                                        <div className="movie__rating--skeleton"></div>
                                    </div>
                                    <div className="movie-card--skeleton">
                                        <div className="movie__img--skeleton"/>
                                        <div className="movie__title--skeleton"></div>
                                        <div className="movie__rating--skeleton"></div>
                                    </div>
                                    <div className="movie-card--skeleton">
                                        <div className="movie__img--skeleton"/>
                                        <div className="movie__title--skeleton"></div>
                                        <div className="movie__rating--skeleton"></div>
                                    </div>
                                </>
                            ) : ( 
                                topRatedMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopRatedMovies