import React, { Component } from 'react';
import {my} from '@/api'
import {Icon} from 'antd';
import "../css/detail.css"
import { Item } from 'rc-menu';
import { relative } from 'path';
import Detailtop from '../components/Detailtop';
import Pagelist from '../components/Pagelist'
let Styles = {
    mt:{
        marginTop:20
    },
    pd:{
        padding:15
    }
}

class Detail extends Component {
    state = {
        data: {},
        commedList:[],
        detail:[],
        pagelist:[],
        hide:true
    }
    getData = async (id=152278) => {
        let data = await my.get("/detail",{
            id:153810
        });
        let view = await my.get("/view");
        
        this.setState({
            detail:data.data[0],
            view:view.data,
        })  
    }
    
    componentDidMount() {
        this.getData()
    }
    shouldComponentUpdate(p,s){
        console.log(p,s,"====");
        return true
    }
    goto(id){
        
        this.getData(id)
    }
    tohide=()=>{
        this.setState({hide:true})
    }
    getpage=async ()=>{
        if(this.state.pagelist==""){
            let pagelist = await my.get("/pagelist",{
                id:153810
            });
            this.setState({
                pagelist:pagelist.data[0].data
            })
        }

        this.setState({
            hide:false,
        })
        
    }
    render() {
        let {detail,view,pagelist,hide}=this.state;
        
        return (
            <div style={{position:"relative"}}>
                <div style={{position:"relative"}}>
                    <img src={detail.icon} className="bgimg"/>
                    {/* <div className="detailtop">
                        <Icon type="left" className="back"/>
                        作品详情
                        <Icon type="home" className="ricon"/>
                        <Icon type="search" className="ricon"/>
                    </div> */}
                    <Detailtop name="作品详情"/>
                    <div className="bookwrap">
                    <div className="bookdetail clear">
                        <img src={detail.icon}/>
                        <div>
                            <p className="bookname">{detail.name}</p>
                            <div>
                                <span>{detail.authorName}</span> | <span>{detail.sortName}</span> | <span>{detail.status}</span>
                            </div>
                            <div>
                                <span>{detail.words}</span> | <span>{detail.discountPrice}</span>
                            </div>
                            <p>粉丝数：{detail.followCount}</p>
                            <p>点击数：{detail.visitCount}</p>
                        </div>
                    </div>
                    <div className="bookbtn">
                        <span>加入书架</span>
                        <span>立即阅读</span>
                    </div>
                    <div className="bookct">
                        <span onClick={()=>{console.log(this.props.history.push("/reward"))}}><Icon type="dollar" className="cticon" />打赏(<em>{detail.reward}</em>)</span>
                        <span><Icon type="like" className="cticon"/>推荐(<em>{detail.supportCount}</em>)</span>
                    </div>
                </div>
                </div>
                <div className="bookdesc">
                    <div className="desctxt">
                        <p >
                            {detail.introduce}
                        </p>
                        <div onClick={this.getpage}>
                            <span>目录</span>连载至：{detail.lastChapterList?detail.lastChapterList[0].name:""}
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <h3>看过这本书的人还看了</h3>
                    <ul className="introlist">
                        {
                            view?view.map((ele,index)=>{
                                return <li key={index} onClick={this.goto.bind(this,ele.id)}>
                                    <img src={ele.icon} />
                                    <p>{ele.name}</p>
                                </li>
                            }):""
                        }
                    </ul>
                </div>
                <div className="content">
                   <h3>书评
                       <hr className="line"/>
                   </h3>
                   
                    <ul className="contentlist clear">
                        {
                            detail.reviewList?detail.reviewList.map((ele,idx)=>{
                                return <li key={idx} className="contentmsg clear">
                                    <div className="userico">
                                        <img src={ele.userIcon} />
                                    </div>
                                    <div className="saymsg">
                                        <p>{ele.userName}</p>
                                        <p>{ele.content}</p>
                                        <p >
                                            <span>{ele.reviewShowTime}</span>
                                            <span style={{float:"right"}}><Icon type="message" style={{padding:"0 2vw"}}/>{ele.replyCount}</span>
                                        </p>
                                    </div>
                                </li>
                            }):''
                        }
                    </ul>
                </div>

                <Pagelist pagelist={pagelist} hide={hide} tohide={this.tohide} className="pagelist"/>
            </div>
        )
    }
}

export default Detail;