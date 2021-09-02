import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceRoutingModule } from '@modules/work-space/work-space-routing.module';
import { WorkSpacePageComponent } from './pages/work-space-page/work-space-page.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';

@NgModule({
  declarations: [WorkSpacePageComponent, NavigationComponent, FloatingButtonComponent],
  imports: [CommonModule, WorkSpaceRoutingModule, RouterModule],
})
export class WorkSpaceModule {}
