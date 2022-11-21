import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
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
    }, () => {
      this.shouldEnableSaveBtn();
      // console.log('OnInputChange - name:', name);
      // console.log('OnInputChange - value:', value);
      if (name === 'cardTrunfo') {
        this.setState({ cardTrunfo: true });
      }
    });
  };

  onSaveButtonClick = () => {
    this.setState({ hasTrunfo: this.validateSuperTrunfo() });
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCardList = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newCardList],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  validateSuperTrunfo = () => {
    // console.log('Estou em validate Super Trunfo');
    const { cardList } = this.state;
    if (cardList.length === 0) {
      const { cardTrunfo } = this.state;
      return cardTrunfo;
    }
    // console.log('Esou no validateSuperTrunfo');
    // console.log('Array Card list:', cardList);
    for (let i = 0; i < cardList.length; i += 1) {
      const obj = cardList[i];
      if (obj.cardTrunfo === true) {
        return true;
      }
    }
    return false;
  };

  removeItem = ({ target }) => {
    const { cardList } = this.state;
    const result = cardList.filter((item) => item.cardName !== target.id);
    this.setState({ cardList: result });
    this.setState({ hasTrunfo: this.validateSuperTrunfo() });
  }, () => ;

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardList,
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
          hasTrunfo={ hasTrunfo }
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
        <section>
          {
            cardList?.map((e) => (
              <div key={ e.cardName }>
                <Card
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardImage={ e.cardImage }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  id={ e.cardName }
                  type="button"
                  onClick={ this.removeItem }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;

// start project
