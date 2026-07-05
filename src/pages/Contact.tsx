import { Box, Container, Grid, Typography, TextField, Button, Card } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const contactInfo = [
  { icon: LocationOnIcon, title: 'Visit Us', value: '123 Innovation Drive, Suite 500\nNew York, NY 10001' },
  { icon: PhoneIcon, title: 'Call Us', value: '+1 (800) 555-1234' },
  { icon: EmailIcon, title: 'Email Us', value: 'info@skintech.com' },
  { icon: AccessTimeIcon, title: 'Business Hours', value: 'Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Box>
      <Box sx={{ position: 'relative', py: { xs: 10, md: 14 }, textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #0a0e27 0%, #11163d 50%, #0a0e27 100%)' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(0,188,212,0.15), transparent 60%)' }} />
        <Container sx={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Typography sx={{ color: '#00e5ff', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 }}>GET IN TOUCH</Typography>
            <Typography variant="h1" sx={{ color: '#fff', fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Contact <Box component="span" sx={{ background: 'linear-gradient(135deg, #00bcd4, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Us</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#b0bec5', maxWidth: 700, mx: 'auto', fontSize: '1.15rem' }}>
              Have questions about our machines, serums, or creams? Reach out and our team will respond within 24 hours.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, background: '#0a0e27' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>Let's Talk</Typography>
                <Typography sx={{ color: '#b0bec5', mb: 4, lineHeight: 1.7 }}>
                  Whether you're looking for a demo, a quote, or product information, we're here to help you make the best choice for your practice.
                </Typography>
                <Grid container spacing={3}>
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <Grid size={{ xs: 12, sm: 6 }} key={i}>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                          <Box sx={{ width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(0,188,212,0.2), rgba(26,35,126,0.2))', border: '1px solid rgba(0,188,212,0.3)', flexShrink: 0 }}>
                            <Icon sx={{ color: '#00e5ff' }} />
                          </Box>
                          <Box>
                            <Typography sx={{ color: '#00e5ff', fontWeight: 700, fontSize: '0.9rem', mb: 0.5 }}>{info.title}</Typography>
                            <Typography sx={{ color: '#b0bec5', fontSize: '0.9rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{info.value}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Card sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 3 }}>Send Us a Message</Typography>
                  {submitted && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, p: 2, borderRadius: 2, background: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
                      <CheckCircleIcon sx={{ color: '#00e676' }} />
                      <Typography sx={{ color: '#00e676' }}>Thank you! Your message has been sent successfully.</Typography>
                    </Box>
                  )}
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth required label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} sx={inputSx} />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth required type="email" label="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} sx={inputSx} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField fullWidth label="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} sx={inputSx} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField fullWidth required multiline rows={4} label="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} sx={inputSx} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button type="submit" variant="contained" color="primary" size="large" fullWidth endIcon={<SendIcon />}>
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(0,188,212,0.2)' }}>
            <Box
              component="iframe"
              src="https://www.google.com/maps?q=13.0694122,80.1849136&z=17&output=embed"
              sx={{
                width: "100%",
                height: 400,
                border: 0,
                filter: "invert(0.9) hue-rotate(180deg)",
              }}
              loading="lazy"
              allowFullScreen
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

const inputSx = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': { borderColor: 'rgba(0, 188, 212, 0.3)' },
    '&:hover fieldset': { borderColor: '#00bcd4' },
    '&.Mui-focused fieldset': { borderColor: '#00e5ff' },
  },
  '& .MuiInputLabel-root': { color: '#b0bec5', '&.Mui-focused': { color: '#00e5ff' } },
};
