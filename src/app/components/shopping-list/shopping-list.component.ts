import { Component, OnInit, Input } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  @Input() newIngredient: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient("Tortillas", 16),
    new Ingredient("Green Chiles", 8),
    new Ingredient("Cabbage", 2),
    new Ingredient("Pepperoni", 12),
    new Ingredient("Whole Chicken", 1),
    new Ingredient("Bread Crumbs", 1),
  ];

  constructor() {}

  ngOnInit(): void {}

  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
