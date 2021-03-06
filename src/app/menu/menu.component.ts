import { Component, OnInit, Input } from '@angular/core';
import { NavigationManager } from '../navigation/navigation-manager';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() whiteTheme = false;
  menuItems: MenuItem[] = [
    { name: 'About me', url: 'about' },
    { name: 'Box Sizing', url: 'box-sizing' },
    { name: 'Flexbox', url: 'flexbox' },
    { name: 'Units', url: 'units' }
  ];

  constructor(private navigationManager: NavigationManager, private router: Router) {}

  ngOnInit() {
    this.navigationManager.pageChange$.subscribe(direction => {
      const indexOfActivePage = this.menuItems.findIndex(menuItem => menuItem.url === this.router.url.substring(1));
      if (direction === 'next') {
        if (indexOfActivePage === this.menuItems.length - 1) {
          this.router.navigate([this.menuItems[0].url]);
        } else {
          this.router.navigate([this.menuItems[indexOfActivePage + 1].url]);
        }
      } else {
        if (indexOfActivePage === 0) {
          this.router.navigate([this.menuItems[this.menuItems.length - 1].url]);
        } else {
          this.router.navigate([this.menuItems[indexOfActivePage - 1].url]);
        }
      }
    });
  }
}
