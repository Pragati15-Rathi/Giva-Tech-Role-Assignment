CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price FLOAT NOT NULL,
    quantity INTEGER NOT NULL
);
