import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
@Component({
  selector: 'app-trip-itnery-bangkok',
  templateUrl: './trip-itnery-bangkok.component.html',
  styleUrls: ['./trip-itnery-bangkok.component.css']
})
export class TripItneryBangkokComponent {
  places!: any[];

  constructor(private router:Router, private tripService: TripService){}
    goToDestinations(){
      this.router.navigate(['/destination']);
    }
  
ngOnInit(): void{
  this.getAllData();
}

getAllData():void{
  this.tripService.getTrip().subscribe(data => {
    this.places = [data[1]];
    console.log(this.places);
  })
}
}
