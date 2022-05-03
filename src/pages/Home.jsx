import React from 'react';
import Browsemoremovies from '../components/BrowseMoreMovies';
import Landing from '../components/Landing';
import TopRatedMovies from '../components/TopRatedMovies';

const Home = () =>{
    return(
        <>
         <Landing />
         <TopRatedMovies />
         <Browsemoremovies />
        </>
    )
}

export default Home