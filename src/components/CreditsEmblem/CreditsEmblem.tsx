import { Box, Typography } from '@mui/material';
import quickDrawSprite from '../../assets/quick_draw_sprite_cropped.png';

function CreditsEmblem() {
    return (
        <a
            href='https://quickdraw.withgoogle.com/'
            target='_blank'
            style={{ textDecoration: 'none' }}
        >
            <Box display='flex'>
                <Box
                    display='flex'
                    sx={{ color: 'grey' }}
                    textAlign='center'
                    alignItems='center'
                >
                    <Typography
                        fontFamily='Roboto_Regular'
                        variant='subtitle2'
                        style={{
                            maxWidth: '200px',
                        }}
                    >
                        Inspiration and data from Google's
                    </Typography>
                </Box>
                <img
                    style={{
                        // maxWidth: '100%',
                        filter: 'grayscale(100%)',
                    }}
                    src={quickDrawSprite}
                    alt='Quick, Draw!'
                    // height={'auto'}
                />
            </Box>
        </a>
    );
}

export default CreditsEmblem;
