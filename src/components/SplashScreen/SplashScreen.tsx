import { Box, Typography, useTheme } from '@mui/material';

function SplashScreen() {
    const theme = useTheme();

    return (
        <Box
            display='flex'
            flexDirection='column'
            // alignItems='center'
            // sx={{ width: '100vh' }}
        >
            <Box
                display='flex'
                p={2}
                // width={'700px'}
                textAlign={'center'}
                justifyContent={'center'}
            >
                <Typography fontFamily='Handwriting_2' variant='body1'>
                    Can you guess drawing created from people around the world?
                </Typography>
            </Box>

            <Box
                display='flex'
                p={2}
                // width={'700px'}
                textAlign={'center'}
                justifyContent={'center'}
            >
                <Typography fontFamily='Roboto_Regular' variant='body2'>
                    Featuring drawings from
                </Typography>
            </Box>
            <Box
                display='flex'
                p={2}
                // width={'700px'}
                textAlign={'center'}
                justifyContent={'center'}
            >
                <Typography fontFamily='Roboto_Regular' variant='subtitle1'>
                    <a
                        href='https://github.com/googlecreativelab/quickdraw-dataset'
                        target='_blank'
                        style={{
                            textDecoration: `underline ${theme.palette.primary.main}`,
                            color: theme.palette.primary.main,
                        }}
                    >
                        The largest doodling data set in the world!
                    </a>
                </Typography>
            </Box>
        </Box>
    );
}

export default SplashScreen;
