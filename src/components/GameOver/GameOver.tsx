import { Box } from '@mui/material';
import SketchButton from '../SketchButton/SketchButton';
import { fontifyWord } from '../../utils/Fontify';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

function GameOver({
    currentScore,
    handlePlayAgain,
}: {
    currentScore: number;
    handlePlayAgain: () => void;
}) {
    const [cookies, setCookies] = useCookies(['score']);

    useEffect(() => {
        if (cookies.score > currentScore) return;
        setCookies('score', currentScore);
    }, [cookies.score, currentScore, setCookies]);

    return (
        <Box
            alignItems='center'
            display='flex'
            justifyContent='center'
            flexDirection='column'
        >
            {fontifyWord('You Scored', 72)}
            {fontifyWord(`${currentScore}`, 96)}
            {fontifyWord('Your Highest Score', 74)}
            {fontifyWord(`${cookies.score}`, 96)}
            <SketchButton
                text='Play Again'
                fontSize={32}
                onClick={handlePlayAgain}
            />
        </Box>
    );
}

export default GameOver;
