import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, MenuData, RestaurantDetail, RestaurantDetails, Restaurants } from '../modal/restaurant.modal';
import { MyCustomHttpUrlEncodingCodec } from './httpParams';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsApiService {

  apiUrl: string;

  constructor(private http: HttpClient, ) {
    this.apiUrl = environment.apiUrl;
  }

  getRestaurants(paramsData?: any): Observable<Restaurants> {
    let params: HttpParams = new HttpParams({
      encoder: new MyCustomHttpUrlEncodingCodec()
    });
    params = params.append(paramsData ? `filter[${Object.keys(paramsData)[0]}]` : '', paramsData ? `${Object.values(paramsData)}` : '');
    return this.http.get<Restaurants>(`${this.apiUrl}/allRestaurants`,
      { params: paramsData ? params : null });
  }

  getRestaurantDetail(id: string): Observable<RestaurantDetails> {
    return this.http.get<RestaurantDetails>(`${this.apiUrl}/restaurantDetails/${id}`);
  }

  getRestaurantMenu(): Observable<MenuData> {
    return this.http.get<MenuData>(`${this.apiUrl}/menu`);
  }
}
