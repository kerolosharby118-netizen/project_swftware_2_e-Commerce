import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';

const Home = () => {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#faf8f4] to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#c4714a]/10 text-[#c4714a] text-xs font-semibold tracking-wide mb-6">
              Summer Collection 2026
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Discover the <br />
              <span className="text-[#c4714a]">Art of</span> Shopping
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Curated products with elegant design and exceptional quality.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
              >
                Shop Now <ShoppingBag size={16} />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-1 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Explore Bestsellers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 flex justify-center md:justify-end gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
          {[
            ['+200', 'Products'],
            ['98%', 'Happy Customers'],
            ['24/7', 'Support'],
          ].map(([num, label]) => (
            <div key={label} className="text-center px-4">
              <p className="font-display text-2xl font-bold text-gray-900">{num}</p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="ornament mb-4 justify-center">
            <span className="text-xs font-semibold tracking-wider text-[#c4714a] uppercase">
              Curated Selection
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">Hand-picked just for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <div key={product.id} className={`fade-up fade-up-delay-${(i % 4) + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Features Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Premium Shopping Experience
          </h3>
          <p className="text-gray-400 mb-8">Quality products delivered to your doorstep</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Truck, label: 'Fast Shipping' },
              { icon: Shield, label: 'Secure Payment' },
              { icon: RotateCcw, label: '14 Days Return' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-300">
                <Icon size={18} className="text-[#c4714a]" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;