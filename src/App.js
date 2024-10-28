import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IdeaConcept from './pages/IdeaConcept';
import Landi1939 from './pages/Landi1939';
import Effects from './pages/Effects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/idea-concept" element={<IdeaConcept />} />
              <Route path="/landi-1939" element={<Landi1939 />} />
              <Route path="/effects" element={<Effects />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
