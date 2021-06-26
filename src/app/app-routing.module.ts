import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { DrinkMenuComponent } from './drink-menu/drink-menu.component';
import { HomeComponent } from './home/home.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { StatusesComponent } from './statuses/statuses.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'check-in', component: CheckInComponent },
  { path: 'bar-menu', component: DrinkMenuComponent },
  { path: 'order-complete', component: OrderCompleteComponent },
  { path: 'dashboard', component: StatusesComponent },
  { path: 'event', component: EventsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
