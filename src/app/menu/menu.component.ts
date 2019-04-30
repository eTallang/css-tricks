import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { name: 'Box Sizing', url: 'box-sizing' },
    { name: 'Flexbox', url: 'flexbox' },
    { name: 'Margin vs. padding', url: 'margin-vs-padding' },
    { name: 'Units', url: 'units' },
    { name: 'Cascading', url: 'cascading' },
  ];
}
