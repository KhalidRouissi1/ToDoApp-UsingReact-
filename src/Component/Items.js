import React, { Component } from "react";
import AddItems from "./addItems";
const Items = (props) => {
  const { items, deleteItem } = props;
  let listItems;
  if (items.length > 0) {
    listItems = items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span
            className="deleteButton"
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            &times;
          </span>
        </div>
      );
    });
  } else {
    listItems = <div>There is no items</div>;
  }

  return <h3>{listItems}</h3>;
};

export default Items;
