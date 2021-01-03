"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('pg'),
    Pool = _require.Pool;

var pool = new Pool({
    "user": "postgres",
    "password": "password",
    "host": "localhost",
    "port": 5432,
    "database": "postgres"
});

exports.default = pool;