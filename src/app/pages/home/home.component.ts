import { Component, OnInit } from '@angular/core';
import { DestinationService } from "../../services/destination.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  destinations: any[] = [];
  searchQuery: string = '';
  errorMessage: string = '';

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {}

  onSearch() {
    if (this.searchQuery.trim()) {      
      this.destinationService.searchDestinations(this.searchQuery).subscribe(
        (data) => {
          this.destinations = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = error.error.message || 'No results found';
          this.destinations = [];
        }
      );
    } else {
      this.destinations = [];
      this.errorMessage = 'Please enter a search term';
    }
}
}
