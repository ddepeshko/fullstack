import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListPageRoutingModule } from '@modules/work-space/pages/orders/pages/categories-list-page/categories-list-page-routing.module';
import { CategoriesListPageComponent } from './categories-list-page.component';

@NgModule({
  declarations: [
    CategoriesListPageComponent
  ],
  imports: [CommonModule, CategoriesListPageRoutingModule],
})
export class CategoriesListPageModule {}
