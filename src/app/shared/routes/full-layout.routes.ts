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
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarsModule'
  },
  {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsNg2Module'
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  },
  {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  },
  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  },
  {
    path: 'datatables',
    loadChildren: './data-tables/data-tables.module#DataTablesModule'
  },
  {
    path: 'uikit',
    loadChildren: './ui-kit/ui-kit.module#UIKitModule'
  },
  {
    path: 'components',
    loadChildren: './components/ui-components.module#UIComponentsModule'
  },
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  },
  {
    path: 'colorpalettes',
    loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'inbox',
    loadChildren: './inbox/inbox.module#InboxModule'
  },
];
