import { SET_FILTER } from './actions';

export function filter (
  state = 'SHOW_ALL', //The default initial state is SHOW_ALL
  action
) {
  switch (action.type) {

    case 'SET_FILTER':
    return action.filter;

    default:
    return state;
  };
};

export default filter;
