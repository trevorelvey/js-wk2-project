import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="food-form">
      <h4>Add a new Food Item:</h4>
      <input placeholder="Enter item" class="input-md" #newName>
      <input placeholder="Enter item" class="input-md" #newDescription>
      <input placeholder="Enter item" class="input-md" #newCalories>
      <button (click)="addFood(newName, newDescription, newCalories)">Add</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewFood.emit(userName.value, userDescription.value, parseInt(userCalories.value);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
