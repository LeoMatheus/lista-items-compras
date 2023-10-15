import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        cursor: pointer;
      }
    `,
  ],
})
export class ServerComponent {
  allowNewRecipe = false;
  recipeCreationStatus = 'No recipe was created!';
  recipeName = 'Test Recipe';
  recipeIngredients = ['Ingredient 1', 'Ingredient 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewRecipe = true;
    }, 2000);
  }

  onCreateRecipe() {
    this.recipeCreationStatus = 'Recipe was created!';
  }

  onUpdateRecipeName(event: Event) {
    this.recipeName = (<HTMLInputElement>event.target).value;
  }
}
