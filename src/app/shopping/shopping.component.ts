import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridients } from '../shared/ingridient.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {

  ingredients:Ingridients[]=[];
  igSub = new Subscription();
  constructor(private sService:ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.sService.getIngredients();
    this.igSub= this.sService.ingredientEmitter.subscribe((ings:Ingridients[])=>{
      this.ingredients = ings;
    })
  }

  ngOnDestroy(): void {
    this.igSub.unsubscribe();
  }

}
