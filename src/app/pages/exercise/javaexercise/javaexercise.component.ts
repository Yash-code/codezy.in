import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-javaexercise',
  templateUrl: './javaexercise.component.html',
  styleUrls: ['./javaexercise.component.css']
})
export class JavaexerciseComponent implements OnInit {
  exerciseForm;
  answer = {
    q1: 'a',
    q2: 'b',
    q3: 'c',
    q4: 'a',
    q5: 'b',
  }
  constructor() { }

  ngOnInit(): void {
    this.jsexerciseFormInit();
  }
  jsexerciseFormInit() {
    this.exerciseForm = new FormGroup({
      q1: new FormControl(null),
      q2: new FormControl(null),
      q3: new FormControl(null),
      q4: new FormControl(null),
      q5: new FormControl(null)
    });
  }
}
