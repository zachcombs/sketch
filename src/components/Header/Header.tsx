import { Box, Grid, IconButton, useTheme } from '@mui/material';
import { Close, HelpOutline, GitHub } from '@mui/icons-material';
import { fontifyWord } from '../../utils/Fontify';
import './Header.css';
import { Dispatch, useState } from 'react';
import HowToDialog from '../HowToDialog/HowToDialog';

function Header({
    isPlaying,
    setIsPlaying,
}: {
    isPlaying: boolean;
    setIsPlaying: Dispatch<boolean>;
}) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleCancelButtonClick = () => {
        setIsPlaying(false);
    };

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
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
                            <Close
                                sx={{
                                    p: 2,
                                    [theme.breakpoints.down(300)]: {
                                        p: 0.5,
                                        width: '1.5rem',
                                    },
                                }}
                                fontSize='large'
                            />
                        </IconButton>
                    </Box>
                )}
            </Grid>
            <Grid item xs={4} pt={2}>
                <Box display='flex' justifyContent='space-evenly'>
                    {fontifyWord('Guess-a-Sketch', { variant: 'h1' })}
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box display='flex' justifyContent='flex-end'>
                    <Box
                        p={1}
                        sx={{
                            [theme.breakpoints.down(300)]: {
                                pr: 0,
                                width: '1.5rem',
                            },
                        }}
                        display='flex'
                        alignItems='center'
                    >
                        <IconButton onClick={handleModalOpen}>
                            <HelpOutline
                                sx={{
                                    p: 2,
                                    [theme.breakpoints.down(300)]: {
                                        p: 0,
                                        width: '1.5rem',
                                    },
                                }}
                                fontSize='large'
                            />
                        </IconButton>
                    </Box>
                    <Box pr={1} display='flex' alignItems='center'>
                        <IconButton
                            href='https://github.com/zachcombs/sketch'
                            target='_blank'
                            // size='large'
                        >
                            <GitHub
                                sx={{
                                    p: 2,
                                    [theme.breakpoints.down(300)]: {
                                        p: 0,
                                        width: '1.5rem',
                                    },
                                }}
                                fontSize='large'
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
            <HowToDialog open={open} handleModalClose={handleModalClose} />
        </Grid>
    );
}

export default Header;
