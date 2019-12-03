import React,{Component} from 'react';
import {my,nsg} from '@/api'
import {Tabs,Icon, Select} from 'antd';
import GetList from '@/components/GetList';
import GetListMenu from '@/components/GetListMenu';
import '../css/List.css';
import '../css/GetList1.css';

class List extends Component{
    state = {
        menulist:[{
                title:"频道",
                classify:["男频","女频","出版"]
            },{
                title:"分类",
                classify:["全部","现代都市","仙侠武侠","玄幻奇幻","科幻游戏","悬疑推理","历史军事"]
            },{
                title:"状态",
                classify:["全部","完结","连载"]
            },{
                title:"价格",
                classify:["全部","免费","付费"]
            }
        ],
        datalist:[],
        down:true,
        page:1,
        show:true
    }
    async componentDidMount(){
        let {data} = await my.get("/sort",{
           page:this.state.page,
        })
        this.setState({
            datalist:data,
            page:this.state.page+=1
        })
        window.onscroll=async ()=>{
            // 滚动条（滚过）的高度+现显示的页面的高度？=整个页面的高度（一页的高度），请求下一页数据
            // documentElement== html
            let h=(document.body.scrollTop || document.documentElement.scrollTop)+window.screen.height;
            // 判断当前滚动条的高度》300时，显示置顶（）
            if(h-window.screen.height>300){
                this.setState({
                    show:false
                })
            }else{
                this.setState({
                    show:true
                })
            }
            // list.offsetHeight(最外层元素) == body的高度  ==整个页面总高度
            if(h+10>=this.refs.list.offsetHeight){
                // console.log(1111);
                
                let {data} = await my.get("/sort",{
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
    menupull=()=>{
        this.setState({
            down:!this.state.down
        })
    }
    SelectBook=(e)=>{
        this.setState({
            page:1
        })
        setTimeout(async ()=>{       
            let sort=e.target.parentElement.parentElement.parentElement.getElementsByClassName("ListMenuIcon-Active");
            let channel=sort[0].dataset.index;
            let classify=sort[1].dataset.index;
            let condition=sort[2].dataset.index;
            let price=sort[3].dataset.index;
            
            let {data} = await nsg.post(`/category/detail?free=${price}&finish=${condition}&group=${channel*1+1}&sortId=${classify==0?"":1000019+classify*1}&page=${this.state.page}&pageSize=10`,) 
            console.log(data.data.bookList);
            
            this.setState({
                datalist:data.data.bookList,
                page:this.state.page+=1
            })
        },0)

        //https://app2.motie.com/category/detail?free=0&finish=0&group=2&sortId=&page=1&pageSize=10{
            //     free:price*1,
            //     finish:condition*1,
            //     group:channel*1+1,
            //     sortId:"",
            //     page:this.state.page,
            //     pageSize:10
            // }
        //https://app2.motie.com/category/detail?free=0&finish=0&group=2&sortId=&page=1&pageSize=10
        
        
    }
    shouldComponentUpdate(p,s){
        // 优化：  判断什么刷新（当前状态props=下一次状态state时不刷新（show和datalist两个同时满足，不刷新），page+1时刷新）
        // console.log(this.state.show,"=======",s);
        if(this.state.show==s.show && this.state.datalist === s.datalist && this.state.down == s.down){
            return false   //不刷新
        }
        return true       //刷新
    }
    render(){ 
         let {datalist,show} = this.state;
        return (
            <div id="List" ref="list">
                {/* 头部菜单 */}
                <div id="ListMenu">
                    <div className="ListMenuHeader">
                        <Icon className="ListHeaderBack" type="left" />
                        <h2>分类</h2>
                    </div>

                    <div className="ListMenuContent">
                        {this.state.menulist.map((item,idx)=>{
                            return (
                                <div 
                                    className="ListMenuChannel ListClear" 
                                    key={idx} 
                                    style={{height:(idx==1 && this.state.down)?"9vw":"auto",overflow:"hidden"}}
                                    onClick={(e)=>{e.persist();this.SelectBook(e)}}
                                >
                                    <span className="ListMenuChannel-L">{item.title}</span>
                                    {/* 菜单列表 */}
                                    <GetListMenu item={item}/>
                                    {//item.classify.map((ele,index)=>{
                                        //return <GetListMenu item={item}/>
                                        
                                    //     return <span className="ListMenuChannel-R" key={index+"i"} >
                                    //     <i onClick="" className={this.state.active==index?"ListMenuIcon-Active ListMenuIcon":"ListMenuIcon"}>{ele}</i>
                                    // </span>
                                    //}
                                    //)
                                        /* // item.classify.map((ele,index)=>{
                                        //     return <span key={index}>{ele}</span>
                                        // })  
                                    */
                                    }
                                </div>
                            )
                      
                        })}
                        {/* 下拉隐藏 */}
                        <span onClick={this.menupull}>
                            <Icon className="ListMenuPull" type={this.state.down?"up":"down"}  />
                        </span>
                    </div>
                </div>
                {/* 列表内容 */}
                <div className="ListContents">

                    <ul className="ListClear">
                        {datalist.map((item)=>{
                        return    <GetList item={item} key={item.id+""+Math.random()}></GetList>
                        //     return  <li key={item.id}>
                        //     <figure><img src={item.icon} /></figure>
                        //    <figcaption>
                        //         <h4>{item.name}</h4>
                        //         <p className="ListContents-Des">{item.recommend}</p>
                        //         <p className="ListContents-MSg">
                        //             <span className="MSg-L">
                        //                 <img src={item.authorIcon}/>{item.authorName}
                        //             </span>
                        //             {item.bookTags.map(ele=>{
                        //             return <span className="MSg-R">{ele}</span>
                        //             })} 
                        //         </p>
                        //     </figcaption> 
                        // </li>
                        })}

                        {/* <li>
                            <figure><img src={} /></figure>
                            <figcaption>
                                <h4>{}</h4>
                                <p className="ListContents-Des">{}</p>
                                <p className="ListContents-MSg">
                                    <span className="MSg-L"><img src={}/>{}</span>
                                    <span className="MSg-R">{}</span>
                                </p>
                            </figcaption>
                        </li> */}
                    </ul>
                </div>

                <Icon type="vertical-align-top" className="top-icon" style={{display:show?"none":"block"}} onClick={()=>{window.scrollTo(0,0)}}/>
            </div>
        )
    }
}

export default List;