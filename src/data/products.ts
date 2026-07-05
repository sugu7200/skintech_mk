import machine1 from '../../public/assets/machine1.jpeg';
import machine2 from '../../public/assets/machine2.jpeg';
import machine3 from '../../public/assets/machine3.jpeg';
import machine4 from '../../public/assets/machine4.jpeg';
import machine5 from '../../public/assets/machine5.jpeg';
import machine6 from '../../public/assets/machine6.jpeg';
import machine7 from '../../public/assets/machine7.jpeg';
import machine8 from '../../public/assets/machine8.jpeg';

export interface Product {
  id: number;
  name: string;
  category: 'machine' | 'serum' | 'cream';
  description: string;
  longDescription: string;
  price: string;
  image: string;
  features: string[];
  rating: number;
}

export const machines: Product[] = [
  {
    id: 1,
    name: 'DiamondGlow RF System',
    category: 'machine',
    description: 'Advanced radio-frequency skin tightening with diamond-tip microdermabrasion.',
    longDescription: 'The DiamondGlow RF System combines multi-polar radio frequency with diamond-tip exfoliation for comprehensive skin rejuvenation, collagen stimulation, and visible tightening.',
    price: '$4,999',
    image: machine1,
    features: ['Radio Frequency', 'Diamond-Tip Exfoliation', 'LED Therapy', 'Vacuum Suction'],
    rating: 5,
  },
  {
    id: 2,
    name: 'LuminaLaser Pro',
    category: 'machine',
    description: 'Fractional CO2 laser for precision resurfacing and scar reduction.',
    longDescription: 'LuminaLaser Pro delivers fractional CO2 laser energy to targeted areas, stimulating collagen production while minimizing downtime for acne scars, wrinkles, and pigmentation.',
    price: '$8,499',
    image: machine2,
    features: ['Fractional CO2', 'Scar Reduction', 'Pigmentation Control', 'Precision Targeting'],
    rating: 5,
  },
  {
    id: 3,
    name: 'HydraDerm Infusion',
    category: 'machine',
    description: '3-in-1 hydradermabrasion system for deep cleansing and hydration.',
    longDescription: 'HydraDerm Infusion performs cleansing, exfoliation, and hydration in one seamless treatment, delivering serums deep into pores while removing impurities.',
    price: '$3,299',
    image: machine3,
    features: ['Hydradermabrasion', 'Deep Cleansing', 'Serum Infusion', 'Pore Extraction'],
    rating: 4,
  },
  {
    id: 4,
    name: 'CryoCool Sculptor',
    category: 'machine',
    description: 'Cryolipolysis body contouring for non-invasive fat reduction.',
    longDescription: 'CryoCool Sculptor uses controlled cooling to target and eliminate fat cells without surgery, providing safe and effective body contouring results.',
    price: '$6,799',
    image: machine4,
    features: ['Cryolipolysis', 'Fat Reduction', 'Body Contouring', 'Non-Invasive'],
    rating: 5,
  },
  {
    id: 5,
    name: 'PlasmaPen Elite',
    category: 'machine',
    description: 'Non-surgical plasma fibroblast treatment for skin lifting.',
    longDescription: 'PlasmaPen Elite delivers targeted plasma energy to stimulate fibroblast activity, providing non-surgical skin tightening and lifting for delicate areas.',
    price: '$5,499',
    image: machine5,
    features: ['Plasma Fibroblast', 'Skin Lifting', 'Non-Surgical', 'Precision Control'],
    rating: 4,
  },
  {
    id: 6,
    name: 'UltrasoundLift MX',
    category: 'machine',
    description: 'HIFU ultrasound lifting for non-invasive face and neck tightening.',
    longDescription: 'UltrasoundLift MX uses High-Intensity Focused Ultrasound to target deep skin layers, stimulating collagen for natural lifting and tightening over weeks.',
    price: '$7,299',
    image: machine6,
    features: ['HIFU Technology', 'Deep Lifting', 'Collagen Boost', 'No Downtime'],
    rating: 5,
  },
  {
    id: 7,
    name: 'UltrasoundLift MX',
    category: 'machine',
    description: 'HIFU ultrasound lifting for non-invasive face and neck tightening.',
    longDescription: 'UltrasoundLift MX uses High-Intensity Focused Ultrasound to target deep skin layers, stimulating collagen for natural lifting and tightening over weeks.',
    price: '$7,299',
    image: machine7,
    features: ['HIFU Technology', 'Deep Lifting', 'Collagen Boost', 'No Downtime'],
    rating: 5,
  },
  {
    id: 8,
    name: 'UltrasoundLift MX',
    category: 'machine',
    description: 'HIFU ultrasound lifting for non-invasive face and neck tightening.',
    longDescription: 'UltrasoundLift MX uses High-Intensity Focused Ultrasound to target deep skin layers, stimulating collagen for natural lifting and tightening over weeks.',
    price: '$7,299',
    image: machine8,
    features: ['HIFU Technology', 'Deep Lifting', 'Collagen Boost', 'No Downtime'],
    rating: 5,
  },
];

