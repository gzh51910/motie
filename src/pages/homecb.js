import React,{Component} from 'react';
import {nsg,my} from '@/api';
import '../css/home.css';
import {Carousel,Icon,Menu,SubMenu,Badge} from 'antd'
import FooterQr from '@@/FooterQr';
import FooterPart from '@@/FooterPart';
import '../css/FooterQr.css';
import '@/css/FooterPart.css'

class Homecb extends Component{
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
            six:[],
            six_name:[],
         
        }
    }
    async componentDidMount(){

        let datas = await my.get('publish');
        let main = datas.data
        let  banner = main[0].dataSourceList[0].dataList
        // let lvl = main[2].dataSourceList[0].dataList
        let recommend  = main[3].dataSourceList[0].dataList
        let recommend_name = main[3]
        let maincategory = main[4]
        let maincategory_main =main[4].dataSourceList[0].dataList
        // let datu =main[5].dataSourceList[0].dataList[0].imgUrl
        let Collection  = main[5].dataSourceList[0].dataList
        let Collection_name = main[5]
        let six  = main[6].dataSourceList[0].dataList
        let six_name = main[6]
        let Finishedboutique = main[7]
        let Finishedboutique_main =main[7].dataSourceList[0].dataList
        let WEATHERVANE  = main[8].dataSourceList[0].dataList
        let WEATHERVANE_name = main[8]
        let NEWbook = main[9]
        let NEWbook_main =main[9].dataSourceList[0].dataList
        let foundit  = main[10].dataSourceList[0].dataList
        let foundit_name = main[10]
        // console.log("main:",main);
        
            this.setState({
                banner,
                main,
                // lvl,
                recommend,
                recommend_name,
                maincategory,
                maincategory_main,
                // datu,
                Collection,
                Collection_name,
                six,
                six_name,
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
    gothere = () =>{
        console.log(111);
        
    }
    tiaozhuan = (id) =>{
        // console.log("--------",id);
        // this.props.history.push(`/homenv`);
        if(id==1){
            this.props.history.push(`/`);
        }else if(id == 2){
            this.props.history.push(`/homenv`);
    
        }else if(id==3){
            
        }
        
    }
    sou = () =>{
       
        this.props.history.push("/sou")
        
    }
    
    render(){
        let {banner,lvl,recommend,main,recommend_name,maincategory,maincategory_main,datu,Collection,Collection_name,Finishedboutique,
        Finishedboutique_main,WEATHERVANE,WEATHERVANE_name, NEWbook, NEWbook_main,foundit,foundit_name,six,six_name} = this.state
        recommend= recommend.slice(0,3);
        maincategory_main  =  maincategory_main.slice(0,3);
        Collection = Collection.slice(0,6)
        WEATHERVANE = WEATHERVANE.slice(0,6)
        let app = six.slice(0,3);
        let app2 = six.slice(3,6);
        let app3 = six.slice(6,8);
        let app4 = NEWbook_main.slice(0,3);
        let app5 = NEWbook_main.slice(3,6);
        let app6 = NEWbook_main.slice(6,9);
         let app7 = foundit.slice(0,3);
        let app8 = foundit.slice(3,6);
        let app9 = foundit.slice(6,9);
        // console.log(main,"++++++");
        // console.log(Finishedboutique_main,Finishedboutique,"++++");
        //.dataSourceList[0].dataList
        
      
      
        return (   <div><div>
            
            {/* header */}
                    <div>
                <div>
                <section className="mt_head">
                    <header id="head_top">
                        <div className='mt_logo'><img src="data:image/png;base64,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"></img></div>
                        <ul className='mt_nav' style={{paddingLeft:"20px"}}>
                            
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item onClick={()=>{this.tiaozhuan(1)}}><a>男生</a></Menu.Item>
                            <Menu.Item onClick={()=>{this.tiaozhuan(2)}}><a>女生</a></Menu.Item>
                            <Menu.Item onClick={()=>{this.tiaozhuan(3)}} key="1"><a>出版</a></Menu.Item>
                        </Menu>
                            {/* <li className="hightline_top"><a>男生</a></li>
                            <li><a>女生</a></li>
                            <li><a>出版</a></li> */}
                        </ul>
                        <span className='spannn'><Icon type="search" onClick={()=>{this.sou()}}  /></span>
                        <span className='spannn'>&nbsp;<Icon type="menu-unfold" onClick={()=>{this.gothere()}} /></span>
                        <div></div>
                        <div></div>
                    </header>     
                </section>
                </div>
                
            {/* 轮播 */}
            <Carousel autoplay>
                {  
                    banner.map(item=>   <div key={item.name} ><img key={item.name} onClick={()=>{this.getid()}}  src={item.imgUrl} /> </div>)
                }
            </Carousel>
            </div>
            <div className='zhicheng'></div>
                {/* 浏览记录 */}
                <div className="lvl">
                        浏览记录
                    </div>
            </div>
            <div className='zhicheng'></div>
             {/* 主编力荐 */}
             <div>
             <div className="recommned">
                 <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{recommend_name.name}</div>
                     {  
                         recommend.map(item=>  <div className="recommend_img" key={item.bookId} >
                             <img className="recommend_img84" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                     }
             </div>
             </div>
             <div className='zhicheng'></div>
             {/* 重磅推荐 */}
             <div>
             <div className="recommned">
                 <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{maincategory.name}</div>
                     {  
                         maincategory_main.map(item=>  <div className="recommend_img" key={item.bookId} >
                             <img className="recommend_img84" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                     }
             </div>
             </div>

             <div className='zhicheng'></div>

                {/* 文学小说 */}

                <div className="recommned gd">
                    <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{Collection_name.name}</div>
                        {  
                            Collection.map(item=>  <div className="recommend_img pp" key={item.bookId} ><img className="recommend_img84" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                <div className="moer" onClick={()=>{this.getid(Collection_name.id)}} >查看更多</div>
                <div className='zhicheng'></div>
                {/* 一周畅销榜 */}

                <div className="fllow">
                <div className="recommned fllow">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{six_name.name}</div>
                   <div className="lunbo11">
                    <Carousel autoplay>
                        <div>
                        {  
                            app.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                        </div>
                        <div>                      
                        {  
                            app2.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>
                          {  
                            app3.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>
                <div className='zhicheng'></div>
     
                {/* 独家好书 */}

                <div>
                <div className="recommned">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{Finishedboutique.name}</div>
                        {  
                            Finishedboutique_main.map(item=>  <div className="recommend_img dpdpdpdpdd" key={item.bookId} >
                                <img className="recommend_img84" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                </div>

                <div className='zhicheng'></div>
                {/* 影视原著 */}

                <div className="recommned gd">
                        <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{WEATHERVANE_name.name}</div>
                        {  
                            WEATHERVANE.map(item=>  <div className="recommend_img pp" key={item.bookId} ><img className="recommend_img84" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                <div className="moer" onClick={()=>{this.getid(Collection_name.id)}} >查看更多</div>

                <div className='zhicheng'></div>


            {/* 生活社区 */}

            <div className="fllow">
                <div className="recommned fllow">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{NEWbook.name}</div>
                   <div className="lunbo11">
                    <Carousel autoplay>
                        <div>
                        {  
                            app4.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                        </div>
                        <div>                      
                        {  
                            app5.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>
                          {  
                            app6.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>
                <div className='zhicheng'></div>
                {/* 经营励志 */}

                <div className="fllow">
                <div className="recommned fllow">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{foundit_name.name}</div>
                   <div className="lunbo11">
                    <Carousel autoplay>
                        <div>
                        {  
                            app7.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                        </div>
                        <div>                      
                        {  
                            app8.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>
                          {  
                            app9.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>
                <div className='zhicheng'></div>

                {/* foot */}
                <FooterPart/>
                <FooterQr/>

                {/*内容支撑  */}
                <div className="mafooter"></div>




             </div>

             )
    }
}

export default Homecb;