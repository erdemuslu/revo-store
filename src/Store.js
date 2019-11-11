class Store {
  constructor() {
    this.state = null;
    this.reducer = null;
  }

  run(action) {
    this.reducer(this.state, action);
  }

  initReducer(reducer) {
    if (typeof reducer === 'function') {
      this.reducer = reducer;
      return;
    }

    throw new Error('reducer must be function');
  }

  create(INITIAL_STATE, REDUCER = '') {
    this.state = INITIAL_STATE;
    this.initReducer(REDUCER);
  }
}

export default new Store();
