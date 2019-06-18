import React from 'react';
import { ListItem } from '.';

const Cart = ({ shoppingCart, addToWishlist }) => (
  <div>
    <h1>Shopping Cart</h1>

    <ul>
      {shoppingCart.map(item => (
        <ListItem
          name={item.name}
          description={item.description}
          toggleList={addToWishlist(item.id)}
          itemLocation={'wishlist'}
        />
      ))}
    </ul>
  </div>
);

export default Cart;
