import React, { Component } from 'react';

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

class App extends Component {
  
    state = {
        
    }
    

    render() {
     
     
        return (
            <div>
                <Route path="/" component={Home} exact/>
                <Route path="Home" component={Home} exact/>
                <Route path="/mine" component={Mine} />
                <Route path="/chongzhi" component={Chongzhi} />
                <Route path="/xiaofei" component={Xiaofei} />
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
                        <Link to="/mine">
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

App = withRouter(App);
export default App;