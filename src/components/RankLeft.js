import React, { Component } from 'react';
import {my} from '@/api';
import {Tabs,Icon} from 'antd';
import store from '@/store'
import GetList from '@@/GetList';
import '../css/RankLeft.css';
import '../css/GetList1.css';
import '../css/List.css';

class RankLeft extends Component{
    static aaa(){
        console.log(this);
        
    }
    state={
        leftdata:["热销榜","点击榜","打赏榜","推荐榜","新书榜","更新榜","热度榜","财神榜","书评榜"],
        // activeKey:"",
        datalist:[],
        flag:false,
        xxx:false,
        show:true,
        url:"",
        type:store.getState()
    }
    // 获取排行页数据，加载下一页数据
    componentDidMount(){
        this.getRankLeftData("/hotrank");
        this.refs.rank.onscroll=async ()=>{
            // 滚动条(滚过)的高度(=body/html的高) + 现显示的页面的高度 == 整个页面的高度（一页的高度），请求下一页数据
            // documentElement== html
            console.log(1111111);
            
            let h=(document.body.scrollTop || document.documentElement.scrollTop)+window.screen.height;
            // 置顶：判断当前滚动条的高度》300时，显示置顶（）
            if(h - window.screen.height >300){
                this.setState({
                    show:false
                })
            }else{
                this.setState({
                    show:true
                })
            }
            // list.offsetHeight(最外层元素) == body的高度  ==整个页面总高度
            if(h+10>=this.refs.rank.offsetHeight){   //获取rank所在的标签的高度
                // console.log(1111);
                
                let {data} = await my.get(this.state.url,{
                    page:this.state.page,
                 })
                 this.setState({
                    //  获取（当前的数据+新一页的数据）
                     datalist:[...this.state.datalist,...data],
                     page:this.state.page+=1    //下一次发请求的页数
                 })
            }
            
        }
        
    }
    ClickTab(key){
        
        console.log(key);
        switch (key*1) {
            case 0:
                this.getRankLeftData("/hotrank");
                console.log(1122);
                
                break;

            case 1:
                this.getRankLeftData("/clickrank");
                break;
            
            case 2:
                this.getRankLeftData("/rewardrank");
                break;
            case 3:
                this.getRankLeftData("/introrank");
                break;
            case 6:
                this.getRankLeftData("/readrank");
                break;
        
            default:
                this.setState({
                    datalist:[],
                    xxx:true  //当没有书籍datalist时，背景图显示
                })
                break;
        }
        
    }
    async getRankLeftData(url){
        // http://118.31.77.168:3006/hotrank?page=1
        let {data} = await my.get(url,{
            "page":1,
        })
        this.setState({
            datalist:data,
            xxx:false,  //排行前三背景图隐藏
            url:url,
            page:2
        })
        window.scrollTo(0,0)
        // console.log(this.state.datalist);
        
    }
    // 头部男女生切换(子传父，定义子的函数)
    ClickTabTop(){

    }
    shouldComponentUpdate(p,s){
        console.log(p,s);
        
        return true
    }
    
