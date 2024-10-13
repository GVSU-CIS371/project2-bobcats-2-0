import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
  const main = document.getElementById("main-container");
    if(main){
        //clear the container
        main.innerHTML = '';
        prods.forEach((prod)=>{
            //create new main for each item
            const prodMain = document.createElement('main');
            prodMain.classList.add('prod');
            //create element for name
            const prodName = document.createElement('m1');
            prodName.textContent = prod.name;
            //create element for description
            const prodDescription = document.createElement('m2');
            prodDescription.textContent = prod.description;
            //create element for price
            const prodPrice = document.createElement('m3');
            prodPrice.textContent = `Price: $${prod.price.toFixed(2)}`;
            prodPrice.classList.add('price');
            //rating
            const prodRating = document.createElement('m4');
            prodRating.textContent = `Rating: ${prod.rating.toFixed(2)}`;
            prodRating.classList.add('rating')
            //stock
            const prodStock = document.createElement('m5');
            prodStock.textContent = `Stock: ${prod.stock.toFixed(2)}`;
            prodStock.classList.add('stock')

            //image
            const prodImage = document.createElement('img');
            prodImage.src = prod.image;
            prodImage.alt = `${prod.name} image`;
            prodImage.width = 50;
            prodImage.height = 50;

            //category
            const prodCategory = document.createElement('m6');
            prodCategory.textContent = prod.category;

            //append the elements to the item main
            prodMain.appendChild(prodName);
            prodMain.appendChild(prodDescription);
            prodMain.appendChild(prodPrice);
            prodMain.appendChild(prodRating);
            prodMain.appendChild(prodStock);
            prodMain.appendChild(prodImage);
            prodMain.appendChild(prodCategory);


            //append main to container
            main.appendChild(prodMain);
        });
        
    }
}
    

function getByCategory(category: string): void {
    // your code
}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };