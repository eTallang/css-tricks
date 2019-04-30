import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { AnchorElementDirective } from '../navigation/anchor-element.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-box-sizing',
  templateUrl: './box-sizing.component.html',
  styleUrls: ['./box-sizing.component.css']
})
export class BoxSizingComponent implements AfterViewInit {
  @ViewChildren(AnchorElementDirective) anchorElements = new QueryList<AnchorElementDirective>();

  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.anchorElements);
  }
}
