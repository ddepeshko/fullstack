import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from '@modules/work-space/pages/categories/categories-routing.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

@NgModule({
  declarations: [
    CategoriesPageComponent
  ],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
