// const resultsContainer = document.querySelector(".result");
// const inputPrice = document.querySelector(".input-price");

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((jsonData) => {
//     try {
//       const results = jsonData;
//       console.log(results);
//       resultsContainer.innerHTML = "";
//       for (let i = 0; i < results[0].title.length; i++) {
//         resultsContainer.innerHTML += `
//         <div class="result">
//         <h3 class="title">${results[i].title}</h3>
//         <img class="image" src="${results[i].image}" alt="thumbnail">
//         <p>${results[i].price}$</p>
//         </div>

//     `;

//     inputPrice.onkeyup = function (){

//       const searchValue = event.target.value
//       const filteredPrices = results.filter(function(price){
//         if(results[i].price.startsWith(searchValue)){
//           return true;
//         }
//       })

//       console.log(filteredPrices)
//       console.log(event)

//     }
//       }
//     } catch (error) {
//       console.log("an error occured");
//     }
//   });

// function

// inputPrice.onkeyup = function () {
//   console.log(event.target.value);
//   const searchValue = event.target.value.trim();
//   const filterPrice = results.filter(function())
// };
// renderPrice();
// console.log(typeof results[i].price);
// function renderPrice() {
//   results.forEach(function (prices) {
//     resultsContainer.innerHTML += `
//       <div class="result>
//       ${results[i].price}
//       </div>

//     `;
//   });
// }
