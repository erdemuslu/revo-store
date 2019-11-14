// simple & basic javascript file
//
//
//
import { addItem, removeItem } from './actions/index';

const App = (store) => {
  const form = document.querySelector('form');
  const list = document.querySelector('.list');

  // helper
  const createEl = ({
    name, className, style, id, text,
  }) => {
    const el = document.createElement(name);
    el.setAttribute('class', className);
    el.setAttribute('id', id);
    el.setAttribute('style', style);
    el.innerText = text;

    return el;
  };

  const addItemIntoView = () => {
    // remove all nodes
    list.innerHTML = '';

    store.state.forEach((item, index) => {
      const btn = createEl({
        name: 'button',
        className: 'btn is-remove',
        style: '',
        id: '',
        text: 'Remove',
      });

      const el = createEl({
        name: 'div',
        className: 'item',
        style: '',
        id: index,
        text: item.value,
      });

      el.append(btn);

      list.append(el);
    });
  };

  const removeItemFromView = () => {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
      const node = item;
      node.querySelector('button').onclick = () => {
        node.remove();
        // action is here with Store method
        store.run(
          removeItem({ payload: { index } }),
        );
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const { value } = input;
    input.value = '';
    // action is here with Store method
    store.run(
      addItem({ payload: { value } }),
    );
    addItemIntoView();
    removeItemFromView();
  };

  const init = () => {
    form.onsubmit = handleSubmit;
  };

  init();
};

export default App;
