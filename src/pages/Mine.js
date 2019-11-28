import React,{Component} from 'react';
import {withToken} from '../utils/hoc';


class Mine extends Component{
    constructor(){
        super()
        this.state = {
            token:''
        }
    }
  
    render(){
        console.log('Mine.props',this.props)
        return (
            <div>
                Mine
            </div>
        )
    }
}

Mine = withToken(Mine)

export default Mine;