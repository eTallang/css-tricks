import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: 'src/app/about/about.module#AboutModule', data: { name: 'about' }
  },
  {
    path: 'box-sizing',
    loadChildren: 'src/app/box-sizing/box-sizing.module#BoxSizingModule', data: { name: 'box-sizing' }
  },
  {
    path: 'flexbox',
    loadChildren: 'src/app/flexbox/flexbox.module#FlexboxModule', data: { name: 'flexbox' }
  },
  {
    path: 'margin-vs-padding',
    loadChildren: 'src/app/margin-vs-padding/margin-vs-padding.module#MarginVsPaddingModule', data: { name: 'margin-vs-padding' }
  },
  {
    path: 'units',
    loadChildren: 'src/app/units/units.module#UnitsModule', data: { name: 'units' }
  },
  {
    path: 'cascading',
    loadChildren: 'src/app/cascading/cascading.module#CascadingModule', data: { name: 'cascading' }
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
