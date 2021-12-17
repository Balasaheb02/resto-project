import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantRepositoryService } from 'src/app/services/restaurant-repository.service';
import { RestaurantsApiService } from 'src/app/services/restaurants-api.service';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss']
})
export class FilterPopupComponent implements OnInit {

  activeStatus = false;

  constructor(
    private restaurantRepository: RestaurantRepositoryService,
    private dialogRef: MatDialogRef<FilterPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  filterData(status) {
    if (status === true) {
      this.restaurantRepository.getRestaurants({ isOpen: true });
    } else {
      this.restaurantRepository.getRestaurants({ isOpen: false });
    }
    this.dialogRef.close();
  }

}



