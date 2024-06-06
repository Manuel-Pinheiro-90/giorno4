import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{ path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },// rotta  /auth/login
  { path: 'register', component: RegisterComponent },// rotta  /auth/register





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {




}
