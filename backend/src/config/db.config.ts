require('dotenv').config()

export const config = {
    server: process.env.DB_SERVER || 'DESKTOP-BHRA70J\\SQLHUGO',
    user: process.env.DB_USER || "sa",
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_DATABASE || "Holambra",
    connectionTimeout: 5000,
    options: {
        trustServerCertificate: true,
    },
};