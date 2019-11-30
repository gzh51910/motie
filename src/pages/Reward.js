import React,{Component} from "react"
import Detailtop from '../components/Detailtop';


class Reward extends Component {
    state={
        rewardlist:[100,300,500,1000,5000,"1万"],
        active:0
    }
    render(){
        let {rewardlist,active}=this.state
        return (
            <div>
                <div style={{borderBottom:"1px solid #ccc"}}>
                    <Detailtop name="我要打赏"/>
                </div>
                
                <div className="rewardlist">
                    <h3>此书太赞，客官来打个赏吧～</h3>
                    <ul className="re">
                        {
                            rewardlist.map((ele,index)=>{
                                return <li key={index} className={active==index?"red":""} onClick={()=>{this.setState({active:index})}}>
                                   {ele}磨铁币
                                </li>
                            })
                        }
                    </ul>
                    <p>作者写得太好了，小小打赏犒劳一下！</p>
                    <span className="ke" >充值</span>
                </div>
            </div>
            
        
        )
    }
}

export default Reward