import { Component } from 'react';
import * as s from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;

    if (value.trim() === '') {
      return;
    }

    this.props.handleSearch(value.trim());
  };

  render() {
    const { value } = this.state;

    return (
      <s.Searchbar>
        <s.Form onSubmit={this.handleSubmit}>
          <button type="submit">
            <s.ButtonLabel>Search</s.ButtonLabel>
          </button>

          <s.Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={value}
          />
        </s.Form>
      </s.Searchbar>
    );
  }
}

export default Searchbar;
