import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const location = useLocation();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-bold text-gray-900 tracking-tight">
              ShopHub
            </span>
            <span className="text-[10px] font-medium text-[#c4714a] uppercase tracking-wider">
              Premium
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#c4714a] ${
                location.pathname === '/' ? 'text-[#c4714a]' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium transition-colors hover:text-[#c4714a] ${
                location.pathname === '/shop' ? 'text-[#c4714a]' : 'text-gray-600'
              }`}
            >
              Shop
            </Link>
          </nav>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-[#c4714a] text-white text-[10px] font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;