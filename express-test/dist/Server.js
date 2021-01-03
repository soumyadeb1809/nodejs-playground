'use strict';

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Config = require('./config/Config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_App2.default.listen(_Config.port, async function () {
    await (0, _App.start)();
    console.log('Server running on port : ' + _Config.port);
}).on('error', function (e) {
    return Logger.error(e);
});