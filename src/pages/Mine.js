import React,{Component} from 'react';
import {withToken} from '../utils/hoc';
import ReactDOM from 'react-dom';
import {Icon,Button,Radio,Divider} from 'antd';
import { Route, Redirect, Switch, Link, NavLink, withRouter} from 'react-router-dom';
import '../css/Mine.css'


class Mine extends Component{
    constructor(){
        super()
        this.state = {
            token:'',
            username:''
        };

};

componentWillMount() {
    // console.log(window.localStorage.username);
    
    if(window.localStorage == ''){
        this.props.history.push('/Login');
    }else {
        this.props.history.push('/Mine');
    }
}


componentDidMount () {
    var storage = window.localStorage;
    var username =storage.getItem("username");   
    var book =storage.getItem("book");     
    // console.log(username);
    // console.log(book);
    
    this.setState({username});
};

logOut =()=> {
    localStorage.clear('');
    this.props.history.push('/Login');
};


    render(){
        let {username} = this.state;
        return (
            <div className = 'my-body'>
                <Link to="/Inf">
                <div className = 'my-title'>
                    <dl>
                        <dt className = 'left'>
                            <img src="https://cdn.motieimg.com/people/mt_person_ico.png?x-oss-process=style/user_big"/>
                        </dt>
                        <dt className = 'right'>
                            <span>
                            {username}
                                
                                <p> <Icon type="sketch" /> {localStorage.getItem("username")?localStorage.getItem("username"):"普通会员"}</p>
                            </span>
                            <p className ='my-go-right'>
                            
                            <Icon type="right"/>    

                            </p>
                        </dt>
                    </dl>
                </div>
                </Link>
                <div className = 'my-account'>
                <Icon type="credit-card" theme="twoTone" twoToneColor="#FF3333" className = 'icon' />
                <span>
                    我的账户
                </span>
                <ul>
                    <li>
                        <span>0</span>
                        <p>磨铁币</p>
                    </li>
                    <li>
                        <span>500</span>
                        <p>阅读券</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>推荐票</p>
                    </li>
                </ul>
                <div className = "my-account-end">
                    <Link to="/Invest">
                    <div className = 'my-btn'>
                        <p>
                            充值
                        </p>
                    </div>
                    </Link>
                </div>
                </div>
                <div className = 'my-main'>
                <Link to="/chongzhi">
                    <div className = "my-t1">
                    <Icon type="money-collect" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            充值记录
                        </span>
                        <Icon type="right" />
                    </div>
                    </Link>
                    <Link to="/xiaofei">
                    <div className = "my-t1">
                    <Icon type="dollar" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            消费记录
                        </span>
                        <Icon type="right" />
                    </div>
                    </Link>
                    <Link to="/dingyue">
                    <div className = "my-t1">
                    <Icon type="video-camera" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            自动订阅
                        </span>
                        <Icon type="right" />
                    </div>
                    </Link>
                    <Link to="/huodong">
                    <div className = "my-t1">
                    <Icon type="profile" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            我的活动
                        </span>
                        <Icon type="right" />
                    </div>
                    </Link>
                    <div className = "my-t1">
                    <Icon type="like" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            我的投票
                        </span>
                        <Icon type="right" />
                    </div>
                    <div className = "my-t1">
                    <Icon type="trophy" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            作家专区
                        </span>
                        <Icon type="right" />
                    </div>
                    <Link to="/jieshao">
                    <div className = "my-t1">
                    <Icon type="contacts" theme="twoTone" className ="icon" twoToneColor="#FF3333"/>
                        <span>
                            关于我们
                        </span>
                        <Icon type="right" />
                    </div>
                    </Link>
                </div>
                
                <div className = 'my-end' onClick={()=>{localStorage.removeItem('username');localStorage.removeItem('Authrization')}}>
                    <Link to="/Login">
                        <p>
                            退出登录
                        </p>
                    </Link>
                </div>
                
            </div>
        )
    }
}

Mine = withRouter(withToken(Mine))



export default Mine;