import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule, Routes } from '@angular/router';
import { ChipsModule } from '../components/chips/chips.module';
import { DetailCardModule } from '../components/detail-card/detail-card.module';
import { MatProgressSpinnerModule } from '@angular/material';

const DetailsRoutes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
]


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailCardModule,
    RouterModule.forChild(DetailsRoutes),
    ChipsModule,
    MatProgressSpinnerModule,
  ]
})
export class DetailsModule { }
