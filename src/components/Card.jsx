import React, { Component } from 'react';

class Card extends Component {
  isTrunfo = (cardTrunfo) => {
    if (cardTrunfo) {
      return (
        <span data-testid="trunfo-card">Super Trunfo</span>
      );
    }
  };

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.props;

    return (
      <div>
        <span data-testid="name-card">{ cardName }</span>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <span data-testid="rare-card">{ cardRare }</span>
        { this.isTrunfo(cardTrunfo) }
      </div>
    );
  }
}

export default Card;
