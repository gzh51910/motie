import React,{Component} from 'react';
import { Radio, Input,Icon,Carousel } from 'antd';
import Axios from 'axios';

import '../css/found.css'
import { loopMenuItem } from 'rc-menu/lib/util';
class Reg extends Component{
    state = {
        value: 1,
        discoveryBook:[],
        audioBook:[],
        hotBooks:[],
        shortArticleList:[],
        hotSpecialVO:[],
        lastestSpecialVO:[],
        a:0,
        TTdatas:[],
        TTshort:[],
        TThot:[],
        POP:[],
        TTtoday:[],
        lastestSpecialVO1:[],


    }
    async componentDidMount(){

        let datas = await Axios.get(' https://app2.motie.com/h5/discovery/list');
        let short = await Axios.get('https://app2.motie.com/h5/discovery/short_book/list');
        let hot = await Axios.get(`https://app2.motie.com/h5/discovery/hot_book/list?bookId=157368`);
        let today = await Axios.get(`https://app2.motie.com/h5/today/book`);
        
        let TTdatas = datas
        let TTtoday = today
        let TTshort= short
        let TThot = hot
        let discoveryBook = datas.data.data.discoveryBook
        let audioBook = datas.data.data.audioBook
        let hotBooks = datas.data.data.hotBooks
        let hotSpecialVO = datas.data.data.hotSpecialVO
        let shortArticleList = datas.data.data.shortArticleList
        let lastestSpecialVO = datas.data.data.lastestSpecialVO.bookList
        let lastestSpecialVO1 = datas.data.data.lastestSpecialVO

console.log(datas);

        // console.log(TTdatas,TTshort,TThot);
    this.setState({
        discoveryBook,
        audioBook,
        hotBooks,
        hotSpecialVO,
        shortArticleList,
        lastestSpecialVO,lastestSpecialVO1,
        TTdatas,
        TTshort,
        TThot,
        TTtoday

    })
    }
    getbookid = (id) =>{
        // console.log("booksid:",id);
        this.props.history.push(`/detail?book=${id}`)
        clearInterval(this.timer)
    }
    
    componentWillMount () {
        let a = 0;
        // let upl = this.refs.upl
       
        
        
       
        this.timer = setInterval(() => {
            // console.log(this.div.style.width);
            // this.div.style.transition="0.3s"
            this.div.style.left= -a + "px";
            let divwidth = this.div.style.width.slice(0,-2)/2
            // console.log(divwidth*1,this.div.style.width);       
            a+=2     
        // console.log(a);
        // console.log("divwidth::",divwidth,"a:::",a);
        
            if(divwidth <= a){
                // console.log(a);
                // clearInterval(this.timer)
                // this.componentWillUnmount()
              
                    // this.div.style.transition="0s"
               
                    a = 0,
                    //   console.log(a)
                    
                    // clearInterval(this.timer)
                    this.setState({a})
                    
             
                   
                    
             
              
            }
        this.setState({a})
        }, 50)
        // clearInterval(this.timer);
 
     }
   
    list(id,TTdatas,TTshort,TThot,today){
        // console.log("id::::",id,TTdatas,TTshort,TThot,);
        
        
        this.refs.cover.style.left="0%"
        if(id==1){
        
            let  POP =  today.data.data.list
            console.log(POP);
            
          
            
              this.setState({
                  POP
              })
        }else if(id==2){
            let  POP =  TTdatas.data.data.lastestSpecialVO.bookList
          
            console.log(POP);
            
              this.setState({
                  POP
              })
        }else if(id==3){
            let  POP =  TTshort.data.data
            
            console.log(POP);
            
              this.setState({
                  POP
              })
        }else if(id==4){
            let  POP = TThot.data.data
            console.log(POP);
            
              this.setState({
                  POP
              })
        }
        
    }
    discover(){
        this.refs.cover.style.left="102%"
    }
       


