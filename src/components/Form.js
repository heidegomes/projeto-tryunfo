import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    // const { handleInputChange, handleInputFocus, handleSaveCard, validateForm, state: { number, name } } = this.props;
    return (
      <div className="Form">
        <h1>
          {'<Componente Form />'}
        </h1>
        <form>
          <label htmlFor="name">
            <input
              data-testid="name-input"
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>

          <label htmlFor="description">
            <input
              data-testid="description-input"
              type="textarea"
              name="description"
              placeholder="description"
            />
          </label>

          <label htmlFor="atributo 1">
            <input
              data-testid="attr1-input"
              type="number"
              name="atributo 1"
              placeholder="atributo 1"
            />
          </label>

          <label htmlFor="atributo 2">
            <input
              data-testid="attr2-input"
              type="number"
              name="atributo 2"
              placeholder="atributo 2"
            />
          </label>

          <label htmlFor="atributo 3">
            <input
              data-testid="attr3-input"
              type="number"
              name="atributo 3"
              placeholder="atributo 3"
            />
          </label>

          <label htmlFor="image">
            <input
              data-testid="image-input"
              type="text"
              name="image"
              placeholder="Image"
            />
          </label>

          <label htmlFor="rarity">
            <select data-testid="rare-input" name="rarity">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="super trunfo">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="super trunfo"
              value="super trunfo"
            />
          </label>

          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </div>

    );
  }
}
export default Form;
