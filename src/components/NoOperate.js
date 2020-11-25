import { useState, useEffect, useRef } from 'react';
import { Modal, Button } from "antd";
import userStatusLang from "../sources/lang";

export default (props) => {
    const { modalCloseEvent = void 0, modalShowEvent = void 0, dispatch, lang="cn" } = props;
    const [ visible, setVisible ] = useState(false); // 弹窗
    const [ noOperateTime, setNoOperateTime ] = useState(props.noOperateTime || 1800000); // 默认30分钟

    const timer = useRef();

    useEffect(()=> {
    	listener(); // 初始化设定
    	document.body.addEventListener("click", listener);
    	document.body.addEventListener("keydown", listener);
    	document.body.addEventListener("mousemove", listener);
        document.body.addEventListener("mousewheel", listener);
        return ()=>{
            removeListener();
        }
    },[]);

    const removeListener = () => {
    	document.body.removeEventListener("click", listener);
    	document.body.removeEventListener("keydown", listener);
    	document.body.removeEventListener("mousemove", listener);
    	document.body.removeEventListener("mousewheel", listener);
        clearInterval(timer.current);
        timer.current = null;
    }

    const listener = () => {
    	timer.current && clearInterval(timer.current);
        localStorage.curTime = new Date().valueOf();
    	// 设置定时器
    	timer.current = setInterval(() => {
    		const nowTime = new Date().valueOf();
            const durTime = nowTime - parseInt(localStorage.curTime, 10);
    		if (durTime >= noOperateTime) {
                if(modalShowEvent && typeof modalShowEvent === "function"){
                    modalShowEvent();
                }else if(dispatch){
                    dispatch({
                        type: "login/signOut"
                    });
                }
    			removeListener();
    			setVisible(true);
    		}
    	}, 1000);
    }

    const goToLogin = () => {
        setVisible(false);
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

    return (
        <Modal
            className="user-operate-modal"
            visible={visible}
            closable={false}
            footer={null}
            width={450}
        >
            <div className="u-pic u-no-operate"></div>
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
                    onClick={goToLogin}
                >
                    {/* 确定 */}
                    {userStatusLang.userStatusModal("submit",lang)}
                </Button>
            </div>
        </Modal>
    );
}
