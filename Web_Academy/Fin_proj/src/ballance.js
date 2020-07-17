import React from 'react';
import { Link } from "react-router-dom";
import './css/ballance.css';


const Ballance = () => (
  <div className="ballance">
    <div className="container">
      <div className="header">
        <Link to='/account'>
          <div className="header__card__menu"></div>
        </Link>
        <div className="header__title">
          ULIX
        </div>
        <Link to='/user'>
          <button className="header__card__account" type="button"></button>
        </Link>
      </div>
      <div className="ballance__icon">
          <div className="ballance__icon__text">
              current ballance
          </div>
          <div className="ballance__icon__value">
              $19,452.20
          </div>
      </div>

      <div className="toggle">
        <div className="toggle__income">
          Income
        </div>
        <div className="toggle__spend">
          Spend
        </div>
      </div>

      <div className="graph">
      </div>

      <div className="days">
        <div className="day">Mo</div>
        <div className="day">Tu</div>
        <div className="day">We</div>
        <div className="day">Th</div>
        <div className="day active">Fr</div>
        <div className="day">Sa</div>
        <div className="day">Su</div>
      </div>

      <div className="ballance__title">
        Today
      </div>

      <div className="data">
        <div className="data__row">
            <div className="data__row__left">
                <div className="data__row__name">
                    Apple ICloud 
                </div>
                <div className="data__row__date">
                    7 JULY  2020
                </div>
            </div>
            <div className="data__row__right">
                - $ 5.99
            </div>
        </div>
      </div>
      <div className="data">
        <div className="data__row">
            <div className="data__row__left">
                <div className="data__row__name">
                    Porn Hub 
                </div>
                <div className="data__row__date">
                    8 JULY  2020
                </div>
            </div>
            <div className="data__row__right">
                - $ 25.99
            </div>
        </div>
      </div>

    </div>  
  </div>
);
 
export default Ballance

