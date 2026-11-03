import { Link } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../data/posts";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  product: Product;
};

type CartItem = Product & {
  quantity: number;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const savedCart = localStorage.getItem("arsora-cart");
    const cart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find((item) => item.id === product.id);

    let updatedCart: CartItem[];

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("arsora-cart", JSON.stringify(updatedCart));

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />
      </Link>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm text-gray-500">{product.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
        </div>

        <p className="text-lg font-bold text-amber-600">
          Rp{product.price.toLocaleString("id-ID")}
        </p>

        <div className="flex flex-col gap-2">
          <Button
            className="w-full rounded-full bg-orange-600 hover:bg-orange-700"
            onClick={addToCart}
          >
            {added ? "Ditambahkan!" : "Tambah ke Keranjang"}
          </Button>

          <Button asChild variant="outline" className="w-full rounded-full">
            <Link to={`/product/${product.id}`}>Lihat Produk</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}