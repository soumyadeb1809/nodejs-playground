import express from 'express';

import { getAll, add } from '../data/TodosRepo';


const router = express.Router();

router.get(
    '/all',
    async (req, res) => {
        const todos = await getAll();
        res.send(todos);
    }
)

router.get(
    '/add',
    async (req, res) => {
        const desc = req.query.description;
        await add(desc);
        res.send("success");
    }
)

export default router;