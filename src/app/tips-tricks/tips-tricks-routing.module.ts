import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsTricksPage } from './tips-tricks.page';

const routes: Routes = [
  {
    path: '',
    component: TipsTricksPage
  },
  {
    path: 'read',
    loadChildren: () => import('./read/read.module').then( m => m.ReadPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsTricksPageRoutingModule {}
