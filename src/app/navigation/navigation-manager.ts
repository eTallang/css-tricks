import { QueryList } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

import { AnchorElementDirective } from './anchor-element.directive';
import { KeyControls } from './key-controls';

export class NavigationManager {
  private subscriptions = new Subscription();
  private shouldWrap = false;
  private anchorIndexInFocus = 0;
  private navKeys: KeyControls = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    nextPage: 'ArrowRight',
    prevPage: 'ArrowLeft'
  };

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

  withKeys(keys: Partial<KeyControls>): this {
    this.navKeys = {
      ...this.navKeys,
      ...keys
    };
    return this;
  }

  private onKeyDown(keyEvent: KeyboardEvent): void {
    switch (keyEvent.code) {
      case this.navKeys.up: {
        if (this.anchorIndexInFocus !== 0) {
          this.scrollToAnchorIndex(--this.anchorIndexInFocus);
        } else if (this.shouldWrap) {
          this.anchorIndexInFocus = this.navigationItems.length - 1;
          this.scrollToAnchorIndex(this.anchorIndexInFocus);
        }
        keyEvent.preventDefault();
        break;
      }
      case this.navKeys.nextPage: {
        keyEvent.preventDefault();
        break;
      }
      case this.navKeys.down: {
        if (this.anchorIndexInFocus !== this.navigationItems.length - 1) {
          this.scrollToAnchorIndex(++this.anchorIndexInFocus);
        } else if (this.shouldWrap) {
          this.anchorIndexInFocus = 0;
          this.scrollToAnchorIndex(this.anchorIndexInFocus);
        }
        keyEvent.preventDefault();
        break;
      }
      case this.navKeys.prevPage: {
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
