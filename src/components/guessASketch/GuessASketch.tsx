import { Box } from '@mui/material';
import Header from '../header/Header';
import PlayButton from '../play/Play';
import AnswerTextField from '../AnswerTextField/AnswerTextField';

function GuessASketch() {
    return (
        <Box>
            <Header />
            <Box display='flex' justifyContent='center'>
                <PlayButton />
            </Box>
            <Box display='flex' justifyContent='center'>
                <AnswerTextField />
            </Box>
        </Box>
    );
}

export default GuessASketch;
