import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Components/NavBar/NavBar.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import Products from './pages/About';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
