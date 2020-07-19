import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { resolve } from 'url';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }
 



getPromotions(): Observable<Promotion[]> {
  return this.http.get<Promotion[]>(baseURL + 'promotions');
}

getPromotion(id: number): Observable<Promotion> {
  return this.http.get<Promotion>(baseURL + 'promotions/' + id);
}

getFeaturedPromotion(): Observable<Promotion> {
  return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
}


}
