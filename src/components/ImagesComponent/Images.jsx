import { Component } from 'react';
import { getImages } from 'components/Services/api';

export class Images extends Component {
  state = {
    query: '',
    email: '',
    pictures: [],
  };

  handleValue = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSeurch = e => {
    e.preventDefault();
    getImages(this.state.query).then(res => {
      this.setState(prevState => {
        return { pictures: [...prevState.pictures, ...res.hits] };
      });
    });
  };

  render() {
    const { query, email, pictures } = this.state;
    const { handleValue, handleSeurch } = this;
    const { addFavorite } = this.props;
    return (
      <div>
        <form action="" onSubmit={handleSeurch}>
          <label htmlFor="">
            <input
              onChange={handleValue}
              type="text"
              value={query}
              name="query"
              placeholder="Autumn..."
            />
          </label>
          {/* <label htmlFor="">
            <input
              onChange={handleValue}
              type="text"
              value={email}
              name="email"
              placeholder="maria@mail.ua..."
            />
          </label> */}
        </form>
        <ul>
          {pictures.map(item => {
            const { webformatURL, id, tags } = item;
            return (
              <li onClick={() => addFavorite(item)} key={id}>
                <img src={webformatURL} alt={tags} width="300px" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
