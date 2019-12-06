import React from 'react';
import { withRouter } from 'react-router-dom';

// import '../css/GetList1.css';
class GetList extends React.Component {
    render(){
        let  {item,flag=true}=this.props
        return (
            // 内容列表
            <li key={item.id} onClick={()=>{ this.props.history.push(`/detail?book=${item.bookId}`);
            }}>
                <figure>{!item.imgUrl?<img src={item.icon} />:<img src={item.imgUrl} />}</figure>
                <figcaption>
                <h4>{item.name}{item.bookName}</h4>
                <p className="ListContents-Des">{item.recommend}{item.introduce}{item.introduction}</p>
                    <p className="ListContents-MSg">
                        <span className="MSg-L">
                        {!item.userImgUrl?<img src={item.authorIcon}/>:<img src={item.userImgUrl}/>}{item.authorName}{item.penName}
                        </span>
                        {flag?item.bookTags.map((ele,idx)=>{
                        return <span className="MSg-R" key={idx}>{ele}</span>
                        }):""} 
                        {item.category?<span style={{float:"right",border:"1px solid #ccc",color:"#ccc",borderRadius:"1vw"}}>{item.category}</span>:""}
                    </p>
                </figcaption> 
            </li>
        )
    }
    
}

export default withRouter(GetList);