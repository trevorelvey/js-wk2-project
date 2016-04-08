import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="food-form">
      <h4>Add a new Food Item:</h4>
      <input placeholder="Enter item" class="input-md" #newName>
      <input placeholder="Enter description" class="input-md" #newDescription>
      <input placeholder="Enter calories" class="input-md" #newCalories>
      <br><br>
      <button class="btn" (click)="addFood(newName, newDescription, newCalories)">Add</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    var newFood = new Food(userName.value, userDescription.value, parseInt(userCalories.value));
    this.onSubmitNewFood.emit(newFood);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
