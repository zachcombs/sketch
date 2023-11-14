import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { CookiesProvider } from 'react-cookie';
import GuessASketch from './components/GuessASketch/GuessASketch';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFD139',
            },
        },
        components: {
            MuiMenu: {
                styleOverrides: {
                    list: {
                        '&[role="menu"]': {
                            backgroundColor: '#FFD139',
                        },
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        justifyContent: 'center',
                        minWidth: 200,
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                    },
                },
            },
        },
    });

    return (
        <CookiesProvider>
            <ThemeProvider theme={theme}>
                <GuessASketch />
            </ThemeProvider>
        </CookiesProvider>
    );
}

export default App;
