const sql = require('mssql');
import { config } from "./db.config";

const createProspectTableQuery = `
IF NOT EXISTS (SELECT * FROM sysobjects  WHERE name = 'Prospect' and xtype='U')
BEGIN
    CREATE TABLE Prospect (
        id INT IDENTITY PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        document VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        AddressId INT NOT NULL,
        FOREIGN KEY (AddressId) REFERENCES Address(id)
    );
END;
`;

const createAddressTableQuery = `
IF NOT EXISTS (SELECT * FROM sysobjects  WHERE name = 'Address' and xtype='U')
BEGIN
    CREATE TABLE Address (
        id INT IDENTITY PRIMARY KEY,
        street VARCHAR(100) NOT NULL,
        number VARCHAR(10) NOT NULL,
        complement VARCHAR(50) NOT NULL,
        neighborhood VARCHAR(50) NOT NULL,
        city VARCHAR(50) NOT NULL,
        state VARCHAR(50) NOT NULL,
        zipcode VARCHAR(20) NOT NULL
    );
END;
`;



async function createTables() {
    try {
        const pool = await sql.connect(config);
        await pool.request().query(createAddressTableQuery);
        await pool.request().query(createProspectTableQuery);
        console.log('Tables Created');
    } catch (error) {
        console.error(error);
    }
}
createTables()

