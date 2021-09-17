import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OrdersPageComponent } from '@modules/work-space/pages/orders/pages/orders-page/orders-page.component';

const routes: Route[] = [
  {
    path: '',
    component: OrdersPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/categories-list-page/categories-list-page.module').then((m) => m.CategoriesListPageModule),
        data: {
          isRoot: true,
        },
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./pages/positions-list-page/positions-list-page.module').then((m) => m.PositionsListPageModule),
        data: {
          isRoot: false,
          currentPageTitle: 'Добавить продукцию',
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrdersRoutingModule {}
