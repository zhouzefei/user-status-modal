"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = require("react");

var _lang = _interopRequireDefault(require("../sources/lang"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(props) {
  var _props$modalCloseEven = props.modalCloseEvent,
      modalCloseEvent = _props$modalCloseEven === void 0 ? void 0 : _props$modalCloseEven,
      dispatch = props.dispatch,
      showModal = props.showModal,
      _props$lang = props.lang,
      lang = _props$lang === void 0 ? "cn" : _props$lang;
  var hasShowModalProperty = props.hasOwnProperty("showModal");
  var defaultVisible = hasShowModalProperty ? showModal : true;

  var _useState = (0, _react.useState)(defaultVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  (0, _react.useEffect)(function () {
    if (showModal) {
      setVisible(true);
    }
  }, [showModal]);

  var goToLogin = function goToLogin() {
    setVisible(false);

    if (modalCloseEvent && typeof modalCloseEvent === "function") {
      modalCloseEvent();
    } else if (dispatch) {
      dispatch({
        type: "login/goLogin"
      });
    } else {
      window.location.href = "/user/login";
    }
  };

  return /*#__PURE__*/React.createElement(_modal.default, {
    className: "user-operate-modal",
    visible: visible,
    closable: false,
    footer: null,
    width: 450
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-pic u-multiple"
  }), /*#__PURE__*/React.createElement("p", null, _lang.default.userStatusModal("otherLoginContent", lang)), /*#__PURE__*/React.createElement("p", null, _lang.default.userStatusModal("warnMsg", lang)), /*#__PURE__*/React.createElement("div", {
    className: "btn"
  }, /*#__PURE__*/React.createElement(_button.default, {
    type: "primary",
    onClick: goToLogin
  }, _lang.default.userStatusModal("submit", lang))));
};

exports.default = _default;