import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { serums } from '../data/products';

export default function Serums() {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0a0e27 0%, #11163d 50%, #0a0e27 100%)',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(0,188,212,0.15), transparent 60%)' }} />
        <Container sx={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography sx={{ color: '#00e5ff', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 }}>
              TARGETED FORMULAS
            </Typography>
            <Typography variant="h1" sx={{ color: '#fff', fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Premium <Box component="span" sx={{ background: 'linear-gradient(135deg, #00bcd4, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Serums</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#b0bec5', maxWidth: 700, mx: 'auto', fontSize: '1.15rem' }}>
              Clinically formulated serums with active ingredients designed to deliver visible, lasting results.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {serums.map((s, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.id}>
                <ProductCard product={s} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
