import {useOnDraw} from './Hook';

const Canvas = ({
    width,
    height
}) => {

    const setCanvasRef = useOnDraw(onDraw);

    function onDraw(ctx, point) {
        ctx.fillstyle = '#000000';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    return(
        <canvas
            width={width}
            height={height}
            style={canvasStyle}
            ref={setCanvasRef}
            />
    );

}

export default Canvas;

const canvasStyle = {
    border: "1px solid black"
}