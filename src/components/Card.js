import React from 'react';
import PropTypes from 'prop-types';
// import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <div data-testid="name-card">
          { cardName }
        </div>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <div data-testid="description-card">
          { cardDescription }
        </div>
        <div data-testid="attr1-card">
          { cardAttr1 }
        </div>
        <div data-testid="attr2-card">
          { cardAttr2 }
        </div>
        <div data-testid="attr3-card">
          { cardAttr3 }
        </div>
        <div data-testid="rare-card">
          { cardRare }
        </div>
        { cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div> }
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
