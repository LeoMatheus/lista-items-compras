import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef:
    | ElementRef
    | undefined;
  @ViewChild('amountInput', { static: false }) amountInputRef:
    | ElementRef
    | undefined;

  ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef?.nativeElement.value,
      this.amountInputRef?.nativeElement.value
    );
  }
}
