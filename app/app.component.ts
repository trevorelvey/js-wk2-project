import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <div *ngFor="#food of foods">
        <h3>Food Item: {{ food.name }}</h3>
        <h5>Description: {{ food.description }}</h5>
        <h5># of Calories: {{ food.calories }}</h5>
      </div>
      
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pizza Slice", "One slice of pepperoni pizza", 300, 0),
      new Food("Salad", "One bowl of salad", 100, 0)
    ];
  }
}

export class Food {
  public done: boolean = false;
  constructor(public name: string, public description: string, public calories: number, public id: number) {

  }
}
