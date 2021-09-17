import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpacePageComponent } from '@modules/work-space/pages/work-space-page/work-space-page.component';
import { Route, RouterModule } from '@angular/router';
import { RoutesLinks } from '@constants/routes';

const routes: Route[] = [
  {
    path: '',
    component: WorkSpacePageComponent,
    children: [
      {
        path: RoutesLinks.Overview,
        loadChildren: () => import('./pages/overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: RoutesLinks.Analytics,
        loadChildren: () => import('./pages/analytics/analytics.module').then((m) => m.AnalyticsModule),
      },
      {
        path: RoutesLinks.History,
        loadChildren: () => import('./pages/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: RoutesLinks.Categories,
        loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
      },
      {
        path: RoutesLinks.Orders,
        loadChildren: () => import('./pages/orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WorkSpaceRoutingModule {}
