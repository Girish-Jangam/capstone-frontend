import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { HomeComponent } from './pages/home/home.component';
import { ResgisterFormComponent } from './pages/resgister-form/resgister-form.component';
import { DestinationGuideComponent } from './pages/destination-guide/destination-guide.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CreateItineraryComponent } from './pages/create-itinerary/create-itinerary.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth/admin.guard';
import { ViewItineraryComponent } from './pages/view-itinerary/view-itinerary.component';
import { TripItneryComponent } from './pages/trip-itnery/trip-itnery.component';
import { TripItneryBangkokComponent } from './pages/trip-itnery-bangkok/trip-itnery-bangkok.component';
import { TripItneryParisComponent } from './pages/trip-itnery-paris/trip-itnery-paris.component';
import { TripItneryNewyorkComponent } from './pages/trip-itnery-newyork/trip-itnery-newyork.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { ReviewFormComponent } from './pages/review-form/review-form.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'destination', component: DestinationComponent},
  {path:'register', component:ResgisterFormComponent},
  // {path:'guide', component:DestinationGuideComponent},
  {path:'fav', component:FavoritesComponent},
  {path:'createItinerary', component:CreateItineraryComponent}, 
  {path:'viewItneray', component:ViewItineraryComponent},

  {path:'admin', component: AdminLoginComponent},
  {path:'123', component: TripItneryComponent},
  {path:'234', component: TripItneryParisComponent},
  {path:'345', component: TripItneryBangkokComponent},
  {path:'567', component: TripItneryNewyorkComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'groups/create', component: GroupsComponent, data: { action: 'create' } },
  { path: 'groups/view', component: GroupsComponent, data: { action: 'view' } },
  { path: 'groups/join', component: GroupsComponent, data: { action: 'join' } },
  { path: 'reviews', component: ReviewFormComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
