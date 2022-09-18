import Form from 'react-bootstrap/Form';

export function SelectBasicExample({ handleChange }) {
  return (
    <Form.Select onChange={handleChange} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="favorite">Favorite</option>
      <option value="images">Images</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
