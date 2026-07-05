import { Box, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ScrollToTop() {
  const phoneNumber = '9566015105';
  const message = 'Hello, I would like to know more about your products.';

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
      <Tooltip title="Chat on WhatsApp" placement="left">
        <IconButton
          onClick={openWhatsApp}
          sx={{
            width: 60,
            height: 60,
            backgroundColor: '#25D366',
            color: '#fff',
            borderRadius: '50%',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
            '&:hover': {
              backgroundColor: '#1ebe5d',
              transform: 'scale(1.1)',
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.7)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 34 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}