import React from 'react';
import { Request } from '../../request'; 
import './SearchForm.scss';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            searchValue: '',
        }
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submitForm(e) {
        e.preventDefault();

        const request = new Request();
        request.get(
            `http://api.unsplash.com/search/photos?page=1&query=${this.state.searchValue}&client_id=SQ5Scnaj8BOEjXsZruj1O4t-xHhHop9xfw7xw03MF0g`,
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

    onChange(e) {
        const searchValue = e.currentTarget.value;
        this.setState({ searchValue })
    }

    render() {

        const className = this.props.className || '';

        return (
            <form className={className + ' search-form'} onSubmit={this.submitForm} >
                <button className="search-form__button">S</button>
                <input 
                    className='search-form__input' 
                    type="text" 
                    placeholder='Search...'
                    onChange={ this.onChange } 
                    value={ this.state.searchValue } 
                />
            </form>
        )
    }
} 