import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImagesApi } from 'api/getImagesApi';
import { Button } from 'components/Button/Button';

class App extends Component {
  state = {
    searchText: '',
    data: [],
    currentPage: 1,
    totalPage: 0,
    error: null,
    isShowModal: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchText, currentPage } = this.state;

    if (prevState.searchText !== searchText) {
      this.setState({
        currentPage: 1,
      });
    }

    if (
      (prevState.searchText !== searchText && currentPage === 1) ||
      (prevState.currentPage !== currentPage && currentPage === 1)
    ) {
      this.setState({
        isLoading: true,
      });
      this.getImages();
    }

    if (prevState.currentPage !== currentPage && currentPage !== 1) {
      this.getImagesLoadMore();
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

      this.setState({
        data: [...dataGallery.data.hits],
      });

      this.setState({
        totalPage: Math.ceil(
          dataGallery.data.totalHits / dataGallery.data.hits.length
        ),
      });
    } catch (error) {
      this.setState({ error });
      console.log('ERROR', error);
      Notify.failure('Oops, something went wrong! Try again later.');
    } finally {
      this.setState({ isLoading: false });
      Loading.remove();
    }
  };

  getImagesLoadMore = async () => {
    const { searchText, currentPage } = this.state;

    try {
      const dataGalleryLoadMore = await getImagesApi(searchText, currentPage);

      this.setState(prevState => ({
        data: [...prevState.data, ...dataGalleryLoadMore.data.hits],
      }));
    } catch (error) {
      this.setState({ error });
      console.log('ERROR', error);
      Notify.failure('Oops, something went wrong! Try again later.');
    } finally {
      this.setState({ isLoading: false });
      Loading.remove();
    }
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { data, isLoading, currentPage, totalPage } = this.state;
    console.log(this.state);

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && Loading.arrows()}
        <ImageGallery data={data} />
        {totalPage > currentPage && <Button onLoadMore={this.handleLoadMore} />}
      </>
    );
  }
}

export default App;
