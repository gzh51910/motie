import React from 'react';
import {Icon} from 'antd';
import '../css/pagelist.css'
let style={
    position:"fixed", 
    left:0,
    top:0,
    height:"100%",
    width:"100%",
    transition:"0.4s",
    background:"rgba(100,100,100,0.6)"
}

class Pagelist extends React.Component {
    state={
        dec:false,
        
    }
    render(){
        let {pagelist,hide,tohide}=this.props;
        let {dec}=this.state;
        return (
            <div style={{...style,left:hide?"-100%":"0"}} onClick={()=>{tohide()}}>
                <ul style={{width:"85vw",background:"white",height:"100%"}} className="pagewrap" onClick={(e)=>{ e.stopPropagation()}}>
                    <li className="pagetop"><Icon type="left" style={{float:"left",marginTop:"2vw"}} onClick={(e)=>{ e.stopPropagation();tohide() }}/>
                        目录
                        <span className="sort" onClick={()=>{this.setState({dec:!dec})}}>{!dec?"正序":"倒序"}</span>
                    </li>
                    {
                        (!dec?pagelist.reverse():pagelist.reverse()).map((ele,idx)=>{
                            return (
                                <li key={idx}>{ele}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

export default Pagelist;