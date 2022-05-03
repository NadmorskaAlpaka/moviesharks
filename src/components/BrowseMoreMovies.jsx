import React from 'react';
import { Link } from 'react-router-dom';

const Browsemoremovies = () => {
    return (
        <section id="browse-more-movies">
            <div className='container'>
                <div className='row'>
                    <div className='browse-more-movies--wrapper'>
                        <Link to="/" className='btn click'>
                            Discover more movies
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Browsemoremovies;
