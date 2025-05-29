import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../store/item.state';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  item = input.required<Item>();
  toggle = output<string>();
  delete = output<string>();
  edit = output<{ id: string; newText: string }>();
  isEditing = signal(false);
  editedTextControl: FormControl = new FormControl('');

  faTrash = faTrash;
  faEdit = faEdit;

  onToggle() {
    this.toggle.emit(this.item().id);
  }

  onDelete() {
    this.delete.emit(this.item().id);
  }

  onEdit() {
    this.isEditing.set(true);
    this.editedTextControl.setValue(this.item().text);
    this.editedTextControl.setValidators(Validators.required);
    this.editedTextControl.updateValueAndValidity();
  }

  saveEdit() {
    if (this.editedTextControl.valid) {
      this.edit.emit({
        id: this.item().id,
        newText: this.editedTextControl.value,
      });
      this.isEditing.set(false);
      this.editedTextControl.reset();
    }
  }
}
