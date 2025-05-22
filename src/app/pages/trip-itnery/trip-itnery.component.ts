import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-itnery',
  templateUrl: './trip-itnery.component.html',
  styleUrls: ['./trip-itnery.component.css']
})
export class TripItneryComponent {
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
          this.places = [data[0]];
          console.log(this.places);
        })
      }
}
