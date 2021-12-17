import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPopupModule } from '../components/filter-popup/filter-popup.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CardModule } from '../components/card/card.module';
import { CategoryModule } from '../components/category/category.module';
import { TopbarModule } from '../components/topbar/topbar.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material';


const DetailsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SidebarModule,
    TopbarModule,
    CategoryModule,
    CardModule,
    MatDialogModule,
    FilterPopupModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(DetailsRoutes)
  ]
})
export class HomeModule { }
