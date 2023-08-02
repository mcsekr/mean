import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from '../../model/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {


  isOpen = false;
  reviewForm!: FormGroup

  @Output()
  onNewReview = new EventEmitter<Review>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      author: ['', Validators.required],
      rating: ['5', Validators.required],
      body: ['', Validators.required]
    });
  }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  handleForm(event: SubmitEvent) {
    event.preventDefault();
    this.onNewReview.emit(this.reviewForm.value);
    this.reviewForm.reset({
      author: '',
      rating: '5',
      body: ''
    });
    this.isOpen = false;
  }

}
