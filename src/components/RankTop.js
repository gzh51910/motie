import React from 'react';
import {Tabs} from  'antd';
const {TabPane} = Tabs;
import '../css/RankTop.css'

function RankTop(){
    return (
        <div id="rank-top" >
            <Tabs defaultActiveKey="1" >
                <TabPane tab="男生" key="1" >
                </TabPane>
                <TabPane tab="女生" key="2">
                </TabPane>     
            </Tabs>
        </div>
    )
}

export default RankTop;