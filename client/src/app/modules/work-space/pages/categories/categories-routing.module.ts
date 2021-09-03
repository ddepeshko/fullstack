import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CategoriesPageComponent } from '@modules/work-space/pages/categories/pages/categories-page/categories-page.component';
import { AddCategoryPageComponent } from '@modules/work-space/pages/categories/pages/add-category-page/add-category-page.component';

const routes: Route[] = [
  {
    path: '',
    component: CategoriesPageComponent,
  },
  {
    path: 'add-category',
    component: AddCategoryPageComponent,
  },
  {
    path: ':id',
    component: AddCategoryPageComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CategoriesRoutingModule {}
