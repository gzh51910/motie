import React,{Component} from 'react';
import '../css/reg.css';
import ReactDOM from 'react-dom';

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
  } from 'antd';

class Reg extends Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
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
          callback('Two passwords that you enter is inconsistent!');
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

        const residences = [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ];
    
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
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86',
        })(
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            <Option value="87">+852</Option>
            <Option value="87">+853</Option>
            <Option value="87">+886</Option>
            <Option value="87">+82</Option>
            <Option value="87">+81</Option>
            <Option value="87">+839</Option>
            <Option value="87">+80</Option>
          </Select>,
        );
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
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入您的用户名!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="手机号码">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的手机号码!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
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
        <Form.Item label="手机验证码">
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