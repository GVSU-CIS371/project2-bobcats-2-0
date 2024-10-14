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
            const prodMain = document.createElement('div');
            prodMain.classList.add('prod');
            //create element for name
            const prodName = document.createElement('div');
            prodName.textContent = prod.name;
            //image
            const prodImage = document.createElement('img');
            prodImage.src = prod.image;
            prodImage.alt = `${prod.name} image`;
            prodImage.width = 50;
            prodImage.height = 50;
            //create element for description
            const prodDescription = document.createElement('div');
            prodDescription.textContent = prod.description;
            //create element for price
            const prodPrice = document.createElement('div');
            prodPrice.textContent = `Price: $${prod.price.toFixed(2)}`;
            prodPrice.classList.add('price');
            //rating
            const prodRating = document.createElement('span');
            prodRating.textContent = `Rating: ${prod.rating.toFixed(2)}`;
            prodRating.classList.add('rating')
            //stock
            const prodStock = document.createElement('div');
            prodStock.textContent = `Stock: ${prod.stock.toFixed(2)}`;
            prodStock.classList.add('stock')
            //category
            const prodCategory = document.createElement('div');
            prodCategory.textContent = prod.category;

            //append the elements to the item main
            prodMain.appendChild(prodName);
            prodMain.appendChild(prodImage);
            prodMain.appendChild(prodDescription);
            prodMain.appendChild(prodPrice);
            prodMain.appendChild(prodRating);
            prodMain.appendChild(prodStock);
            prodMain.appendChild(prodCategory);


            //append main to container
            main.appendChild(prodMain);
        });
        
    }
}
    
function getByCategory(category: string): void {
    
    const main = document.getElementById('main-container');
    // throw error if main is empty
    if(!main){
        console.error('null');
        return;
    }
    //clear the container
    main.innerHTML = '';
    //filter the products based on their category
    const filtered = products.filter(prods => prods.category.toLowerCase() === category.toLowerCase());
    //check if there were any products
    if(filtered.length === 0){
        const noProducts = document.createElement('a');
        noProducts.textContent = `No items found`;
        main.appendChild(noProducts);
        return;
    }   
    //loop through filtered products
    filtered.forEach((prod) => {
        const prodMain = document.createElement('div');
        prodMain.classList.add('prod');

        //name
        const prodName = document.createElement('div');
        prodName.textContent = prod.name;

        //description
        const prodDescription = document.createElement('div');
        prodDescription.textContent = prod.description;

        //image
        const prodImage = document.createElement('img');
        prodImage.src = prod.image;
        prodImage.alt = `${prod.name} image`;
        prodImage.width = 50;
        prodImage.height = 50;

        //price
        const prodPrice = document.createElement('div');
        prodPrice.textContent = `Price: $${prod.price.toFixed(2)}`;

        //rating 
        const prodRating = document.createElement('span');
        prodPrice.textContent = `Rating: ${prod.rating.toFixed(2)}`;

        //stock
        const prodStock = document.createElement('div');
        prodPrice.textContent = `Stock: $${prod.stock.toFixed(2)}`;

        //category
        const prodCategory =  document.createElement('div');
        prodCategory.textContent = prod.category;

        //append elements
        prodMain.appendChild(prodName);
        prodMain.appendChild(prodImage);
        prodMain.appendChild(prodDescription);
        prodMain.appendChild(prodPrice);
        prodMain.appendChild(prodRating);
        prodMain.appendChild(prodStock);
        prodMain.appendChild(prodCategory);

        //append main to container
        main.appendChild(prodMain);
    })
}

function getByRating(minRating: number): void {
   
    const main = document.getElementById('main-container');
    // throw error if main is empty
    if(!main){
        console.error('null');
        return;
    }
    //clear the container
    main.innerHTML = '';
    //filter the products based on their rating
    const filtered = products.filter(prods => prods.rating === minRating);
    //check if there were any products
    if(filtered.length === 0){
        const noProducts = document.createElement('a');
        noProducts.textContent = `No items found`;
        main.appendChild(noProducts);
        return;
    }   
    //loop through filtered products
    filtered.forEach((prod) => {
        const prodMain = document.createElement('main');
        prodMain.classList.add('prod');

        //name
        const prodName = document.createElement('div');
        prodName.textContent = prod.name;

        //description
        const prodDescription = document.createElement('div');
        prodDescription.textContent = prod.description;

        //image
        const prodImage = document.createElement('img');
        prodImage.src = prod.image;
        prodImage.alt = `${prod.name} image`;
        prodImage.width = 50;
        prodImage.height = 50;

        //price
        const prodPrice = document.createElement('div');
        prodPrice.textContent = `Price: $${prod.price.toFixed(2)}`;

        //rating 
        const prodRating = document.createElement('div');
        prodPrice.textContent = `Rating: ${prod.rating.toFixed(2)}`;

        //stock
        const prodStock = document.createElement('div');
        prodPrice.textContent = `Stock: $${prod.stock.toFixed(2)}`;

        //category
        const prodCategory =  document.createElement('div');
        prodCategory.textContent = prod.category;

        //append elements
        prodMain.appendChild(prodName);
        prodMain.appendChild(prodImage);
        prodMain.appendChild(prodDescription);
        prodMain.appendChild(prodPrice);
        prodMain.appendChild(prodRating);
        prodMain.appendChild(prodStock);
        prodMain.appendChild(prodCategory);

        //append main to container
        main.appendChild(prodMain);
    })
}


export { renderProducts, getByCategory, getByRating };