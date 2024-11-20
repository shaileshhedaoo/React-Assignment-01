import React from 'react';
import Product from './Product';

function ProductsList({ products }) {
  return (
    <table border="1" style={{ margin: '20px auto', width: '50%' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsList;

