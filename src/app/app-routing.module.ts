import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/auth-guard.service';
import { GamesPageComponent } from '@games-page/games-page.component';
import { MainPageComponent } from '@main-page/main-page.component';
import { LibraryPageComponent } from '@library-page/library-page.component';
import { FriendsPageComponent } from '@friends-page/friends-page.component';
import { ProfilePageComponent } from '@profile-page/profile-page.component';
import { LoginPageComponent } from '@login-page/login-page.component';
import { SignUpPageComponent } from "./components/sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch:'full' },
  { path: 'auth', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'library', component: LibraryPageComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendsPageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
