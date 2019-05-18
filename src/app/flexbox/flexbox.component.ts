import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { SlideDirective } from '../navigation/slide.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent implements AfterViewInit {
  @ViewChildren(SlideDirective) elements: QueryList<SlideDirective>;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
