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
import Countdown from '../Countdown/Countdown';
import { Drawing } from '../../utils/useGetDrawing';

function GameBoard({
    currentScore,
    setCurrentScore,
    setIsGameOver,
    isLoading,
    setIsLoading,
    drawingData,
    setDrawingData,
}: {
    currentScore: number;
    setCurrentScore: Dispatch<number>;
    setIsGameOver: Dispatch<boolean>;
    isLoading: boolean;
    setIsLoading: Dispatch<boolean>;
    drawingData: Drawing | undefined;
    setDrawingData: Dispatch<Drawing>;
}) {
    const theme = useTheme();
    const [drawingPopulated, setDrawingPopulated] = useState(false);
    const [hasCorrectlyAnswered, setHasCorrectlyAnswered] = useState(false);
    const [serverError, setServerError] = useState(false);

    useEffect(() => {
        if (hasCorrectlyAnswered === false) return;
        setCurrentScore(currentScore + 1);
        setDrawingPopulated(false);
        setHasCorrectlyAnswered(false);
    }, [currentScore, hasCorrectlyAnswered, setCurrentScore]);

    useEffect(() => {
        if (drawingPopulated) return;
        setIsLoading(true);

        fetch('https://rusty-guess-a-sketch.onrender.com/drawing', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => setDrawingData(data))
            .catch(() => setServerError(true))
            .finally(() => setIsLoading(false));

        setDrawingPopulated(true);
    }, [drawingPopulated, setDrawingData, setIsLoading]);

    const ScoreCard = () => (
        <Box display='flex'>
            {fontifyWord(`Score: ${currentScore}`, { variant: 'body1' })}
        </Box>
    );

    return (
        <>
            {!serverError ? (
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
                            <Grid
                                container
                                display='flex'
                                flexDirection='column'
                            >
                                <Grid
                                    item
                                    display='flex'
                                    justifyContent='center'
                                >
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
                            {drawingData && (
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
                                                        drawing={
                                                            drawingData?.drawing
                                                        }
                                                    />
                                                </Box>
                                                <Box pt={2} display='flex'>
                                                    <AnswerTextField
                                                        correctAnswer={
                                                            drawingData?.word
                                                        }
                                                        setHasCorrectlyAnswered={
                                                            setHasCorrectlyAnswered
                                                        }
                                                    />
                                                </Box>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </>
                            )}
                        </>
                    )}
                    {!serverError && <ScoreCard />}
                </Grid>
            ) : (
                <Box
                    display='flex'
                    sx={{ height: '50%' }}
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='column'
                >
                    {fontifyWord('There was an error fetching the sketch!', {
                        variant: 'body1',
                    })}

                    <Typography
                        pt={2}
                        fontFamily='Roboto_Regular'
                        fontSize={24}
                    >
                        Please retry and if problem continues please&nbsp;
                        <a
                            href='https://github.com/zachcombs/sketch/issues'
                            target='_blank'
                            style={
                                {
                                    // textDecoration: `underline ${theme.palette.primary.main}`,
                                    // color: theme.palette.primary.main,
                                }
                            }
                        >
                            create and an issue on GitHub
                        </a>
                    </Typography>
                </Box>
            )}
        </>
    );
}

export default GameBoard;
