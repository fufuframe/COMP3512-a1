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

// TODO:
//  - view routing (show/hide #home, #browse, #singleproduct, #cart, #about)
//  - render home / browse / single product / cart
//  - filtering (name, category via Set, rating, price) + sort + clear
//  - add-to-cart + localStorage persistence + cart count badge
//  - about dialog
