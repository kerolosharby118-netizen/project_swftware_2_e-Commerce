import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={40} className="text-gray-400" />
        </div>
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any items yet.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
        >
          Start Shopping <ArrowLeft size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-[#c4714a] font-semibold mt-1">${item.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition mt-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-gray-600">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-gray-100 my-4" />

            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-display text-2xl font-bold text-[#c4714a]">
                ${getTotal().toFixed(2)}
              </span>
            </div>

            <Link
              to="/checkout"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
            >
              Proceed to Checkout <CreditCard size={16} />
            </Link>

            <Link to="/shop" className="block text-center text-sm text-gray-500 mt-4 hover:text-gray-700">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;