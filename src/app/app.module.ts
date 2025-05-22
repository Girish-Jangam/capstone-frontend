import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ResgisterFormComponent } from './pages/resgister-form/resgister-form.component';
import { TripItneryComponent } from './pages/trip-itnery/trip-itnery.component';
import { TripItneryParisComponent } from './pages/trip-itnery-paris/trip-itnery-paris.component';
import { TripItineryFormComponent } from './pages/trip-itinery-form/trip-itinery-form.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ReviewFormComponent } from './pages/review-form/review-form.component';
import { DestinationGuideComponent } from './pages/destination-guide/destination-guide.component';
import { TripItneryBangkokComponent } from './pages/trip-itnery-bangkok/trip-itnery-bangkok.component';
import { TripItneryNewyorkComponent } from './pages/trip-itnery-newyork/trip-itnery-newyork.component';
import { CreateItineraryComponent } from './pages/create-itinerary/create-itinerary.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ViewItineraryComponent } from './pages/view-itinerary/view-itinerary.component';
import { GroupsComponent } from './pages/groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DestinationComponent,
    HomeComponent,
    ResgisterFormComponent,
    TripItneryComponent,
    TripItneryBangkokComponent,
    TripItneryNewyorkComponent,
    TripItneryParisComponent,
    TripItineryFormComponent,
    FavoritesComponent,
    ReviewFormComponent,
    DestinationGuideComponent,
    CreateItineraryComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    ViewItineraryComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
