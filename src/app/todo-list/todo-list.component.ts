import { Component, input, output } from '@angular/core';
import { Item } from '../store/item.state';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  items = input<Item[] | null>();
  toggle = output<string>();
  delete = output<string>();
  edit = output<{ itemId: string; newText: string }>();

  onToggle(itemId: string) {
    this.toggle.emit(itemId);
  }

  onDelete(itemId: string) {
    this.delete.emit(itemId);
  }

  onEdit({ id, newText }: { id: string; newText: string }) {
    this.edit.emit({ itemId: id, newText });
  }
}
