import React, { Component } from 'react';
import { data } from './data';
import { ShoppingList } from './components';
class App extends Component {
  state = { list: data };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ShoppingList list={list} />
      </div>
    );
  }
}

export default App;
