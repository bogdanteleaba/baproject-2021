import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlansPage } from './my-plans.page';

const routes: Routes = [
  {
    path: '',
    component: MyPlansPage
  },
  {
    path: 'my-workouts',
    loadChildren: () => import('./my-workouts/my-workouts.module').then( m => m.MyWorkoutsPageModule)
  },
  {
    path: 'my-meals',
    loadChildren: () => import('./my-meals/my-meals.module').then( m => m.MyMealsPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPlansPageRoutingModule {}
