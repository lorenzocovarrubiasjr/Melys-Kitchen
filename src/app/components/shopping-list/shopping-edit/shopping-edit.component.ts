import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../../../models/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredientDetail = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  addIngredient(name, amount) {
    this.newIngredientDetail.emit(new Ingredient(name.value, amount.value));
  }
}
