import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxSizingComponent } from './box-sizing.component';

const routes: Routes = [
  { path: '', component: BoxSizingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxSizingRoutingModule { }
