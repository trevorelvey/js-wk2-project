import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h4>{{ food.name }}</h4>

  `
})
export class FoodComponent {
  public food: Food;
}

// <h5>Description: {{ food.description }}</h5>
// <h5># of Calories: {{ food.calories }}</h5>
