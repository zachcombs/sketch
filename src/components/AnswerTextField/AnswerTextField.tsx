import { Box, TextField, Typography } from '@mui/material';
import { Dispatch, useEffect, useState } from 'react';

const initializeCurrentGuess = (correctAnswer: string) => {
    const tempArray = Array<string>(correctAnswer.length);
    [...correctAnswer].forEach((char, index) => {
        if (char === ' ') {
            tempArray[index] = ' ';
        } else if (char === '-') {
            tempArray[index] = '-';
        } else {
            tempArray[index] = '';
        }
    });

    return tempArray;
};

function AnswerTextField({
    correctAnswer,
    setHasCorrectlyAnswered,
}: {
    correctAnswer: string;
    setHasCorrectlyAnswered: Dispatch<boolean>;
}) {
    const [currentGuess, setCurrentGuess] = useState(
        initializeCurrentGuess(correctAnswer)
    );

    useEffect(() => {
        if (currentGuess.join('').toLowerCase() === correctAnswer) {
            setHasCorrectlyAnswered(true);
        }
    }, [correctAnswer, currentGuess, setHasCorrectlyAnswered]);

    const answerLetterMap = [...correctAnswer].map((char, index) => {
        if (char === ' ') {
            return <Box p={1} sx={{ width: 50, height: 50 }} />;
        }
        if (char === '-') {
            return (
                <Box p={1} sx={{ width: 50, height: 50 }}>
                    <Typography
                        fontFamily={'Roboto_Regular'}
                        fontSize={48}
                        textAlign={'center'}
                        width={50}
                        height={50}
                        key={`answer-input-${index}`}
                    >
                        {' '}
                        -
                    </Typography>
                </Box>
            );
        }

        return (
            <Box p={1}>
                <TextField
                    key={`answer-textfield-${index}`}
                    inputProps={{
                        style: {
                            fontSize: 48,
                            fontFamily: 'Roboto_Regular',
                            textAlign: 'center',
                            width: 50,
                            height: 50,
                        },
                    }}
                    onChange={(event) => {
                        if (event.target.value.length > 1) return;
                        const items = [...currentGuess];
                        items[index] = event.target.value.toUpperCase();
                        setCurrentGuess(items);
                    }}
                    value={currentGuess[index]}
                    {...(index === 0 && { autoFocus: true })}
                />
            </Box>
        );
    });

    return <Box display='flex'>{answerLetterMap}</Box>;
}

export default AnswerTextField;
