import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './css/authorization.css';
import GO_button from './go_button.js';


const Authorization = () => (
  <div className="secondPage">
    <div className="container">
      <div className="wrapper">
        <h1 className="secondPage__header">
          Ulix
        </h1>
        <div className="authorization">
          <h2 className="authorization__title">
            Login
          </h2>
          <input className="authorization__input" type="text" placeholder="User Name"/>
          <input className="authorization__input" type="text" placeholder="Password"/>
        </div>
        <Link to='/account'><GO_button /></Link>
      </div>
    </div>
  </div>
);
 
export default Authorization

