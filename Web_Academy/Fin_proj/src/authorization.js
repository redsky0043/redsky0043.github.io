import React from 'react';
import { Link } from "react-router-dom";
import './css/authorization.css';
import GoButton from './go_button.js';


const Authorization = () => {

  

  return (
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
          <input className="authorization__input" type="text" required placeholder="User Name"/>
          <input className="authorization__input" type="text" required placeholder="Password"/>
        </div>
        <Link to='/account'><GoButton /></Link>
      </div>
    </div>
  </div>
  ) 
};
 
export default Authorization

