import ReactDOM from "react-dom";
import { NoOperate, MultiUser } from "../src/index"; //"user-status-modal";
const UserStatusModalExample = () => {
    return (
        <MultiUser
            lang="cn"
            showModal={true}
            noOperateTime="100" // 静置时间
            modalShowEvent={()=>{ // 弹窗回调
                console.log(1)
            }}
            modalCloseEvent={()=>{ // 点击弹窗确定回调
                console.log(2)
            }}
        />
    )
}

ReactDOM.render(<UserStatusModalExample />, document.getElementById("app"));
