import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { HelpOutline, GitHub } from '@mui/icons-material';
import './Header.css';

function Header() {
	const theme = useTheme();
	const applyFontToTitle = (word: string) => {
		const characters = [...word];

		const fontAppliedTitle = characters.map((char) => {
			return (
				<Typography
					fontFamily={`Handwriting_${
						Math.floor(Math.random() * 3) + 1
					}`}
					fontSize={52}
				>
					{char}
				</Typography>
			);
		});

		return (
			<Box display='flex' sx={{ alignItems: 'center' }}>
				{fontAppliedTitle}
			</Box>
		);
	};

	return (
		<Box
			display='flex'
			sx={{
				justifyContent: 'space-between',
				background: theme.palette.primary.main,
				boxShadow: 3,
			}}
		>
			<Box pl={1} display='flex' sx={{ alignItems: 'center' }}>
				<IconButton size='large' sx={{ p: 2 }}>
					<HelpOutline fontSize='large' />
				</IconButton>
			</Box>
			<Box display='flex'>{applyFontToTitle('Guess-a-Sketch')}</Box>
			<Box pr={1} display='flex' sx={{ alignItems: 'center' }}>
				<IconButton
					href='https://github.com/zachcombs/sketch'
					target='_blank'
					size='large'
					sx={{ p: 2 }}
				>
					<GitHub fontSize='large' />
				</IconButton>
			</Box>
		</Box>
	);
}

export default Header;
