import type { Product } from '../lib/types';

export const products: Product[] = [
  {
    id: 'p-001',
    slug: 'sofa-modular-nova',
    name: 'Sofá Modular Nova',
    category: 'Muebles',
    price: 499.9,
    description: 'Sofá de 3 cuerpos con tela antimanchas y estructura reforzada.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    stock: 9,
    rating: 4.8
  },
  {
    id: 'p-002',
    slug: 'mesa-centro-orbit',
    name: 'Mesa de Centro Orbit',
    category: 'Muebles',
    price: 139.5,
    description: 'Mesa de centro redonda con acabado mate y borde de roble.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80',
    stock: 20,
    rating: 4.6
  },
  {
    id: 'p-003',
    slug: 'lampara-colgante-zen',
    name: 'Lámpara Colgante Zen',
    category: 'Iluminación',
    price: 84.0,
    description: 'Pantalla de lino natural con luz cálida para comedor o sala.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
    stock: 15,
    rating: 4.4
  },
  {
    id: 'p-004',
    slug: 'aplique-muro-luma',
    name: 'Aplique Muro Luma',
    category: 'Iluminación',
    price: 42.3,
    description: 'Aplique minimalista con brazo articulado y acabado negro.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    stock: 30,
    rating: 4.2
  },
  {
    id: 'p-005',
    slug: 'alfombra-nordic-cream',
    name: 'Alfombra Nordic Cream',
    category: 'Textiles',
    price: 119.9,
    description: 'Alfombra suave de alto tránsito con patrón geométrico neutro.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
    stock: 12,
    rating: 4.7
  },
  {
    id: 'p-006',
    slug: 'set-cojines-terra',
    name: 'Set Cojines Terra',
    category: 'Textiles',
    price: 35.0,
    description: 'Pack x2 cojines decorativos en tonos tierra y funda lavable.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    stock: 40,
    rating: 4.3
  },
  {
    id: 'p-007',
    slug: 'espejo-arco-luna',
    name: 'Espejo Arco Luna',
    category: 'Decoración',
    price: 97.0,
    description: 'Espejo vertical con marco delgado para ampliar visualmente espacios.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80',
    stock: 14,
    rating: 4.5
  },
  {
    id: 'p-008',
    slug: 'jarron-ceramica-atelier',
    name: 'Jarrón Cerámica Atelier',
    category: 'Decoración',
    price: 28.9,
    description: 'Pieza artesanal en cerámica mate ideal para flores secas.',
    image: 'https://images.unsplash.com/photo-1578500351865-ff9b4bd6f6dc?auto=format&fit=crop&w=900&q=80',
    stock: 33,
    rating: 4.1
  },
  {
    id: 'p-009',
    slug: 'silla-exterior-santorini',
    name: 'Silla Exterior Santorini',
    category: 'Exterior',
    price: 76.4,
    description: 'Silla apilable resistente al clima, ideal para terrazas.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    stock: 22,
    rating: 4.4
  },
  {
    id: 'p-010',
    slug: 'macetero-terrazo-max',
    name: 'Macetero Terrazo Max',
    category: 'Exterior',
    price: 52.2,
    description: 'Macetero de gran formato en acabado terrazo para interior/exterior.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
    stock: 17,
    rating: 4.2
  },
  {
    id: 'p-011',
    slug: 'mesa-comedor-curve',
    name: 'Mesa Comedor Curve',
    category: 'Muebles',
    price: 599.0,
    description: 'Mesa de comedor para 6 personas con base escultural.',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
    stock: 6,
    rating: 4.9
  },
  {
    id: 'p-012',
    slug: 'lampara-pie-aurora',
    name: 'Lámpara de Pie Aurora',
    category: 'Iluminación',
    price: 132.0,
    description: 'Lámpara de pie con difusor opal y 3 niveles de intensidad.',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=900&q=80',
    stock: 11,
    rating: 4.6
  }
];

export const categories = ['Todas', ...new Set(products.map((product) => product.category))] as const;
