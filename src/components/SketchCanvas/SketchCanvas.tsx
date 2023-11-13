import { useCallback, useEffect, useRef } from 'react';

const X = 0;
const Y = 1;

type DrawData = {
    drawing: Array<Array<Array<number>>>;
};

function SketchCanvas(drawing: DrawData) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    const drawStroke = useCallback((stroke: Array<Array<number>>) => {
        contextRef.current?.moveTo(stroke[X][0], stroke[Y][0]);
        for (let point = 1; point < stroke[X].length; point++) {
            contextRef.current?.lineTo(
                stroke[X][point] + 1,
                stroke[Y][point] + 1
            );
            contextRef.current?.stroke();
        }
    }, []);

    const startDrawing = useCallback(() => {
        contextRef.current?.beginPath();
        drawing.drawing.forEach((stroke) => {
            setTimeout(() => {
                drawStroke(stroke);
            }, 500);
        });
        contextRef.current?.closePath();
    }, [drawStroke, drawing]);

    useEffect(() => {
        const canvas = canvasRef?.current;
        const context = canvas?.getContext('2d');
        if (canvas && context) {
            canvas.width = 255;
            canvas.height = 255;
            canvas.style.width = '255px';
            canvas.style.height = '255px';
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.lineCap = 'round';
            context.strokeStyle = 'black';
            contextRef.current = context;
            context.lineWidth = 2;
        }
        context?.clearRect(0, 0, context.canvas.width, context.canvas.height);

        startDrawing();
    }, [drawing, startDrawing]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default SketchCanvas;
