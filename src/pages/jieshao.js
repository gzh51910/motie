import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Icon,Button,Radio,Divider} from 'antd';
import '../css/jieshao.css'


class Jieshao extends Component{
    render(){
        return (
            <div className = 'jie-body'>
                <div className="jie-title">
                     <a href="#/Mine"><Icon type="left" className = "icon"/></a>
                    <span>关于我们</span>   
                </div>
                <div className = 'jie-main'>
                <p>磨铁中文网是北京磨铁数盟信息技术有限公司旗下的社交化阅读平台群。磨铁中文网包含面向PC端移动互联网及面向APP市场的客户端。</p>
                <p>
                    内容理想：磨铁中文网将秉承“卓俗并纳，和而不同”原则，构筑自由的文字家园。磨铁中文网将汇聚各个领域、不同创作题材的华语优秀作家和原创作者，深刻与通俗在此并行不悖，群峰竞秀；磨铁中文网将适应趋势，随和潮流，亦会笃行“平行向上”的文字价值，自成一格。
                </p>
                <p>
                产品理想：磨铁中文网将延续“多体互联、社交阅读、品质设计、博采众长”的产品理念，不断更新产品。您可以在电脑、手机、平板等各种新载体上同步阅读；您可以在关注、评论、转发等不同方式中传递感受；您会享受到清爽、简约、雅致的设计风格，体验美妙的阅读情景；您还会不知不觉中接触最新的产品元素，让阅读、创作、互动更便捷、更易用。
                </p>
                <p>
                磨铁中文网能努力为您做到：
                <br></br>
		        一、最优秀的作家与作品在此；
                <br></br>
                二、最精致的产品与界面在此；
                <br></br>
                三、最时尚的互动与沟通在此；
                <br></br>
                四、最畅通的纸质出版通路在此；
                <br></br>
                五、最优厚的创作福利机制在此；
                </p>
                <Divider />
                <p>我们的联系方式：座机：010-84242006</p>
                </div>
            </div>
        )
    }
}

export default Jieshao;