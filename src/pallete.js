import React from 'react';
import "./App.js"

const colors = ['black', 'white', 'gray', 'red', 'green', 'blue', 'magenta', 'cyan', 'gold', 'lightgreen', 'crimson'];

function Pallete(props) {
    const handleClick = (event) => {
        props.setSelectedColor(event.target.name);
    }

    return (

        <ul style={{ display: 'flex', listStyle: 'none' }}>

            <div className="header">
                <button type="reset" id="newgamebtn"> New game </button>
                <button type="button" id="printbtn"> Print </button>
                <p id="choosetxt">Choose a color to start painting: </p>
            </div>

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