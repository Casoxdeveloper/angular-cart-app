import { Product } from '../models/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Teclado mecanico Asus RGB',
    description: 'Algun teclado mecanico con luces RGB cherry red',
    price: 1000,
    image: 'assets/images/products/product1.jpg',
  },
  {
    id: 2,
    name: 'Samsung Smart TV LED 75',
    description: 'Algun LCD excelente OLED',
    price: 2000,
    image: 'assets/images/products/product2.jpg',
  },
  {
    id: 3,
    name: 'Sony Camara Video',
    description: 'alguna camara de video para streaming',
    price: 3100,
    image: 'assets/images/products/product3.jpg',
  },
  {
    id: 4,
    name: 'Corsair memorias ram 16 GB DDR5',
    description: 'Memoria ram optimizadas para video juegos',
    price: 1800,
    image: 'assets/images/products/product4.jpg',
  },
  {
    id: 5,
    name: 'Nvidia ASUS RTX4900',
    description:
      'Tarjeta de video NVidia optimizada para tareas multicore video juegos en 4k',
    price: 5000,
    image: 'assets/images/products/product5.jpg',
  },
  {
    id: 6,
    name: 'CPU Intel core i7',
    description: 'CPU optimizadas para tareas multicore',
    price: 4000,
    image: 'assets/images/products/product6.jpg',
  },
];
