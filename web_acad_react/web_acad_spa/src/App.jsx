import React from 'react';

import { Navbar } from './components/Navbar.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Test'
        };
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

export default App;
