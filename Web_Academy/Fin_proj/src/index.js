import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history';
import FirstPage from './firstPage.js';
import Authorization from './authorization.js';
import Account from './account.js';
import Ballance from './ballance.js';

const history = createBrowserHistory()


ReactDOM.render((
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={FirstPage} />
          <Route path='/authorization' component={Authorization} />
          <Route path='/account' component={Account} />
          <Route path='/ballance' component={Ballance} />
        </Switch>
      </Router>  
  ), document.getElementById('root')
 );



