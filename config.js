import dotenv from 'dotenv';
import { rand } from './utils.js';
dotenv.config();

export const port = process.env.PORT || 3000;
export const tokenKey = rand() + rand();
export const logLevel = process.env.LOG_LEVEL || 'info';
export const dbConfig = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "",
    DB: process.env.DB_NAME || "db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// export const session = {
//     secret: tokenKey,
//     cookie: {},
//     resave: false,
//     saveUninitialized: false
// };
