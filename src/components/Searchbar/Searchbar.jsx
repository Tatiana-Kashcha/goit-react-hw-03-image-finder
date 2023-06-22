import { Component } from 'react';
import * as s from './Searchbar.styled';
import { getImages } from 'components/getImages';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
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
