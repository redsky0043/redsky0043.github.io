import React from 'react';
import './css/account.css';
import { Link } from "react-router-dom";

const Account = () => (
    <div className="account">
        <div className="container">
            <div className="header">
                <div className="header__carts none"></div>
                <div className="header__title">
                    ULIX
                </div>
                <Link to='/user'>
                    <button className="header__carts" type="button"></button>
                </Link>
            </div>
            <Link to='/ballance'>
                <div className="main__card">
                    <div className="main__card__top">
                        <div className="main__card__balance">
                            $19,452.20
                        </div>
                        <div className="main__card__text">
                            current ballance
                        </div>
                    </div>
                    <div className="main__card__number">
                        {/* 5454 4141 5687 5412 */}
                        <div className="part">5454</div>
                        <div className="part">4141</div>
                        <div className="part">5687</div>
                        <div className="part">5412</div>
                    </div>
                </div>
            </Link>
                
            <div className="title">
                send money
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
            
        </div>
    </div>
    
);
   
export default Account