import pool from '../db/DBConnector';


export const getAll = async () => {
    let client = null;
    let todos = null;

    try {
        client = await pool.connect();
        const sql = "SELECT * FROM todos";

        const { rows } = await client.query(sql);
        todos = rows;
    }
    catch(ex) {
        console.log(ex);
    }
    finally {
        if(client != null) {
            client.release();
        }
    }

    return todos;
}

export const add = async (description) => {
    let client = null;
    let todos = null;

    try {
        client = await pool.connect();
        const sql = "INSERT INTO todos(description) VALUES($1)";

        const { rows } = await client.query(sql, [description]);
        todos = rows;
    }
    catch(ex) {
        console.log(ex);
    }
    finally {
        if(client != null) {
            client.release();
        }
    }

    return todos;
}