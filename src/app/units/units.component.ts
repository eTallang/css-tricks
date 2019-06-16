import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { SlideComponent } from '../navigation/slide.component';
import { NavigationManager } from '../navigation/navigation-manager';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css', './presentation.css']
})
export class UnitsComponent implements AfterViewInit {
  @ViewChildren(SlideComponent) elements: QueryList<SlideComponent>;
  fontSize = 18;
  constructor(private navigationManager: NavigationManager) { }

  ngAfterViewInit() {
    this.navigationManager.setAnchorItems(this.elements);
  }
}
