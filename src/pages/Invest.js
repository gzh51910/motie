import React,{Component} from 'react';
import '../App.scss';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

class Invest extends Component{
    state = {
        
      };




    render(){
        const success = () => {
            message.success('恭喜！充值1亿成功');
          };
        return (
            <div className = 'Invest-body'>
             <div className = 'Invest-title'>
             <a href="#/Mine"><Icon type="left" className = "icon"/></a>
                    <span>充值</span>   
                </div>
                <div className = 'Invest-main'>
                    <div className = 'Invest-all'>
                        账户余额：<span>0</span>磨铁币
                        <p>
                            选择充值金额
                        </p>
                </div>
                <div className = 'Invest-opt'>
                    <ul>
                        <li>
                            <h3>20元</h3>
                            <em>2000磨铁币</em><span>送2000阅读券</span>
                        </li>
                        <li>
                        <h3>50元</h3>
                            <em>5000磨铁币</em><span>送6000阅读券</span>
                        </li>
                        <li>
                        <h3>75元</h3>
                            <em>7500磨铁币</em><span>送1000阅读券</span>
                        </li>
                        <li>
                        <h3>100元</h3>
                            <em>1000磨铁币</em><span>送1800阅读券</span>
                        </li>
                    </ul>
                </div>
                <div className = 'Invest-wei'>
                <em><Icon type="wechat" />微信支付</em>
                <em>
                <Icon type="alipay-circle" />支付宝
                </em>
                </div>
                <div className = 'Invest-btn' onClick={success}>
                <p>
                    充值
                 </p>
            </div>
         </div>
            <div className = 'Invest-end'>
                 <h3>
                     温馨提示
                 </h3>
                 <p>
                     若充值后余额长时间没有变化,请致电客服。
                 </p>
                 <span>
                     客服电话:&nbsp;&nbsp;<em>010-84242006</em>&nbsp;&nbsp;&nbsp;
                     QQ:&nbsp;&nbsp;<em>3519233850</em> 
                 </span>
            </div>

        </div>
        )
    }
}

export default Invest;