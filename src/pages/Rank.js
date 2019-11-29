import React,{Component} from 'react';
import FooterPart from '@@/FooterPart';
import FooterQr from '@@/FooterQr';
import RankTop from '@@/RankTop';
import RankLeft from '@@/RankLeft';


class Rank extends Component{

    render(){
        return (
            <div>
                <RankTop/>
                <RankLeft/>
                <FooterPart/>
                <FooterQr/>
            </div>
        )
    }
}

export default Rank;