import { Box, Container, Grid, Typography, CardMedia, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { galleryImages } from '../data/products';

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Box>
      <Box sx={{ position: 'relative', py: { xs: 10, md: 14 }, textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #0a0e27 0%, #11163d 50%, #0a0e27 100%)' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(0,188,212,0.15), transparent 60%)' }} />
        <Container sx={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography sx={{ color: '#00e5ff', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 }}>VISUAL SHOWCASE</Typography>
            <Typography variant="h1" sx={{ color: '#fff', fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #00bcd4, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gallery</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#b0bec5', maxWidth: 700, mx: 'auto', fontSize: '1.15rem' }}>
              Explore our state-of-the-art treatment environments, advanced equipment, and professional care in action.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {galleryImages.map((img, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                >
                  <Box
                    onClick={() => setSelected(img.src)}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 3,
                      cursor: 'pointer',
                      '&:hover .overlay': { opacity: 1 },
                      '&:hover img': { transform: 'scale(1.1)' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={img.src}
                      alt={img.title}
                      sx={{ aspectRatio: '4 / 3', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 3,
                        background: 'linear-gradient(to top, rgba(10,14,39,0.95), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Typography sx={{ color: '#00e5ff', fontWeight: 700 }}>{img.title}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Modal open={!!selected} onClose={() => setSelected(null)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Box sx={{ position: 'relative', maxWidth: 900, width: '100%' }}>
          <IconButton
            onClick={() => setSelected(null)}
            sx={{ position: 'absolute', top: -50, right: 0, color: '#00e5ff' }}
          >
            <CloseIcon sx={{ fontSize: 36 }} />
          </IconButton>
          <Box
            component="img"
            src={selected || ''}
            alt="Enlarged"
            sx={{ width: '100%', borderRadius: 3, maxHeight: '80vh', objectFit: 'contain' }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
