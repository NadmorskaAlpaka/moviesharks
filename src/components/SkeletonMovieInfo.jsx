import React from 'react';

const Skeletonmovieinfo = () => {
    return (
        <>
            <div className='skeleton-movie-info__img--wrapper'>
            </div>
            <div className='skeleton-movie-info__details'>
                <h1 className='skeleton-movie-info__title'>
                </h1>
                <span className='skeleton-movie-info__release-date'>
                </span>
                <span className='skeleton-movie-info__runtime'>
                </span>
                <div className='skeleton-movie-info__rating--wrapper'>
                </div>
                <p className='skeleton-movie-info__overview'>
                </p>
            </div>
        </>
    );
}

export default Skeletonmovieinfo;
