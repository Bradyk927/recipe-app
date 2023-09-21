import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  // @Output() recipeSelected = new EventEmitter()
  @Input() recipe: Recipe 
  //   name: '',
  //   description: '',
  //   imagePath: '',
  //   ingredients: []
  // };

//  @Input() selected=false;

  constructor(private rs: RecipesService){

  }

  ngOnInit(){
    
  }
 onRecipeSelected(){  
  this.rs.recipeSelected.emit(this.recipe);
  // this.rs.selectRecipe(this.recipe)
  // console.debug("testing")
  // console.info(this.recipe)
 }
 }


