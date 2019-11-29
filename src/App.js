import React, { Component } from 'react';

import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import {Menu,Icon} from 'antd'
import './App.scss';
import Home from '~/Home';
import Bookshelf from '~/Bookshelf'
import Reg from '~/Reg';
import Login from '~/Login';
import Mine from '~/Mine';
import Goods from '~/Goods';
import List from '~/List'
import {connect} from 'react-redux';
import {nsg,my} from './api'
import homenv from '~/homenv';
import homecb from '~/homecb';

class App extends Component {
  
    state = {
        
    }
    

    render() {
     
     
        return (
            <div>
                <Route path="/" component={Home} exact/>
                <Route path="Home" component={Home} exact/>
                <Route path="/mine" component={Mine} />
                <Route path="/bookshelf" component={Bookshelf} />
                <Route path="/homenv" component={homenv} />
                <Route path="/homecb" component={homecb} />
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