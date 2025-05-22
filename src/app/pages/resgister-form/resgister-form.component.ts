import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-resgister-form',
  templateUrl: './resgister-form.component.html',
  styleUrls: ['./resgister-form.component.css']
})
export class ResgisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  message: string = "";
  isRegistered: boolean = false;  // New variable to track registration success

  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    public router: Router // Inject Router to enable navigation
  ) {}

  ngOnInit(): void {
    // Initialize the form with validation
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]{1}[0-9]{9}$/),
          Validators.minLength(10)
        ]
      ],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword
      ? { passwordMismatch: true }
      : null;
  }

  // Register the user
  onRegister(): void {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;

      // Call the registration service method
      this.authService.register(data).subscribe(
        response => {
          this.message = response.message;  // Show success message
          this.isRegistered = true;  // Set registration success flag to true

          // Navigate to the login page after successful registration
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);  // Delay navigation to allow user to see the success message
        },
        error => {
          // If there's an error, show the error message
          this.message = error.error?.message || 'Error occurred during registration.';
        }
      );
    }
  }

  // Helper method to check if the form is invalid
  get formControls() {
    return this.registerForm.controls;
  }
}
