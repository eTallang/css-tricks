import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { AnchorElementDirective } from '../navigation/anchor-element.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent implements AfterViewInit {
  @ViewChildren(AnchorElementDirective) elements: QueryList<AnchorElementDirective>;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
