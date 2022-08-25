import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridients } from 'src/app/shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients:Ingridients[]  = [
    new Ingridients("Apple",5),
    new Ingridients("Tomato",12)
  ]
  constructor() { }

  ingredientEmitter= new Subject<Ingridients[]>();
  
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ing:Ingridients){
    this.ingredients.push(ing);
    this.ingredientEmitter.next(this.ingredients.slice());
  }
  addIngredientsOfRecipe(ings:Ingridients[]){
    this.ingredients.push(...ings);
    this.ingredientEmitter.next(this.ingredients.slice());
  }
}
