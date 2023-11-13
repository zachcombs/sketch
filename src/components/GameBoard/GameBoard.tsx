import { useEffect, useState } from 'react';
// import { useGetDrawing } from '../../utils/useGetDrawing';
import SketchCanvas from '../SketchCanvas/SketchCanvas';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import AnswerTextField from '../AnswerTextField/AnswerTextField';
import { fontifyWord } from '../../utils/Fontify';
import { Drawing } from '../../utils/useGetDrawing';

function GameBoard() {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [drawingData, setDrawingData] = useState<Drawing>();
    // const [, setServerError] = useState(null);
    const [drawingPopulated, setDrawingPopulated] = useState(false);

    const [currentScore, setCurrentScore] = useState(0);
    const [hasCorrectlyAnswered, setHasCorrectlyAnswered] = useState(false);

    useEffect(() => {
        if (hasCorrectlyAnswered === false) return;
        setCurrentScore(currentScore + 1);
        setDrawingPopulated(false);
        setHasCorrectlyAnswered(false);
    }, [currentScore, hasCorrectlyAnswered]);

    useEffect(() => {
        if (drawingPopulated) return;
        setIsLoading(true);

        fetch('http://localhost:8080/drawing', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => setDrawingData(data))
            // .catch((err) => setServerError(err))
            .finally(() => setIsLoading(false));

        setDrawingPopulated(true);
    }, [drawingPopulated]);

    const ScoreCard = () => (
        <Box
            display='flex'
            sx={{ backgroundColor: theme.palette.primary.main }}
        >
            {fontifyWord(`Score: ${currentScore}`)}
        </Box>
    );

    const DrawSection = () => {
        return (
            <>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        {drawingData ? (
                            <>
                                <SketchCanvas drawing={drawingData?.drawing} />
                                <AnswerTextField
                                    correctAnswer={drawingData?.word}
                                    setHasCorrectlyAnswered={
                                        setHasCorrectlyAnswered
                                    }
                                />
                            </>
                        ) : (
                            <Typography>
                                There was an error drawing the sketch!
                            </Typography>
                        )}
                    </>
                )}
            </>
        );
    };

    return (
        <>
            <ScoreCard />
            <DrawSection />
        </>
    );
}

export default GameBoard;
