import React from 'react';
import { Request } from '../../request';

export class Search extends React.Component {

    componentDidMount() {
        const request = new Request();
        request.get(
            `http://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.queryString}&client_id=SQ5Scnaj8BOEjXsZruj1O4t-xHhHop9xfw7xw03MF0g`,
            (responseJSON) => {
                const response = JSON.parse(responseJSON);
                if (response && response.results) {
                    this.props.onSearchSucceed(response.results);
                } else {
                    console.error('Response is empty', responseJSON);
                }
            },
            (e) => {
                throw new Error(e);
            }
        )
    }

    render() {
        return (
            <h1>
                Search page
            </h1>
        )
    }
} 
