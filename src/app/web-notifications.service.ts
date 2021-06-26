import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebNotificationsService {
  private baseUrl = 'https://us-central1-new-years-home-party-2020.cloudfunctions.net/app/notifications';

  pushSubscription;
  readonly VAPID_PUBLIC_KEY =
    'BAafEdcGskwyzmCy6CfDZbLRJjaq-wUlHd34h23mWAUkqrDAInrwo03SMJQ0OrkBqodFUamAgns_TIYKf8AqLAU';
  constructor(private http: HttpClient,public swPush: SwPush) {}
  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => {
        console.log(sub)
        this.sendToServer(sub);
      })
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }

  sendToServer(params: any) {
    this.http.post(this.baseUrl, { notification : params }).subscribe();
  }
}
