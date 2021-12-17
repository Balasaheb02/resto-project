import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurants } from '../modal/restaurant.modal';
import { RestaurantsApiService } from './restaurants-api.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantRepositoryService {

  data = [];
  restaurants: BehaviorSubject<Restaurants> = new BehaviorSubject<Restaurants>(null);
  restaurants$ = this.restaurants.asObservable();

  constructor(private restaurantsApiService: RestaurantsApiService, ) { }

  getRestaurants(paramsData?: any) {
    this.restaurantsApiService.getRestaurants(paramsData).subscribe(
     reqObj => this.restaurants.next(reqObj)
   );
  }

}
