import { NgModule } from '@angular/core';

import { SlideDirective } from './slide.directive';

@NgModule({
  declarations: [SlideDirective],
  exports: [SlideDirective]
})
export class NavigationModule {}
