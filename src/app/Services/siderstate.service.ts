import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private _isOpen = new BehaviorSubject<boolean>(false);
  isOpen$ = this._isOpen.asObservable();

  setOpen(state: boolean) {
    this._isOpen.next(state);
  }
  getOpen(): boolean {
    return this._isOpen.value;
  }
}
