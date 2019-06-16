import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: [ './slide.component.css' ]
})
export class SlideComponent {
  get elementRef(): ElementRef<HTMLElement> {
    return this.hostElement;
  }

  constructor(private hostElement: ElementRef<HTMLElement>) { }
}
