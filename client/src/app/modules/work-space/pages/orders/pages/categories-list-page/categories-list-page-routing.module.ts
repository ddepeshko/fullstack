import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CategoriesListPageComponent } from '@modules/work-space/pages/orders/pages/categories-list-page/categories-list-page.component';

const routes: Route[] = [
  {
    path: '',
    component: CategoriesListPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CategoriesListPageRoutingModule {}
