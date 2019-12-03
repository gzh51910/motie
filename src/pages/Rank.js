import React,{Component} from 'react';
import RankTop from '@@/RankTop';
import RankLeft from '@@/RankLeft';

class Rank extends Component{
    render(){
        return (
            
            <div id="Rank">
                <RankTop/>
                <RankLeft/>
            </div>
        )
    }
}

export default Rank;