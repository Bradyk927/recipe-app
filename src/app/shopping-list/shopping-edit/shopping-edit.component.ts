import { Component } from '@angular/core';
import { ShoppingListService } from '../shoppinglist.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private ss: ShoppingListService) {

  }

  onAddItem() {
   const ingredientName = this.nameInputRef.nativeElement.value;
   const ingredientAmount = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(ingredientName, ingredientAmount)
    this.ss.addIngredient(newIngredient);

  }
}
