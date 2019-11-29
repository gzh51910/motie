import React,{Component} from 'react';
import '../App.scss';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component{
    render(){
        return (
            <div className = 'log-body'>
                <div className = 'log-title'>
                <Icon type="left" className = "icon"/>
                    <span>手机快捷登录/注册</span>   
                </div>
            </div>


        )
    
    }
}

export default Login;