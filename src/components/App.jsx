import { Component } from 'react';
import SelectBasicExample from './SelectComponent/Select';
import { Images } from './ImagesComponent/Images';
import { FavoriteImg } from './FavoriteComponent/FavoriteImg';

class App extends Component {
  state = {
    selected: '',
    favorites: [],
  };

  addFavorite = img => {
    const isDublucate = !!this.state.favorites.find(elem => elem.id === img.id);
    if (isDublucate) {
      const result = window.confirm('Add again?');
      if (!result) {
        return;
      }
    }
    this.setState(prevState => {
      favorites: [...prevState.favorites, img];
    });
  };

  handleChange = e => {
    this.setState({ selected: e.target.value });
    console.log(e.target.value);
  };

  handleDelete = ({ target: { id } }) => {
    console.log(id);
    this.setState(prevState => ({
      favorites: prevState.favorites.filter(elem => elem.id.toString() !== id),
    }));
  };

  render() {
    const { handleChange, addFavorite, handleDelete } = this;
    const { favorites, selected } = this.state;
    return (
      <div>
        <SelectBasicExample handleChange={handleChange} />
        {selected === 'images' && <Images addFavorite={addFavorite} />}
        {selected === 'favorites' && (
          <FavoriteImg pictures={favorites} handleDelete={handleDelete} />
        )}
      </div>
    );
  }
}

export default App;
