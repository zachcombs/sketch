import { Box } from '@mui/material';
import Header from '../header/Header';
import PlayButton from '../play/Play';

function GuessASketch() {
    return (
        <Box>
            <Header />
            <Box display='flex' justifyContent='center' flexDirection='column'>
                <PlayButton />
            </Box>
        </Box>
    );
}

export default GuessASketch;
