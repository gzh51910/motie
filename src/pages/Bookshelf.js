import React,{Component} from 'react';
import {nsg,my} from '@/api';
import {Carousel,Icon,Menu,SubMenu,Badge} from 'antd'
import "../css/Bookshelf.css"
import '../css/sou.css'
import { log } from 'util';

class Bookshelf extends Component{
    state = {
        datas:[],
        redbook:[]
    };

    async componentDidMount(){
        
        
        // console.log(this.props.history.location.search.slice(1));
        let data = await my.get("/detail",{
            id:this.props.history.location.search.slice(1)
        });
        // console.log();
        let username = window.localStorage.username  /*  用户名字 */
        let name = await my.get(`/bookshelf?username=${username}`);
       
        // let data = await my.get(
        //     `/login?password=${password}&username=${username}`,  
        // );
        // console.log(data.data);  
        
        let book = name.data[0].book
        // console.log("name....",name.data[0].book);
        let datas = data.data
        // console.log(book);
        let redbook =[]
        let a = []
        for(let i=0;i<book.length;i++){
            // console.log(i);
            let pagelist = await my.get("/detail",{
                id:book[i]
            });
            // let ap = {}
           a = [pagelist]
           redbook.push(...a)
            // console.log(i,pagelist,a);
            // redbook.push(...pagelist)
          
        }
        // console.log(redbook);
            
        // console.log(pagelist.data[0]);
        // console.log(redbook);
        // console.log(pagelist);
        this.setState({
            datas,
            redbook
        })
    }

    tiaozhuan = (id) =>{
        if(id==1){
        }else if(id == 2){
            this.props.history.push(`/mydu`);
    
        }
    }
    goto = (id) =>{
      
       
        this.props.history.push(`/detail?book=${id}`)
        
    }
    render(){
        let {datas,redbook} = this.state
console.log(redbook);

       
        return (
            <div className = 'Bookshelf-body'>
                <div className = 'Bookshelf-title'>
                <ul>
                    <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']} className = 'menu'
                    >
                            <Menu.Item onClick={()=>{this.tiaozhuan(1)}} key="1"><a>我的书架</a></Menu.Item>
                            <Menu.Item onClick={()=>{this.tiaozhuan(2)}}><a>最近阅读</a></Menu.Item>
                    </Menu>
                        </ul>
                </div>
                <div className = 'Bookshelf-all'>
                    收藏书籍<span>{redbook.length}</span>本


               
                    
                </div>


                {
                    redbook.map(item=>{
                        return(
                            <div onClick={()=>{this.goto(item.data[0].id)}}  key={item.data[0].id} style={{padding:"3vw"}}> 
                                <img src={item.data[0].icon} style={{width:'20%',float:'left'}}></img>
                                <h4 className="h42">{item.data[0].name}</h4>
                                <p className='sadda'>{item.data[0].introduce}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Bookshelf;