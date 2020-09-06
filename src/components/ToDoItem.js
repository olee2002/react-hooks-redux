import React from "react";
import "./ToDoItem.css";

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
