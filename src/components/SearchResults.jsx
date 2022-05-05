import React from 'react';
import SkeletonMovieCard from './SkeletonMovieCard';

const SearchResults = () => {
    return(
        <section id="search-result">
            <div className='container'>
                <div className='row'>
                    <div className='search-result--wrapper'>
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
                        <div className='movies--wrapper'>
                            <SkeletonMovieCard />
                            <SkeletonMovieCard />
                            <SkeletonMovieCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchResults;