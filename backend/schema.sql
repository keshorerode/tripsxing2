-- Database Schema for Tripsxing

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(50) DEFAULT 'Employee',
    status VARCHAR(20) DEFAULT 'Active',
    clearance VARCHAR(50) DEFAULT 'Level 1',
    trust_score VARCHAR(10) DEFAULT '100%',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    user_count INTEGER DEFAULT 0,
    type VARCHAR(20) DEFAULT 'Custom'
);

CREATE TABLE vendors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100),
    type VARCHAR(50),
    rating DECIMAL(2,1),
    status VARCHAR(20) DEFAULT 'Active',
    initial CHAR(1)
);

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    image TEXT,
    question TEXT,
    objective TEXT,
    participating VARCHAR(100)
);

CREATE TABLE meetings (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    location VARCHAR(200),
    phase VARCHAR(100),
    status VARCHAR(50) DEFAULT 'Awaiting Response',
    priority VARCHAR(20) DEFAULT 'Medium'
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    level VARCHAR(50) DEFAULT 'Standard',
    progress INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'In Progress',
    initial CHAR(2),
    color VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    vendor_id INTEGER REFERENCES vendors(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price VARCHAR(50),
    status VARCHAR(20) DEFAULT 'Active',
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a default admin user (password will be 'admin123' after hashing, but putting plain for reference)
-- Real projects hash this!
INSERT INTO users (first_name, last_name, email, password, role, status, clearance) 
VALUES ('Admin', 'User', 'admin@tripsxing.com', '$2b$10$H8AYZ/4Dzy0gsI.QLVInc.K2isWCV/f..ckiRIGLx75VQj05Pymcu', 'Super Admin', 'Active', 'Level 5 (Elite)');
