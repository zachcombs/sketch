import { Box, Button, useTheme } from '@mui/material';
import { fontifyWord } from '../../utils/Fontify';

type SketchButtonProps = {
    text: string;
    fontSize?: number;
    onClick: () => void;
    endIcon?: JSX.Element;
};

export default function SketchButton({
    text,
    fontSize = 12,
    onClick,
    endIcon,
}: SketchButtonProps) {
    const theme = useTheme();

    return (
        <Box display='flex'>
            <Button
                variant='contained'
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 0,
                    width: 200,
                }}
                onClick={() => onClick()}
                endIcon={endIcon}
            >
                {fontifyWord(text, undefined, fontSize)}
            </Button>
        </Box>
    );
}
