import { useCallback, useEffect, useRef } from 'react';
import { useGetDrawing } from '../../utils/useGetDrawing';

const X = 0;
const Y = 1;

function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const { drawingData } = useGetDrawing();

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
        drawingData?.drawing.forEach((stroke) => {
            setTimeout(() => {
                drawStroke(stroke);
            }, 500);
        });
        contextRef.current?.closePath();
    }, [drawStroke, drawingData]);

    // const finishDrawing = () => {
    //     contextRef.current?.closePath();
    //     setIsDrawing(false);
    // };

    useEffect(() => {
        const canvas = canvasRef?.current;
        if (canvas) {
            canvas.width = 255;
            canvas.height = 255;
            // canvas.style.width = '500px';
            // canvas.style.height = '500px';
        }

        const context = canvas?.getContext('2d');
        if (context) {
            context.lineCap = 'round';
            context.strokeStyle = 'black';
            contextRef.current = context;
            context.lineWidth = 2;
        }

        startDrawing();
    }, [drawingData, startDrawing]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default Canvas;
