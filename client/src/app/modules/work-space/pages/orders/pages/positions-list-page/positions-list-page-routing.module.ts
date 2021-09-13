import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PositionsListPageComponent } from '@modules/work-space/pages/orders/pages/positions-list-page/positions-list-page.component';

const routes: Route[] = [
  {
    path: '',
    component: PositionsListPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PositionsListPageRoutingModule {}
