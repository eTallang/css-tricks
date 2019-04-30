import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxSizingRoutingModule } from './box-sizing-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { BoxSizingComponent } from './box-sizing.component';

@NgModule({
  declarations: [BoxSizingComponent],
  imports: [CommonModule, BoxSizingRoutingModule, NavigationModule]
})
export class BoxSizingModule {}
