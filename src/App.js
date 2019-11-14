// simple & basic javascript file
//
//
//
import addItem from './actions/index';

const App = (store) => {
  const form = document.querySelector('form');

  const handleView = () => {
    console.log(store.state);
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
    handleView();
  };

  const init = () => {
    form.onsubmit = handleSubmit;
  };

  init();
};

export default App;
