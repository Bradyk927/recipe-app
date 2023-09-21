import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  
  ];

  constructor(private ss: ShoppingListService){

  }

  ngOnInit(): void {
   this.ingredients = this.ss.getIngredients();
   this.ss.ingredientAdded
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )

    // this.ingredients.push(  
    // new Ingredient('Apples', 5),
    // new Ingredient('Tomatoes', 10),
    // )
    
  }

}
