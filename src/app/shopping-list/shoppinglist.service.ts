import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable ({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice())
    }
}

