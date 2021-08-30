import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouterModule } from '@modules/login/login-router.module';
import { LoginLayoutComponent } from '@modules/login/components/login-layout/login-layout.component';

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [CommonModule, LoginRouterModule],
})
export class LoginModule {}
