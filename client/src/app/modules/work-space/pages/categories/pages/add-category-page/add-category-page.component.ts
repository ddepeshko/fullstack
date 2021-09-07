import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '@services/categories.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ICategory } from '@models/category';
import { of, Subject } from 'rxjs';
import { MaterialServices } from '@classes/material-services';

@Component({
  selector: 'app-add-category-page',
  templateUrl: './add-category-page.component.html',
  styleUrls: ['./add-category-page.component.scss'],
})
export class AddCategoryPageComponent implements OnInit, OnDestroy {
  public isEditForm = true;
  public form: FormGroup;
  public imageUrl: string | undefined;
  public imageFile: File;
  private destroy$ = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.obtainCategoryDataById();
  }
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      id: [null],
    });
  }
  public onSubmit(): void {
    this.form.disable();
    if (this.form.invalid) {
      this.form.enable();
      return;
    }
    if (this.isEditForm) {
      this.updateCategory();
    } else {
      this.createCategory();
    }
  }
  public onFileChange(event: Event): void {
    const file: File = ((event.target as HTMLInputElement).files as FileList)[0];
    this.imageFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  private obtainCategoryDataById() {
    this.form.disable();
    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params: Params) => {
          this.isEditForm = !!params.id;
          return !!params.id ? this.categoryService.getCategoryById(params.id) : of(null);
        })
      )
      .subscribe(
        (category: ICategory | null) => {
          this.form.enable();
          this.imageUrl = category?.imageSrc;
          this.form.patchValue({
            name: category?.name,
            id: category?._id,
          });
        },
        (error) => MaterialServices.toast(error.error.message)
      );
  }

  private updateCategory(): void {
    const { name, id } = this.form.value;
    this.categoryService
      .updateCategory(id, name, this.imageFile)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (category: ICategory) => {
          this.form.enable();
          this.form.patchValue({
            name: category?.name,
            id: category?._id,
          });
          this.imageUrl = category?.imageSrc;
        },
        (error) => {
          MaterialServices.toast(error.error.message);
        }
      );
  }
  private createCategory() {
    const { name } = this.form.value;
    this.categoryService
      .createCategory(name, this.imageFile)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (category: ICategory) => {
          this.form.enable();
          this.form.patchValue({
            name: category?.name,
            id: category?._id,
          });
          this.imageUrl = category?.imageSrc;
        },
        (error) => {
          MaterialServices.toast(error.error.message);
        }
      );
  }
}
