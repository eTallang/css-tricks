import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { SlideComponent } from '../navigation/slide.component';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent implements AfterViewInit {
  @ViewChildren(SlideComponent) elements: QueryList<SlideComponent>;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
