import React, { Component } from 'react';
import { data } from './data';
import { Wishlist, Cart } from './components';
class App extends Component {
  state = { list: data, shoppingCart: [] };

  addToList = (id, status) => _ => {
    const { list } = this.state;
    if (list[id].id === id) list[id].inCart = status;
    this.setState({ list });
  };

  render() {
    const { list } = this.state;
    const shoppingCart = list.filter(item => item.inCart);
    const wishList = list.filter(item => !item.inCart);
    return (
      <div>
        <Wishlist wishList={wishList} addToList={this.addToList} />
        <Cart shoppingCart={shoppingCart} addToList={this.addToList} />
      </div>
    );
  }
}

export default App;
