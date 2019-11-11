import Store from '../Store';

class List {
  constructor(store) {
    this.store = store;
    this.button = document.getElementById('btn-get');
    this.list = document.querySelector('.list');

    this.handleView = this.handleView.bind(this);
  }

  removeAll() {
    this.list.innerHTML = '';
  }

  renderDefault() {
    if (this.store.state.length < 1) {
      const div = document.createElement('div');
      div.innerText = 'no store item';

      this.list.append(div);
    }
  }

  createView() {
    this.store.state.forEach((item) => {
      const div = document.createElement('div');
      div.innerText = item.value;

      this.list.append(div);
    });
  }

  handleView() {
    this.removeAll();
    this.createView();
  }

  render() {
    this.renderDefault();
  }
}

export default new List(Store);
