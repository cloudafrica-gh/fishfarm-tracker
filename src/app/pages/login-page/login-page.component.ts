import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  userName: '';
  email = '';
  password = '';
  isLoadingResults = false;
  public loadingMsg = '';
  public errorMsg = '';
  public successMsg = '';
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
    console.log('returnUrl: ', this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/');
  }

  onFormSubmit(form: NgForm) {
    console.log('controller login form >>>>', form);
    this.authService.login(form)
      .subscribe(res => {
        this.isLoadingResults = true;
        this.loadingMsg = 'dashboard loading ...';
        console.log('login response >>>', res);
        if (res.token) {
          this.isLoadingResults = false;
          console.log(`res.token: ${res.token}`);
          console.log(`storing res.token ==>`);
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          localStorage.setItem('profile', JSON.stringify(res.profile));
          // console.log('getToken localstorage ::: ' + localStorage.getItem('token'));
          // console.log('userRole from Storage ::: ' + localStorage.getItem('role'));

          this.router.navigate(['dashboard']);
        }
      }, (err) => {
        console.error(`LoginPageComponent: Error login => ${err}`);
        this.isLoadingResults = false;
        this.errorMsg = err.message;
        // alert(err.message);
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  register() {
    this.router.navigateByUrl('/pages/register');
  }
}
