import { Box } from '@mui/material';
import Header from '../Header/Header';
import PlayButton from '../Play/Play';
import AnswerTextField from '../AnswerTextField/AnswerTextField';
import { useGetDrawing } from '../../utils/useGetDrawing';

function GuessASketch() {
    const drawingData = useGetDrawing();

    return (
        <Box>
            <Header />
            <Box display='flex' justifyContent='center'>
                <PlayButton />
            </Box>
            <Box display='flex' justifyContent='center'>
                <AnswerTextField />
                {JSON.stringify(drawingData.drawingData)}
            </Box>
        </Box>
    );
}

export default GuessASketch;
