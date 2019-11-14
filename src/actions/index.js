import {
  ADD_ITEM,
} from './types';

const addItem = ({ type = ADD_ITEM, payload }) => ({
  type,
  payload,
});

export default addItem;
