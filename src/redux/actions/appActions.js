import { ADD_ITEM, DELETE_ITEM } from '../actionTypes'
import { fetchToDoList } from './appActionCreators'

const redux_add = (todo) => ({
   type: ADD_ITEM,
   payload: todo,
})

const redux_delete = (id) => ({
   type: DELETE_ITEM,
   payload: id,
})

// this is async action from action creator
const redux_fetch_todo_list = fetchToDoList

const appActions = {
   redux_add,
   redux_delete,
   redux_fetch_todo_list,
}

export default appActions
