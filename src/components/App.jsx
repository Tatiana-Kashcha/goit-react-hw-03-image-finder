import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImagesApi } from 'api/getImagesApi';

class App extends Component {
  state = {
    searchText: '',
    data: [],
    currentPage: 1,
    totalPage: 0,
    perPage: 0,
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
      this.setState({
        isLoading: true,
      });
    }
  }

  getImages = async () => {
    const { searchText, currentPage } = this.state;
    try {
      const dataGallery = await getImagesApi(searchText, currentPage);

      if (dataGallery.data.hits.length) {
        Notify.success(`We found ${dataGallery.data.totalHits} images.`);
      } else {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

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
      console.log(error);
      Notify.failure('Oops, something went wrong! Try again later.');
    } finally {
      this.setState({ isLoading: false });
      Loading.remove();
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
    const { data, isLoading } = this.state;
    console.log(data);

    // const totalPage = Math.ceil(data.data.totalHits / data.data.hits.length);

    // console.log(totalPage);

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && Loading.arrows()}
        <ImageGallery data={data} />
      </>
    );
  }
}

export default App;
