import { QueryList, Injectable } from '@angular/core';
import { Subscription, fromEvent, Subject } from 'rxjs';

import { AnchorElementDirective } from './anchor-element.directive';
import { KeyControls } from './key-controls';

/**
 * This should be a service (it's logically something we want to treat as a singleton)
 * Configuration should happen in the AppComponent, while each component should be able
 * to provide a new list of navigation items
 */
@Injectable({providedIn: 'root'})
export class NavigationManager {
  private subscriptions = new Subscription();
  private anchorItems: QueryList<AnchorElementDirective>;
  private shouldWrap = false;
  private anchorIndexInFocus = 0;
  private navKeys: KeyControls = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    nextPage: 'ArrowRight',
    prevPage: 'ArrowLeft'
  };
  private pageChange = new Subject<'next' | 'previous'>();
  pageChange$ = this.pageChange.asObservable();

  constructor() {
    this.subscriptions.add(fromEvent(window, 'keydown').subscribe((keyEvent: KeyboardEvent) => this.onKeyDown(keyEvent)));
  }

  setAnchorItems(anchorItems: QueryList<AnchorElementDirective>): this {
    this.anchorIndexInFocus = 0;
    this.anchorItems = anchorItems;
    return this;
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
          this.anchorIndexInFocus = this.anchorItems.length - 1;
          this.scrollToAnchorIndex(this.anchorIndexInFocus);
        }
        keyEvent.preventDefault();
        break;
      }
      case this.navKeys.nextPage: {
        this.pageChange.next('next');
        keyEvent.preventDefault();
        break;
      }
      case this.navKeys.down: {
        if (this.anchorIndexInFocus !== this.anchorItems.length - 1) {
          this.scrollToAnchorIndex(++this.anchorIndexInFocus);
        } else if (this.shouldWrap) {
          this.anchorIndexInFocus = 0;
          this.scrollToAnchorIndex(this.anchorIndexInFocus);
        }
        keyEvent.preventDefault();
        break;
      }
      case this.navKeys.prevPage: {
        this.pageChange.next('previous');
        keyEvent.preventDefault();
        break;
      }
    }
  }

  private scrollToAnchorIndex(index: number): void {
    this.anchorItems
      .toArray()
      [index].elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
