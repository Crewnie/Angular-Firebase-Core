import { Routes, RouterModule } from '@angular/router';

import { AccountHealthGuard } from '../../guards/account-health-guard.service';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'me',
    canLoad: [AccountHealthGuard],
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'demo',
    children: [
      {
        path: 'colors',
        loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
      },
      {
        path: 'cards',
        loadChildren: './cards/cards.module#CardsModule'
      },
    ]},
];
