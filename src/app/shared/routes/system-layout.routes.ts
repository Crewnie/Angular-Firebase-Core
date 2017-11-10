import { Routes, RouterModule } from '@angular/router';

import { IsLoginGuard } from '../../guards/account-health-guard.service';

// Route for system layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const SYSTEM_ROUTES: Routes = [
     {
        path: '',
        loadChildren: './pages/system-pages/system-pages.module#SystemPagesModule'
    }
];
