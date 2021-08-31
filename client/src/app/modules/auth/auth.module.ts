import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRouterModule } from '@modules/auth/auth-router.module';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from '@modules/auth/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, AuthPageComponent, RegisterComponent],
  imports: [CommonModule, AuthRouterModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [],
})
export class AuthModule {}
