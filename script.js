// Sample Products
const products = [
  { name: "Wireless Headphones", category: "electronics", price: 1999, rating: 4.6, image: "https://via.placeholder.com/200x150?text=Headphones" },
  { name: "Smart Watch", category: "electronics", price: 2499, rating: 4.8, image: "https://via.placeholder.com/200x150?text=Smart+Watch" },
  { name: "T-Shirt", category: "fashion", price: 799, rating: 4.2, image: "https://via.placeholder.com/200x150?text=T-Shirt" },
  { name: "Sofa Cushion", category: "home", price: 499, rating: 4.0, image: "https://via.placeholder.com/200x150?text=Cushion" },
  { name: "Sneakers", category: "fashion", price: 1899, rating: 4.7, image: "https://via.placeholder.com/200x150?text=Sneakers" },
  { name: "Table Lamp", category: "home", price: 999, rating: 4.3, image: "https://via.placeholder.com/200x150?text=Lamp" }
];

let filteredProducts = [...products];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>⭐ ${p.rating}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  filteredProducts = category === "all" ? [...products] : products.filter(p => p.category === category);
  displayProducts(filteredProducts);
}

function sortProducts() {
  const sortValue = document.getElementById("sortFilter").value;
  if (sortValue === "priceLow") filteredProducts.sort((a, b) => a.price - b.price);
  else if (sortValue === "priceHigh") filteredProducts.sort((a, b) => b.price - a.price);
  else if (sortValue === "rating") filteredProducts.sort((a, b) => b.rating - a.rating);
  displayProducts(filteredProducts);
}

// Lazy load optimization (simulate)
window.addEventListener("load", () => {
  setTimeout(() => displayProducts(filteredProducts), 300);
});
