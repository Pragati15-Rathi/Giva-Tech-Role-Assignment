const pool = require('../db');

const getAllProducts = async () => {
    const res = await pool.query('SELECT * FROM products');
    return res.rows;
};

const addProduct = async (product) => {
    const { name, description, price, quantity } = product;
    const res = await pool.query('INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *', [name, description, price, quantity]);
    return res.rows[0];
};

const updateProduct = async (id, product) => {
    const { name, description, price, quantity } = product;
    const res = await pool.query('UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *', [name, description, price, quantity, id]);
    return res.rows[0];
};

const deleteProduct = async (id) => {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };
