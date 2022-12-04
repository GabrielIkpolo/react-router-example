import './App.css';
import ButtomBar from './components/bottomBar/ButtomBar';
import Cover from './components/cover/Cover';
import TopBar from './components/topBar/TopBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Blog from './components/blog/Blog';

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <div className="App">
          <Routes >
            <Route path="/" element={<Cover />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </div>
      </Router>
      <ButtomBar />
    </>
  );


}

export default App;
