import React, { useState, useEffect, useMemo } from "react";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 99 },
  { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 150 },
  { id: 3, name: "Running Shoes", category: "Footwear", price: 120 },
  { id: 4, name: "Leather Jacket", category: "Apparel", price: 250 },
  { id: 5, name: "Smart Watch", category: "Electronics", price: 200 },
];

function useDebounce(value, delay = 300) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceValue;
}

export function SearchAndFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(300);

  const debouncedSearch = useDebounce(search, 300);

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    console.log("inside memo ", debouncedSearch);
    return PRODUCTS.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase().trim());
      const matchesCategory = category === "All" || item.category === category;
      const matchesPrice = item.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [debouncedSearch, category, maxPrice]);

  return (
    <div
      style={{ padding: "20px", maxWidth: "500px", fontFamily: "sans-serif" }}
    >
      <h2>Search & Filter Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
      />

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "8px" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label>
          Max Price: ${maxPrice}
          <input
            type="range"
            min="50"
            max="300"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </div>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id} style={{ marginBottom: "8px" }}>
            <strong>{p.name}</strong> - ${p.price} (<em>{p.category}</em>)
          </li>
        ))}
        {filteredProducts.length === 0 && <li>No products found.</li>}
      </ul>
    </div>
  );
}
