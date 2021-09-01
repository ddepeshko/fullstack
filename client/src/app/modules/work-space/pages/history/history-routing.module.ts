import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HistoryPageComponent } from '@modules/work-space/pages/history/pages/history-page/history-page.component';

const routes: Route[] = [
  {
    path: '',
    component: HistoryPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HistoryRoutingModule {}
