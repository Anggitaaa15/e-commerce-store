import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "../data/posts";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Arsora Art Supplies
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Temukan Peralatan Seni untuk Kreasimu
            </h1>

            <p className="mt-5 text-gray-600">
              Lengkapi kebutuhan melukis dan menggambarmu dengan berbagai
              perlengkapan seni berkualitas.
            </p>

            <Button
              asChild
              className="mt-8 bg-orange-600 hover:bg-orange-700"
            >
              <Link to="/product">Belanja Sekarang</Link>
            </Button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&h=700&fit=crop"
            alt="Perlengkapan seni dan alat lukis"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Produk Pilihan */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Produk Pilihan
            </h2>

            <p className="mt-2 text-gray-600">
              Perlengkapan seni untuk menemani kreativitasmu.
            </p>
          </div>

          <Button asChild variant="outline">
            <Link to="/product">Lihat Semua</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;