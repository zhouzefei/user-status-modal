const userStatusModal = (field,lang) => {
	lang = lang === "en" ? "en" : "cn";
	let params = {
		"noOperateContent": {
			"cn": "您长时间未执行操作，系统已自动退出",
			"en": "You haven't performed the operation for a long time, the system has exited automatically"
		},
		"otherLoginContent": {
			"cn": "当前帐号在其他设备上登录",
			"en": "Current account is logged in on other devices"
        },
        "warnMsg":{
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

export default {
	userStatusModal
};
