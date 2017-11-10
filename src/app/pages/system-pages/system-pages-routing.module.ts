import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComingSoonPageComponent } from './coming-soon/coming-soon-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterPageComponent } from './register/register-page.component';
import { ForgotPasswordPageComponent } from './forgot-password/forgot-password-page.component';
import { ErrorPageComponent } from './error/error-page.component';
import { MaintenancePageComponent } from './maintenance/maintenance-page.component';
import { LockScreenPageComponent } from './lock-screen/lock-screen-page.component';

import { IsLoginGuard } from '../../guards/account-health-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      // Access pages to Crewnie
      {
        path: '',
        canActivateChild: [IsLoginGuard],
        children: [
          { path: 'login',
          component: LoginPageComponent,
          data: {
            title: 'Login Page'
          }
        },
          { path: 'register',
          component: RegisterPageComponent,
          data: {
            title: 'Register Page'
          }
        },
          { path: 'forgotpassword',
          component: ForgotPasswordPageComponent,
          data: {
            title: 'Forgot Password Page'
          }
        }
    ]},

      // Crewnie exceptions
      {
        path: 'waiting-for',
        component: LockScreenPageComponent,
        data: {
          title: 'Lock Screen page'
        }
      },
      {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: {
          title: 'Maintenance Page'
        }
      },
      {
        path: '**',
        component: ErrorPageComponent,
        data: {
          title: '404 Error'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemPagesRoutingModule { }
