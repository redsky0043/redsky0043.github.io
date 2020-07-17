import React from 'react';
import { Link } from "react-router-dom";
import './css/firstPage.css';
import GetStarterButton from './getStarter_button.js';

const FirstPage = () => (
  <div className="firstPage">
    <div className="container">
      <div className="wrapper">
        <h1 className="firstPage__header">
          Ulix
        </h1>
        <p className="firstPage__about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident debitis nisi repudiandae quis nobis consequatur eum, reprehenderit quisquam enim?
        </p>
        <Link to='/authorization'><GetStarterButton /></Link>
      </div>
    </div>
  </div>
);

export default FirstPage;