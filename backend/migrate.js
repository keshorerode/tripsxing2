const db = require('./db');

const migrate = async () => {
    try {
        console.log('Starting migration...');
        await db.query(`
            CREATE TABLE IF NOT EXISTS employees (
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
        `);
        console.log('Table "employees" created or already exists.');
        await db.query(`
            CREATE TABLE IF NOT EXISTS services (
                id SERIAL PRIMARY KEY,
                vendor_id INTEGER REFERENCES vendors(id) ON DELETE CASCADE,
                name VARCHAR(100) NOT NULL,
                description TEXT,
                price VARCHAR(50),
                status VARCHAR(20) DEFAULT 'Active',
                category VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Table "services" created or already exists.');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err.message);
        process.exit(1);
    }
};

migrate();
