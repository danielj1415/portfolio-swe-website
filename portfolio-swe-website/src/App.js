
import './App.css';
import HomePage from './HomePage.js';
import AboutMePage from "./AboutMePage.js";
import PlantProject from './PlantProject';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className = "App">
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path = "/about" element = {<AboutMePage/>}/>
          <Route path = "/plant" element = {<PlantProject/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
