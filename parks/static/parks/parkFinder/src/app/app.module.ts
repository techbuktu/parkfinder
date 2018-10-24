import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { ParkDetailComponent } from './components/park-detail/park-detail.component';
import { ParkListComponent } from './components/park-list/park-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ParkDetailComponent,
    ParkListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
