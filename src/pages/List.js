import React,{Component} from 'react';
import {my} from '@/api'
import {Tabs,Icon} from 'antd';
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
    }
    async componentDidMount(){
        let {data} = await my.get("/sort",{
           page:1,
        })
    
        

        this.setState({
            datalist:data
        })
      
    }
    menupull=()=>{
        this.setState({
            down:!this.state.down
        })
        
        
    }
    render(){ 
        // let {datalist} = this.state;
        return (
            <div id="List">
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
                        {this.state.datalist.map((item)=>{
                        return    <GetList item={item} key={item.id}></GetList>
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
            </div>
        )
    }
}

export default List;