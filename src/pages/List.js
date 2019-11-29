import React,{Component} from 'react';
import {nsg} from '@/api'
import {Tabs} from 'antd';

class List extends Component{
    state = {
        datalist:[]
    }
    async componentDidMount(){
       
    

        let {datas} = await nsg.get({
           
        })
        console.log(datas);
        

    }
    
    render(){
        let {datalist} = this.state;
        return (
            <div>
                
            </div>
        )
    }
}

export default List;