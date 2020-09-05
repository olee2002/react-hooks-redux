import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const initialState = {
  list: [{ id: 1, text: "build a react hook app" }, { id: 2, text: "add redux" }, { id: 3, text: "clean the keyboard" }]
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state = {
        list: [...state.list, action.payload]
      };
      return state;
    case DELETE_ITEM:
      state = {
        list: state.list.filter((todo) => todo.id !== action.payload)
      };
      return state;
    default:
      return state;
  }
}
