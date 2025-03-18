// state
let watches;
const productsEl = document.querySelector(".products");

// Hent ur data
fetch("./assets/js/watchesJson.json")
// Hvis det lykkedes, konverter til js-object
.then(res => res.json())
.then(dataWatches => {
    // Gem data i watches variabel
    watches = dataWatches;
    //Kald en function der skal opdatere grænsefladen
    updateProducts();
})
// Hvis det ikke lykkedes, udskriv fejlbesked
.catch(err => {
    console.log("Her er din fejl", err)
})

function updateProducts(){
    watches.watches.forEach(pizza => {
        productsEl.innerHTML += `
        <article class="product">
            <h3 class="product-title">${pizza.name}</h3>
            <img src="./assets/img/${pizza.imgUrl}" alt="${pizza.name}" />
            <p class="product-description">
              ${pizza.description}
            </p>
            <p class="product-price">${pizza.price} kr.</p>
            <button>
              Tilføj til kurv <i class="fa-solid fa-cart-plus"></i>
            </button>
          </article>
        `
    })
}