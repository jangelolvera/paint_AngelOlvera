import React, {useState} from 'react';
import './App.css';
import Pallete from './pallete';

function App() {

  const [selectedColor, setSelectedColor] = useState('white');

  return (
    <div className="App">
   
      <Pallete selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>

    </div>
  );
}

export default App;
