import React from 'react';
import './SearchForm.scss';

export class SearchForm extends React.Component {
    render() {
        return (
            <form className='search-form' >
                <input className='search-form__input' type="text" placeholder='Search...' />
            </form>
        )
    }
}