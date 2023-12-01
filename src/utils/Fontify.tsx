import { Typography } from '@mui/material';

export const fontifyWord = (
    word: string,
    inputProps?: object,
    fontSize?: number
) => {
    return (
        <Typography
            // fontFamily={`Handwriting_${Math.floor(Math.random() * 3) + 1}`}
            fontFamily={`Handwriting_1`}
            fontSize={fontSize}
            key={`fontify--${word}`}
            {...inputProps}
        >
            {word}
        </Typography>
    );
};
