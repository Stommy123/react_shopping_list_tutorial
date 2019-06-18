import React from 'react';
import { ListItem } from '.';

const Wishlist = ({ wishList = [], addToList }) => (
  <>
    <h1>Wishlist</h1>
    <ul>
      {wishList.map(item => (
        <ListItem
          name={item.name}
          description={item.description}
          toggleList={addToList(item.id, true)}
          itemLocation={'cart'}
        />
      ))}
    </ul>
  </>
);

export default Wishlist;
