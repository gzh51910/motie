import React from 'react';
import '@/css/CompleteFreeTow.css';
import GetList from '@@/GetList';
function CompeletFreeTow({data,title}){

    return (
        <div className="CompeletFreeTow">
            {/* title */}
            <div className="book-tow-title">
                <span></span>
                <h4>{title}</h4>
            </div>
            {/* list */}
            <div className="ListContents">
                <ul className="ListClear">
                    {
                        data.map((item,idx)=>{
                            return <GetList item={item} flag="" key={idx} />
                        })
                    }
                </ul>
            </div>
            

        </div>
    )
}
export default CompeletFreeTow;