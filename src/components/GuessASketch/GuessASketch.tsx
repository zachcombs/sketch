import { Box, Grid } from '@mui/material';
import Header from '../Header/Header';
import { useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';
import GameBoard from '../GameBoard/GameBoard';
import CreditsEmblem from '../CreditsEmblem/CreditsEmblem';
import SplashScreen from '../SplashScreen/SplashScreen';
import GameOver from '../GameOver/GameOver';
// import { fontifyWord } from '../../utils/Fontify';
import { useCookies } from 'react-cookie';
import { Drawing } from '../../utils/useGetDrawing';
import { fontifyWord } from '../../utils/Fontify';

function GuessASketch() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [cookies] = useCookies(['score']);
    const [isLoading, setIsLoading] = useState(false);
    const [drawingData, setDrawingData] = useState<Drawing>();
    // const [, setServerError] = useState(null);

    const handlePlayAgain = () => {
        setCurrentScore(0);
        setIsGameOver(false);
        setIsPlaying(true);
    };

    return (
        <Box display='flex' flexDirection='column' sx={{ height: '100vh' }}>
            <Header isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            {!isPlaying ? (
                <>
                    <Grid
                        alignItems='center'
                        container
                        sx={{ height: '100%' }}
                        alignContent='center'
                    >
                        <Grid
                            container
                            display='flex'
                            flexDirection='column'
                            spacing={2}
                        >
                            <Grid item xs={12}>
                                <SplashScreen />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                display='flex'
                                justifyContent='center'
                            >
                                <SketchButton
                                    text='Play'
                                    fontSize={32}
                                    onClick={handlePlayAgain}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container alignItems={'flex-end'}>
                        <Grid item p={2} xs={3}>
                            <CreditsEmblem />
                        </Grid>
                        <Grid item p={2} xs={6}>
                            {cookies.score > 0 && (
                                <Box display='flex' justifyContent={'center'}>
                                    {fontifyWord(
                                        `Your High Score: ${cookies.score}`,
                                        {
                                            variant: 'body2',
                                        }
                                    )}
                                </Box>
                            )}
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                </>
            ) : (
                <>
                    {isGameOver && drawingData ? (
                        <>
                            <GameOver
                                currentScore={currentScore}
                                handlePlayAgain={handlePlayAgain}
                                currentAnswer={drawingData?.word}
                            />
                        </>
                    ) : (
                        <GameBoard
                            currentScore={currentScore}
                            setCurrentScore={setCurrentScore}
                            setIsGameOver={setIsGameOver}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            drawingData={drawingData}
                            setDrawingData={setDrawingData}
                        />
                    )}
                </>
            )}
        </Box>
    );
}

export default GuessASketch;
