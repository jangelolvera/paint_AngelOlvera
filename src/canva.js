import React,{useState, useRef} from 'react';
import "./App.js"
import './App.css'


function Canva(props){
    const [color, setColor]=useState('white');
    const draw=useRef();
    let grid=[];

    function paint(event){
    }

    for(let i=0; i<100;i++){
        grid.push(<div 
            key={i}
            onClick={paint}
            style={{
                width: '35px',
                height:'35px',
                backgroundColor: color,
                border: '1px solid gray',
                display:'flex',
                justifyItems:'center'

            }}
        ></div>);
    }
    return(
        <div id="drawingPanel" ref={draw}>
            <div id="pixels">{grid}</div>
        </div>
    );

}


export default Canva;