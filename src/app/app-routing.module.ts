import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './pages/auth/guest.guard';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
   { path: 'utente', loadChildren: () => import('./pages/utente/utente.module').then(m => m.UtenteModule),
canActivate:[AuthGuard],
canActivateChild: [AuthGuard]

    },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
      canActivate: [GuestGuard],
      canActivateChild: [GuestGuard],


     }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
