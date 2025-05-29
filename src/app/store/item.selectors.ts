import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemState } from './item.state';

export const selectTodoState = createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(
  selectTodoState,
  (state: ItemState) => state.items
);
