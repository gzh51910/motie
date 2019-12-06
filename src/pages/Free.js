import React, { Component } from 'react';
import {my} from '@/api';
import CompleteFreeTow from '@@/CompleteFreeTow';
import HeadPart from '@@/HeadPart';
import CompleteFreeOne from '@@/CompleteFreeOne'; 
import FooterPart from '@@/FooterPart';
import FooterQr from '@@/FooterQr';
import '@/css/allbooks.css';
import '@/css/CompleteFreeOne.css';
import '@/css/GetList1.css';
class Free extends Component{
    state={
        dataList:[]
    }
async componentDidMount(){
    let {data:dataList}=await my.get("/freebook")
    this.setState({
        dataList
    })
    console.log("data=",dataList);
    

} 
    render(){
        let {dataList:data}=this.state

        return (
            <div id="FreeBook">
                <HeadPart/>
                {!(data=="")?
                <>
                    <CompleteFreeOne title={data[0].name} data={data[0].dataSourceList[0].dataList}/>
                    <CompleteFreeTow title={data[1].name} data={data[1].dataSourceList[0].dataList}/>
                    <CompleteFreeOne title={data[2].name} data={data[2].dataSourceList[0].dataList}/>
                    <FooterPart/>
                    <FooterQr/>
                </>
                :""}
                
        

            </div>
        )
    }
}

export default Free;