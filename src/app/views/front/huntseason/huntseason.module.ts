import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuntseasonRoutingModule } from './huntseason-routing.module';
import { HuntseasonComponent } from './huntseason/huntseason.component';


@NgModule({
  declarations: [
    HuntseasonComponent
  ],
  imports: [
    CommonModule,
    HuntseasonRoutingModule
  ]
})
export class HuntseasonModule { }
