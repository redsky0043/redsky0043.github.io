import React from 'react';

import { Navbar } from './components/Navbar';
import { Request } from './request';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentPage: 1,
        };
        this.nextImages = this.nextImages.bind(this);
        this.searchHandler = this.searchHandler.bind(this);   
    }

    setImages(images) {
        this.setState({ images });
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        const request = new Request();

        request.get(
            `https://api.unsplash.com/photos?page=${this.state.currentPage}`,
            (imageJSON) => {
                this.setImages(JSON.parse(imageJSON))
            },
            (e) => {
                console.log(e);
            },
            { 'Authorization': 'Client-ID SQ5Scnaj8BOEjXsZruj1O4t-xHhHop9xfw7xw03MF0g' }
        )
    }

    nextImages() {
        this.setState((state) => {
            const newState = Object.assign(state);
            newState.currentPage++;
            return newState;
        }, () => {
            this.fetchImages();
        });
    }

    renderImages() {
        return this.state.images.map(image => {
            return (
                <img
                    src={`${image.urls.small}`}
                    key={image.id}
                    alt={image.id}
                />
            )
        });
    }

    searchHandler(images) {
        console.log(images);
        this.setImages(images);
    }

    render() {
        return (
            <div>
                <Navbar onSearchSucceed={this.searchHandler} />
                <div>
                    {this.renderImages()}
                </div>
                <button onClick={this.nextImages} >
                    Next
                </button>
            </div>
        )
    }
}
