import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title : 'Schnitzel',
      imageUrl : 'http://hr.hssonlineapps.com/image/logo.png',
      ingredients : ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title : 'Spaghetti',
      imageUrl : 'http://hr.hssonlineapps.com/image/logo.png',
      ingredients : ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }

  getAllRecipes() {
      return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
       return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
