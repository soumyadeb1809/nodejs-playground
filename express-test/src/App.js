const express = require('express');
import pool from './db/DBConnector';

import todosRouter from './router/ToDoRouter';

const app = express();

app.use(express.json());

export async function start() {
    await connectDB();
    await configRouters();
}

async function configRouters() {
    app.use('/todos', todosRouter);
} 

async function connectDB() {
    try {
        await pool.connect();
        console.log('Connected to database');
    }
    catch(e) {
        console.log(e);
    }
}

export default app;