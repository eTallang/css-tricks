import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { SlideDirective } from '../navigation/slide.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-margin-vs-padding',
  templateUrl: './margin-vs-padding.component.html',
  styleUrls: ['./margin-vs-padding.component.css']
})
export class MarginVsPaddingComponent implements AfterViewInit {
  @ViewChildren(SlideDirective) elements: QueryList<SlideDirective>;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
