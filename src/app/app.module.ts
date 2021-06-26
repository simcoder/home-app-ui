import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinkMenuComponent } from './drink-menu/drink-menu.component';
import { CheckInComponent } from './check-in/check-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StatusesComponent } from './statuses/statuses.component';
import { EventsComponent } from './events/events.component';
import { FancyButtonComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    DrinkMenuComponent,
    CheckInComponent,
    OrderCompleteComponent,
    HomeComponent,
    SpinnerComponent,
    StatusesComponent,
    EventsComponent,
    FancyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
