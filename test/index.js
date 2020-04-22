import React, {PureComponent} from "react";
import ReactDOM from "react-dom";
import UserStatusModal from "user-status-modal";
import a from "../dist"
console.log(a)
class UserStatusModalExample extends React.Component {
	render(){
		return (
			<UserStatusModal
				lang="cn"
				modalType="multiUser"
				// showModal={true}
				// noOperateTime="1000" // 静置时间
				modalShowEvent={()=>{ // 弹窗回调
					console.log(1)
				}}
				modalCloseEvent={()=>{ // 点击弹窗确定回调
					console.log(2)
				}}
			/>
		)
	}
}

ReactDOM.render(<UserStatusModalExample />, document.getElementById("app"));
