import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            id="name-input"
            name="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            id="description-input"
            name="description-input"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="style-input">
          Estilo
          <input
            type="number"
            id="style-input"
            name="style-input"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="beauty-input">
          Beleza
          <input
            type="number"
            id="beauty-input"
            name="beauty-input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="daring-input">
          Ousadia
          <input
            type="number"
            id="daring-input"
            name="daring-input"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            id="image-input"
            name="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            id="rare-input"
            name="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Tryunfo
          <input
            type="checkbox"
            id="trunfo-input"
            name="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submit"
          id="save-button"
          name="save-button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
