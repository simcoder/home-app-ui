import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PartyService } from '../party.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.scss']
})
export class DrinkMenuComponent implements OnInit {

  constructor(private partyService: PartyService, private router: Router) { }
  drinks: any = [];
  names: any[] = [];
  loading = false;
  selectedNameId: string;
  displayOrderButton: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.partyService.People().subscribe(x=>{
      x.forEach(x=>{
         this.names.push({value: x.id, viewValue: x.name})
      });
    });
    this.partyService.Drinks().subscribe(x=>{
      x.forEach(x=>{
        if(x.inStock){
          this.drinks.push({name: x.name, description: x.description, id: x.id, inStock: true })
        }
        this.loading = false;
      });
    });
  }

  async onDrinkClick(id) {
    // check inventory to display order button or out of stock message
    const drink = await this.partyService.DrinkById(id).toPromise();
    this.displayOrderButton = drink.qty > 0;
  }
  
  onChangeSelect(event){
    this.selectedNameId = event.value;
  }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  onOrderClick(event){
    this.loading = true;
    this.partyService.Order(event, this.selectedNameId).subscribe(x=>{
      this.loading = false;
      this.router.navigate(['/order-complete'])
    });
  }

}
