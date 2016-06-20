import { ADD_TODO, TOGGLE_TODO } from '../actions';

export function todo(state, action) {
  switch (action.type) {

    case ADD_TODO:
    return {
      id: action.id,
      text: action.text,
      isCompleted: false
    };

    case TOGGLE_TODO:
    //Here the state is the individual todo, no de todo list.
    if (state.id !== action.id) {
      return state;
    } else {
      //Returns the same todo but with the isCompleted flag flipped
      return {
        ...state,
        isCompleted: !state.isCompleted
      };
    };

    default:
    return state
  };
};

export default todo;
