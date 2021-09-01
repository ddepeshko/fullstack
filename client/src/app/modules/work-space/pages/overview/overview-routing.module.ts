import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OverviewPageComponent } from '@modules/work-space/pages/overview/pages/overview-page/overview-page.component';

const routes: Route[] = [
  {
    path: '',
    component: OverviewPageComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OverviewRoutingModule {}
