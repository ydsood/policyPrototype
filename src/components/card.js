import React, { Component } from 'react';
import CardItem from './card_item';

const Card = (props) => {
  if (!props || props === undefined || props === {}) {
    return (<div>Loading...</div>);
  }

  const valueList = props.items.filter(
    (item) => !item.name.includes("ID")
  )
  .map((item) => {
    return (
      <CardItem key={item.name} name={item.name} value={item.value}/>
    );
  });

  return (
    <div >
        <h4>{props.title}</h4>
        <ul className="unorderdList">
          { valueList }
        </ul>
    </div>
  );
}

export default Card;
