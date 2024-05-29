import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit{
  name!: string;
  surname!: string;
  rating!: number;

  constructor(private dialogRef: MatDialogRef<StarRatingComponent>, public http:ApiService) {}

  ngOnInit(): void {
 
    this.name = '';
    this.surname = '';
    this.rating = 0;

  }
  setRating(rating: number): void {
    this.rating = rating;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onOk(): void {

   
    this.http.name.next(this.name)
    this.http.surname.next(this.surname)
    this.http.ratings.next(this.rating)
    // Close the modal
    this.dialogRef.close();
  }


}