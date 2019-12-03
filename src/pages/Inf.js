import React,{Component} from 'react';
import '../css/Inf.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


class Inf extends Component{

    render(){
        return (
            <div className = 'Inf-body'>
                <div className = 'Inf-title'>
                <a href="#/Mine">
                <Icon type="left" className = "icon"/>
                </a>
                    <span>个人资料</span>   
                </div>
                <div className = 'Inf-icon'>
                    <p>
                        头像
                    </p>
                    <img src="https://cdn.motieimg.com/people/mt_person_ico.png?x-oss-process=style/user_big"/>
                </div>
                <div className = 'Inf-id'>
                    <p>ID</p>
                    <span>41259865</span>
                </div>
                <div className = 'Inf-name'>
                    <p>昵称</p>
                    <span>修改
                    <Icon type="right" />
                    </span>
                </div>
                <div className = 'Inf-sex'>
                    <p>性别</p>
                    <span>保密
                    <Icon type="right" />
                    </span>
                </div>
            </div>

        )
    
    }
}

export default Inf;