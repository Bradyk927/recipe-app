import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
@Input() recipe: Recipe;

constructor(private rs: RecipesService){

}

ngOnInIt(){
  
}
onAddToShoppingList(){
  this.rs.onAddIngredientToSl(this.recipe.ingredients);
}
}
