// Simulated API call for crypto prices
export function fetchCryptoPrices() {
  const prices = [
    { name: "Bitcoin", price: (30000 + Math.random() * 1000).toFixed(2) },
    { name: "Ethereum", price: (2000 + Math.random() * 100).toFixed(2) },
    { name: "Solana", price: (100 + Math.random() * 10).toFixed(2) },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(prices), 500);
  });
}
