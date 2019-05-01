import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import { FlexboxComponent } from './flexbox.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [FlexboxComponent],
  imports: [
    CommonModule,
    FlexboxRoutingModule,
    NavigationModule
  ]
})
export class FlexboxModule { }
