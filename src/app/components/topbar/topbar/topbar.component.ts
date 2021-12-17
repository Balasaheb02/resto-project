import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RestaurantRepositoryService } from 'src/app/services/restaurant-repository.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() toggleButton = new EventEmitter<boolean>(false);
  @Output() filter = new EventEmitter<boolean>(false);
  toggleValue = false;


  constructor(private restaurantRepository: RestaurantRepositoryService, ) { }

  ngOnInit() {
  }

  toggleSidebar(value: boolean) {
    this.toggleValue = !this.toggleValue;
    this.toggleButton.emit(this.toggleValue);
  }

  openFilter() {
    this.filter.emit(true);
  }

  search(data) {
    this.restaurantRepository.getRestaurants({ restaurantName: data });
  }

}
