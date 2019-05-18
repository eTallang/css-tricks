import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from './units.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [UnitsComponent],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    NavigationModule,
    FormsModule
  ]
})
export class UnitsModule { }
