import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../DeleteButton.css';

class DeleteButton extends Component {
  render() {
    const { onDeleteButtonClick, index, card } = this.props;
    return (
      <button
        type="button"
        id="delete-button"
        name="deleteButton"
        data-testid="delete-button"
        onClick={ () => onDeleteButtonClick(index, card) }
      >
        Excluir
      </button>
    );
  }
}

DeleteButton.propTypes = {
  index: PropTypes.number.isRequired,
  card: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default DeleteButton;
