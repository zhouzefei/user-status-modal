import { PureComponent } from "react";
import NoOperate from "./components/NoOperate";
import MultiUser from "./components/MultiUser";
import "./index.less";

export default class UserStatusModal extends PureComponent {
    render(){
        const { props } = this;
        const { modalType="noOperate" } = props || {};
        let Modal = <NoOperate {...props}/>

        if(modalType==="multiUser"){
            Modal = <MultiUser {...props}/>
        }
        
        return (
            <div className="user-operate">
                { Modal }
            </div>
        );
    }
}
