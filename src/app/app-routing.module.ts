import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'box-sizing'
  },
  {
    path: 'box-sizing',
    loadChildren: 'src/app/box-sizing/box-sizing.module#BoxSizingModule'
  },
  {
    path: 'flexbox',
    loadChildren: 'src/app/flexbox/flexbox.module#FlexboxModule'
  },
  {
    path: 'margin-vs-padding',
    loadChildren: 'src/app/margin-vs-padding/margin-vs-padding.module#MarginVsPaddingModule'
  },
  {
    path: 'units',
    loadChildren: 'src/app/units/units.module#UnitsModule'
  },
  {
    path: 'cascading',
    loadChildren: 'src/app/cascading/cascading.module#CascadingModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
