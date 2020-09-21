"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = require("react");

var _lang = _interopRequireDefault(require("../sources/lang"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MultiUser = /*#__PURE__*/function (_PureComponent) {
  _inherits(MultiUser, _PureComponent);

  var _super = _createSuper(MultiUser);

  function MultiUser(props) {
    var _this;

    _classCallCheck(this, MultiUser);

    _this = _super.call(this, props);

    _this.goToLogin = function () {
      var _this$props = _this.props,
          _this$props$modalClos = _this$props.modalCloseEvent,
          modalCloseEvent = _this$props$modalClos === void 0 ? void 0 : _this$props$modalClos,
          dispatch = _this$props.dispatch;

      _this.setState({
        visible: false
      });

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

    _this.state = {
      visible: props.hasOwnProperty("showModal") ? props.showModal : true
    };
    return _this;
  }

  _createClass(MultiUser, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(next) {
      if (this.props.hasOwnProperty("showModal")) {
        if (next.showModal) {
          this.setState({
            visible: next.showModal
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.props || {},
          _ref$lang = _ref.lang,
          lang = _ref$lang === void 0 ? "cn" : _ref$lang;

      var visible = this.state.visible;
      return /*#__PURE__*/React.createElement("div", {
        className: "user-operate"
      }, /*#__PURE__*/React.createElement(_modal["default"], {
        className: "user-operate-modal",
        visible: visible,
        closable: false,
        footer: null,
        width: 450
      }, /*#__PURE__*/React.createElement("div", {
        className: "u-pic"
      }), /*#__PURE__*/React.createElement("p", null, _lang["default"].userStatusModal("otherLoginContent", lang)), /*#__PURE__*/React.createElement("p", null, _lang["default"].userStatusModal("warnMsg", lang)), /*#__PURE__*/React.createElement("div", {
        className: "btn"
      }, /*#__PURE__*/React.createElement(_button["default"], {
        type: "primary",
        onClick: this.goToLogin
      }, _lang["default"].userStatusModal("submit", lang)))));
    }
  }]);

  return MultiUser;
}(_react.PureComponent);

exports["default"] = MultiUser;