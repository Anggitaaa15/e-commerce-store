import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/posts";
import { Button } from "@/components/ui/button";

type CartItem = (typeof products)[number] & {
  quantity: number;
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    if (!product) return;

    const savedCart = localStorage.getItem("arsora-cart");
    const cart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
    const existingItem = cart.find((item) => item.id === product.id);

    const updatedCart = existingItem
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("arsora-cart", JSON.stringify(updatedCart));
    setAdded(true);
  };

  if (!product) {
    return (
      <main className="min-h-screen bg-orange-50/40 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Produk tidak ditemukan
          </h1>
          <Button asChild className="mt-6 bg-orange-600 hover:bg-orange-700">
            <Link to="/product">Kembali ke Produk</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50/40 px-6 py-10">
      <section className="mx-auto grid max-w-6xl items-center gap-8 rounded-2xl border bg-white p-6 md:grid-cols-2 md:p-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full rounded-xl object-cover md:h-96"
        />

        <div>
          <p className="text-sm text-gray-500">{product.category}</p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-bold text-orange-600">
            Rp{product.price.toLocaleString("id-ID")}
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={addToCart}
              className="bg-orange-600 hover:bg-orange-700"
            >
              {added ? "Ditambahkan!" : "Tambah ke Keranjang"}
            </Button>

            <Button asChild variant="outline">
              <Link to="/product">Kembali</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;