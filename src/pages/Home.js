import React,{Component} from 'react';
import {nsg,my} from '@/api';
import '../css/home.css';
import {Carousel,Icon,Menu,SubMenu,Badge} from 'antd'
import FooterQr from '@@/FooterQr';
import FooterPart from '@@/FooterPart';
import StoreTable from 'antd/lib/table/Table';


class Home extends Component{
    constructor(prop){
        super(prop);
        this.state={
            main:[],
            banner:[],
            lvl:[],
            recommend:[],
            recommend_name:[],
            maincategory:[],
            maincategory_main:[],
            datu:[],
            Collection:[],
            Collection_name:[],
            Finishedboutique:[],
            Finishedboutique_main:[],
            WEATHERVANE:[],
            WEATHERVANE_name:[],
            NEWbook:[],
            NEWbook_main:[],
            foundit:[],
            foundit_name:[],
            current: ''

         
        }
    }
    async componentDidMount(){

        let datas = await my.get('main');
        let main = datas.data
        let  banner = main[0].dataSourceList[0].dataList
        let lvl = main[2].dataSourceList[0].dataList
        let recommend  = main[3].dataSourceList[0].dataList
        let recommend_name = main[3]
        let maincategory = main[4]
        let maincategory_main =main[4].dataSourceList[0].dataList
        let datu =main[5].dataSourceList[0].dataList[0].imgUrl
        let Collection  = main[6].dataSourceList[0].dataList
        let Collection_name = main[6]
        let Finishedboutique = main[7]
        let Finishedboutique_main =main[7].dataSourceList[0].dataList
        let WEATHERVANE  = main[8].dataSourceList[0].dataList
        let WEATHERVANE_name = main[8]
        let NEWbook = main[9]
        let NEWbook_main =main[9].dataSourceList[0].dataList
        let foundit  = main[10].dataSourceList[0].dataList
        let foundit_name = main[10]
            this.setState({
                banner,
                main,
                lvl,
                recommend,
                recommend_name,
                maincategory,
                maincategory_main,
                datu,
                Collection,
                Collection_name,
                Finishedboutique,
                Finishedboutique_main,
                WEATHERVANE,
                WEATHERVANE_name,
                NEWbook,
                NEWbook_main,
                foundit,
                foundit_name,
              
            })
    }
    getid = (id) =>{
      
       
        this.props.history.push(`/detail?book=${id}`)
        
    }
    getmore = (id) =>{
      
        console.log("id:",id);
        
        
    }
   getthere = ()=>{
      
       
    this.refs.cover.style.left="0%"
    
       
   }
   back = ()=>{
      
       
    this.refs.cover.style.left="102%"
    
       
   }
    handleClick = e => {
        
        this.setState({
          current: e.key,
        });
        if(e.key=="分类"){
            this.props.history.push("/list")
        }
        else if(e.key=="排行"){
            this.props.history.push("/rank")            
        }
        else if(e.key=="全本"){
            this.props.history.push("/allbooks")            
        }
        else if(e.key=="免费"){
            this.props.history.push("/free")            
        }
    };
   
    tiaozhuan = (id) =>{
        // console.log("--------",id);
        if(id==1){

        }else if(id == 2){
            this.props.history.push(`/homenv`);
    
        }else if(id==3){
            this.props.history.push(`/homecb`);
        }

    }
    gotofound = () =>{
        this.props.history.push("/Foundmore")
    }
    sou = () =>{
       
        this.props.history.push("/sou")
        
    }
    
