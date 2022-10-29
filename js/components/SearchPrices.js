import { renderProducts } from "./renderProducts.js";

export function searchPrices(productsToSearch) {
  try {
    const inputPrice = document.querySelector(".input-price");

    inputPrice.onkeyup = function (event) {
      // console.log(event);

      const priceValue = event.target.value.trim();
      if (priceValue === "") {
        renderProducts(productsToSearch);
        return;
      }
      const intParse = parseInt(priceValue);
      if (isNaN(intParse)) {
        throw `This is not a number`;
      }
      console.log(intParse);
      console.log(priceValue);

      const filteredProducts = productsToSearch.filter(function (product) {
        if (product.price <= intParse) {
          return true;
        }
      });
      if (filteredProducts.length === 0) {
      }

      renderProducts(filteredProducts);
    };
  } catch (error) {
    console.log(error);
  }
}
