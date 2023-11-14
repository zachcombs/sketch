import { useEffect, useState } from 'react';
import SketchCanvas from '../SketchCanvas/SketchCanvas';
import {
    Box,
    CircularProgress,
    Grid,
    Typography,
    useTheme,
} from '@mui/material';
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
        <Box display='flex'>{fontifyWord(`Score: ${currentScore}`, 48)}</Box>
    );

    return (
        <>
            {isLoading ? (
                <Grid
                    item
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    gap={10}
                >
                    <Box sx={{ position: 'absolute', bottom: '50%' }}>
                        <Box display='flex' justifyContent='center'>
                            <CircularProgress size='10rem' />
                        </Box>
                        <Box pt={2}>
                            <Typography
                                fontFamily={'Roboto_Regular'}
                                style={{
                                    color: theme.palette.primary.main,
                                }}
                                textAlign='center'
                                fontSize={24}
                            >
                                Fetching drawing
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            ) : (
                <>
                    {drawingData ? (
                        <Box display='flex' flexDirection='column'>
                            <Grid
                                item
                                display='flex'
                                alignItems='center'
                                flexDirection='column'
                                gap={10}
                            >
                                <SketchCanvas drawing={drawingData?.drawing} />
                                <AnswerTextField
                                    correctAnswer={drawingData?.word}
                                    setHasCorrectlyAnswered={
                                        setHasCorrectlyAnswered
                                    }
                                />
                            </Grid>
                        </Box>
                    ) : (
                        <Typography>
                            There was an error drawing the sketch!
                        </Typography>
                    )}
                </>
            )}

            <Box p={2} sx={{ position: 'absolute', bottom: 0 }}>
                <ScoreCard />
            </Box>
        </>
    );
}

export default GameBoard;
