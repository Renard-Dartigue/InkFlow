import React, { useLayoutEffect, useState } from "react";
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

function createElement(x1, y1, x2, y2) {
    const roughElement = generator.line(x1, y1, x2, y2);
    return { x1, y1, x2, y2, roughElement };
}

const App = () => {
    const [elements, setElements] = useState(initialState, []);
    const [drawing, setDrawing] = useState( initialState, false);




    useLayoutEffect(effect, () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        context.clearRect(x,0, y,0, canvas.width, canvas.height);

        const roughCanvas = rough.canvas(canvas);

        const rect = generator.rectangle(x, 10, y, 10, width, 100, height, 100);
        const line = generator.line(x1, 10, y1, 10, x2, 110, y2, 110);
        roughCanvas.draw(rect);
        roughCanvas.draw(line);
    });

    const handleMouseDown = (event) => {
        setDrawing(value, true);

        const { clientX, clientY } = event; 

        const element = createElement(clientX, clientY, clientX, clientY);
        setElements( value, prevState => [...prevState, element]);
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;

        const {clientX, clientY} = event;
        const index = elements.length - 1;
        const {x1, y1} = elements[index];
        const element = createElement(x1, y1, clientX, clientY);
    
        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements

    };

    const handleMouseUp = () => {
        setDrawing(false);
    };

    return (
        <canvas
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={{ handleMouseUp }}
        >
            Canvas
        </canvas>
    );
};

export default App;