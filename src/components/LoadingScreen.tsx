import { Box, Typography, CircularProgress } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #11163d 50%, #0a0e27 100%)',
        transition: 'opacity 0.5s ease',
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          size={80}
          sx={{
            color: '#00bcd4',
            '& .MuiCircularProgress-circle': { strokeWidth: 4 },
          }}
        />
        <Box
          component="img"
          src="/logo-transparent.png"
          alt="Skintech"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 40,
            width: 'auto',
            opacity: 0.9,
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          mt: 3,
          color: '#00e5ff',
          fontWeight: 600,
          letterSpacing: '0.1em',
          animation: 'fadeInUp 1s ease infinite alternate',
        }}
      >
        SKINTECH
      </Typography>
    </Box>
  );
}
