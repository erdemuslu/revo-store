const MainReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.push(action.payload);
    default:
      return state;
  }
};

export default MainReducer;
