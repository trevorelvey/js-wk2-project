import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="row">
      <div class="col-md-4">
        <h5>Edit Food Item:</h5>
        <input [(ngModel)]="food.name" class="input-md task-form"/>
      </div>
      <div class="col-md-4">
        <h5>Edit Description:</h5>
        <input [(ngModel)]="food.description" class="input-md task-form"/>
      </div>
      <div class="col-md-4">
        <h5>Edit Calorie Count:</h5>
        <input [(ngModel)]="food.calories" class="input-md task-form"/>
      </div>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
