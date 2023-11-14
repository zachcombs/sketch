import { Box } from '@mui/material';
import Header from '../Header/Header';
// import PlayButton from '../Play/Play';
import { useEffect, useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';
import GameBoard from '../GameBoard/GameBoard';

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
        </Box>
    );
}

export default GuessASketch;
