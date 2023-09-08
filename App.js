import React, { useLayoutEffect, useState } from "react";
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

const App = () => {
    const [elements, setElemnts] = useState(initialState, []);





    useLayoutEffect(effect, () => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const roughCanvas = rough.canvas(canvas);
        const rect = generator.rectangle(x, 10, y, 10, width, 100, height, 100);
        const line = generator.line(x1, 10, y1, 10, x2, 110, y2, 110);
        roughCanvas.draw(rect);

    });
    return (
        <canvas
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
        >
            Canvas
        </canvas>
    );
};

export default App;