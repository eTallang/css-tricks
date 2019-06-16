import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { SlideComponent } from '../navigation/slide.component';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-box-sizing',
  templateUrl: './box-sizing.component.html',
  styleUrls: ['./box-sizing.component.css', 'presentation.css']
})
export class BoxSizingComponent implements AfterViewInit {
  @ViewChildren(SlideComponent) anchorElements = new QueryList<SlideComponent>();

  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.anchorElements);
  }
}
