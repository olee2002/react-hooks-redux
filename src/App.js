import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import appActions from './redux/actions/appActions'
import ToDo from './components/ToDo'
import './App.css'

const App = () => {
   // 'useSelector' & 'useDispatch' are hooks provided by redux to replace 'mapStateToProps' & 'mapDispatchToProps' with 'connect' in a class component.
   const list = useSelector((store) => store.appReducer.list)
   const dispatch = useDispatch()

   // in the example below, we dispath actions in App.js and send them as props so the children wouldn't need to call the action and dispatch again.
   // but if you are to avoid prop drilling, you can always call the actions & dispatch at any given component level.
   const redux_add = (todo) => dispatch(appActions.redux_add(todo))
   const redux_delete = (id) => dispatch(appActions.redux_delete(id))
   const redux_fetch_todo_list = (todos) =>
      dispatch(appActions.redux_fetch_todo_list(todos))

   const props = { list, redux_add, redux_delete, redux_fetch_todo_list }
   // using spread operator to send all props.
   return <ToDo {...props} />
}

export default App
