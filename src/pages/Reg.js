import React,{Component} from 'react';
import '../css/reg.css';
import {ReactDOM,} from 'react-dom';
import {my} from '../api';
import axios from 'axios';
import {Link} from 'react-router-dom'

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    message
  } from 'antd';


class Reg extends Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async(err,values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            let { username, password, phone, email } = values;
            console.log(username, password, phone, email);
            let data = await my.post(
              "/reg",
              {
                username, password, phone, email
              }     
            );

            if (data.data.status === 1) {
              message.success('恭喜！注册成功！');
              this.props.history.push('/Login');
            }
            if (data.data.status === 0) {
              message.warning('用户名已存在！');
            }
            else {
              return false;
          }
          }
        });
      };
    
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('请确认您的账户密码是否一致!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };
    
      handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
            return (
                          <div className = 'reg-body'>
                                <div className = 'reg-title'>
                                <a href="#/Login"><Icon type="left" className = "icon"/></a>
                                <span>免费注册</span>   
                                </div>
                                <div className = 'reg-main'>
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                <Form.Item extra="请遵循国家相关法规命名,否则,我们有权终止您的账户服务" label={
                            <span>
                            用户名&nbsp;
                            <Tooltip title="您希望别人怎么称呼您呢?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                        >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入您的用户名!', whitespace: true }],
                        })(<Input />)}
                        </Form.Item>
                        <Form.Item label="手机号码">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入您的手机号码!' }],
                        })(<Input style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item label="账户密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                            {
                                required: true,
                                message: '请输出您的账户密码!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                        })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                            {
                                required: true,
                                message: '请确认您的账户密码是否一致!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item label="E-mail" extra="若您不慎忘记密码,可通过此邮箱找回">
                                {getFieldDecorator('email', {
                                    rules: [
                                    {
                                type: 'email',
                                message: '输入的电子邮箱地址无效!',
                            },
                            {
                                required: true,
                                message: '请输入您的电子邮箱地址!',
                            },
                            ],
                        })(<Input />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                            我已仔细阅读并且同意 <a href="">用户协议</a>
                            </Checkbox>,
                        )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            立即注册
                        </Button>
                        </Form.Item>
                    </Form>
                    );
                }
                </div>
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(Reg);
export default WrappedRegistrationForm;