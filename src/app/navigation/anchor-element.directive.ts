import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnchorElement]'
})
export class AnchorElementDirective {
  get elementRef(): ElementRef<HTMLElement> {
    return this.e;
  }

  constructor(private e: ElementRef<HTMLElement>) { }
}
