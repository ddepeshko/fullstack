import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListPageRoutingModule } from '@modules/work-space/pages/orders/pages/categories-list-page/categories-list-page-routing.module';
import { CategoriesListPageComponent } from './categories-list-page.component';
import { LoaderModule } from '@modules/shared/loader/loader.module';
import { CategoriesService } from '@services/categories.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoriesListPageComponent],
  imports: [CommonModule, CategoriesListPageRoutingModule, LoaderModule, RouterModule],
  providers: [CategoriesService],
})
export class CategoriesListPageModule {}
