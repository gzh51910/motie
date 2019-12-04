import React,{Component} from 'react';
import {nsg} from '@/api';
import {Icon,Button,Radio,Divider} from 'antd';
import Axios from 'axios';

class sou extends Component{
    state = {
       datas:[],
    }
  

    async componentDidMount(){
let data = await Axios.get('http://118.31.77.168:3006/sort')


let datas= data.data



        this.setState({
                datas
        })
        
    }
    
    render(){
       let {datas} = this.state
       console.log(datas);
       
        return (
            <div className = 'xiao-body'>
               sousuo

            </div>
        )
    }
}

export default sou;