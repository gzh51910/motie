import React,{Component} from 'react';
import {nsg} from '@/api';
import {Icon,Button,Radio,Divider} from 'antd';


class Xiaofei extends Component{
    state = {
       
    }
  

    async componentDidMount(){
        
    }
    
    render(){
       
        return (
            <div className = 'xiaof-body'>
                <div className = 'xiaof-title'>
                <a href="#/Mine">
                <Icon type="left" className = "icon"/>
                </a>
                    <span>消费记录</span>  
                </div>
                <div className = 'xiaof-main'>
                    <p></p>
                    <span>
                        您暂时没有消费记录(-_-)
                    </span>
                </div>
            </div>
        )
    }
}

export default Xiaofei;