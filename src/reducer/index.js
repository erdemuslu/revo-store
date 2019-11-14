import {
  ADD_ITEM,
  REMOVE_ITEM,
} from '../actions/types';

const MainReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.push(action.payload);
    case REMOVE_ITEM:
      state.splice(action.payload.index, 1);
      return state;
    default:
      return state;
  }
};

export default MainReducer;
