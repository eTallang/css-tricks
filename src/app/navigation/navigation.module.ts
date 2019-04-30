import { NgModule } from '@angular/core';
import { AnchorElementDirective } from './anchor-element.directive';

@NgModule({
  declarations: [AnchorElementDirective],
  exports: [AnchorElementDirective]
})
export class NavigationModule {}
