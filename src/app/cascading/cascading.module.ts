import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CascadingRoutingModule } from './cascading-routing.module';
import { CascadingComponent } from './cascading.component';

@NgModule({
  declarations: [CascadingComponent],
  imports: [
    CommonModule,
    CascadingRoutingModule
  ]
})
export class CascadingModule { }