    render(){
        let {banner,lvl,recommend,main,recommend_name,maincategory,maincategory_main,datu,Collection,Collection_name,Finishedboutique,
        Finishedboutique_main,WEATHERVANE,WEATHERVANE_name, NEWbook, NEWbook_main,foundit,foundit_name} = this.state
      
        // console.log(main,"++++++");
        // console.log(datu,"++++");
        //.dataSourceList[0].dataList

        return (
            <div>
            <div>
                {/* header */}
                <div>
                <section className="mt_head">
                    <header id="head_top">
                        <div className='mt_logo'><img src="data:image/png;base64,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"></img></div>
                        <ul className='mt_nav' style={{paddingLeft:"20px"}}>
                            
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item onClick={()=>{this.tiaozhuan(1)}} key="1"><a>男生</a></Menu.Item>
                            <Menu.Item onClick={()=>{this.tiaozhuan(2)}}><a>女生</a></Menu.Item>
                            <Menu.Item onClick={()=>{this.tiaozhuan(3)}}><a>出版</a></Menu.Item>
                        </Menu>
                            {/* <li className="hightline_top"><a>男生</a></li>
                            <li><a>女生</a></li>
                            <li><a>出版</a></li> */}
                        </ul>
                        <span className='spannn'><Icon type="search" onClick={()=>{this.sou()}} /></span>
                        <span className='spannn'>&nbsp;<Icon type="menu-unfold" onClick={()=>{this.getthere()}} /></span>
                        <div></div>
                        <div></div>
                    </header>     
                </section>
            </div>


                {/* 轮播 */}
                <Carousel autoplay>
                        {  
                            banner.map(item=>   <div key={item.name} ><img key={item.name}  src={item.imgUrl} onClick={()=>{this.getid(item.addressId)}}/> </div>)
                        }
                    </Carousel>

                   

                {/* 浏览记录 */}
                <div className="lvl">
                        浏览记录
                    </div>
            </div>

                {/* 分类列表 */}
                <Menu
                    mode="horizontal"
                    onClick={this.handleClick}
                   >
                    {
                        lvl.map(item => {
                            return <Menu.Item key={item.name} style={{width:'24%'}}>
                                {
                                    <div>
                                    <img src={item.imgUrl} style={{width:"15vw",height:"15vw"}}></img>
                                    <p className="ppnp">{item.name}</p>
                                    </div>
                                }
                            </Menu.Item>
                        })
                    }
                </Menu>

                {/* 主编力荐 */}
                <div>
                <div className="recommned">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{recommend_name.name}</div>
                        {  
                            recommend.map(item=>  <div className="recommend_img" key={item.bookId} >
                                <img onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                </div>

                {/* 主打分类 */}
                <div className="maincategory">
                    <div className='maincategory_top' title={recommend_name.bookName}><Icon type="like" />{maincategory.name}</div>
                    {  
                        maincategory_main.map(item=>  <div className="maincategory_img" key={item.bookId} ><img onClick={()=>{this.getid(item.bookId)}} key={item.name} className="maincategory_imgone"  src={item.imgUrl} /><div className="maincategory_neirong"><p className="maincategory_top_name">{item.bookName}</p><p className="maincategory_top_nneirong">{item.introduction}</p><div className="maincategory_foot"><img className="img_head" src={item.userImgUrl}></img><p className="zuozhe">{item.PenName}</p><p className="booksname">{item.category}</p></div></div></div>)    }
                    

                </div>
                <div className="moer">查看更多</div>

                {/*  大图*/}
                <div className="datu">
                    <img src={datu} onClick={this.gotofound} style={{width:'100%'}}></img>
                </div>

                {/* 书友收藏 */}
                <div className="recommned">
                    <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{Collection_name.name}</div>
                    
                        {  
                            Collection.map(item=>  <div className="recommend_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                    

                </div>

                {/* 完本精品 */}
                
                <div className="maincategory">
                    <div className='maincategory_top' title={recommend_name.bookName}><Icon type="like" />{Finishedboutique.name}</div>
                    {  
                Finishedboutique_main.map(item=>  <div className="maincategory_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} className="maincategory_imgone"  src={item.imgUrl} /><div className="maincategory_neirong"><p className="maincategory_top_name">{item.bookName}</p><p className="maincategory_top_nneirong">{item.introduction}</p><div className="maincategory_foot"><img className="img_head" src={item.userImgUrl}></img><p className="zuozhe">{item.PenName}</p><p className="booksname">{item.category}</p></div></div></div>)    }
                    

                </div>
                <div className="moer">查看更多</div>

                {/* 无线风向标 */}
                
                <div className="recommned">
                    <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{WEATHERVANE_name.name}</div>
                        {  
                            WEATHERVANE.map(item=>  <div className="recommend_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}}key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                <div className="moer">查看更多</div>

                {/* 新书抢先看*/}
                <div className="maincategory">
                    <div className='maincategory_top' title={recommend_name.bookName}><Icon type="like" />{NEWbook.name}</div>
                    {  
                NEWbook_main.map(item=>  <div className="maincategory_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} className="maincategory_imgone"  src={item.imgUrl} /><div className="maincategory_neirong"><p className="maincategory_top_name">{item.bookName}</p><p className="maincategory_top_nneirong">{item.introduction}</p><div className="maincategory_foot"><img className="img_head" src={item.userImgUrl}></img><p className="zuozhe">{item.PenName}</p><p className="booksname">{item.category}</p></div></div></div>)    }
                    

                </div>
                <div className="moer">查看更多</div>

                {/* 发现好书 */}

                <div className="recommned gd">
                    <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{foundit_name.name}</div>
                        {  
                            foundit.map(item=>  <div className="recommend_img pp" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                <div className="moer" onClick={()=>{this.getid(Collection_name.id)}} >查看更多</div>

                {/*内容支撑  */}
                <FooterPart/>
                <FooterQr/>
                            

                {/*  */}
                <div className="cover" ref="cover" style={{zIndex:"10"}}>
                    <h4 onClick={()=>{this.back()}}>《</h4>
                    <div style={{width:"100%",height:"182vw",overflowY:"scroll",zIndex:"10"}}>
                        <div>
                        <FooterPart/>
                        <FooterQr/>
                            
                            
                            </div></div></div>

                  <div className="mafooter"></div>


            </div>
        )
    }
}

export default Home;