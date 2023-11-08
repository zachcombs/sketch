import './App.css';
import GuessASketch from './components/guessASketch/GuessASketch';
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
            <GuessASketch />
        </ThemeProvider>
    );
}

export default App;
