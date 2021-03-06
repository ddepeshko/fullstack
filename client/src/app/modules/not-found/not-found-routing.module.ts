import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@modules/not-found/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild(routes)],
})
export class NotFoundRoutingModule {}
