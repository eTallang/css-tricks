import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexboxComponent } from './flexbox.component';

const routes: Routes = [
  { path: '', component: FlexboxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexboxRoutingModule { }
