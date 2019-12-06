import React,{Component} from 'react';
import {nsg,my} from '@/api';
import {Carousel,Icon,Menu,SubMenu,Badge} from 'antd'
import "../css/Bookshelf.css"
import '../css/sou.css'

class Bookshelf extends Component{
    state = {
        datas:[],
    };

    async componentDidMount(){
        
        
        // console.log(this.props.history.location.search.slice(1));
        let data = await my.get("/detail",{
            id:this.props.history.location.search.slice(1)
        });
        let name = await my.get(`/Login?password=123&username=456`);

        // let data = await my.get(
        //     `/login?password=${password}&username=${username}`,  
        // );
        // console.log(data.data);
        
        
        console.log(name);
        let datas = data.data
        this.setState({
            datas
        })
    }

    tiaozhuan = (id) =>{
        if(id==1){
        }else if(id == 2){
            this.props.history.push(`/mydu`);
    
        }
    }
    
    render(){
        let {datas} = this.state

       
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
                    收藏书籍<span>{datas.length}</span>本


               
                    
                </div>


                {
                    datas.map(item=>{
                        return(
                            <div onClick={()=>{this.goto(item.id)}}  key={item.id} style={{padding:"3vw"}}> 
                                <img src={item.icon} style={{width:'20%',float:'left'}}></img>
                                <h4 className="h42">{item.name}</h4>
                                <p className='sadda'>{item.introduce}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Bookshelf;