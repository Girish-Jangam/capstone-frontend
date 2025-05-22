import { Component, OnInit } from '@angular/core';
import { DestinationGuideService } from 'src/app/services/destination-guide.service';
import { Destination } from "../../models/destination.mode";
@Component({
  selector: 'app-destination-guide',
  templateUrl: './destination-guide.component.html',
  styleUrls: ['./destination-guide.component.css']
})
export class DestinationGuideComponent implements OnInit {
      destinations:Destination[] =[];
      

      constructor(private destinationService :DestinationGuideService){}

    
      ngOnInit(): void {
        this.destinationService.getDestinations().subscribe((data)=>{
          // console.log(data);
          
          this.destinations= data;
          console.log(this.destinations);
          
        })
      }
       
}

