import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FilterPopupComponent } from './components/filter-popup/filter-popup/filter-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarOpened: boolean = false;
  toggleSidebar(data: boolean) {
    this.isSidebarOpened = data
  }

  constructor(private dialog: MatDialog) { }

  openDialog(data) {
    if (data === true) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = {
        right: '0'
      }
      dialogConfig.width = '400px',
        dialogConfig.height = '100%',
        dialogConfig.disableClose = true,
        dialogConfig.hasBackdrop = true,
        this.dialog.open(FilterPopupComponent, dialogConfig);
    }
  }

}
