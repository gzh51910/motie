import React from 'react';
import {Tabs} from  'antd';
import store from '@/store'
const {TabPane} = Tabs;
import '../css/RankTop.css'






function RankTop(props){
    function goto(data){
        history.pushState(`/ranknv`)
    }
    return (
        <div id="rank-top" >
            <Tabs defaultActiveKey="1" onChange={(e)=>{store.dispatch({type:e}) ;console.log(store);    }}>
                <TabPane  tab="男生" key="男">
                </TabPane>
                <TabPane  tab="女生" key="女">
                </TabPane>     
            </Tabs>
        </div>
    )
}

export default RankTop;