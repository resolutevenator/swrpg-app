import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailLogin = '';
  passwordLogin = '';

  username = '';
  emailRegister = '';
  emailConfirm = '';
  passwordRegister = '';
  passwordConfirm = '';

  constructor(
    public auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  navHome() {
    this._router.navigate(['/'])
  }

  register() {
    this.auth.emailPasswordRegistration(this.emailRegister, this.passwordRegister, this.username);
    
  }

  signIn() {
    this.auth.emailPasswordSignIn(this.emailLogin, this.passwordLogin);
    // console.log(this.emailLogin)
  }

}
