"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = exports.getAll = undefined;

var _DBConnector = require("../db/DBConnector");

var _DBConnector2 = _interopRequireDefault(_DBConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAll = exports.getAll = async function getAll() {
    var client = null;
    var todos = null;

    try {
        client = await _DBConnector2.default.connect();
        var sql = "SELECT * FROM todos";

        var _ref = await client.query(sql),
            rows = _ref.rows;

        todos = rows;
    } catch (ex) {
        console.log(ex);
    } finally {
        if (client != null) {
            client.release();
        }
    }

    return todos;
};

var add = exports.add = async function add(description) {
    var client = null;
    var todos = null;

    try {
        client = await _DBConnector2.default.connect();
        var sql = "INSERT INTO todos(description) VALUES($1)";

        var _ref2 = await client.query(sql, [description]),
            rows = _ref2.rows;

        todos = rows;
    } catch (ex) {
        console.log(ex);
    } finally {
        if (client != null) {
            client.release();
        }
    }

    return todos;
};