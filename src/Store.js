class Store {
  constructor() {
    this.state = null;
    this.reducer = null;

    this.run = this.run.bind(this);
  }

  run(action) {
    this.reducer(this.state, action);
  }

  static render(app) {
    app();
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

  create(
    INITIAL_STATE = [],
    REDUCER = '',
    APP = (f) => f,
  ) {
    this.initState(INITIAL_STATE);
    this.initReducer(REDUCER);
    APP(this);
  }
}

export default new Store();
