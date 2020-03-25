import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  firstName = '';
  middleName = '';
  lastName = '';
  farmName = '';
  region = '';
  location = '';
  phoneNumber = '';
  email = '';
  password = '';
  isLoading = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      middleName: [null],
      farmName: [null],
      location: [null],
      region: [null],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    console.log('RegisterPageComponent:  register user form >>>>', form);
    this.authService.register(form)
      .subscribe(res => {
        console.log(`register new user resonse ==> ${res}`);
        this.isLoading = false;
        this.router.navigate(['pages/login']);
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        alert(err.error);
      });
  }

}
