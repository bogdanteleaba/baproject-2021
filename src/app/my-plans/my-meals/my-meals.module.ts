import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMealsPageRoutingModule } from './my-meals-routing.module';

import { MyMealsPage } from './my-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMealsPageRoutingModule
  ],
  declarations: [MyMealsPage]
})
export class MyMealsPageModule {}
