import React from 'react';
// import { func } from 'prop-types';
// import '../css/GetList.css';

class GetListMenu extends React.Component {
    state={
        active:0
    }
    changeactive=(index)=>{
        console.log("点击前的idx:",this.state.active,",点击后的idx:",index);
        
        this.setState({
            active:index
        })
    }
    render(){
        let {item}=this.props;
        return (
            // 菜单列表
            item.classify.map((ele,index)=>{
                return <span className="ListMenuChannel-R" key={index+"i"} >
                {/* 调用changeactive（） */}
                <i onClick={()=>{this.changeactive(index)}} className={this.state.active==index?"ListMenuIcon-Active ListMenuIcon":"ListMenuIcon"} data-index={index}>
                    {ele}
                </i>
            </span>
            // return <span className="R" key=index+"i">
            // <i onClick={this.changeactive(index)} className={this.state.active==index?"R R-active":"R"}></i>
            // </span>
            })
        )
        
    }
    
}

export default GetListMenu;