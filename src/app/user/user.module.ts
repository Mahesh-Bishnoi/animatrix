import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [SearchComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule,UserRoutingModule],
  exports: [SearchComponent,LoginComponent,RegisterComponent],
})
export class UserModule {}
