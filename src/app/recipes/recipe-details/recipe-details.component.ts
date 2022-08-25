import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;
  id!:number;
  constructor(private rService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = +param['id'];
      this.recipe = this.rService.getRecipe(this.id);
    })
  }

  addToShopping(){
    this.rService.toCart(this.recipe.ingredients);
  }
}
