import { Box, TextField } from '@mui/material';

function AnswerTextField() {
    return (
        <Box>
            <TextField
                sx={{ width: 500 }}
                variant='standard'
                inputProps={{
                    style: {
                        fontSize: 96,
                        fontFamily: 'Handwriting_1',
                        textAlign: 'center',
                    },
                }}
            />
        </Box>
    );
}

export default AnswerTextField;