    render(){
        console.log(store.getState(),"=======");
        let {leftdata,datalist,flag,xxx,show}=this.state;
        // console.log(datalist);

        return (
            <div id="rank-left" ref="rank">
                <div style={{display:xxx?"none":"block"}}>
                <img className="rank-background-img" style={{top:'15vw'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAACXCAMAAABncibLAAAAM1BMVEUAAAD84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eH84eHMQFkfAAAAEHRSTlMAQMCA8BDQoFAgcDCwkOBgJIlFGwAAAbBJREFUaN7t2ltuwyAUhGEDB3OPZ/+rbSvRl7RpYvl/qBRmAZ+MDgwS8obEheQ/kwgqmWauW14SpMUuYZozcVqQOC2J0+KuH0ExARigeYFaEqgFgVoWqDUDtXgTp8VdD4NiQjGhmFBMZ7cGpx0mTItdwrR8E6aVLlFaDBKllWSitKNLQrRydJMAzbnQ5xQvaa0Ob5q5pJU6lwZoxy5JiBaDSZSWTaK0mITkuwSZTAzUhkDNidQ8qRWRWkW1jmoe1QzVRGoN1TKqhbfRKqo5/ePdm1CtGNqWB6jNu5S8AZNx2peXh+e0GfcgJ7TnaaiWUS2gmke1G6qJ1ByqVVQbqOZRzUitiNQcqgVUS6i2o5pIrb2O7WBVSh0daSDPlTJYlVJBR4qeK09WpRJZlaroSB1ZlYpkVRo7UvZcoVV5oFXpVlWuqlxVuapyVeWqylWVqypXVa6qfPOqPDHSgY40k5ptpJZQzZGaR9+fHfc2Pj8Nq7f2mpaYDp9xZ3YHci/s8WWt2NMJTAxZ67jwi+x9LG8nU/xDK8TtfPKv3m1a59PGfjfI0bYria4G/5Ue6p/H8gP7c6KsWARVeQAAAABJRU5ErkJggg=="/>
                <img className="rank-background-img" style={{top:'57vw'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAACLCAMAAADWFH66AAAAM1BMVEUAAADy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8udKu8cLAAAAEHRSTlMAQIDwEMDgMKBgULAg0JBwyBA0WgAAAoNJREFUaN7tmcuuqzAMRR3nAYQA+/+/9l7pDCydlgZM9qDSWaNOumQ5juMEGUYK/2kykBBUcy4wSs6qYXoibVVN+QandjpWsw5U17ngAg5vBDBe3XbzDlWHFQBDHTLucUdMUacZ4KhrBEedVoCjDhEk9QKQ1DPcdM0s9QqWegZLPYOlVrDUFSx1izT1BpZawVJPoKkzTV1BUxeaesEIeEHjcdBx1RpCqPoyrT0sj7mK0TQCxqOaXtvvE1phPOilsb6LK35SR1xis5Dfu93bZUu9ZuzMh5nPq8CZj5LklGBqT31MYpztOF+qjysjhusMyPIRfaBunTHRr97F+LCOjlksJqda0UOlw+FQW9CEZbTCcxRf6O1w6RJP1OLch6/7+e64rtJlN/WdjKx9c4qnasmeVmosOFen+MRs/z45g9xm2T+POC07WsdLuz9LWMEvcrhiTuVUbUxqoSPOXfFrCfQfHI8bb46z4xXHYcZYM0mdMkjqaQNJfUQ41N7nqeEhG4OyTFGnHeCoa4Fb7X9dfLp8HPWUAYo6KcBRh4Ie/uXjqJcIjrplgKNWXMSxfBx1mgGO+ojgqMOGWwzPheEu5T7OUu4TdWwpG3MaWspGbq6zr08Jwgk5Hr7m2WdPpI+BaxNOlrcgnCzHZWxbNjRdE7fNkWRKx8iB1OTK4hpq+0RNpPY5N7nKTkiy3dAuU6r77vC82Zs5Opv90K/xeRKOuQQhmaFX6Jr98MwwM0kdQMDqmaJOGxhYR2KoAzjYsx9BXUGCFzQkgQUvH7Ap6U/9ow5gIYf9/qKEfKd6gfE9FSJgIbKChM0JBLVs4EAbFYDOVfz5iFNAQH5QgtweKPY8Xm20MJJ/DcXPOjNJRbgAAAAASUVORK5CYII="/>
                <img className="rank-background-img" style={{top:"99vw"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAACLCAMAAAAj6vUKAAAAM1BMVEUAAADy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8ufy8udKu8cLAAAAEHRSTlMAQMCA8DAQ4KBgUNCwkCBwRm2jmgAAAs5JREFUaN7t2lvOozAMBWDHuYckeP+rnYsqoc5fTDA9b3MW8CmFKBxq6FuZzrn5LSy55j3zJkeYh2/uwfJ8YTmPxXS+B4U0udGzohndVrJCGd04guJY3coKYnXTnkW+7+5B5PtuyyLfd1MXAbgtCMItIgA3bYJwYxaEG4M8iMYi3JQF4m4CcYdA3CYQNwWMOwTiTsG4BeNOwbgF5AaMW2U9G/9JXnL7ohlKOw6pNvKVu6j6RO+JRXXnEtvTp43EiutWFlvpc/wjN0Q6y1BcA3uENdfOkjO7kdRsJ266YCvpGScuZZUtl0X5zC0am9OV685cp98zs0ussnY3PmHJH+7iSbklhdP2mQ4PWslUe0nkH4t1tBR/0c/i20HdGy0mX/fq5Hb/Ny3RanZRXHtmwLgsELcIwk1FEK7LAnAbi3zRTe532of/e+xiHfyv9tx1XZRY3cgiAHcXQbhFIO4uEDcKxmWMGwXjFpCbMW4UjNtArge5/N+FujvITQHjUgW55EEutYxxKe0Z4C5Oicic2PxgzheuPW5k3bWnBoxLacO4lDLGJQdyabtyY/WdmUedt1yvual2OdLjDbedu7MEeY83X+CLk6o8duMmn1KMB/PlOKhZ75vOSkimJ+oVK+JNhVAfDK4vOMkHd4iWaimEC+WzW/r2SolJC2746Tq5SDP04pVXhmLobcedNF+Ijz95qRn5+zVzab4S0u2WuTZmGrdfktTdoG8J9chaLJ4h3mNltXcGp52PuqtnJK202l0Jfr6jUyms90bbuXvf3J/svh/o6n6wB++SQPJ6MAHcLoi8zjOAOwWRV3MFuJgL8aoqELeKQFzaQG4EueRBLhWQSxvITR3gAi6F9rZvD8+f33E8T3HKrMuaMCZ9SH0mc02nXbZY0W2fFyOwftsM5VipRrexra+z7PHWLNAX1sXMY3cPPn3vb9++M3P3vjptkb8AYMSb9jkZ8uoAAAAASUVORK5CYII="/>
                </div>
                <div className="noBooks-img" style={{display:!xxx?"none":"block"}}>
                    <img src="https://pic.motieimg.com/web-wechat/dist/static/img/none-logs-bg.98d1ed5.png"/>
                    <p>暂时没有此榜书籍</p>
                </div>
                <Tabs 
                    // defaultActiveKey={activeKey}
                    tabPosition='left'
                    style={{zIndex:99}}
                    // fn ==   ()=>{fn1(a)}  fn定义函数调用fn1，等fn触发时，才调用fn1
                    onChange={(key)=>{this.ClickTab(key)}}>
                        {
                        leftdata.map((item,idx) => (
                            <Tabs.TabPane tab={item} key={idx}>
                                
                                {/* {    双重循环的index冲突
                                    datalist.map((ele,index)=>{
                                        return (
                                            <div className="ListContents RankList" key={index+"x"}>
                                                <ul className="ListClear">
                                                    <GetList flag={flag} item={ele} />
                                                </ul>
                                            </div>
                                            
                                        )
                                        
                                    })
                                    
                                    
                                    // <GetList item={datalist} />
                                } */}
                            </Tabs.TabPane>
                        ))
                        } 
                </Tabs>
                {
                    datalist.map((ele,index)=>{
                        return (
                            <div className="ListContents RankList" key={index+"x"}>
                                <ul className="ListClear">
                                    <GetList flag={flag} item={ele} />
                                </ul>
                            </div>
                            
                        )
                        
                    })
                    // <GetList item={datalist} />
                }
                {/* 置顶 */}
                <Icon type="vertical-align-top" className="top-icon" style={{display:show?"none":"block"}} onClick={()=>{window.scrollTo(0,0)}}/>
                                         
            </div>
        )
    }
}
store.subscribe(()=>{
    console.dir(RankLeft.aaa());
    
})

export default RankLeft;