import { Routes, RouterModule } from '@angular/router';

// Route for system layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const HOME_LANDINGPAGE_ROUTES: Routes = [
     {
        path: '',
        loadChildren: './pages/home-landing-page/home-landing-pages.module#HomeLandingPagesModule'
    }
];
