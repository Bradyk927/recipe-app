import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Test Recipe',
     'Just a Test Recipe',
      'https://www.foodandwine.com/thmb/dMG6keGBcEF7XF8LZdR2y5dPrxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg',
      [
        new Ingredient('chicken', 1)
      ]),
      new Recipe('Another Test Recipe',
     'Just a Chicken Recipe',
      'https://www.foodandwine.com/thmb/dMG6keGBcEF7XF8LZdR2y5dPrxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('lemon', 1)
      ])
  ];
  constructor(private ss: ShoppingListService){

  }
  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }

  onAddIngredientToSl(ingredients: Ingredient[]){
    this.ss.addIngredients(ingredients)
  }

  }

