import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { User, Token } from '../../../../common/models/user';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RoutesLinks } from '../../../../common/constants/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup = this.initForm();
  private destroy$ = new Subject<void>();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.queryParamsListener();
  }

  private queryParamsListener() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        console.log('Вы можете залогиниться');
      } else if (params['accessDenied']) {
        console.log('Авторизируйтесь в системе');
      }
    });
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (!this.form.valid) return;
    this.form.disable();
    this.loginUser();
  }

  private loginUser(): void {
    const user: User = { ...this.form.value };
    this.authService
      .login(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => {
          this.form.enable();
          this.router.navigate([`/${RoutesLinks.Overview}`]);
        },
        (error) => {
          this.form.enable();
          throw new Error(error.message);
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
