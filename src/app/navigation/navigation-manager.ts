import { QueryList, Injectable } from '@angular/core';
import { Subscription, fromEvent, Subject } from 'rxjs';

import { SlideDirective } from './slide.directive';
import { KeyControls } from './key-controls';

@Injectable({providedIn: 'root'})
export class NavigationManager {
  private subscriptions = new Subscription();
  private anchorItems: QueryList<SlideDirective>;
  private shouldWrap = false;
  private anchorIndexInFocus = 0;
  private navKeys: KeyControls = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    nextPage: 'ArrowRight',
    prevPage: 'ArrowLeft'
  };
  private pageChange = new Subject<'next' | 'previous'>();
  private initialItemsHasBeenSet = false;
  pageChange$ = this.pageChange.asObservable();

  constructor() {
    this.subscriptions.add(fromEvent(window, 'keydown').subscribe((keyEvent: KeyboardEvent) => this.onKeyDown(keyEvent)));
    const storedIndex = localStorage.getItem('slideIndex');
    if (storedIndex) {
      this.anchorIndexInFocus = +storedIndex;
    }
  }

  setAnchorItems(anchorItems: QueryList<SlideDirective>): this {
    this.anchorItems = anchorItems;

    if (this.initialItemsHasBeenSet) {
      this.anchorIndexInFocus = 0;
    } else {
      this.initialItemsHasBeenSet = true;
    }
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
        this.scrollToAnchorIndex(0);
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
        this.scrollToAnchorIndex(0);
        keyEvent.preventDefault();
        break;
      }
    }
  }

  private scrollToAnchorIndex(index: number): void {
    localStorage.setItem('slideIndex', index.toString());
    this.anchorItems
      .toArray()
      [index].elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
