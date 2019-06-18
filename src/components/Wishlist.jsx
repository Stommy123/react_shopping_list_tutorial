import React from 'react';
import { ListItem } from '.';

const Wishlist = ({ wishList = [], updateItemStatus, removeItem }) => (
  <div>
    <h1>Wishlist</h1>
    <ul>
      {wishList.map(item => (
        <ListItem
          key={item.id}
          name={item.name}
          description={item.description}
          toggleList={updateItemStatus(item.id)}
          itemLocation="cart"
          removeItem={removeItem(item.id)}
        />
      ))}
    </ul>
  </div>
);

export default Wishlist;
