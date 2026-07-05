import { Box, Container, Grid, Typography, Card, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SectionTitle from '../components/SectionTitle';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '50K+', label: 'Treatments Delivered' },
  { value: '120+', label: 'Clinic Partners' },
  { value: '30+', label: 'Countries Served' },
];

const values = [
  { icon: VerifiedIcon, title: 'Quality First', desc: 'Every product is rigorously tested and certified to meet the highest industry standards.' },
  { icon: LightbulbIcon, title: 'Innovation', desc: 'We invest heavily in R&D to bring the latest advancements in skincare technology.' },
  { icon: FavoriteIcon, title: 'Client Care', desc: 'Our success is measured by the satisfaction and results of our clients and their patients.' },
  { icon: GroupsIcon, title: 'Partnership', desc: 'We build long-term relationships with clinics, offering training and ongoing support.' },
];

const team = [
  { name: 'Dr. Olivia Hart', role: 'Founder & CEO', avatar: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1' },
  { name: 'Dr. Marcus Lee', role: 'Chief Technology Officer', avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1' },
  { name: 'Sophia Reyes', role: 'Head of R&D', avatar: 'https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1' },
  { name: 'James Carter', role: 'Director of Operations', avatar: 'https://images.pexels.com/photos/5214951/pexels-photo-5214951.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1' },
];

export default function About() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{ position: 'relative', py: { xs: 10, md: 14 }, textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #0a0e27 0%, #11163d 50%, #0a0e27 100%)' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(0,188,212,0.15), transparent 60%)' }} />
        <Container sx={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography sx={{ color: '#00e5ff', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 }}>OUR STORY</Typography>
            <Typography variant="h1" sx={{ color: '#fff', fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              About <Box component="span" sx={{ background: 'linear-gradient(135deg, #00bcd4, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skintech</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#b0bec5', maxWidth: 700, mx: 'auto', fontSize: '1.15rem' }}>
              Pioneering the future of professional skincare with cutting-edge technology and clinically-proven formulations.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Story */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Our clinic"
                  sx={{ width: '100%', borderRadius: 4, aspectRatio: '4 / 3', objectFit: 'cover' }}
                />
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography sx={{ color: '#00e5ff', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.8rem', mb: 2 }}>WHO WE ARE</Typography>
                <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, mb: 3 }}>
                  A Decade of Innovation in Skincare
                </Typography>
                <Typography sx={{ color: '#b0bec5', lineHeight: 1.8, mb: 2 }}>
                  Founded in 2009, Skintech began with a simple mission: to bring professional-grade skin treatment technology to clinics worldwide. What started as a small team of dermatologists and engineers has grown into a global leader in aesthetic equipment.
                </Typography>
                <Typography sx={{ color: '#b0bec5', lineHeight: 1.8 }}>
                  Today, we serve over 120 clinics across 30 countries, offering a comprehensive range of machines, serums, and creams backed by rigorous research and clinical validation.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(180deg, #0a0e27 0%, #11163d 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((s, i) => (
              <Grid size={{ xs: 6, md: 3 }} key={i}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" sx={{ background: 'linear-gradient(135deg, #00bcd4, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, mb: 1 }}>
                      {s.value}
                    </Typography>
                    <Typography sx={{ color: '#b0bec5', fontSize: '0.95rem' }}>{s.label}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Our Principles" title="Core Values" subtitle="The principles that guide everything we do." />
          <Grid container spacing={4}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <Card sx={{ height: '100%', p: 3, textAlign: 'center', '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(0,188,212,0.5)' } }}>
                      <Box sx={{ width: 64, height: 64, mx: 'auto', mb: 2, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(0,188,212,0.2), rgba(26,35,126,0.2))', border: '1px solid rgba(0,188,212,0.3)' }}>
                        <Icon sx={{ fontSize: 32, color: '#00e5ff' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>{v.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#b0bec5', lineHeight: 1.6 }}>{v.desc}</Typography>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(180deg, #0a0e27 0%, #11163d 100%)' }}>
        <Container maxWidth="xl">
          <SectionTitle eyebrow="Leadership" title="Meet Our Team" subtitle="The experts behind Skintech's innovation and success." />
          <Grid container spacing={4}>
            {team.map((member, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card sx={{ height: '100%', p: 3, textAlign: 'center', '&:hover': { transform: 'translateY(-8px)', borderColor: 'rgba(0,188,212,0.5)' } }}>
                    <Avatar src={member.avatar} sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '3px solid #00bcd4' }} />
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>{member.name}</Typography>
                    <Typography sx={{ color: '#00e5ff', fontSize: '0.9rem', mb: 1 }}>{member.role}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: '#0a0e27', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>Partner With Us</Typography>
          <Typography sx={{ color: '#b0bec5', mb: 4, fontSize: '1.1rem' }}>Join hundreds of clinics worldwide who trust Skintech for their skincare technology needs.</Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/contact" endIcon={<ArrowForwardIcon />}>Get in Touch</Button>
        </Container>
      </Box>
    </Box>
  );
}
