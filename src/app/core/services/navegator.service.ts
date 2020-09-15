import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Navegators } from '../../shared/enums/navegators.enum';

@Injectable({
  providedIn: 'root',
})
export class NavegatorService {
  private moveTo$: Subject<Navegators> = new Subject<Navegators>();
  private changeColor$: Subject<Navegators> = new Subject<Navegators>();
  constructor() {}

  getObservable(): Observable<Navegators> {
    return this.moveTo$.asObservable();
  }

  getObservableColor(): Observable<Navegators> {
    return this.changeColor$.asObservable();
  }

  moveTo(to: Navegators): void {
    this.moveTo$.next(to);
  }

  changeColor(to: Navegators) {
    this.changeColor$.next(to);
  }
}
