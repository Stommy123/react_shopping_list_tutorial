import React from 'react';
import { ListItem } from '.';

const Cart = ({ shoppingCart, updateItemStatus, removeItem }) => (
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      {shoppingCart.map(item => (
        <ListItem
          key={item.id}
          name={item.name}
          description={item.description}
          toggleList={updateItemStatus(item.id)}
          itemLocation="wishlist"
          removeItem={removeItem(item.id)}
        />
      ))}
    </ul>
  </div>
);

export default Cart;
