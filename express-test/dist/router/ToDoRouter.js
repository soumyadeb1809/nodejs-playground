'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _TodosRepo = require('../data/TodosRepo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/all', async function (req, res) {
    var todos = await (0, _TodosRepo.getAll)();
    res.send(todos);
});

router.get('/add', async function (req, res) {
    var desc = req.query.description;
    console.log(req);
    await (0, _TodosRepo.add)(desc);
    res.send("success");
});

exports.default = router;