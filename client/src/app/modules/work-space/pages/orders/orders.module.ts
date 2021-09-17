import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from '@modules/work-space/pages/orders/orders-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [OrdersPageComponent, BreadcrumbsComponent],
  imports: [CommonModule, OrdersRoutingModule, RouterModule],
})
export class OrdersModule {}
