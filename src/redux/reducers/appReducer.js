import { ADD_ITEM, DELETE_ITEM, FETCH_TODO_LIST } from '../actionTypes'

// initialState has to be set for reducer
const initialState = {
   list: [
      { id: 1, title: 'build a react hook app' },
      { id: 2, title: 'add redux' },
      { id: 3, title: 'clean the keyboard' },
   ],
}

// reducer take state and action as args, depending on the action.type update the store with action.payload
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
