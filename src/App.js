import React, { Component } from 'react';
import store from "@/store";
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import {Menu,Icon} from 'antd'
import './App.scss';
import Home from '~/Home';
import Detail from '~/detail';
import Bookshelf from '~/Bookshelf'
import Reward from "~/Reward";
import Reg from '~/Reg';
import Login from '~/Login';
import Mine from '~/Mine';
import Goods from '~/Goods';
import List from '~/List';
import Rank from '~/Rank'
import Invest from '~/Invest';
import {connect} from 'react-redux';
import {nsg,my} from './api';
import homenv from '~/homenv';
import homecb from '~/homecb';
import Inf from '~/Inf';
import Read from './pages/Read';
import Foundmore from '~/Foundmore';
import AllBooks from './pages/AllBooks';
import Free from './pages/Free';
import Chongzhi from '~/chongzhi';
import Xiaofei from '~/xiaofei';
import sou from '~/sou';
import Dingyue from '~/dingyue';
import Huodong from '~/huodong';
import Mydu from '~/mydu';
import Jieshao from '~/jieshao';


let routes=[
    { path: "/", name: "Home", component: Home },
    { path: "/Home", name: "Home", component: Home },
    { path:"/mine", name: "mine", component: Mine, auth: true  },
    { path:"/Reg", name: "Reg", component: Reg },
    { path:"/mydu", name: "mydu", component: Mydu },
    { path:"/jieshao", name: "jieshao", component: Jieshao },
    { path:"/chongzhi", name: "chongzhi", component: Chongzhi },
    { path:"/xiaofei", name: "xiaofei", component: Xiaofei, auth: true },
    { path:"/dingyue", name: "dingyue", component: Dingyue, auth: true },
    { path:"/huodong", name: "huodong", component: Huodong, auth: true },
    { path:"/Inf", name: "Inf", component: Inf, auth: true },
    { path:"/Invest", name: "Invest", component: Invest },
    { path:"/Login", name: "Login", component: Login },
    { path:"/bookshelf", name: "bookshelf", component: Bookshelf , auth: true},
    { path:"/homenv", name: "homenv",component:homenv}, 
    { path:"/homecb", name: "homecb",component:homecb},
    { path:"/list", name: "list",component:List}, 
    { path:"/detail", name: "detail",component:Detail}, 
    { path:"/reward", name: "reward",component:Reward}, 
    { path:"/rank", name: "rank",component:Rank},
    { path:"/read", name: "read",component:Read}, 
    { path:"/Foundmore", name: "Foundmore",component:Foundmore}, 
    { path:"/allbooks", name: "allbooks",component:AllBooks},
    { path:"/free", name: "free",component:Free},
    { path:"/sou", name: "sou",component:sou}
]

 




// import Test from '~/Test';
class App extends Component {
  
    state = {
        
    }
    checktoken=async ()=>{
        let {data}= await my.get("/checktoken",{
            token:localStorage.getItem("Authrization") || "",
            username:localStorage.getItem("username") || ""
        })
        this.setState({
            token:data.msg,
        })
    }
    shouldComponentUpdate(p,s){
        console.log(s,this.state);
        
        if(s.token==this.state.token){
            return false;
        }
        return true
    }
    componentDidMount(){
        console.log(12125454);
        
    }
    render() {
        // console.log("=======",data.msg)
        let {token}=this.state
        return (
            <div>
                {routes.map((item, index) => {
                    // let {data}=await this.checktoken()

                    return <Route key={index} path={item.path} exact render={props =>{
                        console.log(this.checktoken(),token,item.path);
                        
                        return (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                            pathname: '/Login',
                            state: { from: props.location }
                        }} />))}
                    }
                        
                     />
                })}
                {/* <Route path="/" component={Home} exact/>
                <Route path="Home" component={Home} exact/>
                <Route path="/mine" component={Mine} />
                <Route path="/Reg" component={Reg} />
                <Route path="/mydu" component={Mydu} />
                <Route path="/jieshao" component={Jieshao} />
                <Route path="/chongzhi" component={Chongzhi} />
                <Route path="/xiaofei" component={Xiaofei} />
                <Route path="/dingyue" component={Dingyue} />
                <Route path="/huodong" component={Huodong} />
                <Route path="/Inf" component={Inf} />
                <Route path="/Invest" component={Invest} />
                <Route path="/Login" component={Login} />
                <Route path="/bookshelf" component={Bookshelf} />
                <Route path="/homenv" component={homenv} />
                <Route path="/homecb" component={homecb} />
                <Route path="/list" component={List} />
                <Route path="/detail" component={Detail} />
                <Route path="/reward" component={Reward} />
                <Route path="/rank" component={Rank} />
                <Route path="/read" component={Read} />
                <Route path="/Foundmore" component={Foundmore} />
                <Route path="/allbooks" component={AllBooks} />
                <Route path="/free" component={Free}/>
                <Route path="/sou" component={sou}/> */}


                {/* <Route path="/Test" component={Test}/> */}
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="nav">
                    
                    <Menu.Item key="book">
                        <Link to="/bookshelf">
                            <Icon type="book" />
                            书架
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="index">
                        <Link to="/">
                            <Icon type="star" />
                            精选
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Link to="/Mine">
                            <Icon type="user" />
                            我的
                        </Link>
                    </Menu.Item>
                </Menu>
               
            </div>
        )
    }
}
import { format } from 'path';

// App = connect()(App)
App = withRouter(App);
export default App;