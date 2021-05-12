import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cssexercise',
  templateUrl: './cssexercise.component.html',
  styleUrls: ['./cssexercise.component.css']
})
export class CssexerciseComponent implements OnInit {

  exerciseForm;
  answer = {
    q1: 'b',
    q2: 'c',
    q3: 'c',
    q4: 'b',
    q5: 'a',
  }
  constructor() { }

  ngOnInit(): void {
    this.exerciseFormInit();
  }

  exerciseFormInit() {
    this.exerciseForm = new FormGroup({
      q1: new FormControl(null),
      q2: new FormControl(null),
      q3: new FormControl(null),
      q4: new FormControl(null),
      q5: new FormControl(null)
    });
  }
  
}
