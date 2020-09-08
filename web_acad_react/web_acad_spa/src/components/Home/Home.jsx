import React from 'react';

import { Request } from '../../request';
import { Grid } from '../Grid';
import './Home.scss';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentPage: 1,
        };   
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
                const images = this.state.images.concat(JSON.parse(imageJSON))
                this.setImages(images)
            },
            (e) => {
                console.log(e);
            }, 
            { 'Authorization': 'Client-ID SQ5Scnaj8BOEjXsZruj1O4t-xHhHop9xfw7xw03MF0g' }
        )
    }

    nextImages = () => {
        this.setState((state) => {
            const newState = Object.assign(state);
            newState.currentPage++;
            return newState;
        }, () => {
            this.fetchImages();
        });
    }

    searchHandler = (images) => {
        console.log(images);
        this.setImages(images);
    }

    render() {
        return (
            <div className='content' >
                    <Grid images={this.state.images} />
                <button
                    className='content__btn' 
                    onClick={this.nextImages} 
                >
                    <img 
                        className="content__btn__img"
                        src={require("../../images/arrow.png")} 
                        alt="arrow" 
                    />
                </button>
            </div>
        )
    }
}