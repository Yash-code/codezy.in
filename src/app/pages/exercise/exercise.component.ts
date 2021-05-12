import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  exerciseForm;
  answer = {
    q1: 'a',
    q2: 'c',
    q3: 'b',
    q4: 'd',
    q5: 'a'
  }

  constructor() { }

  ngOnInit(): void {
    this.htmlFormInit();

  }

  htmlFormInit() {
    this.exerciseForm = new FormGroup({
      q1: new FormControl(null),
      q2: new FormControl(null),
      q3: new FormControl(null),
      q4: new FormControl(null),
      q5: new FormControl(null)
    });
  }

}


