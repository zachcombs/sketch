import { Box, LinearProgress } from '@mui/material';
import { Dispatch, useEffect, useState } from 'react';

const MIN = 0;
const MAX = 1000;

function Countdown({ setGameOver }: { setGameOver: Dispatch<boolean> }) {
    const [countdown, setCountdown] = useState(0);

    const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((oldCountdown) => {
                if (oldCountdown === MAX) {
                    setGameOver(true);
                    return 0;
                }
                return oldCountdown + 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [setGameOver]);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress
                variant='determinate'
                value={normalise(countdown)}
            />
        </Box>
    );
}

export default Countdown;
