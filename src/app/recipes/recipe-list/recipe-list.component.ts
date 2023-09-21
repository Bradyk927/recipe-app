import { Component} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/recipes/recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  // selectedRecipe!: Recipe;
 

  constructor(private rs: RecipesService){

  }
  // ngOnInit(){
  //   this.rs.hello()
  //   this.rs.updateName("updated")
  //   this.rs.hello()
  // }

ngOnInit() {
  this.recipes = this.rs.getRecipes();
}

}
