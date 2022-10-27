import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { onInputChange, trunfoFilter } = this.props;

    return (
      <>
        <label htmlFor="name-filter">
          <input
            type="text"
            id="name-filter"
            name="nameFilter"
            data-testid="name-filter"
            onChange={ onInputChange }
            placeholder="Nome da Carta"
            disabled={ trunfoFilter }
          />
        </label>
        <label htmlFor="rare-filter">
          <select
            id="rare-filter"
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            disabled={ trunfoFilter }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          Super Tryunfo
          <input
            type="checkbox"
            id="trunfo-filter"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
          />
        </label>
      </>
    );
  }
}

Filters.propTypes = {
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
