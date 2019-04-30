import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slider } from './animations';
import { NavigationManager } from './navigation/navigation-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private navigationManager: NavigationManager) {}

  ngOnInit() {
    this.navigationManager.withWrap();
  }

  ngOnDestroy() {
    this.navigationManager.onDestroy();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.name;
  }
}
