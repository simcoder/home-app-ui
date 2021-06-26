import { Component, OnInit } from '@angular/core';
import { WebNotificationsService } from '../web-notifications.service';
import { PartyService } from '../party.service';
export interface People {
  name: string;
}

const ELEMENT_DATA: People[] = [

];

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  constructor(private notifications: WebNotificationsService, private partyService: PartyService) { }
  async ngOnInit(): Promise<void> {
    this.notifications.swPush.messages.subscribe((x:any) => {
      const data = JSON.parse(x)
      console.log(x);
      this.dataSource.push({name: data.notification.data.person})
    });
    this.dataSource = await this.partyService.People().toPromise();
  }

}
