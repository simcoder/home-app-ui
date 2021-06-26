import { Component, OnInit } from '@angular/core';
import { WebNotificationsService } from './web-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui';
  constructor(private notifications: WebNotificationsService) {}
  ngOnInit(): void {
    this.notifications.subscribeToNotifications();
  }
}
