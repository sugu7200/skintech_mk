import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-12px)',
            borderColor: 'rgba(0, 188, 212, 0.5)',
            boxShadow: '0 20px 60px rgba(0, 188, 212, 0.25)',
          },
        }}
      >
<Box
  sx={{
    position: 'relative',
    overflow: 'hidden',
    '&:hover img': {
      transform: 'scale(1.08)',
    },
    '&:hover .overlay': {
      opacity: 1,
    },
  }}
>
  <CardMedia
    component="img"
    image={product.image}
    alt={product.name}
    sx={{
      width: '100%',
      aspectRatio: '4 / 4',
      objectFit: 'cover',
      transition: '0.5s',
    }}
  />

  <CardContent
    className="overlay"
    sx={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      p: 3,
      background:
        'linear-gradient(to top, rgba(0,0,0,.75), transparent)',
      opacity: 0,
      transition: '0.4s ease',
    }}
  >
    <Typography
      variant="h6"
      sx={{ color: '#fff', fontWeight: 700, mb: 2 }}
    >
      {product.name}
    </Typography>

    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      sx={{
        background: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,.3)',
        color: '#fff',
      }}
    >
      View Details
    </Button>
  </CardContent>
</Box>

      </Card>
    </motion.div>
  );
}
