import React,{Component} from 'react';
import {nsg,my} from '@/api';
import '../css/home.css';
import FooterQr from '@@/FooterQr';
import FooterPart from '@@/FooterPart';
import '../css/FooterQr.css';
import '@/css/FooterPart.css'
import {Carousel,Icon,Menu,SubMenu,Badge, Divider} from 'antd'


class Homenv extends Component{
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
         
        }
    }
    async componentDidMount(){

         let datas = await my.get('nv');
        let main = datas.data
        // console.log(main,"main+++");
        
        let  banner = main[0].dataSourceList[0].dataList
        let lvl = main[2].dataSourceList[0].dataList
        let recommend  = main[3].dataSourceList[0].dataList
        let recommend_name = main[3]
        let maincategory = main[10]
        let maincategory_main =main[10].dataSourceList[0].dataList
        let datu =main[5].dataSourceList[0].dataList[0].imgUrl
        let Collection  = main[6].dataSourceList[0].dataList
        let Collection_name = main[6]
        let Finishedboutique = main[7]
        let Finishedboutique_main =main[7].dataSourceList[0].dataList
        let WEATHERVANE  = main[8].dataSourceList[0].dataList
        let WEATHERVANE_name = main[8]
        let NEWbook = main[9]
        let NEWbook_main =main[9].dataSourceList[0].dataList
        let foundit  = main[4].dataSourceList[0].dataList
        let foundit_name = main[4]
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
      
        // console.log("id:",id);
        
        
    }
    tiaozhuan = (id) =>{
        // console.log("--------",id);
        // this.props.history.push(`/homenv`);
        if(id==1){
            this.props.history.push(`/`);
        }else if(id == 2){
          
    
        }else if(id==3){
            this.props.history.push(`/homecb`);
            
        }
        
    }
    sou = () =>{
       
        this.props.history.push("/sou")
        
    }
    render(){
        let {banner,lvl,recommend,main,recommend_name,maincategory,maincategory_main,datu,Collection,Collection_name,Finishedboutique,
        Finishedboutique_main,WEATHERVANE,WEATHERVANE_name, NEWbook, NEWbook_main,foundit,foundit_name} = this.state
      
        // console.log(main,"++++++");
        // console.log(NEWbook,NEWbook_main,"++++");
        let app = recommend.slice(0,3);
        let app2 = recommend.slice(3,7);
        let pppdd1 = maincategory_main.slice(0,3);
        let pppdd2 = maincategory_main.slice(3,6);
        let pppdd3 = maincategory_main.slice(6,9);
        let pppdd4 = maincategory_main.slice(9,12);
        let pppdd5 = maincategory_main.slice(12,15);
        let pppdd6 = maincategory_main.slice(15,18);
        let newbook = NEWbook_main.slice(0,1);
        let newbook2 = NEWbook_main.slice(1,5);
        // console.log(newbook2);
        
        // //.dataSourceList[0].dataList
    
    //   console.log(pppdd1,pppdd2,pppdd3,pppdd4,pppdd5,pppdd6);
      
        
    //   if(banner==undefined);{
          
    //   }
        return (     
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
                                <Menu.Item onClick={()=>{this.tiaozhuan(1)}}><a>男生</a></Menu.Item>
                                <Menu.Item onClick={()=>{this.tiaozhuan(2)}} key="1"><a>女生</a></Menu.Item>
                                <Menu.Item onClick={()=>{this.tiaozhuan(3)}}><a>出版</a></Menu.Item>
                            </Menu>
                                {/* <li className="hightline_top"><a>男生</a></li>
                                <li><a>女生</a></li>
                                <li><a>出版</a></li> */}
                            </ul>
                            <span className='spannn'><Icon type="search"  onClick={()=>{this.sou()}}  /></span>
                            <span  className='spannn'>&nbsp;<Icon type="menu-unfold" /></span>
                            <div></div>
                            <div></div>
                        </header>     
                    </section>
                </div>

                 {/* 轮播 */}
                <Carousel autoplay>
                {  
                    banner.map(item=>   <div key={item.bookId} ><img key={item.name} onClick={()=>{this.getid()}}   src={item.imgUrl} /> </div>)
                }
                </Carousel>
                <div className='zhicheng'></div>
                {/* 浏览记录 */}
                <div className="lvl">
                        浏览记录
                    </div>
                    <div className='zhicheng'></div>
                {/* 分类列表 */}
                <Menu
                    mode="horizontal"
                   >
                    {
                        lvl.map(item => {
                            return <Menu.Item key={item.addressId} style={{width:'24%'}}>
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
                <div className='zhicheng'></div>
                {/* 主编力荐 */}
                <div className="fllow">
                <div className="recommned fllow">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{recommend_name.name}</div>
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
                    </Carousel>
                    </div>
                </div>
                </div>
                <div className='zhicheng'></div>

                {/* 私人定制 */}

                <div className="recommned gd">
                    <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{foundit_name.name}</div>
                        {  
                            foundit.map(item=>  <div className="recommend_img pp" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                <div className="moer" onClick={()=>{this.getid(Collection_name.id)}} >查看更多</div>
                <div className='zhicheng'></div>
                
                {/* 完本精品 */}
                
                <div className="maincategory">
                    <div className='maincategory_top' title={recommend_name.bookName}><Icon type="like" />{Finishedboutique.name}</div>
                    {  
                Finishedboutique_main.map(item=>  <div className="maincategory_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} className="maincategory_imgone"  src={item.imgUrl} /><div className="maincategory_neirong"><p className="maincategory_top_name">{item.bookName}</p><p className="maincategory_top_nneirong">{item.introduction}</p><div className="maincategory_foot"><img className="img_head" src={item.userImgUrl}></img><p className="zuozhe">{item.cpName}</p><p className="booksname">{item.category}</p></div></div></div>)    }
                    

                </div>
                <div className="moer">查看更多</div>
                <div className='zhicheng'></div>
                {/* 无线风向标 */}
                
                <div className="recommned">
                    <div className='Collection_name_top' title={Collection_name.bookName}><Icon type="like" />{WEATHERVANE_name.name}</div>
                        {  
                            WEATHERVANE.map(item=>  <div className="recommend_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}}key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                </div>
                <div className="moer">查看更多</div>
                <div className='zhicheng'></div>

                {/* 新书抢先看 */}
                <div className="maincategory">
                    <div className='maincategory_top' title={recommend_name.bookName}><Icon type="like" />{NEWbook.name}</div>
                    {  
                newbook.map(item=>  <div className="maincategory_img" key={item.bookId} ><img  onClick={()=>{this.getid(item.bookId)}} key={item.name} className="maincategory_imgone"  src={item.imgUrl} /><div className="maincategory_neirong"><p className="maincategory_top_name">{item.bookName}</p><p className="maincategory_top_nneirong">{item.introduction}</p><div className="maincategory_foot"><img className="img_head" src={item.userImgUrl}></img><p className="zuozhe">{item.cpName}</p><p className="booksname">{item.category}</p></div></div></div>)  
                    }
                    {
                        newbook2.map(item =><div className="newbook2">
                            <div className="newbook2_d">{item.bookName}</div>
                            <p className="newbook2_p">{item.category}</p>
                        </div>)
                    }
                    

                </div>
                <div className="moer">查看更多</div>


                <div className='zhicheng'></div>
                 {/* 发现好书 */}
                 <div className="fllow">
                <div className="recommned fllow">
                    <div className='recommned_top' title={recommend_name.bookName}><Icon type="like" />{maincategory.name}</div>
                   <div className="lunbo11">
                    <Carousel autoplay>
                        <div>
                        {  
                            pppdd1.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        }
                        </div>
                        <div>                      
                        {  
                            pppdd2.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>                      
                        {  
                            pppdd3.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>                      
                        {  
                            pppdd4.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>                      
                        {  
                            pppdd5.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                        <div>                      
                        {  
                            pppdd6.map(item=>  <div className="recommend_img" key={item.bookId} ><img className="imgtttt" onClick={()=>{this.getid(item.bookId)}} key={item.name} style={{width:"100%"}}  src={item.imgUrl} /><p className="recommned_p">{item.bookName}</p> </div>)
                        } 
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>

                {/* foot */}
                <FooterPart/>
                <FooterQr/>

                   {/*内容支撑  */}
                   <div className="mafooter"></div>
            </div>
           
           
          )
    }
}

export default Homenv;