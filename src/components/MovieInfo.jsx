import React from 'react';
// https://api.themoviedb.org/3/movie/278?api_key=049038a1b7b5164539618773284e61c8&language=en-US
const Movieinfo = () => {
    return (
        <section id="movie-info">
            <div className='container'>
                <div className='row'>
                    <div className='movie-info--wrapper'>
                        <div className='movie-info__img--wrapper'>
                            <img className='movie-info__img' src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" alt="" />
                        </div>
                        <div className='movie-info__details'>
                            <h1 className='movie-info__title'>The Shawshank Redemption</h1>
                            <span className='movie-info__runtime'>142 min</span>
                            <span className='movie-info__rating'>8.7</span>
                            <span className='movie-info__release-date'>1994-09-23</span>
                            <p className='movie-info__overwiew'>Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Movieinfo;
