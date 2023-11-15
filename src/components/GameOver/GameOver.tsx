import { Box } from '@mui/material';
import SketchButton from '../SketchButton/SketchButton';
import { fontifyWord } from '../../utils/Fontify';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

function GameOver({
    currentAnswer,
    currentScore,
    handlePlayAgain,
}: {
    currentAnswer: string;
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
            {fontifyWord('The word was: ', 48)}
            {fontifyWord(`${currentAnswer}`, 64)}
            {fontifyWord('You scored', 48)}
            {fontifyWord(`${currentScore}`, 64)}
            {fontifyWord('Your highest score', 48)}
            {fontifyWord(`${cookies.score}`, 64)}
            <SketchButton
                text='Play Again'
                fontSize={32}
                onClick={handlePlayAgain}
            />
        </Box>
    );
}

export default GameOver;
