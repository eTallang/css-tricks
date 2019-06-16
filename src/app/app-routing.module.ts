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
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule), data: { name: 'about' }
  },
  {
    path: 'box-sizing',
    loadChildren: () => import('src/app/box-sizing/box-sizing.module').then(m => m.BoxSizingModule), data: { name: 'box-sizing' }
  },
  {
    path: 'flexbox',
    loadChildren: () => import('src/app/flexbox/flexbox.module').then(m => m.FlexboxModule), data: { name: 'flexbox' }
  },
  {
    path: 'units',
    loadChildren: () => import('src/app/units/units.module').then(m => m.UnitsModule), data: { name: 'units' }
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
