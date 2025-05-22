import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.authService.login(data).subscribe(
        (response)=>{
          this.authService.setToken(response.token);
          setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['/home']).then(()=>{
              window.location.reload();
            });
          }, 500)
        },
        (error) => {
          this.message = error.error?.message || 'Login failed';
        }      
      )
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  // loginUser() {
  //   // Example login logic
  //   localStorage.setItem('userLoggedIn', 'true'); // Set login status in local storage
  //   this.router.navigate(['/favorites']); // Redirect to favorites page after login
  // }
}
