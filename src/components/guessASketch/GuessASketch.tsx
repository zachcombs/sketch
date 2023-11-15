import { Box, Grid } from '@mui/material';
import Header from '../Header/Header';
import { useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';
import GameBoard from '../GameBoard/GameBoard';
import CreditsEmblem from '../CreditsEmblem/CreditsEmblem';
import SplashScreen from '../SplashScreen/SplashScreen';
import GameOver from '../GameOver/GameOver';
import { fontifyWord } from '../../utils/Fontify';
import { useCookies } from 'react-cookie';

function GuessASketch() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [cookies] = useCookies(['score']);

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
                        alignContent='space-between'
                    >
                        <Grid
                            container
                            display='flex'
                            flexDirection='column'
                            spacing={2}
                        >
                            <Grid item>
                                <SplashScreen />
                            </Grid>
                            <Grid item display='flex' justifyContent='center'>
                                <SketchButton
                                    text='Play'
                                    fontSize={32}
                                    onClick={handlePlayAgain}
                                />
                            </Grid>
                        </Grid>
                        <Grid container p={2} xs={4}>
                            <CreditsEmblem />
                        </Grid>
                        <Grid container p={2} xs={4} justifyContent='center'>
                            {fontifyWord(
                                `Your Highest Score: ${cookies.score}`,
                                32
                            )}
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    {isGameOver ? (
                        <>
                            <GameOver
                                currentScore={currentScore}
                                handlePlayAgain={handlePlayAgain}
                            />
                        </>
                    ) : (
                        <GameBoard
                            currentScore={currentScore}
                            setCurrentScore={setCurrentScore}
                            setIsGameOver={setIsGameOver}
                        />
                    )}
                </>
            )}
        </Box>
    );
}

export default GuessASketch;
