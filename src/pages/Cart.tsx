import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "../data/posts";

type CartItem = Product & {
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("arsora-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Simpan setiap perubahan keranjang
  useEffect(() => {
    localStorage.setItem("arsora-cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-orange-50/40 px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Keranjang Belanja
          </h1>

          {cart.length > 0 && (
            <Button variant="outline" onClick={clearCart}>
              Kosongkan Keranjang
            </Button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">Keranjang kamu masih kosong.</p>
            <Button asChild className="mt-6 bg-orange-600 hover:bg-orange-700">
              <Link to="/product">Mulai Belanja</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-full rounded-xl object-cover sm:w-24"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-orange-600">
                    Rp{item.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={item.quantity <= 1}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </Button>

                  <span className="min-w-6 text-center">{item.quantity}</span>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>

                <p className="font-semibold text-gray-900 sm:w-32 sm:text-right">
                  Rp{(item.price * item.quantity).toLocaleString("id-ID")}
                </p>

                <Button variant="outline" onClick={() => removeItem(item.id)}>
                  Hapus
                </Button>
              </article>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-col items-end gap-4 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-lg font-semibold text-gray-900">
            Total: Rp{total.toLocaleString("id-ID")}
          </p>

          <Button
            disabled={cart.length === 0}
            className="bg-orange-600 hover:bg-orange-700"
          >
            Checkout
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Cart;