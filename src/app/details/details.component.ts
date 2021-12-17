import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { Menu, MenuData, RestaurantDetail, RestaurantDetails } from '../modal/restaurant.modal';
import { LoadingService } from '../services/loading.service';
import { RestaurantsApiService } from '../services/restaurants-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  restaurantDetail: RestaurantDetail;
  menu$: Observable<MenuData> = this.restaurantsApiService.getRestaurantMenu();
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private restaurantsApiService: RestaurantsApiService,
    private route: ActivatedRoute,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroyed$),
      catchError(err => {
        return throwError(err);
      })).subscribe((params: ParamMap) => {
        this.restaurantsApiService.getRestaurantDetail(params.get('id')).subscribe(
          reqObj => this.restaurantDetail = reqObj.restaurantDetail
        );
      }
      );
  }


  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
