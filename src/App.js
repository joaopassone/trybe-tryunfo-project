import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section>
          <Form />
          <Card />
        </section>
      </>
    );
  }
}

export default App;
