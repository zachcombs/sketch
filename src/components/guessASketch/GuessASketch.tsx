import { Box } from '@mui/material';
import Header from '../Header/Header';
import PlayButton from '../Play/Play';
import AnswerTextField from '../AnswerTextField/AnswerTextField';
import Canvas from '../Canvas/Canvas';

function GuessASketch() {
    return (
        <Box>
            <Header />
            <Box display='flex' justifyContent='center'>
                <PlayButton />
            </Box>
            <Box display='flex' justifyContent='center'>
                <AnswerTextField />
                <Canvas />
            </Box>
        </Box>
    );
}

export default GuessASketch;
