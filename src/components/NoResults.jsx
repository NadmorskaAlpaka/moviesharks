import React from 'react';
import NoResultsImg from '../assets/no-results.png';

const Noresults = () => {
    return (
        <div className='no-results'>
            <span className='no-results__title'>
                Oooppss, we can't find what you are looking for, please try something else.
            </span>
            <img 
                src={NoResultsImg}
                className="no-results__img" 
                alt="no results img"
            />
        </div>
    );
}

export default Noresults;
