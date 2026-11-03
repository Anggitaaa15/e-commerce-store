export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Pensil Sketsa 2B",
    price: 15000,
    category: "Pensil",
    description:
      "Pensil sketsa 2B dengan tekstur lembut, cocok untuk menggambar dan membuat arsiran.",
    image: "https://i.pinimg.com/1200x/5f/6c/12/5f6c129b3aa8076e6eff0eb71bfa7488.jpg",
  },
  {
    id: 2,
    name: "Buku Sketsa A4",
    price: 35000,
    category: "Kertas",
    description:
      "Buku sketsa ukuran A4 dengan kertas tebal untuk menggambar menggunakan pensil maupun charcoal.",
    image: "https://i.pinimg.com/736x/c2/90/01/c290012dafb5c18976e390ba60c50a4e.jpg",
  },
  {
    id: 3,
    name: "Cat Air 24 Warna",
    price: 85000,
    category: "Cat",
    description:
      "Set cat air dengan 24 pilihan warna yang mudah dicampur untuk menghasilkan berbagai gradasi.",
    image: "https://i.pinimg.com/736x/81/48/da/8148da6e3f8de8f89b38d378bb53a814.jpg",
  },
  {
    id: 4,
    name: "Kuas Lukis Set 6",
    price: 45000,
    category: "Kuas",
    description:
      "Set enam kuas lukis dengan berbagai ukuran untuk menghasilkan detail dan sapuan warna yang beragam.",
    image: "https://i.pinimg.com/1200x/e4/be/64/e4be64d9a57413839b0307f72023f180.jpg",
  },
  {
    id: 5,
    name: "Cat Akrilik 12 Warna",
    price: 65000,
    category: "Cat",
    description:
      "Cat akrilik dengan 12 pilihan warna cerah yang cocok digunakan pada kanvas dan berbagai media lainnya.",
    image: "https://i.pinimg.com/1200x/ea/05/f2/ea05f29bd97a30d686acf2fb0870b34a.jpg",
  },
  {
    id: 6,
    name: "Kanvas Lukis 30x40 cm",
    price: 55000,
    category: "Kanvas",
    description:
      "Kanvas lukis berukuran 30x40 cm dengan permukaan yang cocok untuk cat akrilik maupun cat minyak.",
    image: "https://i.pinimg.com/736x/ee/74/52/ee7452a431f99fba69aa31b1e10d5688.jpg",
  },
  {
    id: 7,
    name: "Palet Cat Lukis",
    price: 20000,
    category: "Aksesori",
    description:
      "Palet lukis berbahan plastik yang ringan dan mudah dibersihkan untuk mencampur berbagai warna cat.",
    image: "https://i.pinimg.com/1200x/89/6f/3a/896f3aa611564e62fea8c45ddf74f960.jpg",
  },
  {
    id: 8,
    name: "Charcoal Drawing Set",
    price: 75000,
    category: "Pensil",
    description:
      "Set charcoal untuk menggambar dengan efek gelap, arsiran, dan gradasi yang cocok untuk seni potret.",
    image: "https://i.pinimg.com/736x/80/27/e0/8027e09acfde0e5c84b4ac91668ee0a4.jpg",
  },
];