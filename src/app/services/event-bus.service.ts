import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventBusService {
  private inventorySubject$ = new BehaviorSubject('');
  inventoryChanged$ = this.inventorySubject$.asObservable();
  constructor() {}

  addToInventory(userName: any ) {
    console.log(userName);
    this.inventorySubject$.next(userName);
  }
}
