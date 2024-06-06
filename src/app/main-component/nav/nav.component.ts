import { Component } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  isCollapsed: boolean = true
  isLoggedIn:boolean = false

  constructor(private authSvc:AuthService){}



  logout(){
    this.authSvc.logout()
  }


}
