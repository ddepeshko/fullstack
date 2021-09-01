import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceRoutingModule } from '@modules/work-space/work-space-routing.module';
import { WorkSpacePageComponent } from './pages/work-space-page/work-space-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorkSpacePageComponent],
  imports: [CommonModule, WorkSpaceRoutingModule, RouterModule],
})
export class WorkSpaceModule {}
