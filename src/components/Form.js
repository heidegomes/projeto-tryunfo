import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './Form.css';

class Form extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { cardName, onInputChange, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage, cardTrunfo } = this.props;

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
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            <input
              data-testid="description-input"
              type="textarea"
              name="description"
              placeholder="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo 1">
            <input
              data-testid="attr1-input"
              type="number"
              name="atributo 1"
              placeholder="atributo 1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo 2">
            <input
              data-testid="attr2-input"
              type="number"
              name="atributo 2"
              placeholder="atributo 2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo 3">
            <input
              data-testid="attr3-input"
              type="number"
              name="atributo 3"
              placeholder="atributo 3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            <input
              data-testid="image-input"
              type="text"
              name="image"
              placeholder="Image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rarity">
            <select
              data-testid="rare-input"
              name="rarity"
              value={ cardRare }
              onChange={ onInputChange }
            >
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
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
