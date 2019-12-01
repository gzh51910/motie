import React, { Component } from 'react';
import {my} from '@/api';
import {Tabs} from 'antd';
import GetList from '@@/GetList';
import '../css/RankLeft.css';
import '../css/GetList1.css';
import '../css/List.css';
class RankLeft extends Component{
    state={
        leftdata:["热销榜","点击榜","打赏榜","推荐榜","新书榜","更新榜","热度榜","财神榜","书评榜"],
        // activeKey:"",
        datalist:[]
    }
    async componentDidMount(){
        let {data} = await my.get("/hotrank",{
            page:1,
        })
        this.setState({
            datalist:data
        })
        console.log(this.state.datalist);
        
    }
    render(){
        
        let {leftdata,datalist}=this.state;
        console.log(datalist);

        return (
            <div id="rank-left">
                <Tabs 
                    // defaultActiveKey={activeKey}
                    tabPosition='left'>
                    {/* onChange={this.changeType} */}
                        {
                        leftdata.map((item,idx) => (
                            <Tabs.TabPane tab={item} key={idx}>
                                {
                                    datalist.map((ele,index)=>{
                                        return (
                                            <div className="ListContents RankList" key={index+"x"}>
                                                <ul className="ListClear">
                                                    <GetList item={ele} />
                                                </ul>
                                            </div>
                                            
                                        )
                                        
                                    })
                                    
                                    
                                    // <GetList item={datalist} />
                                }
                            </Tabs.TabPane>
                        ))
                        } 
                </Tabs>
            </div>
        )
    }
}


export default RankLeft;