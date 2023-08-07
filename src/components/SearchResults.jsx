import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moviecard from './MovieCard';
import Noresults from './NoResults';
import SkeletonMovieCard from './SkeletonMovieCard';

const SearchResults = () => {
    const location = useLocation();
    const passedTitle = (location.state.name.inputValue);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
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

    function filterMovies(filter){
        if(filter === "RATING"){
            setMovies(movies.slice()
                            .sort((a,b) => b.vote_average - a.vote_average));
        } else if (filter === "OLDEST"){
            setMovies(movies.slice()
                            .sort((a,b) => new Date(a.release_date) - new Date(b.release_date)));
        } else if (filter === "LATEST"){
            setMovies(movies.slice()
                            .sort((a,b) => new Date(b.release_date) - new Date(a.release_date)));
        }
    }

    return (
        <section id="search-result">
            <div className='container'>
                <div className='row'>
                    <div className='search-result--wrapper'>
                        {
                            movies.length > 0 && (
                            <div className='search-result__head'>
                                <span className='search-result--by-user'>
                                    Search result: <span className='by-user'>{passedTitle}</span>
                                </span>
                                <select 
                                    id="filter"
                                    defaultValue="DEFAULT"
                                    onChange={(event) => filterMovies(event.target.value)}>
                                    <option value="DEFAULT" disabled>
                                        Sort
                                    </option>
                                    <option value="RATING">
                                        Rating
                                    </option>
                                    <option value="OLDEST">
                                        Release date: Oldest
                                    </option>
                                    <option value="LATEST">
                                        Release date: Latest
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
