import { Box, Menu, MenuItem } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useState } from 'react';
import SketchButton from '../SketchButton/SketchButton';

const difficultyOptions = ['Easy', 'Medium', 'Hard'];

function Play() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [difficulty, setDifficulty] = useState<string>(difficultyOptions[0]);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option?: number) => {
        option && setDifficulty(difficultyOptions[option || 0]);
        setAnchorEl(null);
    };

    return (
        <Box>
            <Box p={1}>
                <SketchButton
                    text={difficulty}
                    fontSize={32}
                    onClick={handleClick}
                    endIcon={anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose(0)}
                >
                    <MenuItem onClick={() => handleClose(0)}>Easy</MenuItem>
                    <MenuItem onClick={() => handleClose(1)}>Medium</MenuItem>
                    <MenuItem onClick={() => handleClose(2)}>Hard</MenuItem>
                </Menu>
            </Box>
            <Box p={1}>
                <SketchButton text='Play' fontSize={32} />
            </Box>
        </Box>
    );
}

export default Play;
