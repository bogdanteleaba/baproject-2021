import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsTricksPageRoutingModule } from './tips-tricks-routing.module';

import { TipsTricksPage } from './tips-tricks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsTricksPageRoutingModule
  ],
  declarations: [TipsTricksPage]
})
export class TipsTricksPageModule {}
