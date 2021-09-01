import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from '@modules/work-space/pages/history/history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

@NgModule({
  declarations: [
    HistoryPageComponent
  ],
  imports: [CommonModule, HistoryRoutingModule],
})
export class HistoryModule {}
