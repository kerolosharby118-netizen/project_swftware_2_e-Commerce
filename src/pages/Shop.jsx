import { useState } from 'react';
import { products, categoryLabels } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const Shop = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'electronics', 'clothing', 'home', 'sports', 'books'];

  const filteredProducts = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <div className="ornament mb-3 justify-center">
          <span className="text-xs font-semibold tracking-wider text-[#c4714a] uppercase">
            Explore
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center text-gray-900">
          Our Shop
        </h1>
        <p className="text-center text-gray-500 mt-2">{filteredProducts.length} products available</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c4714a] transition"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">🔍</p>
          <p className="text-xl font-medium text-gray-700">No products found</p>
          <p className="text-sm text-gray-400 mt-1">Try a different search or category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;