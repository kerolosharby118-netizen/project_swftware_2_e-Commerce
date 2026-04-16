import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Check, ShoppingBag, Truck, Shield, RotateCcw, Home, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-32">
        <p className="text-6xl mb-4">😢</p>
        <p className="text-2xl font-display font-bold text-gray-800">Product Not Found</p>
        <Link to="/shop" className="inline-block mt-6 text-[#c4714a] hover:underline">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-[#c4714a] flex items-center gap-1">
          <Home size={14} /> Home
        </Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-[#c4714a]">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <span className="badge inline-block px-3 py-1 rounded-full bg-[#c4714a]/10 text-[#c4714a] text-xs font-semibold mb-4">
            {product.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-display font-bold text-[#c4714a] mb-6">${product.price}</p>
          <div className="h-px bg-gray-100 my-6" />
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
              added ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'
            } text-white`}
          >
            {added ? <Check size={18} /> : <ShoppingBag size={18} />}
            {added ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          <Link
            to="/cart"
            className="block w-full py-3 mt-3 rounded-full font-semibold text-center border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            View Cart →
          </Link>

          <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-gray-100">
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: RotateCcw, label: '14 Days Return' },
              { icon: Shield, label: 'Secure Checkout' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon size={16} className="text-[#c4714a]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20">
          <div className="ornament mb-4 justify-center">
            <span className="text-xs font-semibold tracking-wider text-[#c4714a] uppercase">
              You May Also Like
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <Link to={`/product/${p.id}`}>
                  <img src={p.image} alt={p.name} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#c4714a] transition">
                      {p.name}
                    </h3>
                    <p className="font-bold text-[#c4714a] mt-1">${p.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;