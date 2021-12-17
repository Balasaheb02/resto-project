import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { DetailsComponent } from 'src/app/details/details.component';



@NgModule({
  declarations: [DetailCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DetailCardComponent
  ]
})
export class DetailCardModule { }
