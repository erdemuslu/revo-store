import Store from '../Store';

import addItem from '../actions/index';

class Save {
  constructor(store) {
    this.store = store;
    this.input = document.querySelector('input');
    this.button = document.getElementById('btn-save');
  }

  handleAdd(func) {
    this.button.addEventListener('click', () => {
      this.store.run(addItem('ADD_ITEM', { value: this.input.value }));
      func();
    });
  }
}

export default new Save(Store);
