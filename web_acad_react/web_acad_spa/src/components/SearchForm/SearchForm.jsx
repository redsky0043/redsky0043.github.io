import React from 'react';
import './SearchForm.scss';

export class SearchForm extends React.Component {
    render() {
        return (
            <form className='serch-form' >
                <input className='serch-form__input' type="text" placeholder='Search...' />
            </form>
        )
    }
}