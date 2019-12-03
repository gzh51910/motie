import React,{Component} from 'react';
import {nsg} from '@/api';
import {Icon,Button,Radio,Divider} from 'antd';

class Huodong extends Component{
    state = {
       
    }
  

    async componentDidMount(){
        
    }
    
    render(){
       
        return (
            <div className = 'huo-body'>
                <div className = 'huo-title'>
                <a href="#/Mine">
                <Icon type="left" className = "icon"/>
                </a>
                    <span>活动</span>  
                </div>
                <div className = 'huo-main'>
                    <p></p>
                    <span>
                        您暂时没有活动记录(-_-)
                    </span>
                </div>
            </div>
        )
    }
}

export default Huodong;