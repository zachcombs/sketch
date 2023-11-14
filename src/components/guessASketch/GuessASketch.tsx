import { Box, Grid } from '@mui/material';
import Header from '../Header/Header';
// import PlayButton from '../Play/Play';
import { useEffect, useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';
import GameBoard from '../GameBoard/GameBoard';
import CreditsEmblem from '../CreditsEmblem/CreditsEmblem';

function GuessASketch() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (isGameOver === false) return;
    }, [isGameOver]);

    const handlePlayAgain = () => {
        setIsGameOver(false);
        setIsPlaying(true);
    };

    return (
        <Grid container>
            <Header />
            {!isPlaying ? (
                <>
                    <Grid
                        container
                        display='flex'
                        justifyContent='center'
                        flexDirection='column'
                    >
                        <Grid item>
                            <SketchButton
                                text='Play'
                                fontSize={32}
                                onClick={() => setIsPlaying(true)}
                            />
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                    <Box p={2} sx={{ position: 'fixed', bottom: 0 }}>
                        <CreditsEmblem />
                    </Box>
                </>
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
                        <Box display='flex' justifyContent='center'>
                            <GameBoard setGameOver={setIsGameOver} />
                        </Box>
                    )}
                </>
            )}
        </Grid>
    );
}

export default GuessASketch;
