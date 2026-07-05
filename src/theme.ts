import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
      light: '#00e5ff',
      dark: '#0097a7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a237e',
      light: '#3949ab',
      dark: '#0d1452',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0e27',
      paper: '#11163d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
    success: { main: '#00e676' },
    warning: { main: '#ffab40' },
    error: { main: '#ff5252' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: '3.5rem', letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, fontSize: '2.75rem', letterSpacing: '-0.01em' },
    h3: { fontWeight: 600, fontSize: '2.25rem' },
    h4: { fontWeight: 600, fontSize: '1.75rem' },
    h5: { fontWeight: 500, fontSize: '1.5rem' },
    h6: { fontWeight: 500, fontSize: '1.25rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 28px',
          transition: 'all 0.3s ease',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'linear-gradient(145deg, #11163d 0%, #0a0e27 100%)',
          border: '1px solid rgba(0, 188, 212, 0.15)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
});
