import React,{Component} from 'react';
import '@/css/FooterPart.css'
class FooterPart extends Component{
    state={
        footerdata:[{
            img:"https://cdn.motieimg.com/web/site/logo/99d24.jpg",
            title:"磨铁阅读平台",
            des:"磨铁旗下网站综合站，汇聚旗下所有小说"
        },{
            img:"https://cdn.motieimg.com/web/site/logo/1d11.jpg",
            title:"磨铁中文网",
            des:"主打男频小说，热门都市、灵异、玄幻"
        },{
            img:"https://cdn.motieimg.com/web/site/logo/2d5.jpg",
            title:"墨墨言情网",
            des:"青春女生阅读品牌，主打品类有现代言情"
        },{
            img:"https://cdn.motieimg.com/web/site/logo/5d2.jpg",
            title:"锦文小说网",
            des:"新生代女性文学基地，提供言情、纯爱类作品"
        },{
            img:"https://cdn.motieimg.com/web/site/logo/4d5.jpg",
            title:"逸云书院",
            des:"青春女生阅读品牌，主打品类有现代言情"
        },{
            img:"https://cdn.motieimg.com/web/site/logo/6d5.jpg",
            title:"醉唐中文网",
            des:"全类型原创文学，开发有新意、有创意的作品"
        }]
    }
    render(){
        return (
            <div id="FooterPart">
            {/* title */}
                <div className="FooterPart-Title">
                    <h3>磨铁文学旗下品牌</h3>
                    <i className="FooterPart-TitleLine"></i>
                </div>
            {/* list */}
                <div className="FooterPart-List">
                    <ul className="FooterClear">
                        {this.state.footerdata.map((item,idx)=>{
                            return <li key={idx*10}>
                                <figure><img src={item.img} /></figure>
                                <figcaption>
                                    <h4>{item.title}</h4>
                                    <p>{item.des}</p>
                                </figcaption>
                            </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

export default FooterPart;