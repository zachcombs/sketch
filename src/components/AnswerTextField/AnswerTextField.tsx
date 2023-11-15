import { Box, TextField, Typography } from '@mui/material';
import { Dispatch, useEffect, useRef, useState } from 'react';

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
    const textfieldRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        setCurrentGuess(initializeCurrentGuess(correctAnswer));
        textfieldRef.current = textfieldRef.current.slice(
            0,
            correctAnswer.length
        );
    }, [correctAnswer]);

    useEffect(() => {
        if (
            currentGuess.join('').toLowerCase() === correctAnswer.toLowerCase()
        ) {
            setHasCorrectlyAnswered(true);
        }
    }, [correctAnswer, currentGuess, setHasCorrectlyAnswered]);

    useEffect(() => {
        textfieldRef.current[0]?.focus();
    }, [textfieldRef]);

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
                    >
                        {' '}
                        -
                    </Typography>
                </Box>
            );
        }

        /**
         * I apologize in advance to anyone who reads this component
         * and tries to understand the logic surround the textfield.
         *
         * Formatting the textfield like Wordle turned out to be
         * much harder than anticipated and this took much longer
         * than anticipated
         */
        return (
            <Box p={1}>
                <TextField
                    inputRef={(ref) => (textfieldRef.current[index] = ref)}
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
                    onKeyDown={(event) => {
                        if (event.key !== 'Backspace') return;
                        const items = [...currentGuess];
                        if (
                            index === currentGuess.length - 1 &&
                            items[index] !== ''
                        ) {
                            items[index] = '';
                            setCurrentGuess(items);
                        } else {
                            if (index === 0) {
                                items[0] = '';
                            } else {
                                if (items[index] !== '') {
                                    items[index] = '';
                                } else {
                                    if (
                                        items[index - 1] === ' ' ||
                                        items[index - 1] === '-'
                                    ) {
                                        items[index - 2] = '';
                                        const previous =
                                            textfieldRef.current[index - 2];
                                        previous?.focus();
                                    } else {
                                        items[index - 1] = '';
                                        const previous =
                                            textfieldRef.current[index - 1];
                                        previous?.focus();
                                    }
                                }
                            }
                            setCurrentGuess(items);
                        }
                    }}
                    onChange={(event) => {
                        if (!event.target.value.match('[a-zA-Z]')) return;
                        if (event.target.value.length > 1) return;
                        const items = [...currentGuess];
                        items[index] = event.target.value.toUpperCase();
                        setCurrentGuess(items);
                        let next;
                        if (
                            items[index + 1] === ' ' ||
                            items[index + 1] === '-'
                        ) {
                            next = textfieldRef.current[index + 2];
                            next?.focus();
                        }

                        if (items[index] !== '') {
                            next = textfieldRef.current[index + 1];
                            next?.focus();
                        }
                    }}
                    value={currentGuess[index]}
                />
            </Box>
        );
    });

    return <Box display='flex'>{answerLetterMap}</Box>;
}

export default AnswerTextField;
