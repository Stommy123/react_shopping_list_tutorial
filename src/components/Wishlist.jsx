import React from 'react';
import { ListItem } from '.';

const Wishlist = ({ list = [], addToCart }) => (
  <>
    <h1>Wishlist</h1>
    <ul>
      {list.map(item => (
        <ListItem
          name={item.name}
          description={item.description}
          toggleList={addToCart(item.id)}
          itemLocation={'cart'}
        />
      ))}
    </ul>
  </>
);

export default Wishlist;
