import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Moviecard from '../components/MovieCard';
const API_KEY = "049038a1b7b5164539618773284e61c8";

const Discover = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [UpcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        async function getMovies(){
            const response_PopularMovies = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const response_NowPlayingMovies = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            const response_UpcomingMovies = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            if(response_PopularMovies){
                setPopularMovies(response_PopularMovies.data.results.slice(0,6));
            }
            if(response_NowPlayingMovies){
                setNowPlayingMovies(response_NowPlayingMovies.data.results.slice(14,20));
            }
            if(response_UpcomingMovies){
                setUpcomingMovies(response_UpcomingMovies.data.results.slice(0,6));
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
                                popularMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
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
                                nowPlayingMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
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
                                UpcomingMovies.map((movie,index) => <Moviecard key={index} movie={movie} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Discover;
