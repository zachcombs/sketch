import { Box, IconButton } from '@mui/material';
import { HelpOutline, GitHub } from '@mui/icons-material';
import './Header.css';

function Header() {
	return (
		<Box display='flex' sx={{ justifyContent: 'flex-end' }}>
			<IconButton size='large' sx={{ p: 2 }}>
				<HelpOutline fontSize='large' />
			</IconButton>
			<IconButton
				href='https://github.com/zachcombs/sketch'
				target='_blank'
				size='large'
				sx={{ p: 2 }}>
				<GitHub fontSize='large' />
			</IconButton>
		</Box>
	);
}

export default Header;
