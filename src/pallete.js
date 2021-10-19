import React from 'react';
import "./App.js"

//Arreglo de colores que el usuario podrá seleccionar
const colors = ['black', 'white', 'gray', 'red', 'green', 'blue', 'magenta', 'cyan', 'gold', 'lightgreen', 'crimson'];

function Pallete(props) {
    const handleClick = (event) => {
        props.setSelectedColor(event.target.name);
    }

    return (

        <ul style={{ display: 'flex', listStyle: 'none' }}>

            <div className="header">
                {/* botón para resetear el juego */}
                <button type="reset" id="newgamebtn"> New game </button>
                {/* botón para imprimir el dibujo */}
                <button type="button" id="printbtn"> Print </button>
                <p id="choosetxt">Choose a color to start painting: </p>
            </div>

            {/* función que genera la paleta de colores */}
            {colors.map((color) => {
                const isSelected = color === props.selectedColor;
                const borderStyle = isSelected ? '5px solid black' : '1px solid black';
                return (

                    <div className="App" key={color}>
                        
                            <div id="pallete" key={color}>
                                <button
                                    type="button"
                                    key={color}
                                    name={color}
                                    onClick={handleClick}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: borderStyle,
                                        background: color,
                                    }}>
                                </button>

                            </div>
                    </div>
                )

            })}
        </ul>
    );


}

export default Pallete;