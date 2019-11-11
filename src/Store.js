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

  initState(val) {
    if (Object.prototype.hasOwnProperty.call(val, 'length')) {
      this.state = val;
      return;
    }

    throw new Error('initial state must be array');
  }

  create(INITIAL_STATE, REDUCER = '') {
    this.initState(INITIAL_STATE);
    this.initReducer(REDUCER);
  }
}

export default new Store();
