import React from 'react';
import MenuBar from './menubar';
import Home from './home';
import About from './about';
import Experience from './experience';
import GameList from './gamelist';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <MenuBar />
      <body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-fangplay" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/game-list" element={<GameList />} />
          <Route path="/generation/1" element={<null />} />
          <Route path="/generation/2" element={<null />} />
          <Route path="/generation/3" element={<null />} />
          <Route path="/generation/4" element={<null />} />
          <Route path="/generation/5" element={<null />} />
          <Route path="/generation/spectrum" element={<null />} />
          <Route path="/generation/neospectrum" element={<null />} />
          <Route path="/channel" element={<null />} />
        </Routes>
      </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
