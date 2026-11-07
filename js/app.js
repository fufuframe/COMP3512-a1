// COMP 3512 Assignment 2 — Product SPA
// Author: fouad
//
// For now the data is imported directly from the bundled JSON file.
// Later this will be replaced with fetch() + localStorage caching:
//   https://dummyjson.com/products?limit=100   (all products)
//   https://dummyjson.com/products/<id>         (single product)
import config from '../data-minifed.json' with { type: 'json' };

const products = config.products;
console.log(`Loaded ${products.length} products`, products);

const resultsContainer = document.getElementById('results');




for (const product of list) {
    resultsContainer.appendChild(createCard(product));
  }


function createCard(product) {
    // the card container
    const card = document.createElement('div');
    card.className = 'card';
  
    // the image
    const imgEl = document.createElement('img');
    imgEl.src = product.thumbnail;
    imgEl.alt = product.title;
    card.appendChild(imgEl);
  
    // the title
    const titleEl = document.createElement('p');
    titleEl.className = 'title';
    titleEl.textContent = product.title;
    card.appendChild(titleEl);
  
    // the price
    const priceEl = document.createElement('p');
    priceEl.className = 'price';
    priceEl.textContent = '$' + product.price.toFixed(2);
    card.appendChild(priceEl);
  
    // the button
    const btn = document.createElement('button');
    btn.textContent = '+';
    btn.addEventListener('click', () => {
      console.log('Added:', product.title);
    });
    card.appendChild(btn);
  
    return card;
  }







// TODO:
//  - view routing (show/hide #home, #browse, #singleproduct, #cart, #about)
//  - render home / browse / single product / cart
//  - filtering (name, category via Set, rating, price) + sort + clear
//  - add-to-cart + localStorage persistence + cart count badge
//  - about dialog
