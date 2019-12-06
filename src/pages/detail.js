import React, { Component } from 'react';
import {my,nsg} from '@/api'
import {Icon} from 'antd';
import "../css/detail.css"
import { Item } from 'rc-menu';
import { relative } from 'path';
import Detailtop from '../components/Detailtop';
import Pagelist from '../components/Pagelist'
import FooterQr from '../components/FooterQr';
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
            id:id
        });
        let view = await my.get("/view");
        
        this.setState({
            detail:data.data[0],
            view:view.data,
            id:data.data[0].id
        })  
    }
    componentDidMount() {
        let id=this.props.location.search.split("=")[1];
        this.getData(id)
        
    }
    goto(id){
        this.setState({pagelist:[]})
        this.getData(id)
    }
    tohide=()=>{
        this.setState({hide:true})
    }
    getpage=async (id=153810)=>{  
        if(this.state.pagelist==""){
            let pagelist = await my.get("/pagelist",{
                id
            });
            this.setState({
                pagelist:pagelist.data[0].data
            })
        }

        this.setState({
            hide:false,
        })
        
    }
    booksheif= async (id)=>{
        let books = []
        books.push(id)

        let username = localStorage.getItem("username")
        // let username = window.localStorage.username  /*  用户名字 */
        let name = await my.get(`/bookshelf?username=${username}`);
        console.log(name);
        let book = name.data[0].book
        book.push(...books)
        let data = await my.post(
            "/addbook",
            {
            username, book
            }     
        );    
        console.log(data);
    }
    render() {
        let {detail,view,pagelist,hide}=this.state;    
     
        return (
            <div style={{position:"relative"}}>
                <div style={{position:"relative"}}>
                    <img src={detail.icon} className="bgimg"/>
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
                        <span onClick={()=>{this.booksheif(detail.id)}}>加入书架</span>
                        <span onClick={()=>{ this.props.history.push(`/read?id=${detail.firstChapterId}&bookid=${detail.id}`)} }>立即阅读</span>
                    </div>
                    <div className="bookct">
                        <span onClick={()=>{this.props.history.push("/reward")}}><Icon type="dollar" className="cticon" />打赏(<em>{detail.reward}</em>)</span>
                        <span><Icon type="like" className="cticon"/>推荐(<em>{detail.supportCount}</em>)</span>
                    </div>
                </div>
                </div>
                <div className="bookdesc">
                    <div className="desctxt">
                        <p >
                            {detail.introduce}
                        </p>
                        <div onClick={()=>{this.getpage(detail.id)}}>
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
                <FooterQr />
            </div>
        )
    }
}

export default Detail;