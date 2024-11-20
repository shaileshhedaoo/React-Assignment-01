import React from 'react';
import ProductsList from './ProductsList';

const productsData = [
  { id: 1, name: 'Product A', quantity: 10, price: 100 },
  { id: 2, name: 'Product B', quantity: 5, price: 200 },
  { id: 3, name: 'Product C', quantity: 8, price: 300 },
];

function AllProductsPage() {
  return (
    <div>
      <h1>All Products</h1>
      <ProductsList products={productsData} />
    </div>
  );
}

export default AllProductsPage;
