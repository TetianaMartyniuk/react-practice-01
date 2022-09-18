export function FavoriteImg({ pictures, handleDelete }) {
  return (
    <ul>
      {pictures.map(item => {
        const { webformatURL, id, tags } = item;
        return (
          <li onClick={() => addFavorite(item)} key={id}>
            <img src={webformatURL} alt={tags} width="300px" />
            <button id={id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
