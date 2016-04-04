import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "health",
  pure: false
})
export class HealthPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalorieLevel = args[0];
    if(desiredCalorieLevel === "low") {
      return input.filter((food) => {
        if(food.calories < 300) {
          return !food.health;
        }
      });
    } else if (desiredCalorieLevel === "high") {
      return input.filter((food) => {
        if(food.calories >300){
          return !food.health;
          }
        });
      } else {
      return input;
      }
    }
  }
