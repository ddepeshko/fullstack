import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, InlineSVGModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
