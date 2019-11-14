import Store from './Store';
import MainReducer from './reducer/index';
import App from './App';

Store.create([], MainReducer, App);
