import { Dispatch, useEffect, useState } from 'react';
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
import Countdown from '../Countdown/Countdown';

function GameBoard({
    currentScore,
    setCurrentScore,
    setIsGameOver,
}: {
    currentScore: number;
    setCurrentScore: Dispatch<number>;
    setIsGameOver: Dispatch<boolean>;
}) {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [drawingData, setDrawingData] = useState<Drawing>();
    // const [, setServerError] = useState(null);
    const [drawingPopulated, setDrawingPopulated] = useState(false);
    const [hasCorrectlyAnswered, setHasCorrectlyAnswered] = useState(false);

    useEffect(() => {
        if (hasCorrectlyAnswered === false) return;
        setCurrentScore(currentScore + 1);
        setDrawingPopulated(false);
        setHasCorrectlyAnswered(false);
    }, [currentScore, hasCorrectlyAnswered, setCurrentScore]);

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
        <Grid
            alignItems='center'
            container
            sx={{ height: '100%' }}
            justifyContent='center'
            alignContent='space-between'
        >
            {isLoading ? (
                <>
                    <Grid item xs={12} />
                    <Grid container display='flex' flexDirection='column'>
                        <Grid item display='flex' justifyContent='center'>
                            <CircularProgress size='10rem' />
                        </Grid>
                        <Grid
                            item
                            pt={2}
                            display='flex'
                            justifyContent='center'
                        >
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
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    {drawingData ? (
                        <>
                            <Countdown setGameOver={setIsGameOver} />
                            <Grid
                                container
                                display='flex'
                                flexDirection='column'
                            >
                                <Box
                                    display='flex'
                                    justifyContent='center'
                                    width='100%'
                                    flexDirection='column'
                                >
                                    <Grid
                                        item
                                        display='flex'
                                        alignItems='center'
                                        flexDirection='column'
                                    >
                                        <Box
                                            p={4}
                                            sx={{
                                                boxShadow: 3,
                                            }}
                                        >
                                            <SketchCanvas
                                                drawing={drawingData?.drawing}
                                            />
                                        </Box>
                                        <AnswerTextField
                                            correctAnswer={drawingData?.word}
                                            setHasCorrectlyAnswered={
                                                setHasCorrectlyAnswered
                                            }
                                        />
                                    </Grid>
                                </Box>
                            </Grid>
                        </>
                    ) : (
                        <Typography>
                            There was an error drawing the sketch!
                        </Typography>
                    )}
                </>
            )}
            <ScoreCard />
        </Grid>
    );
}

export default GameBoard;
