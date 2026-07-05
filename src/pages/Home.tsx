import { Box, Container, Grid, Typography, Button, Card, CardMedia, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VerifiedIcon from '@mui/icons-material/Verified';
import ScienceIcon from '@mui/icons-material/Science';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { machines, serums, creams, galleryImages, testimonials } from '../data/products';

const whyChooseUs = [
  { icon: VerifiedIcon, title: 'FDA Certified', desc: 'All machines meet the highest safety and quality standards.' },
  { icon: ScienceIcon, title: 'Clinically Proven', desc: 'Backed by dermatological research and clinical trials.' },
  { icon: SupportAgentIcon, title: 'Expert Support', desc: '24/7 technical support and training for every purchase.' },
  { icon: EmojiEventsIcon, title: 'Premium Quality', desc: 'Industry-leading machines trusted by top clinics worldwide.' },
  { icon: LocalShippingIcon, title: 'Global Shipping', desc: 'Fast, insured delivery to clinics across the globe.' },
  { icon: StarIcon, title: '5-Star Rated', desc: 'Trusted by thousands of professionals and satisfied clients.' },
];

export default function Home() {
  return (
    <Box>
      {/* Hero with background video */}
      <Box sx={{ position: 'relative', height: '100vh', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Box component="video" autoPlay muted loop playsInline sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src="/videos/background.mp4" type="video/mp4" />
        </Box>
        <Box className="hero-overlay" sx={{ position: 'absolute', inset: 0, zIndex: 1 }} />

        <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h1" sx={{ color: '#fff', fontSize: { xs: '2.5rem', md: '4.5rem' }, fontWeight: 800, lineHeight: 1.1, mb: 2, textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}>
              Welcome to Innovative<br />
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #00bcd4, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Medical Aesthetics solutions</Box>
            </Typography>
            <Typography variant="h5" sx={{ color: '#e0f7fa', maxWidth: 700, mx: 'auto', mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
              Professional-grade machines trusted by leading dermatologists and med spas worldwide.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" size="large" component={Link} to="/machines" endIcon={<ArrowForwardIcon />}>Explore Machines</Button>
              <Button variant="outlined" size="large" component={Link} to="/contact" startIcon={<PlayArrowIcon />} sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', '&:hover': { borderColor: '#00e5ff', background: 'rgba(0,188,212,0.1)' } }}>Request Demo</Button>
            </Box>
          </motion.div>
        </Container>

        <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 2, color: '#00e5ff', animation: 'float 2s ease-in-out infinite' }}>
          <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.2em', mb: 1 }}>SCROLL</Typography>
          <Box sx={{ width: 2, height: 40, mx: 'auto', background: 'linear-gradient(to bottom, #00e5ff, transparent)', borderRadius: 2 }} />
        </Box>
      </Box>

      {/* Featured Machines */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Our Machines" title="Featured Skin Treatment Machines" subtitle="Cutting-edge technology for professional-grade skin rejuvenation, tightening, and contouring." />
          <Grid container spacing={4}>
            {machines.slice(0, 3).map((m, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={m.id}>
                <ProductCard product={m} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="outlined" size="large" component={Link} to="/machines" endIcon={<ArrowForwardIcon />}>View All Machines</Button>
          </Box>
        </Container>
      </Box>

      {/* Serums Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(180deg, #0a0e27 0%, #11163d 100%)' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Targeted Treatments" title="Premium Serums" subtitle="Clinically formulated serums designed to complement our machines and deliver visible results." />
          <Grid container spacing={4}>
            {serums.slice(0, 3).map((s, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.id}>
                <ProductCard product={s} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="outlined" size="large" component={Link} to="/serums" endIcon={<ArrowForwardIcon />}>View All Serums</Button>
          </Box>
        </Container>
      </Box>

      {/* Creams Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Daily Care" title="Luxury Creams" subtitle="Rich, nourishing creams for day and night to maintain and enhance treatment results." />
          <Grid container spacing={4}>
            {creams.slice(0, 3).map((c, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={c.id}>
                <ProductCard product={c} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="outlined" size="large" component={Link} to="/creams" endIcon={<ArrowForwardIcon />}>View All Creams</Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(180deg, #0a0e27 0%, #11163d 100%)' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Why Skintech" title="Why Choose Us" subtitle="We deliver excellence through innovation, quality, and unwavering commitment to results." />
          <Grid container spacing={4}>
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Card sx={{ height: '100%', p: 4, textAlign: 'center', '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(0, 188, 212, 0.5)', boxShadow: '0 16px 50px rgba(0, 188, 212, 0.2)' } }}>
                      <Box sx={{ width: 70, height: 70, mx: 'auto', mb: 2, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(0,188,212,0.2), rgba(26,35,126,0.2))', border: '1px solid rgba(0, 188, 212, 0.3)' }}>
                        <Icon sx={{ fontSize: 36, color: '#00e5ff' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#b0bec5', lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Gallery Preview */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Our Work" title="Gallery" subtitle="A glimpse into our state-of-the-art treatment environments and results." />
          <Grid container spacing={2}>
            {galleryImages.slice(0, 6).map((img, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, cursor: 'pointer', '&:hover .overlay': { opacity: 1 }, '&:hover img': { transform: 'scale(1.1)' } }}>
                    <CardMedia component="img" image={img.src} alt={img.title} sx={{ aspectRatio: '4 / 3', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <Box className="overlay" sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', p: 3, background: 'linear-gradient(to top, rgba(10,14,39,0.95), transparent)', opacity: 0, transition: 'opacity 0.3s ease' }}>
                      <Typography sx={{ color: '#00e5ff', fontWeight: 700 }}>{img.title}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button variant="outlined" size="large" component={Link} to="/gallery" endIcon={<ArrowForwardIcon />}>View Full Gallery</Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(180deg, #0a0e27 0%, #11163d 100%)' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Testimonials" title="What Professionals Say" subtitle="Trusted by dermatologists, estheticians, and clinic owners around the world." />
          <Grid container spacing={4}>
            {testimonials.map((t, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Rating value={t.rating} readOnly sx={{ mb: 2, '& .MuiRating-iconFilled': { color: '#00e5ff' } }} />
                    <Typography variant="body2" sx={{ color: '#e0f7fa', mb: 3, flexGrow: 1, fontStyle: 'italic', lineHeight: 1.7 }}>"{t.text}"</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={t.avatar} sx={{ border: '2px solid #00bcd4' }} />
                      <Box>
                        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</Typography>
                        <Typography sx={{ color: '#00e5ff', fontSize: '0.8rem' }}>{t.role}</Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27', position: 'relative' }}>
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card sx={{ p: { xs: 4, md: 8 }, textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,188,212,0.15) 0%, rgba(26,35,126,0.3) 100%)', border: '1px solid rgba(0, 188, 212, 0.3)', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,188,212,0.2), transparent)' }} />
              <Typography variant="h3" sx={{ color: '#fff', fontWeight: 800, mb: 2, position: 'relative' }}>Ready to Elevate Your Practice?</Typography>
              <Typography variant="body1" sx={{ color: '#b0bec5', mb: 4, fontSize: '1.15rem', position: 'relative' }}>Get in touch today for a personalized consultation, demo, or quote. Our team is ready to help you choose the right equipment.</Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Button variant="contained" color="primary" size="large" component={Link} to="/contact" endIcon={<ArrowForwardIcon />}>Contact Us</Button>
                <Button variant="outlined" size="large" component={Link} to="/machines">Browse Products</Button>
              </Box>
            </Card>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
