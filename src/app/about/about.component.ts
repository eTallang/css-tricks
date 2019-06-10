import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { SlideDirective } from '../navigation/slide.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren(SlideDirective) anchorElements = new QueryList<SlideDirective>();

  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.anchorElements);
  }
}
