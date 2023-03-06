import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Card.css';

import trunfoLogo from '../imgs/trunfo.png';
import noImage from '../imgs/no-image.png';

class Card extends Component {
  isTrunfo = (cardTrunfo) => {
    if (cardTrunfo) {
      return (
        <div className="trunfo-div">
          <img src={ trunfoLogo } alt="trunfo" className="trunfo" />
        </div>
      );
    }
  };

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.props;

    return (
      <div className="card-div">
        <p className="name" data-testid="name-card">{ cardName.toUpperCase() }</p>
        <img
          className="card-image"
          src={ cardImage || noImage }
          alt={ cardName || 'Imagem inválida' }
          data-testid="image-card"
        />
        <div className="description-div">
          <p className="description" data-testid="description-card">
            { cardDescription }
          </p>
        </div>
        <div className="att-div">
          <span>Estilo:</span>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
        </div>
        <div className="att-div">
          <span>Beleza:</span>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
        </div>
        <div className="att-div">
          <span>Ousadia:</span>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <div className="att-div">
          <span>Raridade:</span>
          <p data-testid="rare-card">{ cardRare[0].toUpperCase() + cardRare.slice(1) }</p>
        </div>
        { this.isTrunfo(cardTrunfo) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
