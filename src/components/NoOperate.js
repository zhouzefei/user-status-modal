import { PureComponent } from 'react';
import { Modal, Button } from "antd";
import userStatusLang from "../sources/lang";

export default class NoOperate extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            visible: false, // 弹窗
            noOperateTime: props.noOperateTime || 1800000 // 默认30分钟
        }
    }

    componentDidMount() {
    	this.listener(); // 初始化设定
    	document.body.addEventListener("click", this.listener);
    	document.body.addEventListener("keydown", this.listener);
    	document.body.addEventListener("mousemove", this.listener);
    	document.body.addEventListener("mousewheel", this.listener);
    }
   
    componentWillUnmount() {
    	this.removeListener();
    }

    removeListener = () => {
    	document.body.removeEventListener("click", this.listener);
    	document.body.removeEventListener("keydown", this.listener);
    	document.body.removeEventListener("mousemove", this.listener);
    	document.body.removeEventListener("mousewheel", this.listener);
        clearInterval(this.timer);
        this.timer = null;
    }

    listener = () => {
    	this.timer && clearInterval(this.timer);
        localStorage.curTime = new Date().valueOf();
        const { modalShowEvent = void 0, dispatch } = this.props;
    	// 设置定时器
    	this.timer = setInterval(() => {
    		const nowTime = new Date().valueOf();
            const durTime = nowTime - parseInt(localStorage.curTime, 10);
            const { noOperateTime } = this.state;
    		if (durTime >= noOperateTime) {
                if(modalShowEvent && typeof modalShowEvent === "function"){
                    modalShowEvent();
                }else if(dispatch){
                    dispatch({
                        type: "login/signOut"
                    });
                }
    			this.removeListener();
    			this.setState({
                    visible: true
                })
    		}
    	}, 1000);
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
                        {/* 您长时间未执行操作，系统已自动退出 */}
                        {userStatusLang.userStatusModal("noOperateContent",lang)}
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
