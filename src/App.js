import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import appActions from './redux/actions/appActions'
import ToDo from './components/ToDo'
import './App.css'

const App = () => {
   const list = useSelector((store) => store.appReducer.list)
   const dispatch = useDispatch()

   const redux_add = (todo) => dispatch(appActions.redux_add(todo))
   const redux_delete = (id) => dispatch(appActions.redux_delete(id))
   const redux_fetch_todo_list = (todos) =>
      dispatch(appActions.redux_fetch_todo_list(todos))

   const props = { list, redux_add, redux_delete, redux_fetch_todo_list }
   return <ToDo {...props} />
}

export default App
