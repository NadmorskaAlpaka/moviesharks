import React from "react";
// https://api.themoviedb.org/3/movie/top_rated?api_key=049038a1b7b5164539618773284e61c8&language=en-US&page=1

const TopRatedMovies = () => {
    return (
        <section id="top-rated-movies">
            <div className="container">
                <div className="row">
                    <div className="top-rated-movies--wrapper">
                        <div className="movie-card">
                            <img
                                className="movie__img"
                                src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
                                alt="poster img"
                            />
                            <span className="movie__title">
                                The Shawshank Redemption
                            </span>
                            <span className="movie__rating">
                                8.7
                            </span>
                        </div>
                        <div className="movie-card">
                            <img
                                className="movie__img"
                                src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
                                alt="poster img"
                            />
                            <span className="movie__title">
                                The Shawshank Redemption
                            </span>
                            <span className="movie__rating">
                                8.7
                            </span>
                        </div>
                        <div className="movie-card">
                            <img
                                className="movie__img"
                                src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
                                alt="poster img"
                            />
                            <span className="movie__title">
                                The Shawshank Redemption
                            </span>
                            <span className="movie__rating">
                                8.7
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopRatedMovies