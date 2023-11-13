import { Box } from '@mui/material';
import Header from '../Header/Header';
// import PlayButton from '../Play/Play';
import { useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';
import GameBoard from '../GameBoard/GameBoard';

function GuessASketch() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    return (
        <Box>
            <Header />
            {!isPlaying ? (
                <Box display='flex' justifyContent='center'>
                    <SketchButton
                        text='Play'
                        fontSize={32}
                        onClick={() => setIsPlaying(true)}
                    />
                </Box>
            ) : (
                <Box display='flex' justifyContent='center'>
                    <GameBoard />
                </Box>
            )}
        </Box>
    );
}

export default GuessASketch;
