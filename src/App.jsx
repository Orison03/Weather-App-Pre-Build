import { useState } from 'react'
import React from 'react'
import Navbar from './components.js/Navbar'
import Search from "./components.js/WeatherContent.jsx"
import WeatherContent from './components.js/WeatherContent.jsx';

function App() {
 return (
   <div className="">
     <Navbar />

     {/* Weather Content */}
     <WeatherContent />
   </div>
 );
}

export default App
