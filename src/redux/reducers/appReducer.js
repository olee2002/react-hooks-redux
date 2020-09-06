import { ADD_ITEM, DELETE_ITEM, FETCH_TODO_LIST } from '../actionTypes'

const initialState = {
   list: [
      { id: 1, title: 'build a react hook app' },
      { id: 2, title: 'add redux' },
      { id: 3, title: 'clean the keyboard' },
   ],
}

export default function appReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_ITEM:
         state = {
            list: [...state.list, action.payload],
         }
         return state
      case DELETE_ITEM:
         state = {
            list: state.list.filter((todo) => todo.id !== action.payload),
         }
         return state
      case FETCH_TODO_LIST:
         state = {
            list: [...state.list, ...action.data],
         }
         return state
      default:
         return state
   }
}
