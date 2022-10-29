export function renderProducts(productsToRender) {
  const productContainer = document.querySelector(".products");
  productContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    productContainer.innerHTML += `<div class="products">
             <h3 class="title">${product.title}</h3>
             <img class="image" src="${product.image}" alt="thumbnail">
             <p>${product.price}$</p>
             </div>`;
  });
  if (productsToRender.length === 0) {
    productContainer.innerHTML += `
    <div class="products">
             <h3 class="title">No Products Found</h3>
             </div>
    `;
  }
}
