import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "粉紅LOGO",
      "圓形上面有字",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "粉紅百事可樂",
      "長得很像百事~~~~~",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
  ];

  constructor() {}

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

  ngOnInit() {}
}
