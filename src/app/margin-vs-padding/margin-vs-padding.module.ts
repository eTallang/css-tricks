import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarginVsPaddingRoutingModule } from './margin-vs-padding-routing.module';
import { MarginVsPaddingComponent } from './margin-vs-padding.component';

@NgModule({
  declarations: [MarginVsPaddingComponent],
  imports: [
    CommonModule,
    MarginVsPaddingRoutingModule
  ]
})
export class MarginVsPaddingModule { }
