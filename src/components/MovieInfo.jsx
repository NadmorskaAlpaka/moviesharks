import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeletonmovieinfo from './SkeletonMovieInfo';
const API_KEY = "049038a1b7b5164539618773284e61c8";

const Movieinfo = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        async function getMovie() {
            try {
                const response = await axios
                    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
                    .then(res => {
                        setMovie(res.data)
                        setLoading(false);
                    })
            } catch (e) {
                console.log(e);
            }
        }
        getMovie()
    }, [])

    return (
        <section id="movie-info">
            <div className='container'>
                <div className='row'>
                    <div className='movie-info--wrapper'>
                        {
                            loading ? (
                                <Skeletonmovieinfo />
                            ) : (
                                <>
                                    <div className='movie-info__img--wrapper'>
                                        <img
                                            className='movie-info__img'
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className='movie-info__details'>
                                        <h1 className='movie-info__title'>
                                            {
                                                movie.title
                                            }
                                        </h1>
                                        <span className='movie-info__release-date'>
                                            <b className='bold'>
                                                Release date:
                                            </b>
                                            {
                                                movie.release_date
                                            }
                                        </span>
                                        <span className='movie-info__runtime'>
                                            <b className='bold'>
                                                Runtime:
                                            </b>
                                            {
                                                parseInt((movie.runtime / 60))
                                            }
                                            h
                                            {
                                                " "+(movie.runtime % 60)
                                            }
                                            min
                                        </span>
                                        <div className='movie-info__rating--wrapper'>
                                            <span className='movie-info__rating'>
                                                <b className='bold'>
                                                    Rating:
                                                </b>
                                                {
                                                    movie.vote_average.toFixed(1)
                                                }
                                            </span>
                                            <progress
                                                className='movie-info__rating--bar'
                                                value={movie.vote_average}
                                                max="10">
                                            </progress>
                                        </div>
                                        <p className='movie-info__overview'>
                                            <b className='bold'>
                                                Overview:
                                            </b>
                                            {
                                                movie.overview
                                            }
                                        </p>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Movieinfo;
