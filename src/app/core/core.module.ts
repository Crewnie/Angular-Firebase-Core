import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';

// Single-instance services throughout the application
import { AuthService } from './auth.service';
import { AccountHealthGuard } from '../guards/account-health-guard.service';


@NgModule({
imports:      [ CommonModule ],
declarations: [  ],
exports:      [  ],
providers:    [ AuthService, AccountHealthGuard ]
})
export class CoreModule {}
