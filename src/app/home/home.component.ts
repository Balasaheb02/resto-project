import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurants } from '../modal/restaurant.modal';
import { LoadingService } from '../services/loading.service';
import { RestaurantRepositoryService } from '../services/restaurant-repository.service';
import { RestaurantsApiService } from '../services/restaurants-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants$: Observable<Restaurants>;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private loadingService: LoadingService, private restaurantRepository: RestaurantRepositoryService) { }

  category = [
    { id: 1, name: 'Baked', image: 'assets/resto-image.svg' },
    { id: 2, name: 'Sweet', image: 'assets/burger-king.svg' },
    { id: 3, name: 'Hot Dish', image: 'assets/pizza-hut.svg' },
    { id: 3, name: 'Hot Dish', image: 'assets/macd.svg' }
  ]

  ngOnInit(): void {
    this.restaurantRepository.getRestaurants();
    this.restaurants$ = this.restaurantRepository.restaurants$.pipe(catchError(err => {
      return throwError(err);
    }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
