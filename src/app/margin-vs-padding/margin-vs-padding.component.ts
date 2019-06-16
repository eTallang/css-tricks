import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { SlideComponent } from '../navigation/slide.component';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-margin-vs-padding',
  templateUrl: './margin-vs-padding.component.html',
  styleUrls: ['./margin-vs-padding.component.css']
})
export class MarginVsPaddingComponent implements AfterViewInit {
  @ViewChildren(SlideComponent) elements: QueryList<SlideComponent>;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
