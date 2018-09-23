import { Injectable } from '@angular/core';
import { HomeState } from '../home/home.component';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class PageDataService {
  abstract homeData(): Observable<HomeState>;
}
