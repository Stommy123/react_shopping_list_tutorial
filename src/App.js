import React, { Component } from 'react';
import { data } from './data';
import { Wishlist, Cart } from './components';
class App extends Component {
  state = { list: data };

  render() {
    const { list } = this.state;
    return (
      <div>
        <Wishlist list={list} />
        <Cart />
      </div>
    );
  }
}

export default App;
