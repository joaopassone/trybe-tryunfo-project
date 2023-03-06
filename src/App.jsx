import React from 'react';
import Card from './components/Card';
import DeleteButton from './components/DeleteButton';
import Filters from './components/Filters';
import Form from './components/Form';
import './App.css';

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
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
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

    if (name === 'cardTrunfo' || name === 'trunfoFilter') {
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

  onDeleteButtonClick = (index, { cardTrunfo }) => {
    const { cards } = this.state;

    const updatedCards = [...cards];
    updatedCards.splice(index, 1);

    this.setState(() => ({ cards: updatedCards }));

    if (cardTrunfo) {
      this.setState(() => ({ hasTrunfo: false }));
    }
  };

  filterCards = () => {
    const { cards, nameFilter, rareFilter, trunfoFilter } = this.state;

    if (trunfoFilter) {
      return cards.filter(({ cardTrunfo }) => cardTrunfo);
    }

    return (
      cards
        .filter(({ cardName }) => cardName.includes(nameFilter))
        .filter(({ cardRare }) => (rareFilter === 'todas'
          ? true : cardRare === rareFilter))
    );
  };

  render() {
    const cards = this.filterCards();

    return (
      <>
        <header>
          <h1>Super Tryunfo</h1>
        </header>
        <main>
          <section>
            <h2>Adicione uma Nova Carta</h2>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <aside>
            <h2>Preview</h2>
            <Card { ...this.state } />
          </aside>
        </main>
        <section>
          <h2>Cartas Adicionadas</h2>
          <Filters { ...this.state } onInputChange={ this.onInputChange } />
          <div className="addCards-div">
            { cards.map((card, index) => (
              <div className="addCard-div" key={ card.cardName }>
                <Card { ...card } />
                <DeleteButton
                  onDeleteButtonClick={ this.onDeleteButtonClick }
                  index={ index }
                  card={ card }
                />
              </div>
            )) }
          </div>
        </section>
      </>
    );
  }
}

export default App;
