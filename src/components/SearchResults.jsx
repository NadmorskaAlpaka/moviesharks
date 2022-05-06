import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moviecard from './MovieCard';
import Noresults from './NoResults';
import SkeletonMovieCard from './SkeletonMovieCard';
const API_KEY = "049038a1b7b5164539618773284e61c8";

const SearchResults = () => {
    const location = useLocation();
    const passedTitle = (location.state.name.inputValue);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(passedTitle)

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios
                    .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${passedTitle}`)
                    .then(res => {
                        const completedMovies = res.data.results.filter(movie => movie.poster_path !== "")
                        setMovies(completedMovies);
                        setMovies(res.data.results.filter(movie => movie.poster_path !== null));
                        setLoading(false);
                    })
            } catch (e) {
                console.log(e);
            }
        }
        getMovies();
    }, [])

    console.log("Movies", movies)

    return (
        <section id="search-result">
            <div className='container'>
                <div className='row'>
                    <div className='search-result--wrapper'>
                        {
                            movies.length > 0 && (
                            <div className='search-result__head'>
                                <span className='search-result--by-user'>
                                    Search result: <span className='by-user'>Something</span>
                                </span>
                                <select>
                                    <option>
                                        Sort by rating
                                    </option>
                                    <option>
                                        release date: oldest
                                    </option>
                                    <option>
                                        release date:latest
                                    </option>
                                </select>
                            </div>
                            )
                        }
                        <div className='movies--wrapper'>
                            {
                                loading ? (
                                    <>
                                        <SkeletonMovieCard />
                                        <SkeletonMovieCard />
                                        <SkeletonMovieCard />
                                    </>
                                ) : (
                                    movies.length > 0 ? (
                                        movies.map((movie, index) => <Moviecard key={index} movie={movie} />)
                                    ) : (
                                        <Noresults />
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchResults;