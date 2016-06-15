import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../actions'
import { todo } from './todo'

export function todoList(state = [], action) {
   switch (action.type) {

      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]

     case REMOVE_TODO:
        let indexToDelete = getIndexTodoById(state, action.id);
        if (indexToDelete !== null) {
          return [
            ...state.slice(0, indexToDelete),
            ...state.slice(indexToDelete+1)
          ];
        }
        else {
          return state;
        }

      case TOGGLE_TODO:
        //Returns a new array. One item it's a new copy and it's toggled.
        return state.map(t => todo(t, action));

      default:
        return state
   }
}

/*
 * Auxiliar functions
 ***/
function getIndexTodoById(state, id) {
  let indexToDelete = null;
  for (var i = 0; i < state.length; i++) {
    if (state[i].id === id)
      indexToDelete = i;
    };
  return (indexToDelete);
 }
