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
import Invest from '~/Invest';
import List from '~/List';
import {connect} from 'react-redux';
import Inf from '~/Inf';

class App extends Component {
  
    state = {
        
    }
    
    render() {

        return (
            <div>
                <Route path="/" component={Home} exact/>
                <Route path="/mine" component={Mine} />
                <Route path="/Inf" component={Inf} />
                <Route path="/Invest" component={Invest} />
                <Route path="/Login" component={Login} />
                <Route path="/bookshelf" component={Bookshelf} />
                <Route path="/list" component={List} />
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

App = withRouter(App);
export default App;