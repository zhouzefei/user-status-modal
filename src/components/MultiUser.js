import { PureComponent } from 'react';
import { Modal, Button } from "antd";
import userStatusLang from "../sources/lang";

export default class MultiUser extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            visible: props.hasOwnProperty("showModal") ? showModal : true
        }
    }
    goToLogin = () => { 
        const { modalCloseEvent = void 0, dispatch } = this.props;
        this.setState({
            visible: false
        })
        if(modalCloseEvent && typeof modalCloseEvent === "function"){
            modalCloseEvent();
        }else if(dispatch){
            dispatch({
                type: "login/goLogin"
            });
        }else {
            window.location.href ="/user/login";
        }
    }
    render(){
        const { lang="cn" } = this.props || {};
        const { visible } = this.state;
        return (
            <div className="user-operate">
                <Modal
                    className="user-operate-modal"
                    visible={visible}
                    closable={false}
                    footer={null}
                    width={450}
                >
                    <div className="u-pic"></div>
                    <p>
                        {/* 当前帐号在其他设备上登录 */}
                        {userStatusLang.userStatusModal("otherLoginContent",lang)}
                    </p>
                    <p>
                        {/* 点击确定重新登陆 */}
                        {userStatusLang.userStatusModal("warnMsg",lang)}
                    </p>
                    <div className="btn">
                        <Button 
                            type="primary" 
                            onClick={this.goToLogin}
                        >
                            {/* 确定 */}
                            {userStatusLang.userStatusModal("submit",lang)}
                        </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}
