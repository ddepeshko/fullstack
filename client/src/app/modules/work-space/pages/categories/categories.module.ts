import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from '@modules/work-space/pages/categories/categories-routing.module';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { RouterModule } from '@angular/router';
import { CategoriesService } from '@services/categories.service';
import { LoaderModule } from '@modules/shared/loader/loader.module';
import { AddCategoryPageComponent } from './pages/add-category-page/add-category-page.component';
import { PositionsComponent } from './components/positions/positions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './components/upload/upload.component';
import { PositionsService } from '@services/positions.service';
import { AddPositionModalComponent } from './components/add-position-modal/add-position-modal.component';

@NgModule({
  declarations: [CategoriesPageComponent, AddCategoryPageComponent, PositionsComponent, UploadComponent, AddPositionModalComponent],
  imports: [CommonModule, CategoriesRoutingModule, RouterModule, LoaderModule, ReactiveFormsModule],
  providers: [CategoriesService, PositionsService],
})
export class CategoriesModule {}
