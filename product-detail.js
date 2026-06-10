// product-detail.js
// ALL_PRODUCTS is loaded from data/products.js (embedded - no fetch needed)

function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id")) || 1;

  const product = ALL_PRODUCTS.find(p => p.id === productId) || ALL_PRODUCTS[0];

  if (!product) {
    document.querySelector(".product-detail").innerHTML = "<p style='padding:40px;color:#fff'>Product not found.</p>";
    return;
  }

  document.title = product.name + " | ApnaLogo";
  document.getElementById("productImage").src = product.image;
  document.getElementById("productImage").alt = product.name;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productDescription").textContent = product.description;

  const ul = document.getElementById("productFeatures");
  ul.innerHTML = "";
  product.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    ul.appendChild(li);
  });

  const waMsg = encodeURIComponent("Hi, I am interested in: " + product.name + ". Please share more details.");
  document.getElementById("whatsappBtn").href = "https://wa.me/919166945566?text=" + waMsg;
  document.getElementById("whatsappBtn").textContent = "Enquire on WhatsApp";
}

loadProduct();
