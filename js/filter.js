const resultsContainer = document.querySelector(".result");
const inputPrice = document.querySelector(".input-price");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((jsonData) => {
    try {
      const results = jsonData;
      console.log(results);
      resultsContainer.innerHTML = "";
      for (let i = 0; i < results[0].title.length; i++) {
        resultsContainer.innerHTML += `
                <div class="result">
                <h3 class="title">${results[i].title}</h3>
                <img class="image" src="${results[i].image}" alt="thumbnail">
                <p>${results[i].price}$</p>
                </div>
            
            `;
        console.log(typeof results[i].price);
      }
    } catch (error) {
      console.log("an error occured");
      resultsContainer.innerHTML = displayError("bad stuff");
    }
  });

inputPrice.onkeyup = function () {
  console.log(event.target.value);
};
