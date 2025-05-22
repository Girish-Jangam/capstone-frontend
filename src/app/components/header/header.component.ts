import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TravelGroup } from 'src/app/models/travels.group';
import { TravelGroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoginPage: boolean = false;
  isScrolled: boolean = false; // Define the isScrolled property
  isGroupSelectVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLoginStatus();

    // Hide navbar on login page
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url.includes('/login');
    });

    // Periodically check login status to reflect changes dynamically
    setInterval(() => {
      this.checkLoginStatus();
    }, 500);
  }

  checkLoginStatus() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleGroupSelectVisibility() {
    this.isGroupSelectVisible = !this.isGroupSelectVisible;
  }

  onGroupActionSelect(event: any) {
    const selectedAction = event.target.value;

    switch (selectedAction) {
      case 'create':
        this.router.navigate(['/groups/create']);
        break;
      case 'view':
        this.router.navigate(['/groups/view']);
        break;
      case 'join':
        this.router.navigate(['/groups/join']);
        break;
      default:
        break;
    }

    this.isGroupSelectVisible = false;
  }
}
