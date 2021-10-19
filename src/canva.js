import React, { useState, useRef } from 'react';
import "./App.js"
import './App.css'


function Canva(props) {

    let grid = [];//Pasar al padre

    //Genera un arreglo de 100 divs para formar un cuadro de 10x10
    for (let i = 1; i <= 100; i++) {//Pasar

        grid.push({id:i, pxcolor:'#FFFF', height:'40px', width:'40px'});

    }

    const [sgrid, setSgrid] = useState(grid);//Padre

    //Pinta cada cuadro cada que se haga click
    function paintIndex(event) {
        setSgrid(
            sgrid.map(
              (pixel)=>{
                  if(pixel.id === Number(event.target.name))
                    pixel.pxcolor=props.selectedColor;
                return pixel;

              }  
            )
        );

    }


    return (
        <div id="drawingPanel">
            <div id="pixels" onClick={paintIndex}>
                {sgrid.map(
                    (pixel)=>{
                        return (
                            <button 
                            name={pixel.id}
                            key={pixel.id}
                            style={{
                                width: pixel.width,
                                height: pixel.height,
                                border: '1px solid gray',
                                backgroundColor: pixel.pxcolor,
                                margin:'0px',
                                padding:'0px'
                            }}
                            >{pixel.id}</button>
                        )
                    }
                )}
            </div>
        </div>
    );

}


export default Canva;