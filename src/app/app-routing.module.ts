import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditorComponent } from './recipes/recipe-editor/recipe-editor.component';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component: RecipesComponent, children:[
    {path:'',component:RecipeStarterComponent},
    {path:'new',component:RecipeEditorComponent},
    {path:':id',component:RecipeDetailsComponent},
    {path:':id/edit',component:RecipeEditorComponent}
  ]},
  {path:'shoppingList',component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
