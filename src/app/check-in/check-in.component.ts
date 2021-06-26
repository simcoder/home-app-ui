import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyService } from '../party.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  loading = false;
  constructor(private partyService: PartyService, private router: Router) { }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }
  onChange(event){
    console.log(event);
  }
  async onSubmit(form: FormGroup){
    this.loading = true;
    const payload = await this.partyService.GetNotificationPayload().toPromise();
    console.log(payload);
    this.partyService.Checkin(form.value.name, payload).subscribe(x=>{
      this.loading = false;
      this.router.navigate(['/bar-menu']);
    })
  }
}
