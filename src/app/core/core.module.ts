import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

// Toast Notification service
// import { ToastrService } from '../components/extra/toastr/toastr.service';

// Single-instance services throughout the application
import { AuthService } from './auth.service';
import { AccountHealthGuard, IsLoginGuard } from '../guards/account-health-guard.service';


@NgModule({
imports:      [ CommonModule ],
declarations: [  ],
exports:      [  ],
providers:    [ AuthService, AccountHealthGuard, IsLoginGuard ]
})
export class CoreModule {}
