import { Box, Container, Grid, Typography, IconButton, Link as MuiLink, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Machines', path: '/machines' },
  { label: 'Serums', path: '/serums' },
  { label: 'Creams', path: '/creams' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  {
    icon: FacebookIcon,
    url: "https://www.facebook.com/profile.php?id=61591114907620",
  },
  {
    icon: InstagramIcon,
    url: "https://www.instagram.com/skintechmedicare?igsh=Yzh6bmdoZGRlNWc=",
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0a0e27 0%, #050818 100%)',
        borderTop: '1px solid rgba(0, 188, 212, 0.2)',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box component="img" src="/logo-transparent.png" alt="Skintech" sx={{ height: 56, mb: 2 }} />
            <Typography variant="body2" sx={{ color: '#b0bec5', lineHeight: 1.7, maxWidth: 320 }}>
              Premium skin treatment machines, serums, and creams for professional clinics and med spas. Elevate your practice with cutting-edge technology.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 3 }}>
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <IconButton
                    key={index}
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#00bcd4',
                      border: '1px solid rgba(0, 188, 212, 0.3)',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00bcd4, #1a237e)',
                        color: '#fff',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 20px rgba(0, 188, 212, 0.4)',
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 2, fontSize: '1.1rem' }}>
              Quick Links
            </Typography>
            {quickLinks.map((link) => (
              <MuiLink
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  display: 'block',
                  color: '#b0bec5',
                  textDecoration: 'none',
                  py: 0.75,
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { color: '#00e5ff', transform: 'translateX(8px)' },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 2, fontSize: '1.1rem' }}>
              Products
            </Typography>
            {['RF Skin Tightening', 'Laser Resurfacing', 'Hydradermabrasion', 'Cryolipolysis', 'Vitamin C Serums', 'Night Repair Creams'].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: '#b0bec5',
                  py: 0.75,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': { color: '#00e5ff', transform: 'translateX(8px)' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ color: '#00e5ff', mb: 2, fontSize: '1.1rem' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <LocationOnIcon sx={{ color: '#00bcd4' }} />
              <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                123 Innovation Drive, Suite 500<br />New York, NY 10001
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <PhoneIcon sx={{ color: '#00bcd4' }} />
              <MuiLink href="tel:+18005551234" sx={{ color: '#b0bec5', textDecoration: 'none', '&:hover': { color: '#00e5ff' } }}>
                +1 (800) 555-1234
              </MuiLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EmailIcon sx={{ color: '#00bcd4' }} />
              <MuiLink href="mailto:info@skintech.com" sx={{ color: '#b0bec5', textDecoration: 'none', '&:hover': { color: '#00e5ff' } }}>
                info@skintech.com
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(0, 188, 212, 0.15)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#78909c' }}>
            © {new Date().getFullYear()} Skintech. All rights reserved. | Crafted with precision for premium skincare.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
