import { QueryList } from '@angular/core';
import { AnchorElementDirective } from './anchor-element.directive';
import { Subscription, fromEvent } from 'rxjs';

export class NavigationManager {
  private subscriptions = new Subscription();
  private shouldWrap = false;
  private anchorIndexInFocus = 0;

  constructor(private navigationItems: QueryList<AnchorElementDirective>) {
    this.subscriptions.add(fromEvent(window, 'keydown').subscribe((keyEvent: KeyboardEvent) => this.onKeyDown(keyEvent)));
  }

  onDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  withWrap(wrap = true): this {
    this.shouldWrap = wrap;
    return this;
  }

  useWASD(use = false): this {
    return this;
  }

  onKeyDown(keyEvent: KeyboardEvent): void {
    switch (keyEvent.code) {
      case 'ArrowUp': {
        if (this.anchorIndexInFocus !== 0) {
          this.scrollToAnchorIndex(--this.anchorIndexInFocus);
        } else if (this.shouldWrap) {
          this.anchorIndexInFocus = this.navigationItems.length - 1;
          this.scrollToAnchorIndex(this.anchorIndexInFocus);
        }
        keyEvent.preventDefault();
        break;
      }
      case 'ArrowRight': {
        keyEvent.preventDefault();
        break;
      }
      case 'ArrowDown': {
        if (this.anchorIndexInFocus !== this.navigationItems.length - 1) {
          this.scrollToAnchorIndex(++this.anchorIndexInFocus);
        } else if (this.shouldWrap) {
          this.anchorIndexInFocus = 0;
          this.scrollToAnchorIndex(this.anchorIndexInFocus);
        }
        keyEvent.preventDefault();
        break;
      }
      case 'ArrowUp': {
        keyEvent.preventDefault();
        break;
      }
    }
  }

  private scrollToAnchorIndex(index: number): void {
    this.navigationItems
      .toArray()
      [index].elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
