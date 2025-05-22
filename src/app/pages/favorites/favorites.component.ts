import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
activeTab:string='bookGuide';

  bookGuideList: any[] = [];
  itinerariesList: any[] = [];
  constructor(private fav:FavoritesService ,private route: Router){}

  ngOnInit():void{
    this.loadFavorites();
  }
  // newItinerary ='';
  setActiveTab(tab:string){
    this.activeTab = tab;
  }

  loadFavorites(){
    this.bookGuideList=this.fav.getFavorites();
    this.itinerariesList=this.fav.getItineraries();
  }

  removeFromFavorites(destinationId:any){
    this.fav.removeFromFavorites(destinationId);
    this.loadFavorites();
  }

  removeFromFavorite(itineraryId:any){
    this.fav.removeFromFavorite(itineraryId);
    this.loadFavorites();

  }

  onbali(name:number){
    const k ='/'+name;
     this.route.navigate([k]);
  }

  removeItinerary(itineraryId: any): void {
    this.fav.removeFromFavorite(itineraryId);
    this.itinerariesList = this.fav.getItineraries(); // Refresh the list
  }

  

  // switchTab(tab:string){
  //   this.setActiveTab = tab;
  // }

  // addBookGuide(destination : any){
  //   this.bookGuideList.push(destination);
  //   this.saveToLocalStorage();
  // }

  // addItinerary(){
  //   if(this.newItinerary.trim()!== ''){
  //     this.itinerariesList.push({title :this.newItinerary});
  //     this.newItinerary = '';
  //     this.saveToLocalStorage();
  //   }

  // }
  // saveToLocalStorage(){
  //   localStorage.setItem('bookGuides',JSON.stringify(this.bookGuideList));
  //   localStorage.setItem('itineraries',JSON.stringify(this.itinerariesList));
  // }
  // loadFromLocalStorage(){
  //   this.bookGuideList = JSON.parse(localStorage.getItem('this.bookGuides')||'[]');
  //   this.itinerariesList = JSON.parse(localStorage.getItem('this.itineraries')||'[]');
  // }

  // ngOnInit(){
  //   this.loadFromLocalStorage();
  // }

}
