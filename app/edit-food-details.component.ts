import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
        <div class="well">
          <div class="selectedFood">
            <h5>Description: {{ food.description }}</h5>
            <h5># of Calories: {{ food.calories }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h5>Edit Food Item:</h5>
      <input [(ngModel)]="food.name" class="input-md food-form"/>
      <h5>Edit Description:</h5>
      <input [(ngModel)]="food.description" class="input-md food-form"/>
      <h5>Edit Calorie Count:</h5>
      <input [(ngModel)]="food.calories" class="input-md food-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
