import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gegewartsbezug from './pages/Gegenwartsbezug';
import Home from './pages/Home';
import IdeaConcept from './pages/IdeaConcept';
import Landi1939 from './pages/Landi1939';
import Effects from './pages/Effects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet} from "react-helmet";

function App() {
  return (
      <Router>
        <div className="App">
            <Helmet>
                <title>Geistige Landesverteidigung</title>
                <meta name="description" content="Die Schweiz im Zweiten Weltkrieg und die Nachwirkungen" />
            </Helmet>
          <Header />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/idea-concept" element={<IdeaConcept />} />
              <Route path="/landi-1939" element={<Landi1939 />} />
              <Route path="/effects" element={<Effects />} />
              <Route path="/gegenwartsbezug" element={<Gegewartsbezug/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
