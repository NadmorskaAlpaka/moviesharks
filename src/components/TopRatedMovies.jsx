import axios from "axios";
import React, { useEffect, useState } from "react";
import Moviecard from "./MovieCard";
import SkeletonMovieCard from "./SkeletonMovieCard";
const API_KEY = "049038a1b7b5164539618773284e61c8";

const TopRatedMovies = () => {
    const [topRatedMovies, SetTopRatedMovies] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTopRatedMovies() {
            try{
                const response = await axios
                .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
                .then(res => {
                    SetTopRatedMovies(res.data.results.slice(0, 9));
                });
                setLoading(false)
            } catch (e) {
                console.log(e);
            }
        }
        getTopRatedMovies();
    }, [])

    console.log(topRatedMovies)

    return (
        <section id="top-rated-movies">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Top Rated Movies</h2>
                    <div className="movies--wrapper">
                        {
                            loading ? (
                                <SkeletonMovieCard />
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