import React,{Component} from "react"
import {Icon} from 'antd';
import "../css/detail.css"
import { withRouter } from 'react-router-dom';

class Detailtop extends Component {
    render(){
        return (
            <div className="detailtop">
                <Icon type="left" className="back" onClick={()=>{this.props.history.go(-1)}}/>
                {this.props.name}
                <Icon type="home" className="ricon" onClick={()=>{this.props.history.push("/")}}/>
                <Icon type="search" className="ricon"/>
            </div>
        )
    }
}

export default withRouter(Detailtop)