import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Form.css';

class Form extends Component {
  hasSuperTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return (
        <span className="hasTrunfo">Você já tem um Super Trunfo em seu baralho</span>
      );
    }
    return (
      <label htmlFor="trunfo-input">
        <input
          type="checkbox"
          id="trunfo-input"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        { ' Super Tryunfo' }
      </label>
    );
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    const maxPoints = 210;

    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <br />
          <input
            type="text"
            id="name-input"
            className="name-input"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <br />
          <textarea
            id="description-input"
            className="description-input"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="style-input">
          Estilo
          <input
            type="number"
            id="style-input"
            className="number-input"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="beauty-input">
          Beleza
          <input
            type="number"
            id="beauty-input"
            className="number-input"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="daring-input">
          Ousadia
          <input
            type="number"
            id="daring-input"
            className="number-input"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <p className="points-left">
          { `Pontos Restantes: ${maxPoints - cardAttr1 - cardAttr2 - cardAttr3}` }
        </p>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            id="image-input"
            className="image-input"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="Link da Imagem"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            id="rare-input"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        { this.hasSuperTrunfo(hasTrunfo, cardTrunfo, onInputChange) }
        <button
          type="button"
          id="save-button"
          name="saveButton"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
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
