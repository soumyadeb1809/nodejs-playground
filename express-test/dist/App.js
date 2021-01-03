'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.start = start;

var _DBConnector = require('./db/DBConnector');

var _DBConnector2 = _interopRequireDefault(_DBConnector);

var _ToDoRouter = require('./router/ToDoRouter');

var _ToDoRouter2 = _interopRequireDefault(_ToDoRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');


var app = express();

app.use(express.json());

async function start() {
    await connectDB();
    await configRouters();
}

async function configRouters() {
    app.use('/todos', _ToDoRouter2.default);
}

async function connectDB() {
    try {
        await _DBConnector2.default.connect();
        console.log('Connected to database');
    } catch (e) {
        console.log(e);
    }
}

exports.default = app;