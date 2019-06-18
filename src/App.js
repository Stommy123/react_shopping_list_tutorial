import React, { Component } from 'react';
import { data } from './data';
import { Wishlist, Cart } from './components';
class App extends Component {
  state = { list: data, newList: [] };

  addToList = id => _ => {
    const { list } = this.state;
    const newList = list.map(item => (item.id === id ? { ...item, inCart: !item.inCart } : item));
    this.setState({ list: newList });
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
