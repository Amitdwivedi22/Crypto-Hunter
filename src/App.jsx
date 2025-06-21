import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Search, Star, Menu, X, User, LogIn } from 'lucide-react';

const CryptoHunter = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [loading, setLoading] = useState(true);

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
}

export default CryptoHunter;