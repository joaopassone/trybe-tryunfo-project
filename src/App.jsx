import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  validateSaveButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const sumMax = 210;
    const max = 90;

    if (cardName.length * cardDescription.length * cardImage.length === 0
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > sumMax
      || (Number(cardAttr1) > max || Number(cardAttr1) < 0)
      || (Number(cardAttr2) > max || Number(cardAttr2) < 0)
      || (Number(cardAttr3) > max || Number(cardAttr3) < 0)) {
      this.setState(() => ({ isSaveButtonDisabled: true }));
      return;
    }
    this.setState(() => ({ isSaveButtonDisabled: false }));
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    if (name === 'cardTrunfo') {
      value = target.checked;
    }

    this.setState(() => ({ [name]: value }), () => {
      this.validateSaveButton();
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, cards } = this.state;

    if (cardTrunfo) {
      this.setState(() => ({ hasTrunfo: true }));
    }

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    const updatedCards = [...cards];
    updatedCards.push(newCard);

    this.setState(() => ({ cards: updatedCards }), () => {
      this.setState(() => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      }));
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...this.state } />
        </section>
        <section>
          { cards.map((card) => <Card { ...card } key={ card.cardName } />) }
        </section>
      </>
    );
  }
}

export default App;
