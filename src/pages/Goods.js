import React, { Component } from 'react';
import {nsg} from '@/api'

let Styles = {
    mt:{
        marginTop:20
    },
    pd:{
        padding:15
    }
}

class Goods extends Component {
    state = {
        data: {},
        commedList:[]
    }
    getData = async (goods_id) => {
        let {datas} = await nsg.get({
           
        });

       
    }
    goto = (id)=>{
        this.props.history.push(`/goods/${id}`);
    }
    
    componentDidMount() {
        
    }


    componentDidUpdate(prevProps){

    }
    render() {
     
        return (
            <div>
              
            </div>
        )
    }
}

export default Goods;