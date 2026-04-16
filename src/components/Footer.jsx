import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <p className="font-display text-2xl font-bold text-white mb-2">ShopHub</p>
          <p className="text-sm">Your premium destination for quality products.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-white transition">All Products</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-white transition">FAQs</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-center">
        <p>© 2026 ShopHub — All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;