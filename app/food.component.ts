import { Component } from 'angular2/core';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h4>{{ food.name }}</h4>
    <h5>Description: {{ food.description }}</h5>
    <h5># of Calories: {{ food.calories }}</h5>
  `
})
export class FoodComponent {
  public food: Food;
}
