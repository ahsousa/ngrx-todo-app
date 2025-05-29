import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  protected newItemText: string = '';
  protected addItem = output<string>();
  protected addItemForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
  });

  onAddItem() {
    if (this.addItemForm.value.itemName?.trim()) {
      this.addItem.emit(this.addItemForm.value.itemName);
      this.addItemForm.reset();
    }
  }

  onCancel() {
    this.addItemForm.reset();
  }
}
