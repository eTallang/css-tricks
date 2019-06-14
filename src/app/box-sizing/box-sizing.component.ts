import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { SlideDirective } from '../navigation/slide.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-box-sizing',
  templateUrl: './box-sizing.component.html',
  styleUrls: ['./box-sizing.component.css', 'presentation.css']
})
export class BoxSizingComponent implements AfterViewInit {
  @ViewChildren(SlideDirective) anchorElements = new QueryList<SlideDirective>();

  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.anchorElements);
  }
}
