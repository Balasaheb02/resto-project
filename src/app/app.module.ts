import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { TopbarModule } from './components/topbar/topbar.module';
import { CategoryModule } from './components/category/category.module';
import { CardModule } from './components/card/card.module';
import { MatDialogModule } from "@angular/material";
import { FilterPopupModule } from './components/filter-popup/filter-popup.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Interceptors/auth';
import { LoaderInterceptor } from './Interceptors/loader';
import { HttpError } from './Interceptors/httperror';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    TopbarModule,
    CategoryModule,
    CardModule,
    MatDialogModule,
    FilterPopupModule,
    HttpClientModule,

  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpError, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
