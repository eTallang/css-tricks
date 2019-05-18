import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SlideDirective } from '../navigation/slide.directive';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements AfterViewInit {
  @ViewChildren(SlideDirective) elements: QueryList<SlideDirective>;
  fontSize = 18;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
