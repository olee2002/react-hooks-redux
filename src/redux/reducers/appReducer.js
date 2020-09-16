import { ADD_ITEM, DELETE_ITEM, FETCH_TODO_LIST } from '../actionTypes'

// initialState has to be set for reducer
const initialState = {
   list: [],
}

// reducer take state and action as args, depending on the action.type update the store with action.payload
export default function appReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_ITEM:
         state = {
            list: [action.payload, ...state.list ],
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
