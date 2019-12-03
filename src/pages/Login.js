import React,{Component} from 'react';
import '../css/Log.css';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox, Divider, Select, Row, Col} from 'antd';

class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86',
        })(
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>,
        );
        return (
            <div className = 'log-body'>
                <div className = 'log-title'>
                <a href="/"><Icon type="left" className = "icon"/></a>
                
                    <span>快捷登录</span>   
                </div>
                <div className = 'log-main'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item label="手机号码">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的手机号码' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
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
        <Form.Item label="验证码">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入您获得的验证码！' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>发送验证码</Button>
            </Col>
          </Row>
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
          <a href="#/Mine">登录</a>
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