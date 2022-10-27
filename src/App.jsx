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
    nameFilter: '',
    rareFilter: 'todas',
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

  onDeleteButtonClick = (index, { cardTrunfo }) => {
    const { cards } = this.state;

    const updatedCards = [...cards];
    updatedCards.splice(index, 1);

    this.setState(() => ({ cards: updatedCards }));

    if (cardTrunfo) {
      this.setState(() => ({ hasTrunfo: false }));
    }
  };

  render() {
    const { cards } = this.state;
    const { nameFilter, rareFilter } = this.state;

    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section>
          <h2>Adicione uma Nova Carta</h2>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </section>
        <section>
          <h2>Preview</h2>
          <Card { ...this.state } />
        </section>
        <section>
          <h2>Cartas Adicionadas</h2>
          <label htmlFor="name-filter">
            <input
              type="text"
              id="name-filter"
              name="nameFilter"
              data-testid="name-filter"
              onChange={ this.onInputChange }
              placeholder="Nome da Carta"
            />
          </label>
          <label htmlFor="rare-filter">
            <select
              id="rare-filter"
              name="rareFilter"
              data-testid="rare-filter"
              onChange={ this.onInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          { cards
            .filter(({ cardName }) => cardName.includes(nameFilter))
            .filter(({ cardRare }) => (rareFilter === 'todas'
              ?  true : cardRare === rareFilter))
            .map((card, index) => (
              <>
                <Card { ...card } key={ card.cardName } />
                <button
                  key={ index }
                  type="button"
                  id="delete-button"
                  name="deleteButton"
                  data-testid="delete-button"
                  onClick={ () => this.onDeleteButtonClick(index, card) }
                >
                  Excluir
                </button>
              </>
            )) }
        </section>
      </>
    );
  }
}

export default App;
