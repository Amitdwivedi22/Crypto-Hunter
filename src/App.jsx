import { useState, useEffect } from 'react';
import './App.css';
import { TrendingUp, TrendingDown, Search, Star, Menu, X, User, LogIn, LogOut } from 'lucide-react';
import LoginPage from './components/LoginPage';
import About from './components/About';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [user, setUser] = useState(null);

  const handleBackToHome = () => {
    setShowAbout(false);
  };

  // Mock cryptocurrency data
  const mockCryptoData = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      current_price: 67234.56,
      price_change_percentage_24h: 2.45,
      market_cap: 1324567890123,
      total_volume: 23456789012,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      current_price: 3245.78,
      price_change_percentage_24h: -1.23,
      market_cap: 389876543210,
      total_volume: 12345678901,
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      current_price: 0.4567,
      price_change_percentage_24h: 5.67,
      market_cap: 15987654321,
      total_volume: 987654321,
      image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      current_price: 156.78,
      price_change_percentage_24h: -3.45,
      market_cap: 67890123456,
      total_volume: 2345678901,
      image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
    },
    {
      id: 'chainlink',
      name: 'Chainlink',
      symbol: 'LINK',
      current_price: 14.56,
      price_change_percentage_24h: 7.89,
      market_cap: 8765432109,
      total_volume: 567890123,
      image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png'
    }
  ];

  const mockTrendingCoins = [
    { id: 'polygon', name: 'Polygon', symbol: 'MATIC', price_change_percentage_24h: 12.34 },
    { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', price_change_percentage_24h: 8.76 },
    { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price_change_percentage_24h: 15.23 }
  ];

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setCryptoData(mockCryptoData);
      setTrendingCoins(mockTrendingCoins);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('cryptoHunterUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('cryptoHunterUser');
    setUser(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toFixed(2)}`;
  };

  const filteredCryptos = cryptoData.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Hero = () => (
    <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          CRYPTO HUNTER
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Get all the Info regarding your favorite Crypto Currency
        </p>
        
        {/* Trending coins carousel */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {trendingCoins.map((coin) => (
            <div key={coin.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-2 hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
              <span className="text-yellow-400 font-semibold">{coin.symbol.toUpperCase()}</span>
              <div className={`flex items-center ${coin.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {coin.price_change_percentage_24h > 0 ? 
                  <TrendingUp className="w-4 h-4 mr-1" /> : 
                  <TrendingDown className="w-4 h-4 mr-1" />
                }
                <span className="text-sm font-medium">
                  {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-400">CRYPTO HUNTER</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              
              {!user ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  <span className="text-white">{user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700 border-t border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-gray-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              {!user ? (
                <button 
                  onClick={() => setShowLogin(true)} 
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {showLogin && (
        <LoginPage
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}

      {showAbout ? (
        <About onBack={handleBackToHome} />
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search For a Crypto Currency..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Crypto Table */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Coin</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">24h Change</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Market Cap</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Volume</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {filteredCryptos.map((crypto, index) => (
                        <tr key={crypto.id} className="hover:bg-gray-700 transition-colors cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                className="h-10 w-10 rounded-full mr-3"
                                src={crypto.image}
                                alt={crypto.name}
                                onError={(e) => {
                                  e.target.onerror = null; // Prevent infinite loop
                                  e.target.src = `https://via.placeholder.com/40/3B82F6/FFFFFF?text=${crypto.symbol[0]}`;
                                }}
                              />
                              <div>
                                <div className="text-sm font-medium text-white">{crypto.name}</div>
                                <div className="text-sm text-gray-400">{crypto.symbol.toUpperCase()}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                            {formatPrice(crypto.current_price)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className={`flex items-center ${crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {crypto.price_change_percentage_24h > 0 ? 
                                <TrendingUp className="w-4 h-4 mr-1" /> : 
                                <TrendingDown className="w-4 h-4 mr-1" />
                              }
                              <span className="font-medium">
                                {crypto.price_change_percentage_24h.toFixed(2)}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {formatMarketCap(crypto.market_cap)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {formatMarketCap(crypto.total_volume)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                              <Star className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {filteredCryptos.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No cryptocurrencies found matching your search.</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">CRYPTO HUNTER</h3>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for cryptocurrency tracking and analysis
            </p>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => setShowAbout(true)} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              © 2025 Crypto Hunter. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;