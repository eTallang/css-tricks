import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CascadingComponent } from './cascading.component';

const routes: Routes = [
  { path: '', component: CascadingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CascadingRoutingModule { }
