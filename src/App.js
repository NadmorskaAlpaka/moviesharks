import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Discover from './pages/Discover';
import SearchResults from './components/SearchResults';
import Movieinfo from './components/MovieInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/searchresult" element={<SearchResults />} />
            <Route path="/movie/:id" element={<Movieinfo />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
