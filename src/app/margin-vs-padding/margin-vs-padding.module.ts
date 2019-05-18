import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarginVsPaddingRoutingModule } from './margin-vs-padding-routing.module';
import { MarginVsPaddingComponent } from './margin-vs-padding.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [MarginVsPaddingComponent],
  imports: [
    CommonModule,
    MarginVsPaddingRoutingModule,
    NavigationModule
  ]
})
export class MarginVsPaddingModule { }
