// import React from 'react';
import React, { Component } from 'react';
class NoTimeContent extends Component {
       constructor(props) {
        super(props)
        this.state = {
              day: 3,
             hour: 0,
             minute: 0,
             second: 0
        }

    }
    render() {
         return (
             <div  className="time">
                
                    {/* <span>限时秒杀</span> */}
                     {/* <span>{this.state.day}天 {this.state.hour}:{this.state.minute}:{this.state.second}</span> */}
                     <span>
                      <i>{this.state.hour} </i>:
                      <i>{this.state.minute}</i>:
                      <i>{this.state.second}</i>
                     </span>
                
             </div>
        )
    }
 
componentDidMount() {
  // 返回自定义时间戳
       const end = Date.parse(new Date(`2019-12-${this.state.day} 14:29`))
       this.countFun(end);
    }
   
   //卸载组件取消倒计时
   componentWillUnmount(){
     clearInterval(this.timer);
    }
   
   countFun = (end) => {
 
     let now_time = Date.parse(new Date());
     var remaining = end - now_time;
  
     this.timer = setInterval(() => {
         //防止出现负数
       if (remaining > 1000) {
        remaining -= 1000;
         let day = Math.floor((remaining / 1000 / 3600) / 24);
         let hour = Math.floor((remaining / 1000 / 3600) % 24);
         let minute = Math.floor((remaining / 1000 / 60) % 60);
         let second = Math.floor(remaining / 1000 % 60);
 
         this.setState({
             day:day,
             hour:hour < 10 ? "0" + hour : hour,
            //  hour:hour <= (10 ? "0" + hour : "0" + hour),
             minute:minute < 10 ? "0" + minute : minute,
             second:second < 10 ? "0" + second : second
           })
        } else {
        //  clearInterval(this.timer);
        this.setState({
          day:this.state.day+=1
        })
         //倒计时结束时触发父组件的方法
         //this.props.timeEnd();
       }
    }, 1000);
    }
 
    }
export default NoTimeContent;