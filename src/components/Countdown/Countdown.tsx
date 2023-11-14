import { Box, LinearProgress, useTheme } from '@mui/material';
import { Dispatch, useEffect, useState } from 'react';

const MIN = 0;
const MAX = 100;

function Countdown({ setGameOver }: { setGameOver: Dispatch<boolean> }) {
    const theme = useTheme();
    const [countdown, setCountdown] = useState(0);
    const [progressColor, setProgressColor] = useState(
        theme.palette.primary.main
    );

    useEffect(() => {
        switch (countdown) {
            case 0:
                setProgressColor(theme.palette.primary.main);
                break;
            case 20:
                setProgressColor('#ffa339');
                break;
            case 40:
                setProgressColor('#ff7839');
                break;
            case 60:
                setProgressColor('#ff4d39');
                break;
            case 80:
                setProgressColor('#ff203a');
                break;
        }
    }, [countdown, progressColor, theme.palette.primary.main]);

    const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((oldCountdown) => {
                if (oldCountdown > MAX) {
                    setGameOver(true);
                    return 0;
                }
                return oldCountdown + 1;
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [setGameOver]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ color: progressColor }}>
                <LinearProgress
                    color='inherit'
                    variant='determinate'
                    value={normalise(countdown)}
                />
            </Box>
        </Box>
    );
}

export default Countdown;
