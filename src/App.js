import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  shouldEnableSaveBtn = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const magicNumber = 90;
    const magicNumberSoma = 210;
    const cardNameTyped = cardName.length !== 0;
    const cardDescriptionTyped = cardDescription.length !== 0;
    const cardAttr1Typed = Number(cardAttr1) >= 0 && Number(cardAttr1) <= magicNumber;
    const cardAttr2Typed = Number(cardAttr2) >= 0 && Number(cardAttr2) <= magicNumber;
    const cardAttr3Typed = Number(cardAttr3) >= 0 && Number(cardAttr3) <= magicNumber;
    const cardImageTyped = cardImage.length !== 0;
    const sumAtt = (Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3)) <= magicNumberSoma;

    this.setState({ isSaveButtonDisabled: !(cardNameTyped
    && cardDescriptionTyped && cardAttr1Typed
    && cardAttr2Typed && cardAttr3Typed && cardImageTyped
    && sumAtt) });
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.shouldEnableSaveBtn());
  };

  // onSaveButtonClick = () => {

  // };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      // hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

// start project
