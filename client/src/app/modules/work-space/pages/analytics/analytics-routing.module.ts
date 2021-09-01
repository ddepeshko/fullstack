import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { AnalyticsPageComponent } from '@modules/work-space/pages/analytics/pages/analytics-page/analytics-page.component';

const routes: Route[] = [
  {
    path: '',
    component: AnalyticsPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AnalyticsRoutingModule {}
