import React from 'react';
import ToBuyItem from './ToBuyItem';

const ToBuy = (props) => {
  const ToBuyItems = props.items.map((item) => (
    <ToBuyItem
      key={item.id}
      id={item.id}
      value={item.value}
      onToggle={() => props.onToggle(item.id)}
      onDelete={props.onDelete}
    />
  ));

  return (
    <div>
      <div className="m-2">
        <ul className="p-2">{ToBuyItems}</ul>
      </div>
    </div>
  );
};

export default ToBuy;
