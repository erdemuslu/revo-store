import Store from './Store';
import List from './components/List';
import Save from './components/Save';
import Controller from './Controller';

import MainReducer from './reducer/index';

Store.create([], MainReducer);
const app = new Controller(List, Save);
app.render();
