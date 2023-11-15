import { Box, TextField } from '@mui/material';
import { Dispatch, useEffect, useState } from 'react';

type AnswerTextFieldProps = {
    correctAnswer: string;
    setHasCorrectlyAnswered: Dispatch<boolean>;
};

function AnswerTextField({
    correctAnswer,
    setHasCorrectlyAnswered,
}: AnswerTextFieldProps) {
    const [currentGuess, setCurrentGuess] = useState('');

    useEffect(() => {
        if (currentGuess === correctAnswer) {
            setHasCorrectlyAnswered(true);
        }
    }, [correctAnswer, currentGuess, setHasCorrectlyAnswered]);

    return (
        <Box>
            <TextField
                onChange={(event) => {
                    setCurrentGuess(event.target.value);
                }}
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
