import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO } from '../actions/actions'

function todo(state, action) {
   switch (action.type) {

      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }

      default:
      return state
   }
}

function todos(state = [], action) {
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
          console.log('Return state');
          return state;
        }

      default:
      return state
   }
}

const todoApp = combineReducers({
   todos
})

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


export default todoApp
