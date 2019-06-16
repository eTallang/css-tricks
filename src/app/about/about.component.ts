import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { SlideComponent } from '../navigation/slide.component';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren(SlideComponent) anchorElements = new QueryList<SlideComponent>();

  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.anchorElements);
  }
}
