import { Box, IconButton, useTheme } from '@mui/material';
import { HelpOutline, GitHub } from '@mui/icons-material';
import { fontifyWord } from '../../utils/Fontify';
import './Header.css';

function Header() {
    const theme = useTheme();

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            sx={{
                background: theme.palette.primary.main,
                boxShadow: 3,
            }}
        >
            <Box pl={1} display='flex' alignItems='center'>
                <IconButton size='large' sx={{ p: 2 }}>
                    <HelpOutline fontSize='large' />
                </IconButton>
            </Box>
            <Box display='flex'>{fontifyWord('Guess-a-Sketch', 72)}</Box>
            <Box pr={1} display='flex' alignItems='center'>
                <IconButton
                    href='https://github.com/zachcombs/sketch'
                    target='_blank'
                    size='large'
                    sx={{ p: 2 }}
                >
                    <GitHub fontSize='large' />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Header;
