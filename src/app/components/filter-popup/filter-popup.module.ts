import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryModule } from '../category/category.module';
import { ChipsModule } from '../chips/chips.module';



@NgModule({
  declarations: [FilterPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    CategoryModule,
    ChipsModule
  ],
  entryComponents: [FilterPopupComponent]
})
export class FilterPopupModule { }
