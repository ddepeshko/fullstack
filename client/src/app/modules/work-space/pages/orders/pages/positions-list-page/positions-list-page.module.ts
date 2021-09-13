import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsListPageRoutingModule } from '@modules/work-space/pages/orders/pages/positions-list-page/positions-list-page-routing.module';
import { PositionsListPageComponent } from './positions-list-page.component';

@NgModule({
  declarations: [
    PositionsListPageComponent
  ],
  imports: [CommonModule, PositionsListPageRoutingModule],
})
export class PositionsListPageModule {}
