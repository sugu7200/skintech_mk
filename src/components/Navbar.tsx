import { AppBar, Toolbar, Container, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Machines', path: '/machines' },
  { label: 'Serums', path: '/serums' },
  { label: 'Creams', path: '/creams' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(10, 14, 39, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 188, 212, 0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <Box
                component="img"
                src="/logo-transparent.png"
                alt="Skintech"
                sx={{ height: { xs: 40, md: 48 }, width: 'auto' }}
              />
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: isActive(link.path) ? '#00e5ff' : '#ffffff',
                    fontWeight: isActive(link.path) ? 700 : 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: isActive(link.path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '60%',
                      height: 2,
                      background: 'linear-gradient(90deg, #00bcd4, #00e5ff)',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' },
                    '&:hover': { color: '#00e5ff' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/contact"
                sx={{ ml: 2 }}
              >
                Get a Quote
              </Button>
            </Box>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          slotProps={{
            paper: {
              sx: {
                width: 280,
                background: 'linear-gradient(180deg, #0a0e27 0%, #11163d 100%)',
                color: '#fff',
                pt: 3,
              },
            },
          }}
        >
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: '#00e5ff', position: 'absolute', top: 12, right: 12 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ textAlign: 'center', mb: 3, mt: 2 }}>
            <Box component="img" src="/logo-transparent.png" alt="Skintech" sx={{ height: 50 }} />
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.path}
                component={Link}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  color: isActive(link.path) ? '#00e5ff' : '#fff',
                  borderBottom: '1px solid rgba(0, 188, 212, 0.1)',
                  py: 2,
                  '&:hover': { background: 'rgba(0, 188, 212, 0.1)' },
                }}
              >
                <ListItemText primary={link.label} sx={{ fontWeight: 600 }} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}
