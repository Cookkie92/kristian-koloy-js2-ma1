import { searchPrices } from "./components/SearchPrices.js";
import { renderProducts } from "./components/renderProducts.js";
const url = "https://fakestoreapi.com/products";

async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    console.log(products);

    renderProducts(products);
    searchPrices(products);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
