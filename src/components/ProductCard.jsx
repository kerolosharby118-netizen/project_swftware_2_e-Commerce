import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </Link>

      <div className="p-4">
        <span className="badge text-[10px] text-[#c4714a] font-semibold uppercase tracking-wider">
          {product.category}
        </span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mt-1 mb-1 group-hover:text-[#c4714a] transition line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;