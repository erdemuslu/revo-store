import {
  ADD_ITEM,
  REMOVE_ITEM,
} from './types';

export const addItem = ({ type = ADD_ITEM, payload }) => ({
  type,
  payload,
});

export const removeItem = ({ type = REMOVE_ITEM, payload }) => ({
  type,
  payload,
});
