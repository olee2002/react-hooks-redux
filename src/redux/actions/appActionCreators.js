import axios from 'axios'

import { FETCH_TODO_LIST } from '../actionTypes';

export const fetchToDoList =()=> (dispatch)=>{
axios.get('https://jsonplaceholder.typicode.com/todos')
.then(res=> {
   dispatch({ type: FETCH_TODO_LIST, data: res.data })
})
.catch((err)=> console.log(err.message));
};

