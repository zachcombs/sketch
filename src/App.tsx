import './App.css';
import Header from './components/header/Header';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#FFD139',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
}

export default App;
