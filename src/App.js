import React, { Component } from 'react';
import { data } from './data';
import { Wishlist, Cart } from './components';
class App extends Component {
  state = { list: data, shoppingCart: [] };

  addToCart = id => _ => {
    const { list, shoppingCart } = this.state;
    list.map(item => {
      if (item.id === id) {
        list.splice(item, 1);
        return shoppingCart.push(item);
      }
    });
    this.setState({ shoppingCart });
  };

  addToWishlist = id => _ => {
    const { list, shoppingCart } = this.state;
    shoppingCart.map(item => {
      if (item.id === id) {
        shoppingCart.splice(item, 1);
        return list.push(item);
      }
    });
    this.setState({ list });
  };

  render() {
    const { list, shoppingCart } = this.state;
    return (
      <div>
        <Wishlist list={list} addToCart={this.addToCart} />
        <Cart shoppingCart={shoppingCart} addToWishlist={this.addToWishlist} />
      </div>
    );
  }
}

export default App;
