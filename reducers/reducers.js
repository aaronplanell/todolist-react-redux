import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/actions'

function todo(state, action) {
   switch (action.type) {

      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
            isCompleted: false,
            caca: "caca"
         }

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
          return state;
        }

      case TOGGLE_TODO:
        //Returns a new array. One item it's a new copy and it's toggled.
        return state.map(t => todo(t, action));

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
