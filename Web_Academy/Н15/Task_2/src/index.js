import React from 'react';
import ReactDOM from 'react-dom';
import { Content, Login } from './App.js';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './App.css'

ReactDOM.render((
    <BrowserRouter>
        <div className='wrapper' >
             <nav className='nav' >
                 <div className='item'>
                    <Link to="/login" >Login</Link>
                 </div>
                 <div className='item'>
                    <Link to="/content" >Content</Link>
                 </div>
             </nav>
             <Switch>
                 <Route path="/login" component={Login} />
                 <Route exact path="/content" component={Content} />
             </Switch>
         </div>
    </BrowserRouter>  
), document.getElementById('root')
);
