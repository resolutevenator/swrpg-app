import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailLogin = '';
  passwordLogin = '';

  emailRegister = '';
  emailConfirm = '';
  passwordRegister = '';
  passwordConfirm = '';

  constructor(
    private _auth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

}
