import React, { Component } from 'react';
import '@/css/CompleteFreeOne.css';
import NoTimeContent from '@@/NoTimeContent';
class CompleteFreeOne extends Component{
    componentDidMount(){
        console.log(this.props);
        
    }
    render(){
        let {data,title}=this.props;
        return (
            <div className="CompleteFreeOne">
                {/* title */}
                <div className="Boutique-title">
                    <span className="title-left"></span>
                        <h4>{title}</h4>
                        <NoTimeContent/>
                </div>
                <div className="Boutique-list">
                    <ul>
                        {data.map((item,idx)=>{
                            return <li key={idx}>
                                <img src={item.imgUrl} />
                                <p>{item.bookName}</p>
                            </li>
                            
                        })
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
export default CompleteFreeOne;