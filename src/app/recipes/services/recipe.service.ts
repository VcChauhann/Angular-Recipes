import { EventEmitter, Injectable } from '@angular/core';
import { Ingridients } from 'src/app/shared/ingridient.model';
import { ShoppingService } from 'src/app/shopping/services/shopping.service';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private  recipes:Recipe[]=[
    new Recipe("R1","d1","https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg",
    [
      new Ingridients("bread",10),
      new Ingridients("butter",2)
    ]),
    new Recipe("R2","d2","https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg",
    [
      new Ingridients("Toast",1),
      new Ingridients("Milk",20)
    ])
  ]
  constructor(private sService:ShoppingService) { }

  getRecipes(){
    return this.recipes.slice();
  }

getRecipe(index:number){
  return this.recipes[index];
}
  toCart(ings:Ingridients[]){
    this.sService.addIngredientsOfRecipe(ings);
  }
}
