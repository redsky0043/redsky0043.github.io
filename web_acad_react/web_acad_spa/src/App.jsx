import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Home } from './components/Home';

export class App extends React.Component {
    constructor() {
        super();
    }

    searchHandler = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar onSearch={this.searchHandler} />
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/search/:queryString' component={Search} />
                        <Route path='/about' component={() => <h2>About page</h2> } />
                        <Route path='/404' component={() => <h1>Not found!</h1> } />
                        <Redirect to='/404' />
                    </Switch>
                </Router>
            </div>
        )
    }
}
