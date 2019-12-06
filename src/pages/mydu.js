import React,{Component} from 'react';
import {nsg} from '@/api';
import {Carousel,Icon,Menu,SubMenu,Badge} from 'antd'
import "../css/Bookshelf.css"


class Bookshelf extends Component{
    state = {
        
    };



    tiaozhuan = (id) =>{
        if(id==1){     this.props.history.push(`/Bookshelf`);
    
        }else if(id == 2){
       
        }
    }
    
    render(){
       
        return (
            <div className = 'Bookshelf-body'>
                <div className = 'Bookshelf-title'>
                <ul>
                    <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']} className = 'menu'
                    >
                            <Menu.Item onClick={()=>{this.tiaozhuan(1)}} ><a>我的书架</a></Menu.Item>
                            <Menu.Item onClick={()=>{this.tiaozhuan(2)}} key="1"><a>最近阅读</a></Menu.Item>
                    </Menu>
                        </ul>
                </div>
                <div className = 'Bookshelf-all'>
                    最近阅读<span>0</span>本
                </div>
            </div>
        )
    }
}

export default Bookshelf;