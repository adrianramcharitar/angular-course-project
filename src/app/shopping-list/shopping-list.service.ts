import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  /**
   *
   * @param ingredient The ingredient to be added
   * Added a single ingredient to the ingredient list
   */
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // Emit the new updated ingredients array onAdd
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  /**
   * Adds an array of ingredients to the ingredient list
   */
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
