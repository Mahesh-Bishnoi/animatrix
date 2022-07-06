import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './components/account/account.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { RegisterComponent } from './components/register/register.component'; 

const routes: Routes = [
  { path: 'animes', component: MainViewComponent},
  { path: 'animes/:id', component: AnimeDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
