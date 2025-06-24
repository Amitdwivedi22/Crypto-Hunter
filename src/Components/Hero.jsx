const Hero = () => (
    <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
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