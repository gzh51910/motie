import React from 'react';
// import '../css/GetList1.css';
function GetList({item}){
    return (
        // 内容列表
        <li key={item.id}>
            <figure><img src={item.icon} /></figure>
            <figcaption>
                <h4>{item.name}</h4>
    <p className="ListContents-Des">{item.recommend}{item.introduce}</p>
                <p className="ListContents-MSg">
                    <span className="MSg-L">
                        <img src={item.authorIcon}/>{item.authorName}
                    </span>
                    {item.bookTags.map((ele,idx)=>{
                    return <span className="MSg-R" key={idx}>{ele}</span>
                    })} 
                </p>
            </figcaption> 
        </li>
    )
}

export default GetList;