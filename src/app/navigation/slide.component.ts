import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: [ './slide.component.css' ]
})
export class SlideComponent {
  get elementRef(): HTMLElement {
    if (this.hostElement) {
      return this.hostElement.nativeElement;
    }
  }

  constructor(private hostElement: ElementRef<HTMLElement>) { }
}
