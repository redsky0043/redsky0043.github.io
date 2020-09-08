import React from 'react';

import { Request } from '../../request';
import { Grid } from '../Grid';

export class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        const request = new Request();
        request.get(
            `http://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.queryString}&client_id=SQ5Scnaj8BOEjXsZruj1O4t-xHhHop9xfw7xw03MF0g`,
            (responseJSON) => {
                const response = JSON.parse(responseJSON);
                if (response && response.results) {
                    this.setImages(response.results);
                } else {
                    console.error('Response is empty', responseJSON);
                }
            },
            (e) => {
                throw new Error(e);
            }
        )
    }

    setImages(images){
        this.setState({ images });
    }

    render() {
        return (
            <div className="content">
                <Grid images={this.state.images} />
            </div>
        )
    }
} 
