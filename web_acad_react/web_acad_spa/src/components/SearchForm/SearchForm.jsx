import React from 'react';
import { withRouter } from 'react-router-dom';
import './SearchForm.scss';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            searchValue: '',
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchValue}`);
    }

    onChange = (e) => {
        const searchValue = e.currentTarget.value;
        this.setState({ searchValue });
    }

    render() {
        const className = this.props.className || '';

        return (
            <form className={className + ' search-form'} onSubmit={this.submitForm} >
                <button className="search-form__button">
                    <img
                        className="search-form__img"
                        src={require("../../images/search.png")}
                        alt="search"
                    />
                </button>
                <input
                    className='search-form__input'
                    type="text"
                    placeholder='Search...'
                    onChange={this.onChange}
                    value={this.state.searchValue}
                />
            </form> 
        )
    }
}

const SearchFormWithRouter = withRouter(SearchForm);

export { SearchFormWithRouter as SearchForm };