export const serums: Product[] = [
  {
    id: 7,
    name: 'Vitamin C Brightening Serum',
    category: 'serum',
    description: '20% L-ascorbic acid serum for radiant, even-toned skin.',
    longDescription: 'Our Vitamin C Brightening Serum delivers 20% stabilized L-ascorbic acid to brighten skin, fade dark spots, and protect against environmental damage.',
    price: '$89',
    image: 'https://i.pinimg.com/736x/8e/b2/b5/8eb2b54d40ce884b93bad152d0ada9af.jpg',
    features: ['20% Vitamin C', 'Brightening', 'Antioxidant', 'Even Tone'],
    rating: 5,
  },
  {
    id: 8,
    name: 'Hyaluronic Hydration Serum',
    category: 'serum',
    description: 'Multi-weight hyaluronic acid for deep, lasting hydration.',
    longDescription: 'Hyaluronic Hydration Serum combines three molecular weights of hyaluronic acid to plump and hydrate skin at every layer for a dewy, smooth finish.',
    price: '$65',
    image: 'https://images.pexels.com/photos/3737599/pexels-photo-3737599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Multi-Weight HA', 'Deep Hydration', 'Plumping', 'Smooth Finish'],
    rating: 5,
  },
  {
    id: 9,
    name: 'Retinol Renewal Serum',
    category: 'serum',
    description: 'Encapsulated retinol for anti-aging and skin renewal.',
    longDescription: 'Retinol Renewal Serum uses encapsulation technology to deliver retinol gradually, minimizing irritation while maximizing anti-aging benefits.',
    price: '$95',
    image: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Encapsulated Retinol', 'Anti-Aging', 'Cell Renewal', 'Gentle Formula'],
    rating: 4,
  },
  {
    id: 10,
    name: 'Niacinamide Pore Refiner',
    category: 'serum',
    description: '10% niacinamide for pore refinement and oil control.',
    longDescription: 'Niacinamide Pore Refiner visibly reduces pore size, controls excess oil, and strengthens the skin barrier with a high-potency 10% formula.',
    price: '$55',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['10% Niacinamide', 'Pore Refining', 'Oil Control', 'Barrier Support'],
    rating: 5,
  },
  {
    id: 11,
    name: 'Peptide Repair Serum',
    category: 'serum',
    description: 'Multi-peptide complex for firming and repair.',
    longDescription: 'Peptide Repair Serum blends six peptides to firm skin, smooth fine lines, and support natural collagen production for a youthful appearance.',
    price: '$110',
    image: 'https://images.pexels.com/photos/4203094/pexels-photo-4203094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['6 Peptides', 'Firming', 'Collagen Support', 'Fine Line Reduction'],
    rating: 5,
  },
  {
    id: 12,
    name: 'Growth Factor Serum',
    category: 'serum',
    description: 'Stem-cell derived growth factors for advanced rejuvenation.',
    longDescription: 'Growth Factor Serum harnesses stem-cell derived growth factors to accelerate skin repair, boost regeneration, and restore a youthful glow.',
    price: '$145',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Growth Factors', 'Cell Repair', 'Regeneration', 'Youthful Glow'],
    rating: 5,
  },
];

