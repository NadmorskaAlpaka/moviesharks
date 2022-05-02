import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import TopRatedMovies from './components/TopRatedMovies';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
        <TopRatedMovies />
      </div>
    </Router>
  );
}

export default App;
