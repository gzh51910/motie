import React, { Component } from 'react';
import RankTop from '../components/RankTop';
import RankLeft from '../components/RankLeft';

class RankNv extends Component{

    render(){
        return (
            <div id="RankNv">
                <RankTop/>
                <RankLeft/>
            </div>
        )
    }
}

export default RankNv;