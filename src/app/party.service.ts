import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WebNotificationsService } from './web-notifications.service';
@Injectable({
  providedIn: 'root'
})
export class PartyService {

  // Base url
  baseurl = 'https://us-central1-new-years-home-party-2020.cloudfunctions.net/app';
  constructor(private http: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    // GET
    Checkin(name, subscription): Observable<any> {
      const body = {
        name,
        subscription
      };
      return this.http.post<any>(`${this.baseurl}/people/checkin`, body)
      .pipe(
        catchError(this.errorHandl)
      )
    }

    GetNotificationPayload(): Observable<any> {
      return this.http.get<any>(`${this.baseurl}/notifications/checkin`)
      .pipe(
        catchError(this.errorHandl)
      )
    }

    People(): Observable<any> {
      return this.http.get<any>(`${this.baseurl}/people`)
      .pipe(
        catchError(this.errorHandl)
      )
    }

    Drinks(): Observable<any> {
      return this.http.get<any>(`${this.baseurl}/drinks`)
      .pipe(
        catchError(this.errorHandl)
      )
    }

    DrinkById(id): Observable<any> {
      return this.http.get<any>(`${this.baseurl}/drinks/${id}`)
      .pipe(
        catchError(this.errorHandl)
      )
    }

    Order(drinkId, personId): Observable<any> {
      const body = {
        personId,
        drinkId
      };
      return this.http.post(`${this.baseurl}/drinks/order`, body, {responseType: 'text'})
      .pipe(
        catchError(this.errorHandl)
      )
    }
    // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
