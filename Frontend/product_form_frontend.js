// ProductForm.js
import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
    });

    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', description: '', price: '', quantity: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
            <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
