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
            prodMain.textContent = prod.name;
            prodMain.classList.add('prod');
            //appends the new products to the container
            main.appendChild(prodMain);
        });
        
    }//
}

function getByCategory(category: string): void {
    // your code
}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };