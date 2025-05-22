import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  reviewForm: FormGroup;
  reviews: any[] = [];
  selectedLocation: string = '';
  destinations: string[] = ["Bali", "Paris", "Bangkok", "New York"]; // Ensure to populate the list of destinations

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      destination: ['', Validators.required], // Changed to "destination" to match the backend
      rating: ['', Validators.required],
      review: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch all reviews on component initialization
    this.fetchReviews();
  }

  fetchReviews(destinationFilter: string = '') {
    // Construct the API URL based on filter (if any)
    let url = 'https://capstone-backend-xmv7.onrender.com/api/reviews';
    if (destinationFilter) {
      url = `https://capstone-backend-xmv7.onrender.com/api/reviews/filter?destination=${destinationFilter}`;
    }

    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.reviews = data;
        console.log('Fetched reviews:', this.reviews);
      },
      (error) => {
        console.error('Error fetching reviews:', error);
        alert('There was an error fetching reviews');
      }
    );
  }

  submitReview(): void {
    if (this.reviewForm.valid) {
      console.log('Submitting', this.reviewForm.value);
      this.http.post('https://capstone-backend-xmv7.onrender.com/api/reviews/add', this.reviewForm.value).subscribe(
        (response) => {
          console.log('Review submitted successfully:', response);
          this.reviewForm.reset(); // Reset the form after submission
          this.fetchReviews(); // Refresh reviews after submitting
        },
        (error) => {
          console.error('Error submitting review:', error);
          alert('There was an error submitting the review');
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }
}
