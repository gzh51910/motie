import React,{Component} from 'react';
import {Icon} from 'antd';
import {nsg,my} from '@/api'
import Pagelist from '../components/Pagelist'
import "../css/read.css"
import "../css/pagelist.css"
let defaultcol={
    background:"#f9f6f4",
    
    color:"#444"
}
let reversecol={
    background:"#111",
    color:"#eee"
}

class Read extends Component{
    state = {
        book:{},
        size:5,
        reverse:true,
        pagelist:[],
        hide:true
    }
    getdata=async (id=12954226)=>{
        let {data}=await nsg.get("/chapters/"+id)
        
        this.setState({
            book:data,
        })
    }
    componentDidMount(){
        let id=this.props.location.search.split("=")[1].split("&")[0];
        
        this.getdata(id)
    }
    goto= async()=>{
        this.setState({
            reverse:true
        })
        this.getdata(this.state.book.nextChapterId)
        console.log(this.state.book.nextChapterId);
        let username = localStorage.getItem("username")
        console.log(username);
        
        let bookread = this.state.book.nextChapterId 
        let data = await my.post(
            "/reg",
            {
            username, bookread
            }     
        );   
        console.log(data);
        
        /* 加用户名的请求 */
        window.scrollTo(0,0)
    }
goback=   async ()=>{
        if(this.state.book.preChapterId){
            this.getdata(this.state.book.preChapterId)
            console.log(this.state.book.preChapterId);
            let bookread = this.state.book.preChapterId 
            let username = localStorage.getItem("username")
            console.log(username);
            let data = await my.post(
            "/reg",
            {
            username, bookread
            }     
            
        );   
        console.log(data);
            window.scrollTo(0,0)
        }
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
    render(){

        let {book,size,reverse,pagelist,hide}=this.state
        console.log(book);
        
        return (
            <div className="readwrap">
                <div className="readtop">
                    <Icon type="left" className="readback" onClick={()=>{this.props.history.push(`detail?book=${this.props.location.search.split("=")[2]}`)}}/>{book.name}
                </div>
                <ul className="bookshow" style={{...reverse?defaultcol:reversecol}}>
                    <li className="readtools">
                        <span onClick={()=>{size<8?this.setState({size:size+=0.4}):""}}>A+</span>
                        <span onClick={()=>{size>3?this.setState({size:size-=0.4}):""}}>A-</span>
                        <span onClick={()=>{this.setState({reverse:!reverse})}}><Icon type="bulb" /></span>
                    </li>
                    {
                        book.content?book.content.split("<br/>").map((ele,idx)=>{
                            return <li key={idx} style={{textIndent: "36px",fontSize:size+"vw",lineHeight:size+5+"vw"}}>{ele}</li>
                        }):""
                    }
                    <li className="turnpage">
                        <span onClick={this.goback}>上一章</span>
                        <span onClick={()=>{this.getpage(this.props.location.search.split("=")[2])}}>目录</span>
                        <span onClick={this.goto}>下一章</span>
                    </li>
                </ul>
                <Pagelist pagelist={pagelist} hide={hide} tohide={this.tohide} className="pagelist"/>
            </div>
        )
    }
}

export default Read;