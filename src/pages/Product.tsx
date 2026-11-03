import { products } from "../data/posts";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <main className="min-h-screen bg-orange-50/40">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            Arsora Art Supplies
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Semua Produk
          </h1>

          <p className="mt-3 text-gray-600">
            Temukan perlengkapan seni untuk mendukung kreativitasmu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Product;