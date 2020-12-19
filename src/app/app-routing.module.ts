import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'workouts',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./workouts/workouts.module').then( m => m.WorkoutsPageModule), 
    canLoad: [AuthGuard]
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'tips-tricks',
    loadChildren: () => import('./tips-tricks/tips-tricks.module').then( m => m.TipsTricksPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'my-plans',
    loadChildren: () => import('./my-plans/my-plans.module').then( m => m.MyPlansPageModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
