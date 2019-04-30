import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import { FlexboxComponent } from './flexbox.component';

@NgModule({
  declarations: [FlexboxComponent],
  imports: [
    CommonModule,
    FlexboxRoutingModule
  ]
})
export class FlexboxModule { }
