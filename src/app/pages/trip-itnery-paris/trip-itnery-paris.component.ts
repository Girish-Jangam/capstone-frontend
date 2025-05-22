import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
@Component({
  selector: 'app-trip-itnery-paris',
  templateUrl: './trip-itnery-paris.component.html',
  styleUrls: ['./trip-itnery-paris.component.css']
})
export class TripItneryParisComponent {
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
      this.places = [data[3]];
      console.log(this.places);
    })
  }
}
