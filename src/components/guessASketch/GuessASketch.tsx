import { Box, Grid } from '@mui/material';
import Header from '../Header/Header';
import { useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';
import GameBoard from '../GameBoard/GameBoard';
import CreditsEmblem from '../CreditsEmblem/CreditsEmblem';
import SplashScreen from '../SplashScreen/SplashScreen';

function GuessASketch() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const handlePlayAgain = () => {
        setIsGameOver(false);
        setIsPlaying(true);
    };

    return (
        <>
            <Header isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            {!isPlaying ? (
                <Grid alignItems='center' container>
                    <Grid
                        container
                        display='flex'
                        justifyContent='center'
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
                                onClick={() => setIsPlaying(true)}
                            />
                        </Grid>
                    </Grid>
                    <Box p={2} sx={{ position: 'absolute', bottom: 0 }}>
                        <CreditsEmblem />
                    </Box>
                </Grid>
            ) : (
                <>
                    {isGameOver ? (
                        <>
                            <Box>Oh No! You Lost!</Box>
                            <SketchButton
                                text='Play Again'
                                fontSize={32}
                                onClick={handlePlayAgain}
                            />
                        </>
                    ) : (
                        <GameBoard setIsGameOver={setIsGameOver} />
                    )}
                </>
            )}
        </>
    );
}

export default GuessASketch;
