import { Component } from '@angular/core';
import { iAuthData } from '../../../models/i-auth-data';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  authData:iAuthData = {
    email: '',
    password: ''
  }

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}



  login(){this.authSvc.login(this.authData)
.subscribe(()=>{this.router.navigate(['/utente'])})

  }

}
