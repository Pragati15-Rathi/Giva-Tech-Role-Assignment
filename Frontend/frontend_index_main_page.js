// index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
    };

    const handleAddOrEditProduct = async (product) => {
        if (selectedProduct) {
            await axios.put(`http://localhost:5000/api/products/${selectedProduct.id}`, product);
        } else {
            await axios.post('http://localhost:5000/api/products', product);
        }
        setSelectedProduct(null);
        fetchProducts();
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
    };

    return (
        <div>
            <h1>Product Management</h1>
            <ProductForm product={selectedProduct} onSubmit={handleAddOrEditProduct} />
            <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
