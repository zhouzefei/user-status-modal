"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var userStatusModal = function userStatusModal(field, lang) {
  lang = lang === "en" ? "en" : "cn";
  var params = {
    "noOperateContent": {
      "cn": "您长时间未执行操作，系统已自动退出",
      "en": "You haven't performed the operation for a long time, the system has exited automatically"
    },
    "otherLoginContent": {
      "cn": "当前帐号在其他设备上登录",
      "en": "Current account is logged in on other devices"
    },
    "warnMsg": {
      "cn": "点击确定重新登录",
      "en": "Click OK to log in again"
    },
    "submit": {
      "cn": "确定",
      "en": "Ok"
    }
  };
  return params[field][lang];
};

var _default = {
  userStatusModal: userStatusModal
};
exports.default = _default;