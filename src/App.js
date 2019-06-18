import React, { Component } from 'react';
import { data } from './data';
import { Wishlist, Cart, Form } from './components';
class App extends Component {
  state = { list: data };

  addToList = id => _ => {
    const { list } = this.state;
    const newList = list.map(item => (item.id === id ? { ...item, inCart: !item.inCart } : item));
    this.setState({ list: newList });
  };

  addNewItem = formData => {
    const { list } = this.state;
    const newList = [...list, formData];
    console.log(newList);
    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;
    const shoppingCart = list.filter(item => item.inCart);
    const wishList = list.filter(item => !item.inCart);
    return (
      <div>
        <h1>My Shopping List</h1>
        <Form addNewItem={this.addNewItem} list={list} />
        <Wishlist wishList={wishList} addToList={this.addToList} />
        <Cart shoppingCart={shoppingCart} addToList={this.addToList} />
      </div>
    );
  }
}

export default App;
