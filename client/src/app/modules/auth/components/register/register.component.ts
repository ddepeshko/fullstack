import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { Token, IUser } from '../../../../common/models/user';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RoutesLinks } from '../../../../common/constants/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = this.initForm();
  private destroy$ = new Subject<void>();
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return;
    this.form.disable();
    this.registerUser();
  }

  registerUser(): void {
    const user: IUser = { ...this.form.value };
    this.authService
      .register(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: IUser) => {
          this.form.enable();
          this.router.navigate([`${RoutesLinks.Auth}/${RoutesLinks.Login}`], {
            queryParams: {
              registered: true,
            },
          });
        },
        (error) => {
          this.form.enable();
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
