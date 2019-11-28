import React, { Component } from 'react';

// import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import './App.scss';
import Home from '~/Home';
import Reg from '~/Reg';
import Login from '~/Login';
import Mine from '~/Mine';
import Goods from '~/Goods';

import {connect} from 'react-redux';

class App extends Component {
  
    state = {
        
    }
    
    render() {

        return (
            <div>
                
               
            </div>
        )
    }
}

App = withRouter(App);
export default App;