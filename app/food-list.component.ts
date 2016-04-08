import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model'
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { HealthPipe } from './health.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [HealthPipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All Food Items</option>
      <option value="low">Show Low Calorie Food Items</option>
      <option value="high">Show High Calorie Food Items</option>
    </select>
    <food-display *ngFor="#currentFood of foodList | health:filterHealth"
      (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
    <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
    </edit-food-details>
    <new-food (onSubmitNewFood)="createFood($event)">
    </new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterHealth: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    this.foodList.push(newFood)
  }
  onChange(filterOption) {
    this.filterHealth = filterOption;
  }
}
