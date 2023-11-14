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
                    sx={{ width: '100px', color: 'grey' }}
                    // textAlign='center'
                    alignItems='center'
                >
                    <Typography fontFamily='Roboto_Regular' fontSize={12}>
                        Inspiration and data from Google's
                    </Typography>
                </Box>
                <img
                    style={{ filter: 'grayscale(100%)' }}
                    src={quickDrawSprite}
                    alt='Quick, Draw!'
                    width='100px'
                />
            </Box>
        </a>
    );
}

export default CreditsEmblem;
