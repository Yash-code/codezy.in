import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  emailForm;
  emailFormLoader = false;
  constructor(private homeapiServ: HomeService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.emailFormInit();
  }

  saveEmail() {
    if (this.emailForm.valid) {
      this.emailFormLoader = true;
      this.homeapiServ.saveAvailableEmail({ email: this.emailForm.value.email }).toPromise().then((data: any) => {
        console.log(data);
        this.toastr.success( 'Thanks for Subscribing our news letter.', 'Subscription done.',);
      }).catch((error: any) => {
        console.log(error);
      }).then(() => {
        this.emailFormLoader = false;
      });
    }

  }

  emailFormInit() {
    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

}
