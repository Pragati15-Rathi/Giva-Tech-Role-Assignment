// ProductList.js
import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - {product.price} - {product.quantity}
                    <button onClick={() => onEdit(product)}>Edit</button>
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
