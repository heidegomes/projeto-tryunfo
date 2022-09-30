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
      cardRare: false,
      cardTrunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: false,
    };
  }

  // shouldEnableSaveBtn = () => {
  //   const { cardName,
  //     cardDescription,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //     cardImage,
  //     // cardRare,
  //     cardTrunfo,
  //     // hasTrunfo,
  //   } = this.state;

  //   const cardNameTyped = cardName.length > 0;
  //   const cardDescriptionTyped = cardDescription > 0;
  //   const cardAttr1Typed = cardAttr1 > 1 && cardAttr1 < 90;
  //   const cardAttr2Typed = cardAttr2 > 1 && cardAttr2 < 90;
  //   const cardAttr3Typed = cardAttr3 > 1 && cardAttr3 < 90;
  //   const cardImageTyped = cardImage > 0;
  //   // const somatoria = (cardAttr1 + cardAttr2 + cardAttr3) < 210;
  //     // cardRare,
  //     // cardTrunfo,
  //     // hasTrunfo,

  //   this.setState({ isSaveButtonDisabled: cardNameTyped && cardDescriptionTyped && cardAttr1Typed
  //   && cardAttr2Typed && cardAttr3Typed && cardImageTyped });
  // };

  onInputChange = ({ target: { name, value } }) => {
    // console.log(target);
    this.setState({
      [name]: value,
    });
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
          // isSaveButtonDisabled={ isSaveButtonDisabled }
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
