import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImages } from 'components/getImages';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

class App extends Component {
  state = {
    searchText: '',
    data: [],
    isShowModal: false,
    currentPage: 1,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSearch = searchText => {
    this.setState({ searchText });
    const { currentPage } = this.state;
    getImages(searchText.trim(), currentPage);
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
