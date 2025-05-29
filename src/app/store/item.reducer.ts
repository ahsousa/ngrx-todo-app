import { createReducer, on } from '@ngrx/store';
import { ItemState } from './item.state';
import { addItem, deleteItem, editItem, toggleItem } from './item.action';

export const initialState: ItemState = {
  items: [],
};

export const itemReducer = createReducer(
  initialState,
  on(addItem, (state, { text }) => ({
    ...state,
    items: [
      ...state.items,
      { id: Math.random().toString(), text, completed: false },
    ],
  })),
  on(toggleItem, (state, { id }) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ),
  })),
  on(deleteItem, (state, { id }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  })),
  on(editItem, (state, { id, text }) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === id ? { ...item, text } : item
    ),
  }))
);
