import { useState, useEffect } from "react";
import { fetchCryptoPrices } from "./data";

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // TODO 1: Create a polling function that calls fetchCryptoPrices every 5 seconds
    // TODO 2: On each poll, update state with new prices
    // TODO 3: Don't forget to clean up interval when component unmounts
    const getprices = async () => {
      const data = await fetchCryptoPrices();
      setPrices(data);
    };
    getprices();
    const intervalId = setInterval(getprices, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>📈 Crypto Dashboard</h1>
      <p>Updates every 5 seconds...</p>
      <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", border: "1px solid gray" }}>Name</th>
            <th style={{ padding: "8px", border: "1px solid gray" }}>
              Price ($)
            </th>
          </tr>
        </thead>
        <tbody>
          {prices.map((coin, index) => (
            <tr key={index}>
              <td style={{ padding: "8px", border: "1px solid gray" }}>
                {coin.name}
              </td>
              <td style={{ padding: "8px", border: "1px solid gray" }}>
                {coin.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
