import React, { useState, useRef } from 'react';
import './App.css';
import Pallete from './pallete.js';
import Canva from './canva'
import { render } from '@testing-library/react';

function App() {

  const [selectedColor, setSelectedColor] = useState('white');
  const [draw, setDraw] = useState('empty');
  const boceto=useRef();
  const printingimg=useRef();

  function printDraw(props) {

    if (draw === 'empty') {
      alert('You have not drawn anything!');
    }
    
  }



  return (
    <div className="App">

      <div className="header">

        {/* botón para resetear el juego */}
        <button type="reset" id="newgamebtn"> New game </button>
        {/* botón para imprimir el dibujo */}
        <button type="button" id="printbtn" onClick={printDraw}> Print </button>
        <p id="choosetxt">Choose a color to start painting: </p>

        <Pallete selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

      </div>
      
      <Canva selectedColor={selectedColor} setSelectedColor={setSelectedColor} draw={draw} setDraw={setDraw} />
    

    </div>
  );
}

export default App;
