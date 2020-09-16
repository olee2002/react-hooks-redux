import React from "react";
import "./ToDoItem.css";

// simple functional component for an individual todo item.
const ToDoItem = (props) => {
  const { item, deleteItem } = props;

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item && item.title}</p>
      <button className="ToDoItem-Delete" onClick={() => deleteItem(item)}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
