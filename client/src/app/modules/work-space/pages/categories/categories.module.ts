import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from '@modules/work-space/pages/categories/categories-routing.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { RouterModule } from '@angular/router';
import { CategoriesService } from '../../../../core/services/categories.service';
import { LoaderModule } from '@modules/shared/loader/loader.module';

@NgModule({
  declarations: [CategoriesPageComponent],
  imports: [CommonModule, CategoriesRoutingModule, RouterModule, LoaderModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
