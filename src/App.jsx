import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    if (name === 'cardTrunfo') {
      value = target.checked;
    }

    this.setState(() => ({ [name]: value }));
  };

  render() {
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section>
          <Form { ...this.state } onInputChange={ this.onInputChange } />
          <Card { ...this.state } />
        </section>
      </>
    );
  }
}

export default App;
