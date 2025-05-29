import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemState } from './store/item.state';
import { Store } from '@ngrx/store';
import { selectAllItems } from './store/item.selectors';
import { addItem, deleteItem, editItem, toggleItem } from './store/item.action';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddItemComponent } from './add-item/add-item.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TodoListComponent, AddItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODO Item List ';
  items$: Observable<Item[]>;

  constructor(private store: Store<ItemState>) {
    this.items$ = this.store.select(selectAllItems);
  }

  onAddItem(text: string) {
    this.store.dispatch(addItem({ text }));
  }

  onToggleItem(id: string) {
    this.store.dispatch(toggleItem({ id }));
  }

  onDeleteItem(id: string) {
    this.store.dispatch(deleteItem({ id }));
  }

  onEditItem({ itemId, newText }: { itemId: string; newText: string }) {
    this.store.dispatch(editItem({ text: newText, id: itemId }));
  }
}
