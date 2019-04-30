import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarginVsPaddingComponent } from './margin-vs-padding.component';

const routes: Routes = [
  { path: '', component: MarginVsPaddingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarginVsPaddingRoutingModule { }
