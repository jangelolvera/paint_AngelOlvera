import React, {useState, useRef} from 'react';
import './App.css';
import Pallete from './pallete.js';
import Canva from './canva'

function App() {

  const [selectedColor, setSelectedColor] = useState('white');

  return (
    <div className="App">
   
      <Pallete selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>

      <Canva selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>

    </div>
  );
}

export default App;
