import { Box, Typography, useTheme } from '@mui/material';

function SplashScreen() {
    const theme = useTheme();

    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box display='flex' p={2}>
                <Typography fontFamily='Handwriting_2' fontSize={48}>
                    Can you guess drawing created from people around the world?
                </Typography>
            </Box>
            <Box
                display='flex'
                sx={{ width: '500px' }}
                textAlign='center'
                p={2}
            >
                <Typography fontFamily='Roboto_Regular' fontSize={24}>
                    This game utilizes drawing's from Google's
                    <Typography fontFamily='Roboto_Regular' fontSize={24}>
                        Quick, Draw!
                    </Typography>
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
