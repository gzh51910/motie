import React,{Component} from 'react';
import '../css/Log.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox, Divider, Select, Row, Col, message} from 'antd';
import {my} from '../api';
import store from "@/store"

class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            let { password, username} = values;
            let data = await my.get(
                `/login?password=${password}&username=${username}`,  
            );
            console.log(data.data);
            
            if (data.data.status === 1) {
              let Authrization = data.data.token;
              localStorage.setItem("Authrization", Authrization);
              let { username } = values;
              store.dispatch({type:"setusername",username})
              
              localStorage.setItem("username", username);
              message.success('恭喜！登录成功！');
              console.log(this.props.location.state.from.pathname);
              
              // this.props.history.push(username)
              if(this.props.location.state){
                this.props.history.push(this.props.location.state.from.pathname);
              }else{
                this.props.history.push('/Mine');
              }
              
              
              
            }else {
              message.warning('登录失败！请检查您输入的账号或密码是否正确！');
            }
         };
      });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className = 'log-body'>
                <div className = 'log-title'>
                <a href="/"><Icon type="left" className = "icon"/></a>
                    <span>快捷登录</span>   
                </div>
                <div className = 'log-main'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请您输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '亲~请输入您的密码哦' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入您的密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
            <ul>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>七天免登录</Checkbox>)}
          <a className="login-form-forgot" href="" style={{ color: '#ee5048' }}>
            忘记密码
          </a>
          </ul>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
          登录
          </Button>
          <br></br>
           <span>在此</span> <a href="#/Reg" style={{ color: '#ee5048'}}>免费注册!</a>
        </Form.Item>
        </Form>
    </div>
    <div className = 'log-end'>
        <p><Divider style={{ color: '#999'}}>第三方账号登录</Divider></p>
        <ul>
        <Icon type="weibo-circle" theme="filled" style={{ color: '#FF3333'}} />
        <Icon type="wechat" theme="filled" style={{ color: '#00CC66'}} />
        <Icon type="alipay-square" theme="filled" style={{ color: '#1890ff'}}/>  
        </ul>
        <p className = 'log-tis'>
        登录即代表您已同意<em>《磨铁中文网用户协议》</em>
        </p>
    </div>
</div>


        )
    
    }
}
const WrappedLogin = Form.create({ name: 'normal_login' })(Login);

export default WrappedLogin;