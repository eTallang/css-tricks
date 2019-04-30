import { Component, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';

import { AnchorElementDirective } from '../navigation/anchor-element.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-box-sizing',
  templateUrl: './box-sizing.component.html',
  styleUrls: ['./box-sizing.component.css']
})
export class BoxSizingComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(AnchorElementDirective) anchorElements = new QueryList<AnchorElementDirective>();
  navigationManager: NavigationManager;

  ngAfterViewInit() {
    this.navigationManager = new NavigationManager(this.anchorElements).withWrap();
  }

  ngOnDestroy() {
    this.navigationManager.onDestroy();
  }
}