    render(){
     let {discoveryBook,audioBook,hotBooks,hotSpecialVO,lastestSpecialVO1,shortArticleList,lastestSpecialVO,TTdatas,TTshort,TThot,TTtoday,POP,a} = this.state
     
    
  
     
        /* 
        https://app2.motie.com/h5/discovery/list 请求地址1
        https://app2.motie.com/h5/today/book 请求地址二
        */
        return (
            
           /* discoverybook */
           /* book今日书单 */
           /* lastestSpecialVO 今日专题 */
           /* https://app2.motie.com/h5/discovery/short_book/list 今日短篇 */
           /* https://app2.motie.com/h5/discovery/hot_book/list?bookId=157368 热门题材 */
           <div >
            <div className="discover" style={{position:"absolute",width:"100%"}}>
               <h3 className="header_h3">发现<Icon type="eye" theme="filled" /></h3>
                {/* header */}
                <div className="top-pic"  onClick={()=>{this.getbookid(discoveryBook.bookId)}}>
                    <img src="100%"  src={discoveryBook.bigImgUrl}></img>
                    <div className="dis-pic-info">
                        <dl>
                            <p>
                            {
                                discoveryBook.intro
                            }
                            </p>
                        </dl>
                    </div>
                </div>    
                {/* audioBook */}
                <div  className="dis-item">
                    <div  className="today-list item-list">
                        <h3 >今日听书<Icon type="dash" onClick={()=>{this.list()}} /></h3> 
                        <h1 >解放双手，聆听这个世界</h1> 
                        <div  className="audio"  onClick={()=>{this.getbookid(audioBook.id)}}>
                            <div  className="audio-img">
                            <Icon type="play-circle" theme="filled" /> 
                                <img src={audioBook.icon}/>
                            </div> 
                                    <div  className="audio-info"  onClick={()=>{this.getbookid(audioBook.id)}}>
                                        <h3 >{audioBook.name}</h3>
                                         <p  className="audio-auth">{audioBook.actorName}</p> 
                                         <p >共{audioBook.count}集 | 已完结</p>
                                    </div>
                        </div>
                         <p  className="audio-intro">
                           {
                               audioBook.introduction
                           }
                           </p>
                    </div>
                </div>

                {/* todaybookList */}
                <div  className="dis-item">
                    <div  className="today-list item-list">
                        <h3 >今日书单<Icon type="dash" onClick={()=>{this.list(1,TTdatas,TTshort,TThot,TTtoday)}}  /></h3> 
                        <h1 >今日九点为你推荐</h1> 
                        <div  className="audio">
                            {/*  */}
                            <div  className="audio-img"  onClick={()=>{this.getbookid(102744)}}>
                            
                                <img src="https://cdn.motieimg.com/book/0010/102744/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170"/>
                            </div> 
                                    <div  className="audio-info"  onClick={()=>{this.getbookid(102744)}}>
                                        <h3 >重生主神混都市</h3>
                                        <p  className="audio-intro">
                                        伟大的主神在冲刺主宰的过程中因情缘未了重生到了2009年的地球，且看....</p>
                                    </div>

                            <div  className="audio-img"  onClick={()=>{this.getbookid(110387)}}>
                            
                                <img src="https://cdn.motieimg.com/book/0011/110387/3.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170"/>
                            </div> 
                                    <div  className="audio-info"  onClick={()=>{this.getbookid(100387)}}>
                                        <h3 >重生之至尊学生</h3>
                                        <p  className="audio-intro">
                                        如果人生可以重来，让你回到小时候，那些人生遗憾是否能挽回？看看幽心的....</p>
                            </div>
                           
                            {/*  */}

                        </div>
                         
                    </div>
                </div>

                {/* lastestSpecialVO */}
                <div  className="dis-item">
                    <div  className="today-list item-list">
                        <h3 >今日专题<Icon type="dash"  onClick={()=>{this.list(2,TTdatas,TTshort,TThot,TTtoday)}}  /></h3> 
                        <h1 >{lastestSpecialVO.title}</h1> 
                        <div data-v-6b4d526b="" className="vux-warp2">
                            <div className="sadafasf">
                                {/* 加一个判断 */}
                                <div className='dsadexxf'>
                                <ul ref={(ref)=>this.div=ref} id="upl" className="vux-ul-item clearfix upl" style={{width:`${192*lastestSpecialVO.length}px`,position:'relative',left:"0px",transition:"0s"}}>
                                    
                                        
                                        {
                                        lastestSpecialVO.map(item=>< li key={item.icon}   onClick={()=>{this.getbookid(item.bookId)}} className="vux-li-item"><img src={item.icon}/></li>)

                                        }
                                         
                                         {
                                        lastestSpecialVO.map(item=><li key={item.icon}   onClick={()=>{this.getbookid(item.bookId)}} className="vux-li-item"><img src={item.icon}/></li>)

                                        }
                                        {/* {
                                            console.log(this.div,a)
                                            
                                            
                                        }
                                    */}
                                  
                                </ul>
                            </div> 
                                <div style={{float: "left", overflow: 'hidden'}}></div>
                            </div>
                        </div>
                        <p className="scroller-info">{lastestSpecialVO.subTitle}</p>
                    </div>
                </div>

                {/* shortArticleList */}
                <div  className="dis-item">
                    <div  className="today-list item-list">
                        <h3 >今日短篇<Icon type="dash"  onClick={()=>{this.list(3,TTdatas,TTshort,TThot,TTtoday)}} /></h3> 
                        <h1 >每天读点故事</h1> 
                        <div  className="audio">
                            {/* shortArticleList */}
                            
                                    {
                               shortArticleList.map(item => <div  key={item.articleId}  onClick={()=>{this.getbookid(item.articleId)}}>
                            <div  className="audio-img">
                           
                                <img key={item.bookName}  src={item.coverUrlSmall}/>
                            </div> 
                                    <div  key={item.bookId}  onClick={()=>{this.getbookid(item.articleId)}} className="audio-info">
                                        <h3 key={45125115} >{item.title}</h3>
                                        <p key={515461654}  style={{overflow: "hidden", height: "9vw"}} className="audio-intro">
                                            {item.intro}</p>
                                    </div>
                               </div>)
                           }
                            
                            
                            {/*  */}

                        </div>
                         
                    </div>
                </div>
                {/*hotBooks  */}
                <div  className="dis-item">
                    <div  className="today-list item-list">
                        <h3 >热门题材<Icon type="dash" onClick={()=>{this.list(4,TTdatas,TTshort,TThot,TTtoday)}}  /></h3> 
                        <h1 >有关古代言情的作品</h1> 
                        <div  className="audio">
                            {/*  */}
                           {
                               hotBooks.map(item => <div  key={item.bookName} onClick={()=>{this.getbookid(item.bookId)}} >
                            <div  className="audio-img">
                           
                                <img key={item.bookName}  src={item.bigImgUrl}/>
                            </div> 
                                    <div  key={item.bookId}  onClick={()=>{this.getbookid(item.bookId)}}  className="audio-info">
                                        <h3 key={45125115} >{item.bookName}</h3>
                                        <p key={515461654}  style={{overflow: "hidden", height: "9vw"}} className="audio-intro">
                                            {item.intro}</p>
                                    </div>
                               </div>)
                           }
                            

                            
                            {/*  */}

                        </div>
                         
                    </div>
                </div>

                {/* hotSpecialVO */}

                <div  className="dis-item">
                    <div  className="today-list item-list">
                        <h3 >热门专题{/* <Icon type="dash"  onClick={()=>{this.list()}} /> */}</h3> 
                        <h1 >{hotSpecialVO.title}</h1> 
                        <div  className="audio adioesx">
                            <div  className="audio-img height width">
                          
                                <img className="height" src={hotSpecialVO.imgPath}  onClick={()=>{this.getbookid(hotSpecialVO.id)}}/>
                            </div> 
                                    
                        </div>
                        <p className="scroller-info">你是我的未来</p>
                    </div>
                </div>

{/*         booksName
            intro
            picture

            name
            recommend
            icon

            title
            intro
            coverUrlSmall
            xxxxx?aaaa?bbbbb?"ss":"ff":"hh":"tt";
            
            */}
                {/*  */}
                <div className="cover" ref="cover" style={{zIndex:"10"}}>
                    <div style={{width:"100%",height:"182vw",overflowY:"scroll",zIndex:"10"}}>
                        <div>
                    <h3 className="discoverH3"  onClick={()=>{this.discover()}} >返回</h3>
                    <h1 style={{padding:"2vw",fontSize:"6vw"}}>为你推荐</h1>
                             {
                               POP.map(item => <div className="pa1" key={item.bookId}  onClick={()=>{this.getbookid(item.articleId)}}>
                            <div  className="audio-img divboxaa">
                                                                                                                                    
                                <img key={48541565} style={{width:"100%",height:"100%",padding:"3%"}}  src={item.picture?item.picture:(item.icon?item.icon:item.coverUrlSmall)}/>
                            </div> 
                                    <div  key={5484412548}  onClick={()=>{this.getbookid(item.articleId)}} className="audio-info boxright">
                                        <h3 key={45125115} >{/* item.bookName?item.name?item.title?item.title:item.name:item.bookName:item.name */
                                                              item.bookName?item.bookName:(item.name?item.name:item.title)      
                                                                }</h3>
                                        <p key={515461654}  style={{overflow: "hidden", height: "12vw",marginTop:"1vw",color:"#999"}} className="audio-intro">
                                            {item.intro?item.intro:item.recommend}
                                          
                                            </p>
                                    </div>

                               </div>)
                           }
                </div>
                </div>
                </div>
                <div className="zhicheng"></div>
                <div className="boxaasdsad"></div>
            </div>
            </div>
        )
    }
}






export default Reg;