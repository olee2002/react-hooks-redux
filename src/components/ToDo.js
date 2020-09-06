import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ToDoItem from './ToDoItem';
import './ToDo.css';

const ToDo = (props) => {
  const { list, redux_add, redux_delete, redux_fetch_todo_list } = props;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

 useEffect(()=>{
   const fetchToDoList = ()=>{
      redux_fetch_todo_list();
     }
     fetchToDoList();
 }, [])
 
  const generateId = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    //validate todo
    if (!todo) {
      return alert('Please enter a todo!');
    }
    const newId = generateId();
    redux_add({ id: newId, title: todo });
    setTodo('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const deleteItem = (todo) => {
    redux_delete(todo.id);
  };

  return (
    <div className='ToDo'>
      <h1 className='ToDo-Header'>To Do List</h1>
      <div className='ToDoInputContainer'>
          <input type='text' value={todo} onChange={handleInput} onKeyPress={handleKeyPress} />
          <button className='ToDo-Add' onClick={createNewToDoItem}>
            +
          </button>
        </div>
      <div className='ToDo-Container'>
          {list &&
            list.map((item) => {
              return <ToDoItem key={item && item.id} item={item} deleteItem={deleteItem} />;
            })}
      </div>
    </div>
  );
};

export default ToDo;
