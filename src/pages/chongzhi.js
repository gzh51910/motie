import React,{Component} from 'react';
import {nsg} from '@/api';
import {Icon,Button,Radio,Divider} from 'antd';

class Chongzhi extends Component{
    state = {
       
    }
  

    async componentDidMount(){
        
    }
    
    render(){
       
        return (
            <div className = 'chong-body'>
                <div className = 'chong-title'>
                <Icon type="left" className = "icon"/>
                    <span>充值记录</span>  
                </div>
                <div className = 'chong-main'>
                    <p></p>
                    <span>
                        您暂时没有充值记录(-_-)
                    </span>
                </div>
            </div>
        )
    }
}

export default Chongzhi;