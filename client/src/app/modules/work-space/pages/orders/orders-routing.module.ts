import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OrdersPageComponent } from '@modules/work-space/pages/orders/pages/orders-page/orders-page.component';

const routes: Route[] = [
  {
    path: '',
    component: OrdersPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrdersRoutingModule {}
