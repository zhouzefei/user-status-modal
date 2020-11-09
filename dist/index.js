"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NoOperate", {
  enumerable: true,
  get: function get() {
    return _NoOperate.default;
  }
});
Object.defineProperty(exports, "MultiUser", {
  enumerable: true,
  get: function get() {
    return _MultiUser.default;
  }
});

var _NoOperate = _interopRequireDefault(require("./components/NoOperate"));

var _MultiUser = _interopRequireDefault(require("./components/MultiUser"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }