import React, { useState, useRef } from 'react';
import "./App.js"
import './App.css'
import Pallete from './pallete.js';


function Canva(props) {

    let grid = [];//Pasar al padre
    const [pressed, setPressed]=useState(false);

    //Genera un arreglo de 100 divs para formar un cuadro de 10x10
    for (let i = 1; i <= 100; i++) {//Pasar

        grid.push({ id: i, pxcolor: '#FFFF', height: '40px', width: '40px' });

    }

    const [sgrid, setSgrid] = useState(grid);//Padre


    //Pinta cada cuadro cada que se haga click
    function paintIndex(event) {
        props.setDraw('filled');
        setSgrid(
            sgrid.map(
                (pixel) => {
                    if (pixel.id === Number(event.target.name))
                        pixel.pxcolor = props.selectedColor;
                    return pixel;

                }
            )
        );
    }

    function paintALot(event){
        if(!pressed) return
        paintIndex(event); 
    }

    function startPainting(event){
        setPressed(true);
        paintIndex(event);
    }

    function stopIt(){
        setPressed(false);
    }

    return (
        <div id="drawcont">
            <div id="drawingPanel">
                <div id="pixels" 
                //Se manda a llamar paintIndex al dar click
                onClick={paintIndex} 
                onMouseDown={startPainting}
                onMouseUp={stopIt}
                >
                    {sgrid.map(
                        (pixel) => {
                            return (
                                <button
                                    name={pixel.id}
                                    key={pixel.id}
                                    onMouseOver={paintALot}
                                    style={{
                                        width: pixel.width,
                                        height: pixel.height,
                                        border: '1px solid gray',
                                        backgroundColor: pixel.pxcolor,
                                        margin: '0px',
                                        padding: '0px'
                                    }}
                                ></button>
                            )
                        }
                    )}
                </div>
            </div>
</div>
    );

}


export default Canva;