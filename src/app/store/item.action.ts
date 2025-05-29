import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Item] Add Item',
  props<{ text: string }>()
);

export const toggleItem = createAction(
  '[Item] Toggle Item',
  props<{ id: string }>()
);

export const deleteItem = createAction(
  '[Item] Delete Item',
  props<{ id: string }>()
);

export const editItem = createAction(
  '[Item] Edit Item',
  props<{ id: string; text: string }>()
);
