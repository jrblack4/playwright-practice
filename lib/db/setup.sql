-- Create the Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create the Categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create the Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    category_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories (id)
);

-- Create the Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- Create the Order_Items table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

-- Seed Users table
INSERT INTO users (username, email, password) VALUES
('johndoe', 'john.doe@example.com', 'hashed_password_1'),
('janedoe', 'jane.doe@example.com', 'hashed_password_2'),
('alice', 'alice@example.com', 'hashed_password_3');

-- Seed Categories table
INSERT INTO categories (name, description) VALUES
('Electronics', 'All electronic devices and gadgets'),
('Books', 'Books across all genres and categories'),
('Clothing', 'Apparel for men, women, and children');

-- Seed Products table
INSERT INTO products (name, description, price, category_id) VALUES
('Smartphone', 'High-end smartphone with advanced features', 799.99, 1),
('Laptop', 'Powerful laptop for work and gaming', 1199.99, 1),
('Science Fiction Novel', 'A thrilling sci-fi adventure', 19.99, 2),
('Mystery Novel', 'A captivating mystery novel', 15.99, 2),
('Men''s T-Shirt', 'Comfortable and stylish men''s t-shirt', 24.99, 3),
('Women''s Dress', 'Elegant and fashionable women''s dress', 49.99, 3);

-- Seed Orders table
INSERT INTO orders (user_id, status) VALUES
(1, 'Pending'),
(2, 'Shipped'),
(3, 'Completed');

-- Seed Order_Items table
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 799.99),
(1, 2, 1, 1199.99),
(2, 4, 2, 15.99),
(2, 6, 1, 49.99),
(3, 3, 1, 19.99),
(3, 5, 3, 24.99);
