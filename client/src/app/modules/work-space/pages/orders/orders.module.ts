import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from '@modules/work-space/pages/orders/orders-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

@NgModule({
  declarations: [
    OrdersPageComponent
  ],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
