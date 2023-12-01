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
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        '@media (min-width: 400px)': {},
                    },
                },
            },
        },
    });

    theme.breakpoints;

    theme.typography.h1 = {
        fontSize: '2rem',
        fontWeight: 'normal',
        '@media (min-width:600px)': {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    };

    theme.typography.body1 = {
        fontSize: '1.5rem',
        fontWeight: 'normal',
        '@media (min-width:600px)': {
            fontSize: '3rem',
        },
        [theme.breakpoints.down(1024)]: {
            fontSize: '2rem',
        },
    };

    theme.typography.body2 = {
        fontSize: '1rem',
        fontWeight: 'normal',
        '@media (min-width:600px)': {
            fontSize: '2rem',
        },
        [theme.breakpoints.down(1024)]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down(800)]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down(450)]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down(300)]: {
            fontSize: '0.75rem',
        },
    };

    theme.typography.subtitle1 = {
        fontSize: '1rem',
        fontWeight: 'normal',
        '@media (min-width:600px)': {
            fontSize: '2rem',
        },
        [theme.breakpoints.down(1024)]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down(800)]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down(450)]: {
            fontSize: '1rem',
        },
    };

    theme.typography.subtitle2 = {
        fontSize: '0.75rem',
        fontWeight: 'normal',
        '@media (min-width:600px)': {
            fontSize: '2rem',
        },
        [theme.breakpoints.down(1024)]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down(800)]: {
            fontSize: '0.75rem',
        },
        [theme.breakpoints.down(450)]: {
            fontSize: '0.5rem',
        },
        [theme.breakpoints.down(300)]: {
            fontSize: '0.4rem',
        },
    };

    return (
        <CookiesProvider>
            <ThemeProvider theme={theme}>
                <GuessASketch />
            </ThemeProvider>
        </CookiesProvider>
    );
}

export default App;
