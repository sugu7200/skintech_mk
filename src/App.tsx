import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Machines from './pages/Machines';
import Serums from './pages/Serums';
import Creams from './pages/Creams';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && <LoadingScreen />}
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0a0e27' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, mt: { xs: 7, md: 8 } }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/machines" element={<Machines />} />
              <Route path="/serums" element={<Serums />} />
              <Route path="/creams" element={<Creams />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
          <ScrollToTop />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
