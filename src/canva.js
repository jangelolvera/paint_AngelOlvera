import React, { useState, useRef } from 'react';
import "./App.js"
import './App.css'
import Pallete from './pallete.js';


function Canva(props) {

    const [pressed, setPressed] = useState(false);

    //Pinta cada cuadro cada que se haga click
    function paintIndex(event) {
        props.setDraw('filled');
        props.setSgrid(
            props.sgrid.map(
                (pixel) => {
                    if (pixel.id === Number(event.target.name))
                        pixel.pxcolor = props.selectedColor;
                    return pixel;

                }
            )
        );
    }

    function paintALot(event) {
        if (!pressed) return
        paintIndex(event);
    }

    function startPainting(event) {
        setPressed(true);
        paintIndex(event);
    }

    function stopIt() {
        setPressed(false);
    }

    return (
        <div id="drawcont">
            <div id="drawingPanel" ref={props.captImg}>
                <div id="pixels"
                    //Se manda a llamar paintIndex al dar click
                    onClick={paintIndex}
                    onMouseDown={startPainting}
                    onMouseUp={stopIt}
                >
                    {props.sgrid.map(
                        (pixel) => {
                            return (
                                <button
                                    name={pixel.id}
                                    key={pixel.id}
                                    onMouseOver={paintALot}
                                    style={{
                                        width: pixel.width,
                                        height: pixel.height,
                                        border: props.borders===true ? '1px solid gray' : '0',
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

            <div id="resultImg">
                <div ref={props.pic}>
                </div>
            </div>
        </div>
    );

}


export default Canva;