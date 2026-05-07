const API = "https://fakestoreapi.com/products/";
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const container = document.getElementById("products");
const cartCount = document.getElementById("cart-count");

let allProducts = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.innerText = totalQty;
}
updateCartCount();

loading.style.display = "block";
error.innerText = "";

fetch(API)
  .then(res => res.json())
  .then(data => {
    setTimeout(() => {
      loading.style.display = "none";
      allProducts = data;
      displayProducts(data);
    }, 1000);
  })
  .catch(() => {
    setTimeout(() => {
      loading.style.display = "none";
      error.innerText = "Failed to load data";
    }, 1000);
  });

function displayProducts(data) {
  container.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    const itemInCart = cart.find(p => p.id === product.id);

    card.innerHTML = `
      <h3>${product.title.substring(0, 50)}</h3>
      <img src="${product.image}" />
      <p><strong>₹ ${product.price}</strong></p>
      <p>${product.description.substring(0, 60)}...</p>

      <p class="rating">⭐ ${product.rating.rate}(${product.rating.count} reviews) </p>

      <button onclick="viewMore(${product.id})">
        View More
      </button>

      ${
        itemInCart
          ? `
        <div class="qty-control">
          <button onclick="removeFromCart(${product.id})">-</button>
          <span>${itemInCart.qty}</span>
          <button onclick="addToCart(${product.id})">+</button>
        </div>
      `
          : `<button onclick="addToCart(${product.id})">Add to Cart</button>`
      }
    `;

    container.appendChild(card);
  });
}

function viewMore(id) {
  const product = allProducts.find(p => p.id == id);
  if (!product) return;

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalDesc").innerText = product.description;
  document.getElementById("modalPrice").innerText = "₹ " + product.price;

  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

function outsideClick(e) {
  if (e.target.id === "productModal") {
    closeModal();
  }
}

function addToCart(id) {
  const product = allProducts.find(p => p.id === id);

  const existing = cart.find(p => p.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  displayProducts(allProducts);
}

function removeFromCart(id) {
  const existing = cart.find(p => p.id === id);

  if (!existing) return;

  if (existing.qty > 1) {
    existing.qty -= 1;
  } else {
    cart = cart.filter(p => p.id !== id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  displayProducts(allProducts);
}

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

function filterCategory(value) {
  if (value === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter(p => p.category === value);
    displayProducts(filtered);
  }
}

function sortProducts(type) {
  let sorted = [...allProducts];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);

}