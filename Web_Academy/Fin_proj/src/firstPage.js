import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './css/firstPage.css';
import GetStarter_button from './getStarter_button.js';

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

        {/* <Link to='/'>Test_Home</Link> */}
        <Link to='/authorization'><GetStarter_button /></Link>
      </div>
    </div>
  </div>
);

export default FirstPage;