export const creams: Product[] = [
  {
    id: 13,
    name: 'Night Repair Cream',
    category: 'cream',
    description: 'Rich overnight cream with peptides and ceramides.',
    longDescription: 'Night Repair Cream works while you sleep, delivering peptides and ceramides to restore moisture, strengthen the barrier, and reveal smoother skin by morning.',
    price: '$120',
    image: 'https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Peptides', 'Ceramides', 'Overnight Repair', 'Deep Moisture'],
    rating: 5,
  },
  {
    id: 14,
    name: 'SPF 50 Defense Cream',
    category: 'cream',
    description: 'Broad-spectrum SPF 50 with antioxidant protection.',
    longDescription: 'SPF 50 Defense Cream provides broad-spectrum UV protection with added antioxidants to shield skin from environmental stressors and prevent premature aging.',
    price: '$75',
    image: 'https://images.pexels.com/photos/5938568/pexels-photo-5938568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['SPF 50', 'Broad Spectrum', 'Antioxidant', 'Anti-Aging'],
    rating: 5,
  },
  {
    id: 15,
    name: 'Collagen Boost Cream',
    category: 'cream',
    description: 'Hydrolyzed collagen cream for plumping and firming.',
    longDescription: 'Collagen Boost Cream delivers hydrolyzed collagen and supporting nutrients to plump fine lines, improve elasticity, and restore firm, youthful skin.',
    price: '$95',
    image: 'https://images.pexels.com/photos/4203098/pexels-photo-4203098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Hydrolyzed Collagen', 'Plumping', 'Firming', 'Elasticity'],
    rating: 4,
  },
  {
    id: 16,
    name: 'Soothing Aloe Cream',
    category: 'cream',
    description: 'Calming aloe and chamomile for sensitive skin.',
    longDescription: 'Soothing Aloe Cream combines aloe vera and chamomile to calm redness, soothe irritation, and provide lightweight hydration for sensitive skin types.',
    price: '$45',
    image: 'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Aloe Vera', 'Chamomile', 'Calming', 'Lightweight'],
    rating: 4,
  },
  {
    id: 17,
    name: 'Eye Contour Cream',
    category: 'cream',
    description: 'Targeted eye cream for dark circles and puffiness.',
    longDescription: 'Eye Contour Cream targets dark circles, puffiness, and fine lines with caffeine, peptides, and vitamin K for a refreshed, bright eye area.',
    price: '$85',
    image: 'https://images.pexels.com/photos/4203093/pexels-photo-4203093.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Caffeine', 'Peptides', 'Vitamin K', 'Dark Circles'],
    rating: 5,
  },
  {
    id: 18,
    name: 'Retinol Night Cream',
    category: 'cream',
    description: 'Time-release retinol cream for overnight renewal.',
    longDescription: 'Retinol Night Cream uses time-release technology to deliver retinol gradually overnight, reducing wrinkles and improving texture with minimal irritation.',
    price: '$105',
    image: 'https://images.pexels.com/photos/4203095/pexels-photo-4203095.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    features: ['Time-Release Retinol', 'Overnight Renewal', 'Wrinkle Reduction', 'Texture Improvement'],
    rating: 5,
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Clinical Treatment Room' },
  { src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Advanced Equipment' },
  { src: 'https://images.pexels.com/photos/3998013/pexels-photo-3998013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Skin Analysis' },
  { src: 'https://images.pexels.com/photos/3998025/pexels-photo-3998025.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Treatment Session' },
  { src: 'https://images.pexels.com/photos/3998045/pexels-photo-3998045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Professional Care' },
  { src: 'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Laser Therapy' },
  { src: 'https://images.pexels.com/photos/4046317/pexels-photo-4046317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Facial Treatment' },
  { src: 'https://images.pexels.com/photos/4046318/pexels-photo-4046318.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Skincare Products' },
  { src: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', title: 'Spa Environment' },
];

export const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Dermatologist, NYC',
    text: 'The DiamondGlow RF System has transformed my practice. Patient satisfaction has skyrocketed with visible results after just one session.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    name: 'James Anderson',
    role: 'Clinic Owner, LA',
    text: 'Skintech machines are built to last. The ROI on the HydraDerm Infusion paid for itself in three months. Exceptional quality.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    name: 'Emily Chen',
    role: 'Esthetician, SF',
    text: 'The serums pair perfectly with the machines. My clients see faster, longer-lasting results. The Vitamin C serum is a game-changer.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    name: 'Michael Roberts',
    role: 'Med Spa Director, Miami',
    text: 'Premium quality across the board. The LuminaLaser Pro delivers consistent results and the support team is outstanding.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/5214951/pexels-photo-5214951.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];
