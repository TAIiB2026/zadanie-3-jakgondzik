import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private lastFetchDateSubject = new BehaviorSubject<Date | null>(null);
  private serviceCreationDateSubject = new BehaviorSubject<Date | null>(null);

  public lastFetchDate$: Observable<Date | null> = this.lastFetchDateSubject.asObservable();
  public serviceCreationDate$: Observable<Date | null> = this.serviceCreationDateSubject.asObservable();

  setLastFetchDate(date: Date): void {
    this.lastFetchDateSubject.next(date);
  }

  setServiceCreationDate(date: Date): void {
    this.serviceCreationDateSubject.next(date);
  }
}