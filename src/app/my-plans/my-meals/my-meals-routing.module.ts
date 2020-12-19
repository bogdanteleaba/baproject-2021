import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMealsPage } from './my-meals.page';

const routes: Routes = [
  {
    path: '',
    component: MyMealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMealsPageRoutingModule {}
