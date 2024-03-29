import React from 'react';
import MenuBar from './menubar';
import Home from './home';
import About from './about';
import Experience from './experience';
import GameList from './gamelist';
import Gen1 from './generation/gen-1';
import Gen2 from './generation/gen-2';
import Gen3 from './generation/gen-3';
import Gen4 from './generation/gen-4';
import Gen5 from './generation/gen-5';
import GenSpectrum from './generation/gen-spectrum';
import GenNeoSpectrum from './generation/gen-neospectrum';
import Channel from './channel';
import Gallery from './gallery';
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
          <Route path="/generation/1" element={<Gen1 />} />
          <Route path="/generation/2" element={<Gen2 />} />
          <Route path="/generation/3" element={<Gen3 />} />
          <Route path="/generation/4" element={<Gen4 />} />
          <Route path="/generation/5" element={<Gen5 />} />
          <Route path="/generation/spectrum" element={<GenSpectrum />} />
          <Route path="/generation/neospectrum" element={<GenNeoSpectrum />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
