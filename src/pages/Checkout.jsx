import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, Shield, RotateCcw, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
          <p className="text-gray-500">Thank you for your purchase.</p>
          <p className="text-sm text-[#c4714a] mt-4">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
                  placeholder="john@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
                  placeholder="Street, Building, Apartment"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <CreditCard size={18} /> Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-5">Your Order</h2>

            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-gray-200 my-4" />

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-display text-2xl font-bold text-[#c4714a]">${getTotal().toFixed(2)}</span>
            </div>

            <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-gray-200">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: Shield, label: '100% Secure Payment' },
                { icon: RotateCcw, label: '14 Days Return Policy' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-gray-500">
                  <Icon size={12} className="text-[#c4714a]" /> {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;