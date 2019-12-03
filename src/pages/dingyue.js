import React,{Component} from 'react';
import {nsg} from '@/api';
import {Icon,Button,Radio,Divider} from 'antd';

class Dingyue extends Component{
    state = {
       
    }
  

    async componentDidMount(){
        
    }
    
    render(){
       
        return (
            <div className = 'ding-body'>
                <div className = 'ding-title'>
                <a href="#/Mine">
                <Icon type="left" className = "icon"/>
                </a>
                    <span>订阅</span>  
                </div>
                <div className = 'ding-main'>
                    <p></p>
                    <span>
                        您暂时没有订阅记录(-_-)
                    </span>
                </div>
            </div>
        )
    }
}

export default Dingyue;