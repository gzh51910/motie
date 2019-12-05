import React,{Component} from 'react';
import {nsg} from '@/api';
import {Icon,Button,Radio,Divider,Input} from 'antd';
import Axios from 'axios';
import '../css/sou.css'
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
// import MyComponent from './MyComponent';
class sou extends Component{
    state = {
       datas:[],
       inputs:[],
       main:[],
       mains:"",
       a:1,
       po:[],

    }
  

    async componentDidMount(){
let data = await Axios.get('https://app2.motie.com/search/recommend');

let input = await Axios.get('https://app2.motie.com/search/hotword');
// let main = await Axios.get(`https://app2.motie.com/search?word=%E7%8C%8E%E5%A2%83%E8%80%85&pageNo=1&pageSize=10`);



let datas= data.data.data.bookNameArray
let inputs = input.data.data
let a = 1;

let p =  window.onscroll= async ()=>{
    if(this.refs.h){
        let po =[]
            // console.log(document.body.scrollTop || document.documentElement.scrollTop + window.screen.height,"====",this.refs.h.offsetHeight);
        if(document.body.scrollTop || document.documentElement.scrollTop + window.screen.height>=this.refs.h.offsetHeight){
            a = a+1
            // console.log(this.refs.up.state.value);
            
            let main = await Axios.get(`https://app2.motie.com/search?word=${this.refs.up.state.value}&pageNo=${a}&pageSize=10`);
            main = main.data.data.bookList
        
            // console.log( this.state.po);
        // console.log(po);
            // po = this.state.po.push(...main)
            this.state.po.push(...main)
            po = this.state.po
        // console.log(po);
        this.setState({
            po
        })
    }
    

   }
   

  
  
}
// console.log(p);



        this.setState({
                datas,
                inputs,
           
                // main,
        })
      
    }


    
    async getvalue(id){
        // console.log("++++",this.refs.up.state.value);
        
        
        if(this.refs.up.state.value == undefined){
         
                 let   mains= this.refs.up.props.placeholder
                 let main = await Axios.get(`https://app2.motie.com/search?word=${mains}&pageNo=1&pageSize=10`);
                 main = main.data.data.bookList
                 this.refs.cover.style.display="none"
            this.setState({
                main
            })

        }else if(this.refs.up.state.value != undefined){
            let   mains = this.refs.up.state.value
            let main = await Axios.get(`https://app2.motie.com/search?word=${mains}&pageSize=10`);
            main = main.data.data.bookList
            this.refs.cover.style.display="none"
            this.setState({
                main
            })
        
        }
       
       
       
    }
  async  getit(id){

let mains = id
let main = await Axios.get(`https://app2.motie.com/search?word=${mains}&pageSize=10`);

this.refs.cover.style.display="none"
main = main.data.data.bookList
this.setState({
    main
                
})
    }
    goto = (id) =>{
        // console.log(11111);
        console.log("id:::",id);
        this.props.history.push(`/detail?book=${id}`);
        
        
    }
    gotohome = ()=>{
        this.props.history.push(`/`);
    }
    
    render(){
       let {datas,inputs,main,po} = this.state
       console.log(main);
    //    console.log("pppp",po);
    
     
       
       
        return (
            <div ref="h">
            <div className = 'xiao-body'>
                <Icon type="left" className="left" onClick={()=>{this.gotohome()}}  />

                <Input placeholder={inputs.hotWord} ref="up"/>

                <Icon type="search" className="right" onClick={()=>{this.getvalue()}}/>
            </div>

            <div style={{width:"100%",height:"1px",background:"#666",padding:"0.5vw"}}></div>
            <div  ref="cover" >
            { 
                datas.map((item)=>{
                    function getRandomColor() {
                        return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6); 
                    }
                //    console.log(getRandomColor());
                   
                    return (
                      
                        <div className="bodiy"style={{/* background:`${getRandomColor()}`, */opacity:"0.7"}} key={item.name} >
                            <span onClick={()=>{this.getit(item.name)}}>{item.name}</span>
                        </div>
                      
                    )
                })
            }
                </div>
            <div>
                {
                    main.map(item=>{
                        return(
                            <div  onClick={()=>{this.goto(item.id)}}  key={item.id} style={{padding:"3vw"}}> 
                                <img src={item.icon} style={{width:'20%',float:'left'}}></img>
                                <h4 className="h42">{item.name}</h4>
                                <p className='sadda'>{item.introduce}</p>
                            </div>
                        )
                    })
                }
                 {
                    po.map(item=>{
                        return(
                            <div onClick={()=>{this.goto(item.id)}}  key={item.id} style={{padding:"3vw"}}> 
                                <img src={item.icon} style={{width:'20%',float:'left'}}></img>
                                <h4 className="h42">{item.name}</h4>
                                <p className='sadda'>{item.introduce}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{width:'100%',padding:"8vw"}}></div>
































      
    </div>







        )
    }
}

export default sou;