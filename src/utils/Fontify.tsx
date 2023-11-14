import { Typography } from '@mui/material';

export const fontifyWord = (word: string, fontSize: number = 32) => {
    return (
        <Typography
            // fontFamily={`Handwriting_${Math.floor(Math.random() * 3) + 1}`}
            fontFamily={`Handwriting_1`}
            fontSize={fontSize}
            key={`fontify--${word}`}
        >
            {word}
        </Typography>
    );
};
