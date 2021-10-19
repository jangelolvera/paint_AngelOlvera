import React, { useState, useRef } from 'react';
import './App.css';
import Pallete from './pallete.js';
import Canva from './canva'
import html2canvas from 'html2canvas';

function App() {

  let grid = [];//Arreglo con los botones de la cuadricula
  const pic=useRef();
  const captImg=useRef();

  //Genera la cuadricula de 10x10
  for (let i = 1; i <= 100; i++) {

    grid.push({ id: i, pxcolor: '#FFFF', height: '40px', width: '40px' });

  }

  const [sgrid, setSgrid] = useState(grid);//estado de la cuadricula
  const [borders, setBorders]= useState(true);



  const [selectedColor, setSelectedColor] = useState('white');
  const [draw, setDraw] = useState('empty');
  const [unclick, setUnclick]=useState(false);


  function printDraw() {

    if (draw==='filled') {

      setBorders(false);
      setUnclick(true);
      setTimeout(()=>{html2canvas(captImg.current).then(canvas => {
        pic.current.innerHTML = "";
        pic.current.appendChild(canvas);
      });},10)

    }else{
      alert("You have nothing to print");
    
    }
    
  }

  function resetGame(event){
    setSgrid(grid);
    setDraw('empty');
    setBorders(true);
    setUnclick(false);
  }


  return (
    <div className="App">

      <div className="header">

        {/* botón para resetear el juego */}
        <button type="reset" id="newgamebtn" onClick={resetGame}> New game </button>
        {/* botón para imprimir el dibujo */}
        <button type="button" id="printbtn" onClick={printDraw}> Print </button>
        <p id="choosetxt">Choose a color to start painting: </p>

        <Pallete 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor} 
        pic={pic}
        />

      </div>
      
      <Canva 
      selectedColor={selectedColor} 
      setSelectedColor={setSelectedColor} 
      draw={draw} 
      setDraw={setDraw} 
      sgrid={sgrid}
      setSgrid={setSgrid}
      pic={pic}
      captImg={captImg}
      borders={borders}
      setBorders={setBorders}
      unclick={unclick}
      setUnclick={setUnclick}/>

    </div>
  );
}

export default App;
