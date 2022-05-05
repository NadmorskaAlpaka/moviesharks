import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Moviecard from '../components/MovieCard';
import SkeletonMovieCard from '../components/SkeletonMovieCard';
const API_KEY = "049038a1b7b5164539618773284e61c8";

const Discover = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [UpcomingMovies, setUpcomingMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMovies(){
            try{
                const response_PopularMovies = await axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
                .then(res => {
                    setPopularMovies(res.data.results.slice(0,6));
                });
                const response_NowPlayingMovies = await axios
                .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
                .then(res => {
                    setNowPlayingMovies(res.data.results.slice(14,20));
                });
                const response_UpcomingMovies = await axios
                .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
                .then(res => {
                    setUpcomingMovies(res.data.results.slice(0,6));
                });
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
        getMovies();
    },[])

    return (
        <main>
            <section id="popular-movies">
                <div className='container'>
                    <div className='row'>
                        <h2 className='section__title'>Popular movies</h2>
                        <div className='movies--wrapper'>
                            {
                                loading ? (
                                    <SkeletonMovieCard />
                                ) : (
                                    popularMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section id="popular-now-playing">
                <div className='container'>
                    <div className='row'>
                        <h2 className='section__title'>Now playing movies</h2>
                        <div className='movies--wrapper'>
                            {
                                loading ? (
                                    <SkeletonMovieCard />
                                ) : (
                                    nowPlayingMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section id="upcoming-movies">
                <div className='container'>
                    <div className='row'>
                        <h2 className='section__title'>Upcoming movies</h2>
                        <div className='movies--wrapper'>
                            {
                                loading ? (
                                    <SkeletonMovieCard />
                                ) : (
                                    UpcomingMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Discover;
