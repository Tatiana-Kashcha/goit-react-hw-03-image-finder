import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImagesApi } from 'api/getImagesApi';

class App extends Component {
  state = {
    searchText: '',
    data: [],
    currentPage: 1,
    // totalPage: 0,
    error: null,
    isShowModal: false,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { searchText, currentPage } = this.state;
    try {
      const dataGallery = await getImagesApi(searchText, currentPage);
      if (currentPage > 1) {
        this.setState(prevState => ({
          data: [...prevState.data, ...dataGallery.data.hits],
        }));
      } else {
        this.setState({
          data: dataGallery.data.hits,
        });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSearch = searchText => {
    this.setState({ searchText });
    console.log(searchText);
  };

  render() {
    const { data } = this.state;
    console.log(data);

    // const totalPage = Math.ceil(data.data.totalHits / data.data.hits.length);

    // console.log(totalPage);

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery data={data} />
      </>
    );
  }
}

export default App;
