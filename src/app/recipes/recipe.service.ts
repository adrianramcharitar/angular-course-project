import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'A Tasty Burger',
      'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Burger Patty', 1)]
    ),
    new Recipe(
      'Fish and Chips',
      'Fish with a side of Chips',
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Fish_and_chips_blackpool.jpg',
      [new Ingredient('Fish', 2), new Ingredient('Fries', 20)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  // Gets a copy of the recipes array using .slice()
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
