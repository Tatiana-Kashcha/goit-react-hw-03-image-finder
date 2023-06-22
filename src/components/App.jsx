import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchText: '',
    data: [],
    isShowModal: false,
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
    const { data } = this.state;
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery data={data} />
      </>
    );
  }
}

export default App;
