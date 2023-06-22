import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

class App extends Component {
  state = {
    isShowModal: false,
    searchText: '',
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <>
        <s.Searchbar />
      </>
    );
  }
}

export default App;
