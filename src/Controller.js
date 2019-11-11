class Controller {
  constructor(list, save) {
    this.list = list;
    this.save = save;

    this.save.handleAdd(this.list.handleView);
  }

  render() {
    this.list.render();
  }
}

export default Controller;
