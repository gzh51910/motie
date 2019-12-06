import React, { Component } from 'react';
import '@/css/CompleteFreeOne.css';
import NoTimeContent from '@@/NoTimeContent';
import { withRouter } from 'react-router-dom';

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
                            return <li key={idx} onClick={()=>{ this.props.history.push(`/detail?book=${item.bookId}`);
                             }}>
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
export default withRouter(CompleteFreeOne);