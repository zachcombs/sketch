import { Box, Grid, IconButton, useTheme } from '@mui/material';
import { Close, HelpOutline, GitHub } from '@mui/icons-material';
import { fontifyWord } from '../../utils/Fontify';
import './Header.css';
import { Dispatch } from 'react';

function Header({
    isPlaying,
    setIsPlaying,
}: {
    isPlaying: boolean;
    setIsPlaying: Dispatch<boolean>;
}) {
    const theme = useTheme();

    const handleCancelButtonClick = () => {
        setIsPlaying(false);
    };

    return (
        <Grid
            container
            alignItems='center'
            sx={{
                background: theme.palette.primary.main,
                boxShadow: 3,
            }}
        >
            <Grid item xs={4}>
                {isPlaying && (
                    <Box pl={1}>
                        <IconButton
                            size='large'
                            sx={{ p: 2 }}
                            onClick={handleCancelButtonClick}
                        >
                            <Close fontSize='large' />
                        </IconButton>
                    </Box>
                )}
            </Grid>
            <Grid item xs={4}>
                <Box display='flex' justifyContent='space-evenly'>
                    {fontifyWord('Guess-a-Sketch', 72)}
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box display='flex' justifyContent='flex-end'>
                    <Box pr={1} display='flex' alignItems='center'>
                        <IconButton size='large' sx={{ p: 2 }}>
                            <HelpOutline fontSize='large' />
                        </IconButton>
                    </Box>
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
            </Grid>
        </Grid>
    );
}

export default Header;
