import { Close } from '@mui/icons-material';
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    Typography,
    useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { fontifyWord } from '../../utils/Fontify';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown, string>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction='down' ref={ref} {...props} />;
});

type HowToDialogProps = {
    open: boolean;
    handleModalClose: () => void;
};

function HowToDialog({ open, handleModalClose }: HowToDialogProps) {
    const theme = useTheme();

    return (
        <Dialog
            sx={{
                // height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            color={theme.palette.primary.main}
            open={open}
            onClose={handleModalClose}
            TransitionComponent={Transition}
        >
            <DialogTitle display='flex' alignItems='center'>
                {fontifyWord('How to Play Guess-A-Sketch')}
                <IconButton onClick={handleModalClose}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent
                sx={{ height: '30vh', fontFamily: 'Roboto_Regular' }}
            >
                <Box
                    display='flex'
                    height={'100%'}
                    justifyContent={'space-around'}
                    flexDirection={'column'}
                >
                    <Typography variant='body2'>
                        When you hit play, a picture will be drawn on a canvas
                        and you will have to guess what the drawing is a picture
                        of.
                    </Typography>
                    <Typography variant='body2'>
                        You will have 10 seconds to guess the word or times up!
                    </Typography>
                    <Typography variant='body2'>
                        The goal is to get the highest score possible.
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default HowToDialog;
