import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Fresh Green Chile Enchiladas", "Homemade organic enchiladas with green chile", "https://1.bp.blogspot.com/-dI7bsF7lKhA/T4zEqd6ZWqI/AAAAAAAABTo/kKGiqDFznUg/s1600/IMG_2074.JPG"),
    new Recipe("Air Fried Chicken", "Chicken battered in crispy keto glutten free flakes, air dried and served to perfection", "https://paleogrubs.com/wp-content/uploads/2018/02/4-paleo-air-fried-crispy-chicken.jpg"),
    new Recipe("Keto Cabbage Pizza", "A cabbage base covered in fresh goat cheese with home-made tomato sauce and fresh sliced pepperoni", "https://cdn.copymethat.com/media/orig_the_best_keto_pizza_chaffles_201912280317361698587nc4ea.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
