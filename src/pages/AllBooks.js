import React, { Component } from 'react';
import {my} from '@/api';
import '@/css/allbooks.css';
import '@/css/CompleteFreeOne.css';
import '@/css/GetList1.css'
import CompleteFreeOne from '@@/CompleteFreeOne';
import CompleteFreeTow from '@@/CompleteFreeTow';
import FooterPart from '@@/FooterPart';
import FooterQr from '@@/FooterQr';
import HeadPart from "@@/HeadPart";
class AllBooks extends Component{
    state={
        data:[]
    }
    async componentDidMount(){
        let {data}=await my.get("/finishbook");
        this.setState({
            data
        })
        console.log(11111,data[1].dataSourceList[0].dataList);
        
    }
    render(){
        let {data}=this.state
        
        return (
            <div id="AllBooks">
                <HeadPart/>
                {!(data=="")?
                <>
                    <CompleteFreeOne title={data[0].name} data={data[0].dataSourceList[0].dataList}/>
                    <CompleteFreeTow title={data[1].name} data={data[1].dataSourceList[0].dataList}/>
                    <CompleteFreeTow title={data[2].name} data={data[2].dataSourceList[0].dataList}/>
                <FooterPart/>
                <FooterQr/>
                </>
                :""}
                
            </div>
        )
    }
}

export default AllBooks;