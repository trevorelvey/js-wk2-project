import { Component } from 'angular2/core';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>Food Item: {{ food.name }}</h3>
    <h5>Description: {{ food.description }}</h5>
    <h5># of Calories: {{ food.calories }}</h5>
  `
})
export class FoodComponent {
  public food: Food;
}
