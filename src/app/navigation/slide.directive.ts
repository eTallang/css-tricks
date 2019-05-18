import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[slide]'
})
export class SlideDirective {
  @HostBinding('class.slide') fullSlideStyling = true;

  get elementRef(): ElementRef<HTMLElement> {
    return this.e;
  }

  constructor(private e: ElementRef<HTMLElement>) { }
}
