import React from 'react';
import InCartItem from './InCartItem';

const InCart = (props) => {
  const InCartItems = props.items.map((item) => (
    <InCartItem
      key={item.id}
      id={item.id}
      value={item.value}
      onToggle={() => props.onToggle(item.id)}
      onDelete={props.onDelete}
    />
  ));

  return (
    <div className="m-2">
      <ul className="p-2">{InCartItems}</ul>
    </div>
  );
};

export default InCart;
