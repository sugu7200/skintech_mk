import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <Box sx={{ textAlign: align, mb: 6, maxWidth: align === 'center' ? 700 : 'none', mx: align === 'center' ? 'auto' : 0 }}>
      {eyebrow && (
        <Typography
          sx={{
            color: '#00e5ff',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            mb: 1.5,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          background: 'linear-gradient(135deg, #ffffff 0%, #00e5ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ color: '#b0bec5', fontSize: '1.1rem', lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
      )}
      <Box
        sx={{
          width: align === 'center' ? 80 : 60,
          height: 4,
          mx: align === 'center' ? 'auto' : 0,
          mt: 2,
          borderRadius: 2,
          background: 'linear-gradient(90deg, #00bcd4, #00e5ff)',
        }}
      />
    </Box>
  );
}
