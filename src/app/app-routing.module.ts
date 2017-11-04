import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts Components
import { HomeLandingPageLayoutComponent } from './layouts/home-landing-page/home-landing-page-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { SystemLayoutComponent } from './layouts/system/system-layout.component';

// Routes Childrens
import { HOME_LANDINGPAGE_ROUTES } from './shared/routes/home-landing-page.routes';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { SYSTEM_ROUTES } from './shared/routes/system-layout.routes';


const appRoutes: Routes = [

  { path: '', component: HomeLandingPageLayoutComponent, data: {}, children: HOME_LANDINGPAGE_ROUTES},
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: SystemLayoutComponent, data: { title: 'System Views' }, children: SYSTEM_ROUTES },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
