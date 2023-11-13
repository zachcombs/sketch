import { Box, Typography } from '@mui/material';

export const fontifyWord = (word: string, fontSize: number = 32) => {
    const characters = [...word];

    const fontAppliedTitle = characters.map((char, index) => {
        return (
            <Typography
                // fontFamily={`Handwriting_${Math.floor(Math.random() * 3) + 1}`}
                fontFamily={`Handwriting_${Math.floor(Math.random() * 3) + 1}`}
                fontSize={fontSize}
                key={`fontify-${char}-${word}- ${index}`}
            >
                {char}
            </Typography>
        );
    });

    return <Box display='flex'>{fontAppliedTitle}</Box>;
};
